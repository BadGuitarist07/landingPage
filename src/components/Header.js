import imgLogo from '../assets/images/logo.svg'

function Header () {
    return (
        <div className="header">
            <img src={imgLogo} alt='Logo' />
        </div>
    )
}

export default Header