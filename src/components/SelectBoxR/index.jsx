import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[24px]",
};
const variants = {
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

const SelectBoxR = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape = "round",
      size = "sm",
      variant = "outline",
      color = "deep_purple_800",
      placeholder,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        {children}
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(shape && shapes[shape]) || ""} ${
            (size && sizes[size]) || ""
          } ${(variant && variants[variant]?.[color]) || ""}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#3498db",
              color: state.isSelected && "#ffffff",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          placeholder={placeholder} // Render the placeholder passed as a prop
          {...restProps}
        />
      </>
    );
  }
);

SelectBoxR.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "xl", "lg", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_100", "blue_600_49", "deep_purple_800"]),
  placeholder: PropTypes.string, // Add prop type for placeholder
};

export { SelectBoxR };
