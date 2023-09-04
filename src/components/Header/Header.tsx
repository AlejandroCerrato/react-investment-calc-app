import logo from "../../assets/logo.png";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" />
            <h1>Calculadora de Inversiones</h1>
        </header>
    );
};

export default Header;
