import React from "react";

const ExtraInfo = ({ age, gender }) => {
  return (
    <div className="text-center mt-5">
      <h3>
        Estimated Age: {age} , Gender:{" "}
        {gender.charAt(0).toUpperCase() + gender.slice(1)}
      </h3>
    </div>
  );
};
export default ExtraInfo;
