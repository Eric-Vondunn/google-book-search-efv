import React from "react";

// this exports the container, row and column components

//allows us to use a bootstrap container with no class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}
//allows us to use a bootstrap rows with no class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//allows us to size bootstrap cols with less syntax
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map((size) => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
