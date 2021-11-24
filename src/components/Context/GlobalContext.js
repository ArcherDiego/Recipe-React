import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        let myKey = 'ef0907bcd38c478d8405e93d47c71e06'
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}`)
        .then((response) => response.json())
        .then((json) => setDados(json))
    }, [])

    return(
        <GlobalContext.Provider value={{dados}}>
            {children}
        </GlobalContext.Provider>
    )
}
