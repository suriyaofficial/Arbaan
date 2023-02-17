import React,{ useEffect, useState } from 'react'
import User from './User';
import {useNavigate} from 'react-router-dom'



function Landing() {
    const [users, setUsers] = useState([]);
    const [LoginName, setLoginName] = useState([]);
    const [pass,setPass] = useState([]);
    const [login,setLogin]=useState(false);
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
       if (pass === "ADMIN")
       {
        setLogin(false
          );
        alert("success");
        localStorage.setItem("LoginName", LoginName);
        
      } else {
        alert("hint: password-ADMIN");
      }
    };
    if (login===true) {
      return navigate("/dashboard");
    } else {
      navigate("/");
      localStorage.removeItem("LoginName")
      
    }
    
  
    console.log(users);
    console.log(LoginName);
    console.log(pass);
        
  return (
    <div>
        <div className="App">
      <h3>SELECT THE USER TO LOGIN</h3>

      <br />
      
      <div>
        <select onClick={(e) => setLoginName(e.target.value)}
        Value="select">

        {users.map((user) => (
            
            <option ><User 
              id={user.id}
              key={user.id}
              name={user.name}
            /></option>
          ))}
    </select>
        <input type="text " onChange={(e) => setPass(e.target.value)}   placeholder="enter password"></input>
        <button onClick={handleLogin}>LOGIN</button>
    </div>
    </div>

      
    </div>
  )
}

export default Landing
