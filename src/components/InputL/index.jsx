import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[25px]",
};
const variants = {
  outline: {
    deep_purple_800:
      "border-deep_purple-800 border border-solid text-deep_purple-800",
  },
  fill: {
    white_A700_e0: "bg-white-A700_e0 text-deep_purple-800_9b",
  },
};
const sizes = {
  xs: "h-[51px] pl-[21px] pr-[35px] text-[11px]",
  sm: "h-[54px] px-[35px] text-base",
};

const InputL = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700_e0",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center self-stretch cursor-text rounded-[25px]  ${
            (shape && shapes[shape]) || ""
          } ${variants[variant]?.[color] || variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </label>
      </>
    );
  }
);

InputL.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["deep_purple_800", "white_A700_e0"]),
};

export { InputL };
