import React, { useState } from "react";
import PropTypes from "prop-types";

const ButtonL1 = ({ className = "", children, ...restProps }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`${className} checkbox-container`} {...restProps}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {children}
    </label>
  );
};

ButtonL1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { ButtonL1 };
