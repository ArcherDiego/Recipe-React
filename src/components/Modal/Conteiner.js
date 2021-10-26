import { ContainerStyle } from "./style"

const Conteiner = () => {
    return (
        <ContainerStyle>
            <div>
                <h1>Please, put your key to access API</h1>
                <a href="https://spoonacular.com/food-api/console#Dashboard">Link to key</a>
                <input type="text" />
                <button>OK</button>
            </div>
        </ContainerStyle>
    )
}

export default Conteiner