import React from "react";
import { Picker } from "@tarojs/components";
import PropTypes from "prop-types";

import SiInput from "../input/index";
import { SiDatePickerProps } from "../../../types/datePicker";
import { formatDate } from "../../util/date";

const SiDatePicker: React.FC<SiDatePickerProps> = (props) => {
  const handleChange = (e: any) => {
    const tmp = formatDate(e.target.value as string, props.format);
    props.onChange(tmp);
  };
  return (
    <Picker mode='date' value={props.value} onChange={(e) => handleChange(e)} disabled={props.disabled}>
      <SiInput
        value={props.value}
        style={{ fontSize: "28rpx" }}
        placeholder='请选择日期'
        onChange={() => {}}
        disabled
      ></SiInput>
    </Picker>
  );
};

SiDatePicker.defaultProps = {
  placeholder: "请选择日期",
  value: "",
  format: "yyyy-MM-DD",
  disabled: false,
  onChange: () => void 0,
};

SiDatePicker.propTypes = {
  placeholder: PropTypes.any,
  value: PropTypes.any,
  format: PropTypes.any,
  disabled: PropTypes.any,
  onChange: PropTypes.any,
};

export default SiDatePicker;
