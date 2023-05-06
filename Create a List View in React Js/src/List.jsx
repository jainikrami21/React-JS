import React from "react";

function List() {
return (
    <div className="container p-5 bg-primary">
        <h1>The "React Way" to Render a List</h1>
        <ol className="fw-bold">
            <li>Use Array.map</li>
            <li>Not a for loop</li>
            <li>Give each item a unique key</li>
            <li>Aviod using array index as the key </li>
        </ol>
    </div>
    );
}

export default List;
