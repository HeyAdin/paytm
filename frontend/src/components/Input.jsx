import { useRecoilState } from "recoil"
import { inputAtom } from "../atoms/inputs"
export default function Input({type ,lable, placeholder,onChange}){
    return <div>
        <div className="text-xl font-medium text-left py-2 px-3">{lable}</div>
        <input className="w-full px-2 py-1 border rounded border-slate-200" onChange={onChange} type={type} placeholder={placeholder} style={{padding : "6px" , width : "92%", fontSize:"20px",borderRadius : "5px" }} />
    </div>
}