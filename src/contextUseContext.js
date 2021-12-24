import {useContext} from 'react'
import { ThemeContext } from './ThemeContext';
import Text from './text'



function ContextUseContext() {
    const context = useContext(ThemeContext)

    return (

        <div style={{ padding: 20 }}>

            <button onClick={context.toggleTheme}>toggle theme</button>
            <Text />
        </div>

    );
}
export default ContextUseContext