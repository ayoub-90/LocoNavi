import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[20px]",
};
const variants = {
  fill: {
    deep_purple_800_7f: "bg-deep_purple-800_7f",
    deep_purple_800: "bg-deep_purple-800 text-white-A700",
    blue_gray_100_9e: "bg-blue_gray-100_9e text-deep_purple-800",
    blue_600: "bg-blue-600 text-white-A700",
  },
};
const sizes = {
  xs: "h-[26px] px-0.5",
  sm: "h-[36px] px-[17px] text-[13px]",
  md: "h-[41px] px-1",
  xl: "h-[70px] px-[35px] text-[19px]",
  lg: "h-[41px] px-[17px] text-base",
};

const ButtonL = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "blue_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

ButtonL.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "xl", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_purple_800_7f",
    "deep_purple_800",
    "blue_gray_100_9e",
    "blue_600",
  ]),
};

export { ButtonL };
