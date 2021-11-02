import { useState } from "react"
import { ContainerStyle } from "./style"

const Container = ({ onClose }) => {

    const [apiKey, setApiKey] = useState('')
    const handleChange = ({ target }) => {
        setApiKey(target.value);
    }

    /*const verification = () => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${userKey}`)
        .then(res => res.json())
        .then()
    }*/

    return (
        <ContainerStyle>
            <div>
                <h1>Please, put your key to access API</h1>
                <a href="https://spoonacular.com/food-api/console#Dashboard" rel="noreferrer" target="_blank">Link to key</a>
                <input type="text" name="key" value={ apiKey } onChange={ handleChange } />
                <button onClick={ onClose }>Ok</button>
            </div>
        </ContainerStyle>
    )
}

export default Container
