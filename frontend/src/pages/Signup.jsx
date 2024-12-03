import { RecoilRoot } from "recoil";
import BelowButtonWarning from "../components/BelowButtonWarning";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";

export default function Signup(){
    return <div style={{backgroundColor:"white",height:"auto",width : "350px", boxShadow :"rgba(0, 0, 0, 0.35) 0px 5px 15px" ,  margin:"auto", padding : "20px", borderRadius:"7px"}}>
        <Heading title={'Sign Up'} />
        <SubHeading subTitle={'Enter your information to create your account'} />
        <RecoilRoot>
        <Input type={'text'} lable={'First Name'} id={"firstName"} placeholder={"John"}/>
        <Input type={'text'} lable={'Last Name'} id={"lastName"} placeholder={"Doe"}/>
        <Input type={'email'} lable={'Email'} id={"username"} placeholder={"johndoe@gmail.com"}/>
        <Input type={'password'} lable={'Password'} id={"password"} />
        <ButtonComponent buttonTitle={"Sign Up"} backgroundColor={"blueViolet"} fontSize={"24px"} route={"http://localhost:8001/api/v1/user/signup"}/>
        </RecoilRoot>
        <BelowButtonWarning warning={"Already have an account "} warningButton={<a href="/signin" style={{ color:"black", cursor:"pointer" ,textDecoration:"underline", fontWeight:"bold"}}>Sign in</a>} />
    </div>
}