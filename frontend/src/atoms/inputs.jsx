import { atom } from "recoil";

export const inputAtom = atom({
    key : "inputAtom",
    default : {
        username : "",
        password : "",
        firstName :"",
        lastName : ""
    }
})