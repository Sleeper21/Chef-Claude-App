import LOGO from "../assets/images/chef-claude-icon.png"

export default function Header(){
    return (
        <header className="header">   
            <img src={LOGO} alt="face with cook hat" />
            <h1 className="logo-text">Chef Claude</h1>
        </header>        
    )
}