import React from "react";

const sizes = {
  "3xl": "text-[37px] font-extrabold md:text-[35px] sm:text-[33px]",
  "2xl": "text-[26px] font-extrabold md:text-2xl sm:text-[22px]",
  xl: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
  s: "text-base font-semibold",
  md: "text-[22px] font-semibold",
  xs: "text-[11px] font-bold",
  lg: "text-2xl font-semibold md:text-[22px]",
};

const HeadingL = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-deep_purple-800 font-opensans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { HeadingL };
