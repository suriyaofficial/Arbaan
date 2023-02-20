import React,{ useEffect, useState } from 'react'
import User from './user(child)/User';
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import './landing.css'
import logo from '../../asset/logo.png'

function Landing() {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState([]);
    const [pass,setPass] = useState([]);
    const dispatch =useDispatch()
    const loginStatus=useSelector((state)=>state.login);
    let navigate = useNavigate();

    useEffect(() => {
      fetchData();
    }, []);
    
  
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
          console.log(err);
        });
    };
    
    
    function handleLogin(){
      dispatch({type:"userId",payload:{id}})
             if (pass === "ADMIN")
       {
      localStorage.setItem("LoginName", id);
        dispatch({type:"LOGIN"})
        
        alert("success");
        
} else {
        alert("hint: password-ADMIN");
      }
    };
    if (loginStatus===true) {
      return navigate("/dashboard");
    } else {
    
    }
    console.log(users);
        
  return (
    

              <div className="login-card">
                                                <div className="logo">
                                                <img alt= "" src={logo}></img>
                                                </div>    
                                  <div className="header">   
                                  <h1>sign in</h1>
                                  </div>

                      <form className="login-form">
                                <div className="form-item">

                                <select onClick={(e) => setId(e.target.value)}placeholder="select">

                                {users.map((user) => (
                                <option Value={user.id} ><User 
                                id={user.id}
                                key={user.id}
                                name={user.name}
                                /></option>
                                ))}
                                </select><br/><br/>
                                <input type="text " onChange={(e) => setPass(e.target.value)}   placeholder="enter password"></input>
                                </div>
                        <button onClick={handleLogin}>LOGIN</button>
                      </form>
              </div>
   
  )
}

export default Landing
