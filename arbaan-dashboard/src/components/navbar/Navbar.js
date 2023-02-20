import {React,useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './navbar.css'


function Navbar() {
    const[avatar,setAvatar]=useState("");
    const dispatch =useDispatch();
    const userid=useSelector((state)=>state.user);
    const x = avatar;
    console.log(x.substring(0, 1));
    useEffect(() => {
        fetchname();
          }, []);
    const fetchname = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${userid.id}`)
          .then((res) => res.json())
          .then((data) => setAvatar(data.name))
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <>
    <div className='nav-bar'>
            <div className='heading'>
            Dashboard
            </div>
            
            
            <div><Button variant="contained" onClick={()=>dispatch({type:"LOGOUT"})}endIcon={<LogoutIcon />}>
              Logout
            </Button></div>
          </div>
          <div className='name'>HI! {avatar} </div>
          <div className='avatar'><Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{x.substring(0, 1)}</Avatar>
          <Button variant="contained" size="small" component="label">Upload
          <input hidden accept="image/*" multiple type="file" />
          </Button>
          </Stack>
          </div>
          </>
  )
}

export default Navbar
