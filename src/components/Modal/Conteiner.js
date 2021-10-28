import { ContainerStyle } from "./style"

const Conteiner = ({ onClose = () => {}}) => {
    return (
        <ContainerStyle>
            <div>
                <h1>Please, put your key to access API</h1>
                <a href="https://spoonacular.com/food-api/console#Dashboard" rel="noreferrer" target="_blank">Link to key</a>
                <input type="text" name="key" />
                <button onClick={ onClose }>Ok</button>
            </div>
        </ContainerStyle>
    )
}

export default Conteiner