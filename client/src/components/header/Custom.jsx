import {Box,Button, Typography, styled} from '@mui/material';
import { useState } from 'react';
import LoginDialog from '../login/LoginDialog';
const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, & > p {
    margin-right:30px;
    background-color: fff;
    text-size:16px;
  align-items:center;
  font-weight:600;
}
`

const LoginButton=styled(Button)`
color:purple;
background-color: #ffffff;
margin-left:20px;
padding:2px 20px;
font-weight:600;
align:left;
`
const Custom=()=>{
    const [open, setOpen]= useState(false);
    const openDialog=()=>{
        setOpen(true);
    }
    return (
        <Wrapper>
<Typography style={{width:140, marginLeft:30}}>Become a seller</Typography>
<Typography>more</Typography>

    <Typography>
        Cart
    </Typography>
    <LoginButton variant="variant" onClick={()=> openDialog()}>Login</LoginButton>
<LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default Custom;