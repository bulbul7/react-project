import React, {useEffect, useState} from "react";

function SearchFilter() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

    return(
        <div className="App">
            <input
                type="text"
                placeholder="Search name"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
            {
                data.filter((val) => {
                    if (searchTerm==="") {
                        return val;
                    } else if (
                        val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ){
                        return val;
                    }
                })
                    .map((user, key) => {
                        return(
                            <ul className="list-group">
                               <li className="list-group-item" key={key}>{user.name}</li>
                            </ul>
                        )
                    })
            }
        </div>
    )
}
export default SearchFilter;