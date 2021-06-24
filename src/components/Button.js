import React from "react";
import classNames from "classnames";
import "./Button.scss";

//size: large, medium, small
export default function Button({ children, size }) {
  return <button className={classNames("Button", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};

