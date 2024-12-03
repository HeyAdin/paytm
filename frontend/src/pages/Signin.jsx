import { RecoilRoot } from "recoil";
import BelowButtonWarning from "../components/BelowButtonWarning";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
export default function Signin() {
    return <div style={{ backgroundColor: "white", height: "auto", width: "350px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "auto", padding: "20px", borderRadius: "7px" }}>
        <RecoilRoot>
        <Heading title={'Sign In'} />
        <SubHeading subTitle={'Enter your information to Sign in to your account'} />
        <Input type={'email'} lable={'Email'} id={"username"} placeholder={"johndoe@gmail.com"} />
        <Input type={'password'} lable={'Password'} id={"password"} />
        <ButtonComponent buttonTitle={"Sign In"} backgroundColor={"blueViolet"} fontSize={"24px"} route={"http://localhost:8001/api/v1/user/signin"}/>
        <BelowButtonWarning warning={"Don't have an account "} warningButton={<a href="/signup" style={{ color: "black", cursor: "pointer", textDecoration: "underline", fontWeight: "bold" }}>Sign up</a>} />
        </RecoilRoot>
    </div>
}