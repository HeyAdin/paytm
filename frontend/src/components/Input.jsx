export default function Input({type, id ,lable, placeholder}){
    return <div>
        <h3 style={{margin :"5px 0px"}}>{lable}</h3>
        <input type={type} id={id} placeholder={placeholder} style={{padding : "6px" , width : "92%", fontSize:"20px",borderRadius : "5px" }} />
    </div>
}