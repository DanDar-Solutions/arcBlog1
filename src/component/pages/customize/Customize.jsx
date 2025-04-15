import './Customize.css'

function Customize(){
    return(
        <div className="customize-container">
            <h1>Customize</h1>
            <p>You can customize your experience here</p>
            <div className="customize-options">
                <button className="theme-btn">Change Theme</button>
                <button className="language-btn">Change Language</button>
            </div>
        </div>
    );
}
export default Customize