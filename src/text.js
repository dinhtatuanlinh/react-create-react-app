import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'

function Text() {
    const context = useContext(ThemeContext)
    return (

        <p className={context.theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo quam vel libero ullamcorper, ac sagittis odio volutpat.
            Vestibulum leo massa, vulputate non arcu non, condimentum efficitur
            enim. Phasellus convallis metus vel augue accumsan dignissim.
            Aliquam erat volutpat. Curabitur fringilla, enim vitae congue
            congue, metus purus ultricies dui, vitae pharetra diam odio ut
            felis. Ut accumsan lacus eget viverra tincidunt. Maecenas placerat
            ante sit amet lacus ultricies, ut pellentesque felis malesuada.
            Etiam eu tellus eleifend, porta lacus egestas, ullamcorper purus.
            Cras lobortis tempus posuere. Duis vehicula risus in metus rutrum,
            in tincidunt arcu porttitor. Curabitur est massa, tempus vel augue
            vel, tristique dapibus erat. Suspendisse sollicitudin aliquet
            venenatis. Morbi vulputate massa risus, vel convallis enim vehicula
            ac. Morbi ac tincidunt lacus. Maecenas vel leo eu sem scelerisque
            tempus ut a sapien.
        </p>

    );
}
export default Text