import { useState, useCallback } from "react"
import firebase from 'firebase/app'
import 'firebase/firebase-config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
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
import { ThemeProvider } from './ThemeContext';
import {StoreProvider} from "./store";


function App() {
    const [show, setShow]= useState(false)
    const [count, setCount] = useState(0)
    const handleIncrease= useCallback(()=>{
        setCount(prevCount=> prevCount + 1)
    },[])
    const loginWithGoogle = () =>{
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(userCre=>{
            console.log(userCre);
        })
    }
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    // });
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    // });
    // const provider = new FacebookAuthProvider(); 
    return (
        // <ThemeProvider>
        <StoreProvider>
            <div className="App">
                <button onClick={()=> setShow(!show)}>toggle</button>
                <button onClick={loginWithGoogle}>Login with Google</button>
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
                {show && <TodosWithContext />}
            </div>
        </StoreProvider>
        // </ThemeProvider>
        
    );
}

export default App;
