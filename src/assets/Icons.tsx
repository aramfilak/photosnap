import React from "react";

const Arrow: React.FC = (): JSX.Element => {
  return (
    <svg
      data-testid="arrow-icon"
      className="arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="14"
    >
      <g fill="none" fillRule="evenodd" stroke="#000">
        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
      </g>
    </svg>
  );
};
export { Arrow };
