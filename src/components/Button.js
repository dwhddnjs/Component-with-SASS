import React from "react";
import classNames from "classnames";
import "./Button.scss";

//size: large, medium, small
export default function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  return (
    <button
      className={classNames("Button", size, color, {
        outline,
        fullWidth,
      })}
      {...rest}
      className
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};
