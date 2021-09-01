import React from "react";
import { View, Text } from "@tarojs/components";
import PropTypes from "prop-types";

import { SiRadioProps } from "../../../types/radio";


const SiRadio: React.FC<SiRadioProps> = (props) => {
  const { value, options, valueKey, labelKey, disabledKey, onChange } = props;

  const handleClick = (v: string, d: boolean) => {
    if (d) {
      return;
    }
    onChange(v);
  };

  return (
    <View>
      {options.map((v) => {
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
            />
            <Text className='radio-text'>{v[labelKey] as string}</Text>
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
  onChange: () => void 0
};


SiRadio.propTypes = {
  value: PropTypes.any,
  options: PropTypes.any,
  labelKey: PropTypes.any,
  valueKey: PropTypes.any,
  disabledKey: PropTypes.any,
  onChange: PropTypes.any,
};

export default SiRadio;
