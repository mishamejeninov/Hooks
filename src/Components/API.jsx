import React from "react";

function Api(props) {
  return (
    <div>
      {props.ApiInfo.map((result, i) => {
        return (
          <h1 key={i}>
            {props.inputData === "films" ? result.title : result.name}.
          </h1>
        );
      })}
    </div>
  );
}
export default Api;
