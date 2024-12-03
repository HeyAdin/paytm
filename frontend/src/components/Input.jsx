import { useRecoilState } from "recoil"
import { inputAtom } from "../atoms/inputs"
export default function Input({type, id ,lable, placeholder}){
    const [userInput, setInput] = useRecoilState(inputAtom);
    return <div>
        <h3 style={{margin :"5px 0px"}}>{lable}</h3>
        <input onChange={(e)=>{
            if(id == "username"){
                setInput({...userInput, username:e.target.value});
            }
            if(id == "password"){
                setInput({...userInput,password:e.target.value});
            }
            if(id == "firstName"){
                setInput({...userInput,firstName:e.target.value});
            }
            if(id == "lastName"){
                setInput({...userInput,lastName:e.target.value});
            }
        }} type={type} id={id} placeholder={placeholder} style={{padding : "6px" , width : "92%", fontSize:"20px",borderRadius : "5px" }} />
    </div>
}