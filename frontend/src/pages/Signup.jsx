import { RecoilRoot, useRecoilState } from "recoil";
import BelowButtonWarning from "../components/BelowButtonWarning";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import { inputAtom } from "../atoms/inputs";
import axios from "axios"

export default function Signup() {
    const [userInput,setInput] =  useRecoilState(inputAtom);

    const onClick = async()=>{
        console.log(userInput);
        const response = await axios.post("http://localhost:8001/api/v1/user/signup",userInput);
        const data = response.data;
        const token = "Bearer "+data.token;
        localStorage.setItem("token", token);
        console.log(data.msg);
    }
    return <div style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        margin: "0px",
        padding: "0px"
    }}>
        <div style={{ backgroundColor: "white", height: "auto", width: "350px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "auto", padding: "20px", borderRadius: "7px", textAlign: "center" }}>
            <Heading title={'Sign Up'} />
            <SubHeading subTitle={'Enter your information to create your account'} />
            <RecoilRoot>
                <Input onChange={e => setInput({...userInput, firstName:e.target.value})} type={'text'} lable={'First Name'} placeholder={"John"} />
                <Input onChange={e => setInput({...userInput, lastName:e.target.value})} type={'text'} lable={'Last Name'} placeholder={"Doe"} />
                <Input onChange={e => setInput({...userInput, username:e.target.value})} type={'email'} lable={'Email'} placeholder={"johndoe@gmail.com"} />
                <Input onChange={e => setInput({...userInput, password:e.target.value})} type={'password'} lable={'Password'} />
                <ButtonComponent onClick={onClick} buttonTitle={"Sign Up"} backgroundColor={"blueViolet"} fontSize={"24px"}/>
            </RecoilRoot>
            <BelowButtonWarning warning={"Already have an account "} warningButton={<a href="/signin" style={{ color: "black", cursor: "pointer", textDecoration: "underline", fontWeight: "bold" }}>Sign in</a>} />
        </div>
    </div>
}