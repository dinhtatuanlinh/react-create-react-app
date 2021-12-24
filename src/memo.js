import { useState, memo } from "react";
// higher order component memo giúp nhớ lại component mà không cần thiết phải re-render
// memo giúp kiểm tra nếu component có props nào thay đổi hay ko nếu ko thì ko re-render còn nếu có thì re-render
function Memo (){
    const [count, setCount] = useState(0);

    const increase = () =>{
        setCount(count + 1)
    }
    return (
        <div style={{padding: '10px 32px'}}>
            <h1>{count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    )
}
export default memo(Memo)