import { InputBase, Box, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer=styled(Box)`
background: #fff;
width:100 %;
border-radius: 2px;
margin-left:0px;
padding-left:10px;
display:flex;
`
const InputSearchBase= styled(InputBase)`
padding-left:5px;
width:100%;
font-size:unset;

`

const SearchWrapper=styled(Box)`
color:purple;
padding:5px;
`
const Search=()=>{
    return (
    <SearchContainer>
<InputBase placeholder=' Search for products'/> 
<SearchWrapper>
    <SearchIcon/>
</SearchWrapper>
  </SearchContainer> )
}
export default Search;