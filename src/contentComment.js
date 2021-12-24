import { useEffect } from "react"
import { useState } from "react"

let lesson = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
    {
        id: 3,
        name: 'c'
    },

]

function Effect() {
    const [lessonId, setLessonId] = useState(1)
    useEffect(()=>{
        const handleComment = ({detail})=>{
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return ()=>{
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    },[lessonId])
    return (
        <div>
            {lesson.map(lesson =>(
                <li 
                    key={lesson.id}
                    style={{
                        color: lessonId === lesson.id ?
                        'red':
                        '#333'
                    }}
                    onClick={()=> setLessonId(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
        </div>
    )
}

export default Effect;
