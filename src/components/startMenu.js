import btnImg from '../assets/omnitrix.png';

export default function StartMenu({handleClick}) {
    return (
        <>
            <button 
            onClick={handleClick}
            className="startBtn">
                <img src={btnImg} alt=""/>
            </button>
        </>
    );
}