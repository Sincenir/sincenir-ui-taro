import React from "react";
import PorpTypes from "prop-types";
import { View, Text } from "@tarojs/components";
import { SiBtnToggleProps } from "../../../types/btnToggle";

const BtnToggle: React.FC<SiBtnToggleProps> = (props) => {
  const { spread, clearable, disabled } = props;
  const { value, options } = props;
  const { onChange } = props;
  return (
    <View
      className={`btn-toggle-group ${
        spread ? "btn-toggle-group--spread" : "btn-toggle-group--no-spread"
      }`}
    >
      {options.map((v) => (
        <Text
          key={v.value}
          className={`btn-toggle-item ${
            value === v.value ? "btn-toggle-item__selected" : ""
          } ${disabled ? "disabled" : ""}`}
          onClick={() => {
            if (disabled) return;
            let tmp = v.value;
            if (clearable) {
              if (value === tmp) tmp = "";
            }
            onChange(tmp);
          }}
        >
          {v.label}
        </Text>
      ))}
    </View>
  );
};

BtnToggle.defaultProps = {
  spread: false,
  disabled: false,
  clearable: false,
  onChange: () => void 0,
};

BtnToggle.prototype = {
  spread: PorpTypes.bool,
  value: PorpTypes.string.isRequired,
  options: PorpTypes.array.isRequired,
  clearable: PorpTypes.bool,
  disabled: PorpTypes.bool,
  onChange: PorpTypes.func,
};

export default BtnToggle;
