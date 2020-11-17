import React from "react";

function Rank({ entries, name }) {
  return (
    <div className="text-center display-3 mt-5">
      <h2>
        {" "}
        Hi {name} <br></br> Your Entry Count is {entries}
      </h2>
    </div>
  );
}
export default Rank;
