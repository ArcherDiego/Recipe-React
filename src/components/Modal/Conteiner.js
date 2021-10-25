import { ContainerStyle } from "./style"

const Conteiner = () => {
    return (
        <ContainerStyle>
            <div>
                <button>X</button>
                <h1>Please, put your key to fecth the API</h1>
                <a href="https://spoonacular.com/food-api/console#Dashboard">Link to key</a>
                <input type="text" />
            </div>
        </ContainerStyle>
    )
}

export default Conteiner