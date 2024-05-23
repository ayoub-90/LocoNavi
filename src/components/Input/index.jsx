import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  fill: {
    gray_100: "bg-gray-100 text-blue_gray-400",
  },
};
const sizes = {
  xs: "h-[63px] pl-[18px] pr-[35px] text-lg",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      shape = "round",
      size = "xs",
      variant = "fill",
      color = "gray_100",
      ...restProps
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`${className} ${(shape && shapes[shape]) || ""} ${
          (size && sizes[size]) || ""
        } ${(variant && variants[variant]?.[color]) || ""}`}
        {...restProps}
      />
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_100"]),
};

export { Input };
