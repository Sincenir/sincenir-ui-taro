import React from "react";
import { Input, Text, View } from "@tarojs/components";
import PropTypes from "prop-types";

import { SiInputNumberProps } from "../../../types/inputNumber";

const SiInputNumber: React.FC<SiInputNumberProps> = (props) => {
  const {
    value,
    width,
    minValue,
    maxValue,
    step,
    disabled,
    disabledInput,
    onChange,
    onBlur,
  } = props;

  const handleBlur = (e: any) => {
    if (disabled) return;
    const num = clearData(e.target.value);
    onChange(num);
    onBlur?.(num);
  };

  const clearData = (v: any): number => {
    if (v == void 0) v = minValue;
    if (v > maxValue!) v = maxValue;
    if (v < minValue!) v = minValue;
    return v;
  };

  const handleAdd = () => {
    if (disabled) return;
    onChange(clearData(Number(value) + step!));
  };

  const handleSubtract = () => {
    if (disabled) return;
    onChange(clearData(Number(value) - step!));
  };

  return (
    <View className='si-input-number'>
      <View
        className={`si-input-number__btn ${
          value == minValue || disabled ? "si-input-number--disabled" : ""
        }`}
        onClick={handleSubtract}
      >
        <Text className='si-icon si-icon-subtract si-input-number__btn-subtract'></Text>
      </View>
      <Input
        type='number'
        className='si-input-number__input'
        style={{ minWidth: `${width}rpx` }}
        value={String(value)}
        onBlur={handleBlur}
        disabled={disabledInput || disabled}
      ></Input>
      <View
        className={`si-input-number__btn ${
          value == maxValue || disabled ? "si-input-number--disabled" : ""
        }`}
        onClick={handleAdd}
      >
        <Text className='si-icon si-icon-add si-input-number__btn-add'></Text>
      </View>
    </View>
  );
};

SiInputNumber.defaultProps = {
  width: 120,
  minValue: 0,
  maxValue: 100,
  step: 1,
  disabled: false,
  disabledInput: false,
  onChange: () => void 0,
  onBlur: () => void 0,
};

SiInputNumber.propTypes = {
  value: PropTypes.any.isRequired,
  width: PropTypes.number.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  disabledInput: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default SiInputNumber;
