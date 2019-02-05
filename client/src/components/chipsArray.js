import React from "react";

const ChipsArray = props => (
  <div>
    {props.keywordList.map((keyword, i) => (
      <button
        key={i}
        className="chip"
        onClick={props.keywordClickHandler}
      >
        {keyword.content}
      </button>
    ))}

  </div>
);

export default ChipsArray;
