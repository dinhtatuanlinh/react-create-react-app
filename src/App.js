import { useState, useCallback } from "react"
import './App.css'
// import Effect from "./useEffect"
import ContentComment from "./contentComment"
import Ref from "./useRef"
import Memo from "./memo"
import Callback from './useCallback'
import UseMemo from './useMemo' 
import UseReducer from './useReducer' 
import TodolistUseReducer from './todolistUseReducer'
import ContextUseContext from './contextUseContext'
import TodosWithContext from './todosWithContext'
import UseImperativeHandle from './useImperativeHandle'
import { ThemeProvider } from './ThemeContext';
import {StoreProvider} from "./store";


function App() {
    const [show, setShow]= useState(false)
    const [count, setCount] = useState(0)
    const handleIncrease= useCallback(()=>{
        setCount(prevCount=> prevCount + 1)
    },[])

    return (
        // <ThemeProvider>
        <StoreProvider>
            <div className="App">
                <button onClick={()=> setShow(!show)}>toggle</button>
                {/* {show && <Effect />} */}
                {/* {show && <ContentComment />} */}
                {/* {show && <Ref />} */}
                {/* {show && <Memo />} */}
                {/* <h1>{count}</h1> */}
                {/* {show && <Callback onIncrease={handleIncrease} />} */}
                {/* {show && <UseMemo />} */}
                {/* {show && <UseReducer />} */}
                {/* {show && <TodolistUseReducer />} */}
                {/* {show && <ContextUseContext />} */}
                {/* {show && <TodosWithContext />} */}
                {show && <UseImperativeHandle />}
            </div>
        </StoreProvider>
        // </ThemeProvider>
        
    );
}

export default App;
