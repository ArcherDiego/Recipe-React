import NavList from "./NavList"

const Nav = () => {
    return(
        <ul>
            <NavList name={ 'Home' }/>
            <NavList name={ 'My Recipes' }/>
        </ul>
    )
}

export default Nav