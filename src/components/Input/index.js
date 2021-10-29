import StyleInput from "./style"
import Button from "./../Button"
import { useState } from "react"

const Input = () => {

    const [ search, setSearch ] = useState('')
    const handleChange = ({target}) => {
        setSearch(target.value)
    }

    return (
        <StyleInput>
            <label htmlFor='search'>Search Recipe: </label>
            <input name="search" value={ search } type="text" onChange={ handleChange } />
            <Button name={ '>' } />
        </StyleInput>
    )
}

export default Input