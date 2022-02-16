import React from 'react'


const User = ({id,email,name,onUpdate, onDelete}) => {
    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <ul className="list-group">
            <li className="list-group-item ">
                <span className="col-md-4">{name}</span>
                <span className="col-md-4">{email}</span>
                <span className="col-md-4">
                    <button type="button" className="btn btn-outline-danger" onClick={onUpdate}>Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>delete</button>
                </span>
            </li>
        </ul>
    )
}

export default User
