import React from "react";

const sizes = {
  xs: "text-[11px] font-medium",
  s: "text-[47px] font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue_gray-700 font-opensans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
