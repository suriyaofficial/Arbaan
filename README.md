# Arbaan
Online coding test 
import {createStore,combineReducers}from 'redux';
import { loginReducer } from './loginReducer';
import { userReducer } from './userRedducer';
const rootReducer=combineReducers({
    login:loginReducer,
    user:userReducer
})
export const store =createStore(rootReducer)


import React from 'react'
const Post = ({name}) => {
return (
        <div className='list'>
             {name}
            </div>
    )
}
export default Post

      
            {title.map((user) => (
        <div>{user.title}<button >delete</button></div>
      ))}



      <Box sx={{ minWidth: 120 }}>
      
        <InputLabel id="demo-simple-select-label">NAME</InputLabel>
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="name"
    label="NAME"
    onChange={setLoginName(LoginName)}
  >
     {users.map((user) => (
    <MenuItem value={user.name}>
      <User 
              id={user.id}
              key={user.id}
              name={user.name}
            /></MenuItem>
            ))}
    
  </Select>

</Box>


       <ol>
      {title.map((post) => (
        <div  className="user" onClick={(e)=>{setBody(post.body)}}><li onClick={handleOpen}>{post.title} </li> <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> </div>  
        ))}
        </ol>