import Nav from "./Nav";
import Logo from "./Logo"
import StyledHeader from "./style";

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Nav />
        </StyledHeader>
    )
}

export default Header