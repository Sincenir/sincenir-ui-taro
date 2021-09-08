import React from "react";
import { View, Text } from "@tarojs/components";
import PropTypes from "prop-types";

import { SiRadioProps } from "../../../types/radio";


const SiRadio: React.FC<SiRadioProps> = (props) => {
  const { value, options, valueKey, labelKey, disabledKey, disabled, onChange } = props;

  const handleClick = (v: string, d: boolean) => {
    if (disabled) {
      return;
    }
    if (d) {
      return;
    }
    onChange(v);
  };

  return (
    <View>
      {options.map((v, i) => {
        return (
          <View
            className='radio-info'
            key={v[valueKey] as string}
            onClick={() =>
              handleClick(v[valueKey] as string, v[disabledKey] as boolean)
            }
          >
            <View
              className={`radio-icon ${
                v[valueKey] === value ? "radio-icon-selected" : ""
              }`}
            >
              {v[valueKey] === value ? (<View className='radio-selected'></View>) : ''}
            </View>
            <Text className='radio-text s-pr-md'>{v[labelKey] as string}</Text>
            {props.children(i, v)}
          </View>
        );
      })}
    </View>
  );
};


SiRadio.defaultProps = {
  value: '',
  options: [],
  labelKey: 'label',
  valueKey: 'value',
  disabledKey: 'disabled',
  disabled: false,
  onChange: () => void 0,
  children: () => null
};


SiRadio.propTypes = {
  value: PropTypes.any,
  options: PropTypes.any,
  labelKey: PropTypes.any,
  valueKey: PropTypes.any,
  disabled: PropTypes.any,
  disabledKey: PropTypes.any,
  onChange: PropTypes.any,
  children: PropTypes.any,
};

export default SiRadio;
