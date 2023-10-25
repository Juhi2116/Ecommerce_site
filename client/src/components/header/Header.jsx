import glogo from './glogo.png';
import { AppBar, Toolbar, Box, styled} from '@mui/material';
//import {styled} from '@mui/material/styles';
import Custom from './Custom';

import Search from './Search';

const StyledHeader = styled (AppBar)`
    background: #5e308c ;
    height:55px;
padding-left:30px;
`

const Header=()=>{
    return(
       <StyledHeader>
        <Toolbar style={{minHeight: '55 px', display: 'flex'}}>
            <Box style={{ display: 'flex',  margin: 30}}>
<img src={glogo} alt="logo"  style={{width:130}}/>

            </Box>
<Search/>
<box>
    <Custom/>
</box>
        </Toolbar>
       </StyledHeader>
    )
}
export default Header;