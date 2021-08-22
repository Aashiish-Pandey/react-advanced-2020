import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [isError, setIsError] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setIsError(!isError)}>
        show/hide
      </button>
      {isError ? <h1>Error....</h1> : <h1>no Error</h1>}
    </div>
  );
};

export default ShowHide;
