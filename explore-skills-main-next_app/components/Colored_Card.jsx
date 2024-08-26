import React from "react";

export default function Colored_Card(props) {
  return (
    <>
      <div className="course-col">
        <h3>{props.title ? props.title : "Title"}</h3>
        <p>{props.text ? props.text : "Text"}</p>
      </div>
    </>
  );
}
