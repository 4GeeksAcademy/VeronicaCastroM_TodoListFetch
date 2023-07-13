import React from "react";

const Tag = (props) =>{
    return(
     <li className="list-group-item">
           <div className="d-flex justify-content-between">
            <p>{props.text}</p>
            <button className="border-0 bg-transparent">❌</button>
           </div>
     </li>
    );

};

export default Tag