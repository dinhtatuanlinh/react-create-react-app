import { useState, memo } from "react";
// higher order component memo giúp nhớ lại component mà không cần thiết phải re-render
// memo giúp kiểm tra nếu component có props nào thay đổi hay ko nếu ko thì ko re-render còn nếu có thì re-render
function Callback ({onIncrease}){


    return (
        <>
                
            <button onClick={onIncrease}>Click me!</button>

        </>

    )
}
export default memo(Callback)