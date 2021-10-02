const LabelRecipe = ({ name, text }) => {
    return(
        <label for={ name }>
            { text }
        </label>
    )
}

export default LabelRecipe