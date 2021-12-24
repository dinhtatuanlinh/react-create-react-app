import {useStore, actions} from './store'


function TodosWithContext() {
    // const context = useContext()
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state

    console.log(todoInput);
    return (

        <div style={{ padding: 20 }}>

            <input 
                value={todoInput}
                placeholder='enter todo..'
                onChange={e=>{
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
        </div>

    );
}
export default TodosWithContext