import headerImg from "../assets/logo.png";

export default function Header() {
    return (
        <div id="header">
            <img src={headerImg} alt="header" className="logo" />
        </div>
    );
}
