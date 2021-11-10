import React from "react";
import { View, Picker } from "@tarojs/components";
import PropTypes from "prop-types";
import { SiDatePickerProps } from "../../../types/datePicker";

export default class SiDatePicker extends React.Component<SiDatePickerProps> {
  public static defaultProps: SiDatePickerProps;
  public static propType: PropTypes.InferProps<SiDatePickerProps>;

  render() {
    return (
      <Picker
        mode='date'
        value={this.props.value}
        onChange={(e) => this.props.onChange((e.detail.value as string))}
      >
        <View
          className='s-row'
          style={{alignItems: 'center'}}
        >
          <View>{this.props.label}：</View>
          <View>{this.props.value}</View>
        </View>
      </Picker>
    );
  }
}

SiDatePicker.defaultProps = {
  label: "当前选择",
  placeholder: "请选择日期",
  value: "",
  format: "YYYY-MM-dd",
  onChange: () => void 0,
};

SiDatePicker.propType = {
  label: PropTypes.any,
  placeholder: PropTypes.any,
  value: PropTypes.any,
  format: PropTypes.any,
  onChange: PropTypes.any.isRequired,
};
