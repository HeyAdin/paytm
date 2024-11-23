
export default function ButtonComponent({ buttonTitle,backgroundColor,fontSize}) {
    return <div>
        <button style={{
        backgroundColor,
        borderRadius: "7px",
        color: "white",
        fontSize,
        padding:"2px 8px",
        margin : "10px",
        textAlign:"center",
        width: "92%",
        cursor:"pointer"
    }}>{buttonTitle}</button>
    </div>
}