import React, {useState} from 'react'


const User = ({ name, email, id, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleOnEditSubmit = (evt) => {
        evt.preventDefault();
        onEdit(id, evt.target.name.value, evt.target.email.value);
        setIsEdit(!isEdit);
    };
    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <div>
            {isEdit ? (
                    <form onSubmit={handleOnEditSubmit}>
                        <h3>Add User</h3>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                            <input type="text" name="name" defaultValue={name} className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            <input type="email" name="email" defaultValue={email} className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <button  onSubmit={handleOnEditSubmit}  className="btn btn-primary">Save</button>
                        <hr />
                    </form>
                ) : (
            <ul className="list-group">
                <li className="list-group-item ">
                    <span className="col-md-4">{name}</span>
                    <span className="col-md-4">{email}</span>
                    <span className="col-md-4">
                    <button type="button" className="btn btn-outline-danger" onClick={handleEdit}>Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>delete</button>
                </span>
                </li>
            </ul>
            )}
        </div>
    )
}

export default User
