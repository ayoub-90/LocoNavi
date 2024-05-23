import React from "react";

const sizes = {
  "3xl": "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  "2xl": "text-[26px] font-extrabold md:text-2xl sm:text-[22px]",
  "5xl": "text-[47px] font-semibold md:text-[43px] sm:text-[37px]",
  xl: "text-[22px] font-semibold",
  "4xl": "text-[37px] font-extrabold md:text-[35px] sm:text-[33px]",
  s: "text-base font-semibold",
  md: "text-xl font-semibold",
  xs: "text-[11px] font-bold",
  lg: "text-[21px] font-semibold",
};

const HeadingR = ({
  children,
  className = "",
  size = "lg",
  as,
  ...restProps
}) => {
  const Component = as || "h7";

  return (
    <Component
      className={`text-black-900 font-opensans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { HeadingR };
