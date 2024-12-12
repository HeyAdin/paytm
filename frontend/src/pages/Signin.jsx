import { RecoilRoot, useRecoilState } from "recoil";
import BelowButtonWarning from "../components/BelowButtonWarning";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import { inputAtom } from "../atoms/inputs";
import axios from "axios";
export default function Signin() {
    const [userInput,setInput] =  useRecoilState(inputAtom);
    const onClick = async()=>{
        console.log(userInput);
        const response = await axios.post("http://localhost:8001/api/v1/user/signin",userInput);
        const data = response.data;
        const token = "Bearer "+data.token;
        localStorage.setItem("token", token);
        console.log(data.msg)
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
        <div style={{ backgroundColor: "white", height: "auto", width: "350px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "auto", padding: "20px", borderRadius: "7px", textAlign : "center"}}>
        <RecoilRoot>
        <Heading title={'Sign In'} />
        <SubHeading subTitle={'Enter your information to Sign in to your account'} />
        <Input onChange={e => setInput({...userInput, username:e.target.value})} type={'email'} lable={'Email'} placeholder={"johndoe@gmail.com"} />
        <Input onChange={e => setInput({...userInput, password:e.target.value})} type={'password'} lable={'Password'} />
        <ButtonComponent onClick={onClick} buttonTitle={"Sign In"} backgroundColor={"blueViolet"} fontSize={"24px"}/>
        <BelowButtonWarning warning={"Don't have an account "} warningButton={<a href="/signup" style={{ color: "black", cursor: "pointer", textDecoration: "underline", fontWeight: "bold" }}>Sign up</a>} />
        </RecoilRoot>
    </div>
    </div>
}