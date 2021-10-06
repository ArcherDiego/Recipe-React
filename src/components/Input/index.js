import StyleInput from "./style"
import Button from "./../Button"

const Input = () => {
    return (
        <StyleInput>
            <label forHTML='search'>Search Recipe: </label>
            <input id='search' type='text'></input>
            <Button name={ '>' } />
        </StyleInput>
    )
}

export default Input