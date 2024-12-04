import axios from "axios"
import { useRecoilValue } from "recoil";
import { inputAtom } from "../atoms/inputs";
export default function ButtonComponent({ buttonTitle,backgroundColor,fontSize , route}) {
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
        const response = await axios.post(route,userInput);
        const data = response.data;
        const token = "Bearer "+data.token;
        localStorage.setItem("token", token);
    }}>{buttonTitle}</button>
    </div>
}