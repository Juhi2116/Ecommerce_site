import { useState } from "react";
import { Button, Dialog, TextField, Typography, styled , Box} from "@mui/material";
import { authenticateSignup } from "../../service/api";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;
const Wrapper = styled(Box)`
  padding:25px 35px;
  display: flex;
  flex-direction:column;
  padding:25px 35px;
  flex:1;
  & > div & >Button{
    margin-top:20px;
  }
`;
const LoginButton=styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;

`;
const RequestOTP=styled(Button)`
text-transform:none;
background:#fff;
color:#FB641B;

box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`;


const Text=styled(Typography)`
font-size: 12px;
margin-top:20px;
margin-bottom:20px;
text-align: center`;

const Image = styled(Box)`
  background:purple url(../header/glogo.png)  center 85%;
  background-position: right;
  background-size: cover;
  height: 100%;
  width: 30%;
  padding: 35px 30px;
`;

const CreateAccount = styled(Box)`
 font-size:14px;
 text-align:center;
 color:#2874F0;
 font-weight:600;
 cursor:pointer;

`; 

const accountInitialValues ={
  login: {
    view: 'login'
  },
  signup: {
    view: 'signup',
    heading:'Looks like you are new here!',


  }
}
const SignupInitialValues={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  Password:'',
Phone:''
}
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount]= useState(accountInitialValues.login)
  const [signup, setSignup]= useState(SignupInitialValues)

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  }
const toggleSignup=()=>  {
  toggleAccount(accountInitialValues.signup);
}

const onInputChange=(e)=>{
  setSignup({...signup,[e.target.name]:e.target.value})
  console.log(signup);

}
 const signupUser= async () =>{
  let response= await authenticateSignup(signup)
 }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height:'100%' }}>
          <Image>
            <Typography style={{marginTop:'20px', marginLeft:'20px', color:'white'}} variant="h5">Login</Typography>
            <Typography style={{marginLeft:'20px', marginRight:'20px', color:'white'}}>Get access to your orders</Typography>
            </Image>

            {
             account.view==='login' ?
            <Wrapper>
            <TextField variant="standard" label="Enter Email/Mobile number" />
            <TextField variant="standard" label="Enter Password" />
            <Text>
              By continuing, you are agreeing to G-cart term of use and policy
            </Text>
            <LoginButton>Login</LoginButton>
            <Text>OR</Text>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={()=> toggleSignup()}>New to G-cart? Create a new Account</CreateAccount>
          </Wrapper>

          :

          <Wrapper>
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='firstname' label="Enter first name" />
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='lastname' label="Enter last name" />
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='username' label="Enter username" />
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='email' label="Enter e-mail" />
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='Password' label="Enter Password" />
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='Phone' label="Enter Phone" />

          <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
          
        </Wrapper>
}
        </Box>
      </Component>
    </Dialog>
  );
};
export default LoginDialog;
