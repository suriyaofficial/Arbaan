import React from 'react'
import './user.css'

const User = ({name,id}) => {

    // const handleDelete = () => {
    //     onDelete(id);
    // }

    return (
        <div className='list' >
             {name}
            
        </div>
    )
}

export default User