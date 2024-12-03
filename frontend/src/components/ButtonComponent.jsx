import axios from "axios"
import { useRecoilValue } from "recoil";
import { inputAtom } from "../atoms/inputs";
export default function ButtonComponent({ buttonTitle,backgroundColor,fontSize}) {
        const userInput = useRecoilValue(inputAtom);
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
    }} onClick={async()=>{
        console.log(userInput);
        const response = await axios.post("http://localhost:8001/api/v1/user/signup",userInput);
        const data = response.data;
        localStorage.setItem("token", data.token);
    }}>{buttonTitle}</button>
    </div>
}