import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-blue-600 border border-solid checked:border-blue-600 checked:border-4 checked:border-solid checked:focus:border-blue-600",
};
const sizes = {
  xs: "h-[18px] w-[18px]",
  sm: "h-[29px] w-[29px]",
};

const Radio = React.forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "radio_id",
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={className + " flex items-center gap-[5px] cursor-pointer"}
      >
        <input
          className={` ${(size && sizes[size]) || ""} ${
            (variant && variants[variant]) || ""
          }`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  }
);

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
