const NavList = ({ name, ref }) => {
    return(
        <li>
            <a href={ref}>{ name }</a>
        </li>
    )
}

export default NavList