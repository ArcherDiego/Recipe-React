import LabelRecipe from "./Label"
import InputRecipe from "./Input"
import Button from "./Button"

const FormRecipe = ({ recipe }) => {
    return (
        <form>
            <LabelRecipe name={ recipe } text={ 'Search a recipe:' } />
            <InputRecipe name={ recipe } />
            <Button name={ '>' } />
        </form>
    )
}

export default FormRecipe