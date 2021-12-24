import { useRef, useState, useEffect } from "react";

function Ref (){
    const [count, setCount] = useState(60)
    const ref = useRef( ) // return 1 object có property là current
    const h1Ref = useRef()
    useEffect(()=>{
        // lấy element có thuộc tính ref
        console.log(h1Ref.current)// sẽ in ra thẻ h1
        const coordinate = h1Ref.current.getBoundingClientRect() // hàm lấy ra tọa độ của thẻ h1
    })
    const handleStart = ()=>{
        ref.current = setInterval(()=>{ // setInterval sẽ trả về 1 giá trị để xác định hàm setInterval đó giá trị này được sử dụng để clearinterval
            setCount(prevCount=> prevCount -1)
        }, 1000)
    }
    const handleStop = () =>{
       clearInterval(ref.current)

    }
    return (
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default Ref