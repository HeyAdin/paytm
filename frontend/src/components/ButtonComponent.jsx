import axios from "axios"
import { useRecoilValue } from "recoil";
import { inputAtom } from "../atoms/inputs";
export default function ButtonComponent({ buttonTitle,backgroundColor,fontSize ,onClick}) {
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
    }} onClick={onClick}>{buttonTitle}</button>
    </div>
}