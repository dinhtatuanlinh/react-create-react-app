function logger(reducer) {
    return (prevState, action)=>{
        console.log(action.type);
        const nextState =  reducer(prevState, action)

        return nextState
    }
}
export default logger