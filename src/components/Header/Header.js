import './Header.css'

function Header() {
    return (
        <div className="header">
            <a href="/">
            <img src="https://i.imgur.com/bcTHW3x.png" className="header__logo" alt="Katia Cortinas"></img>
            </a>
            <div className="header__pages">
                <a className="header__pages-button" href="/sobre">
                    <b>Sobre</b>
                </a>
            </div>
        </div>


    )
}

export default Header
