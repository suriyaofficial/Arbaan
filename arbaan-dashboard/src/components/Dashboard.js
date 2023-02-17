import React from 'react'

function Dashboard({Logout}) {
  return (
    <div>
        
      <h1>welcome to dashboard</h1>
      <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default Dashboard
