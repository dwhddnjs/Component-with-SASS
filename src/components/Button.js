import React from "react";
import "./Button.scss";

//size: large, medium, small
export default function Button({ children, size }) {
  return <button className={`Button ${size}`}>{children}</button>;
}
