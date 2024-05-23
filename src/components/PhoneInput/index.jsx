import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const shapes = {
  round: "rounded-[24px]",
};
const variants = {
  fill: {
    gray_100: "bg-gray-100 text-blue_gray-400",
  },
  outline: {
    blue_600_49: "border-blue-600_49 border border-solid text-deep_purple-800",
    deep_purple_800:
      "border-deep_purple-800 border border-solid text-deep_purple-800",
  },
};
const sizes = {
  md: "h-[51px] pl-[16px] text-[11px]",
  xs: "h-[43px] w-[450px] pl-[16px] text-xl",
  xl: "h-[63px] pl-[16px] text-lg",
  lg: "h-[52px] pl-[16px] text-xl",
  sm: "h-[48px] pl-[16px] text-[11px]",
};

const PhoneInput = React.forwardRef(
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
      variant = "outline",
      size = "sm",
      color = "deep_purple_800",
      ...restProps
    },
    ref
  ) => {
    const [countryCode, setCountryCode] = useState("+212");
    const [countryOptions, setCountryOptions] = useState([]);

    const handleCountryCodeChange = (selectedOption) => {
      setCountryCode(selectedOption.value);
    };

    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    useEffect(() => {
      // Fetch country data from API
      fetch("https://restcountries.com/v2/all")
        .then((response) => response.json())
        .then((data) => {
          // Extract country code and name from API response
          const options = data.map((country) => ({
            value: country.callingCodes[0],
            label: `${country.callingCodes[0]} ${country.name}`,
          }));
          setCountryOptions(options);
        })
        .catch((error) => {
          console.error("Error fetching country data:", error);
        });
    }, []);

    return (
      <>
        <label
          className={`${className} flex items-center justify-start cursor-text w-[500px] ${
            (shape && shapes[shape]) || ""
          } ${variants[variant]?.[color] || variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <Select
            ref={ref}
            value={{ value: countryCode, label: countryCode }}
            onChange={handleCountryCodeChange}
            options={countryOptions}
            className="flex-grow-1 w-[110px] mr-7"
          />
          <input
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

PhoneInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "xl", "lg", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_100", "blue_600_49", "deep_purple_800"]),
};

export { PhoneInput };
