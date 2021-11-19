import React from "react";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";

import { RadioOption, SiRadioProps } from "../../../types/radio";

const SiRadio: React.FC<SiRadioProps> = (props) => {
  const {
    value,
    options,
    valueKey,
    labelKey,
    disabledKey,
    disabled,
    onChange,
  } = props;

  const handleClick = (v: string, d: boolean) => {
    if (disabled) {
      return;
    }
    if (d) {
      return;
    }
    onChange(v);
  };

  const isSelect = (v: any): boolean => {
    return v === value;
  };

  const getIconClass = (v: RadioOption): string => {
    const classes: string[] = ['option--icon']
    if (isSelect(v[valueKey])) classes.push('option--icon__selected')
    if (disabled) classes.push('option--icon__disable')
    return classes.join(' ')
  }

  const getOptionClass = () => {
    const classes: string[] = ['radio--option']
    if (disabled) classes.push('radio--option__disabled')
    return classes.join(' ')
  }

  return (
    <View className='radio__container'>
      {options.map((v, i) => {
        return (
          <View
            className={getOptionClass()}
            key={v[valueKey] as string}
            onClick={() =>
              handleClick(v[valueKey] as string, v[disabledKey] as boolean)
            }
          >
            <View className='s-column' style={{ width: "100%" }}>
              {/* default content */}
              <View className='option-main'>
                {/* icon */}
                <View
                  className={getIconClass(v)}
                >
                  {isSelect(v[valueKey]) ? (
                    <View className='radio__selected'></View>
                  ) : (
                    ""
                  )}
                </View>
                {/* text */}
                <View>{v[labelKey] as string}</View>
              </View>
              {/* slot content（show after selection） */}
              {isSelect(v[valueKey]) ? (
                <View className='s-ml-lg s-pl-sm'>{props.children(i, v)}</View>
              ) : (
                ""
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

SiRadio.defaultProps = {
  value: "",
  options: [],
  labelKey: "label",
  valueKey: "value",
  disabledKey: "disabled",
  disabled: false,
  onChange: () => void 0,
  children: () => null,
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
