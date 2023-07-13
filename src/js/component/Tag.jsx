import React from "react";
import Home from "./home";

const Tag = (props) => {
    return (

        <div className="d-flex justify-content-between">
            <p>{props.text}</p>
            <button className="border-0 bg-transparent" onClick={() => props.deleteTag(props.id)}>❌</button>
        </div>

    );

};

export default Tag