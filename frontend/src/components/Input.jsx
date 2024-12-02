import { useRecoilState } from "recoil"
import { inputAtom } from "../atoms/inputs"
export default function Input({type, id ,lable, placeholder}){
    let [{username,password,firstName,lastName}, setInput] = useRecoilState(inputAtom);
    return <div>
        <h3 style={{margin :"5px 0px"}}>{lable}</h3>
        <input onChange={(e)=>{
            if(id = username){
                setInput(username = e.target.value);
                console.log(e.target.value);
            }
            if(id = password){
                setInput(password = e.target.value);
            }
            if(id = firstName){
                setInput(firstName = e.target.value);
            }
            if(id = lastName){
                setInput(lastName = e.target.value);
            }
        }} type={type} id={id} placeholder={placeholder} style={{padding : "6px" , width : "92%", fontSize:"20px",borderRadius : "5px" }} />
    </div>
}