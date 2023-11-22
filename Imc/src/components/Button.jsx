import "./Button.css";

export function Button({id, text, action}){
    const handleAction = (e) => {
        action(e);
    }
    return(
        <button id={id} onClick={handleAction}>
            {text}
        </button> 
    );
}