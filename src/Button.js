export default function Button({ onClick, children }) {
    return (
        <>
            <button style={buttonStyles} onClick={onClick}>{children}</button></>
    );
}

const buttonStyles = {
    width: "200px",
    height: "30px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    borderRadius: "5px",
    color: "white",
    border: "none", 
    cursor: "pointer",
    marginRight: "10px"
};