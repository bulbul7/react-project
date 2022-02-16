import React from "react";

const UpdateUser = ({ onAdd }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value,e.target.email.value);
        e.target.name.value = "";
        e.target.email.value = "";
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h3>Add User</h3>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input type="text" name="name" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input type="email" name="email" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" />
                </div>
                <button  onSubmit={handleOnSubmit}  className="btn btn-primary">Update</button>
                <hr />
            </form>
        </div>
    );
};

export default UpdateUser;
