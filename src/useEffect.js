import { useEffect } from "react"
import { useState } from "react"

const tabs = ['posts', 'comments', 'albums'];
function Effect() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [width, setWidth] =useState(window.innerWidth)
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [countdown, setCountDown] = useState(180)
    const [avatar, setAvatar] = useState()
    useEffect(()=>{
        // remove url blob
        // image đang được lưu trong bộ nhớ của trình duyệt
        return ()=>{
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handlePreviewAvatar = (e)=>{
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)// tạo url blob 
        setAvatar(file)
    }
    useEffect(()=>{
        const timerId = setInterval(()=>{
            setCountDown(prevState => prevState -1)

        },1000)
        return ()=> clearInterval(timerId)
    },[])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res =>res.json())
            .then(posts=>{
                setPosts(posts)
            })
    },[type])
    useEffect(()=>{
        const handleScroll =()=>{

            setShowGoToTop(window.scrollY>=200)
        }
        window.addEventListener('scroll', handleScroll)
        // cleanup function
        // khi unmount thi loai bỏ window event listener
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    useEffect(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return()=>{
            window.removeEventListener('resize', handleResize)
        }
    })
    return (
        <div>
            {avatar && (
                <img src={avatar.preview} width="80%" />
            )}
            <input type="file"
                onChange={handlePreviewAvatar}
            />
            <div>
                {width}
            </div>
            {tabs.map(tab=>(
                <button 
                key={tab}
                style={type === tab ? 
                    {
                    color: '#fff',
                    backgroundColor: '#333',
                    }
                : {}}
                onClick={()=>setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    go to top
                </button>
            )}
        </div>
    );
}

export default Effect;
