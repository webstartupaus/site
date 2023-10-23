const Footer = () => {
    let year = new Date();
    year = year.getFullYear();

    return (
        <footer>
            ©{year}
        </footer>
    )
}

export default Footer;