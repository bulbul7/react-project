import React from "react";

function PageHeader(props){

    return(
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{props.left}</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i className="fas fa-pager fa-sm text-white-50"></i>{props.right}</a>
        </div>
    );
}

export default PageHeader;