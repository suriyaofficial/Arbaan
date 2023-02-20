import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import Navbar from "../navbar/Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(body) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
    console.log({ body });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const summary = useSelector((state) => state.summary);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleOpen} startIcon={<EditIcon />}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, height: 400 }}>
          <TextField
            onChange={(e) =>
              dispatch({ type: "userId", payload: e.target.value })
            }
            id="outlined-multiline-flexible"
            label="EDIT"
            multiline
            maxRows={10}
            defaultValue={body.body}
          />

          <Button
            variant="contained"
            onClick={handleClose}
            endIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Dashboard() {
  let navigate = useNavigate();
  const loginStatus = useSelector((state) => state.login);
  const userid = useSelector((state) => state.user);
  const sum = useSelector((state) => state.summary);
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();

  const [comments, setComments] = useState([]);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const id = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleEdit = () => setEdit(true);
  const handleEditClose = () => setEdit(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
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
  function handleOpen() {
    setOpen(true);
  }

  if (loginStatus === false) {
    return navigate("/");
  } else {
    localStorage.removeItem("LoginName");
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

  function deletePost() {
    fetch(`https://jsonplaceholder.typicode.com/users/${id.id}/posts`, {
      method: "DELETE",
    });
  }

  console.log(post);
  console.log(post.length);
  console.log(comments.length);
  console.log(todos.length);
  console.log(userid);
  console.log(id.id);
  console.log(title);

  return (
    <>
      <Navbar />
      <div className="cards">
        <div class="cont">
          <div class="card">
            <div class="front">
              <div>Total no of post </div>
              {post.length}
            </div>
            <div class="back">
              <div>Total no of post</div>
              {post.length}
            </div>
          </div>
        </div>
        <div class="cont">
          <div class="card">
            <div class="front">
              <div>Total no of comments </div>
              {comments.length}
            </div>
            <div class="back">
              <div>Total no of comments </div>
              {comments.length}
            </div>
          </div>
        </div>
        <div class="cont">
          <div class="card">
            <div class="front">
              <div>Total no of todos </div>
              {todos.length}
            </div>
            <div class="back">
              <div>Total no of todos</div>
              {todos.length}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="post">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            POSTS
          </Typography>
          <div className="post-list">
            <List
              sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}
            >
              {title.map((post) => {
                return (
                  <>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="Delete">
                          <DeleteIcon onClick={() => deletePost(id)} />
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={(e) => {
                          setBody(post.body);
                        }}
                        dense
                      >
                        <ListItemText
                          id=""
                          primary={`${post.title}`}
                          onClick={handleOpen}
                        />
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
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">summary</h2>
            <p id="parent-modal-description">{body}</p>
            <ChildModal body={body} />
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Dashboard;
