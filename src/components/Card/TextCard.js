import React from 'react'
import { GlobalContext } from "../Context/GlobalContext"

const TextCard = () => {
    const global = React.useContext(GlobalContext)

    console.log(global.dados.results.title)
    if(global.dados === null) return null
    return (
        <div>
            <h1>{global.dados.results.title}</h1>
            <p>lorem ipsum</p>
        </div>
    )
}

export default TextCard
