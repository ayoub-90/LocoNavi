import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[17px]",
};
const variants = {
  fill: {
    deep_purple_800: "bg-deep_purple-800 text-white-A700",
    deep_purple_800_7f: "bg-deep_purple-800_7f",
    green_A400: "bg-green-A400 text-white-A700",
  },
};
const sizes = {
  sm: "h-[36px] px-[17px] text-[13px]",
  xs: "h-[26px] px-0.5",
  md: "h-[54px] px-[35px] text-[19px]",
};

const ButtonM = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "",
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

ButtonM.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_purple_800",
    "deep_purple_800_7f",
    "green_A400",
  ]),
};

export { ButtonM };
