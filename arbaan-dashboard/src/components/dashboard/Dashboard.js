import React,{ useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import './dashboard.css'
import Navbar from '../navbar/Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';

import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { deepOrange, deepPurple } from '@mui/material/colors';






function Dashboard() {
  let navigate = useNavigate();
  const loginStatus=useSelector((state)=>state.login);
  const userid=useSelector((state)=>state.user);
    const [post,setPost]=useState([]);
    

  const [comments,setComments]=useState([]);
  const [todos,setTodos]=useState([]);
  const [title,setTitle]=useState([]);
    const [body,setBody]=useState([]);
    const id=useSelector((state)=>state.user);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
      const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    
      
    // let url=[/static/images/avatar/${users.id}.jpg];
  useEffect(() => {
    fetchPost();
    fetchComment();
    fetchtodos();
    fetchtitle();
   
  }, []);
  
   if (loginStatus===false) {
    return navigate("/");
  } else {
    localStorage.removeItem("LoginName")
    }
    
    
    const fetchPost = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${userid.id}/posts`)
        .then((res) => res.json())
        .then((data) => setPost(data))
        .catch((err) => {
          console.log(err);
        });
    };
    const fetchComment = async () => {
      await fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((err) => {
          console.log(err);
        });
    };
    const fetchtodos = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/user/${userid.id}/todos`)
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((err) => {
          console.log(err);
        });
    };
    const fetchtitle = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id.id}/posts`)
        .then((res) => res.json())
        .then((data) => setTitle(data))
        .catch((err) => {
          console.log(err);
        });
      };
      
      
    console.log(post);
    console.log(post.length);
    console.log(comments.length);
    console.log(todos.length);
    console.log(userid);
    console.log(id.id);
    console.log(title);
   
   
  return (
    
    <><Navbar/>
  <div className='cards'>
      <div class="cont">
    <div class="card">
      <div class="front"><div>Total no of post </div>{post.length}</div>
      <div class="back">
        <div>Total no of post</div>
        {post.length}
      </div>
    </div>
  </div>
  <div class="cont">
    <div class="card">
      <div class="front"><div>Total no of comments </div>{comments.length}</div>
      <div class="back">
      <div>Total no of comments </div>{comments.length}</div>
    </div>
  </div>
  <div class="cont">
    <div class="card">
      <div class="front"><div>Total no of todos </div>{todos.length}</div>
      <div class="back">
        <div>Total no of todos</div>
        {todos.length}
      </div>
    </div>
  </div>
  </div>
    
  <div className='container'>
           
            <div className="post">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                POSTS
                </Typography>
              <div className="post-list">
                <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
                {title.map((post) => {
                return (
                        <>
                        <ListItem

                        secondaryAction={
                        <IconButton edge="end" aria-label="Delete">
                        <DeleteIcon onClick={handleDelete} />
                        </IconButton>
                        }
                        disablePadding
                        >

                        <ListItemButton role={undefined}  onClick={(e)=>{setBody(post.body)}} dense>

                        <ListItemText id="" primary={`${post.title}`} onClick={handleOpen}/>
                        </ListItemButton>
                        </ListItem>
                        </>
                      );
                      })}

                      </List>
              </div>
</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SUMMARY
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {body}
          </Typography>
          <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button variant="contained" endIcon={<SaveIcon />}>
      Save
      </Button>
    </Stack>

        </Box>
      </Modal>
      
    </div>
    </>
  )
}

export default Dashboard
