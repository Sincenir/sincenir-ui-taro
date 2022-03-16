import React from "react";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";

import { CheckBoxOption, SiCheckBoxProps } from "../../../types/checkBox";

const SiCheckBox = (props: SiCheckBoxProps) => {
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

    const i = value.findIndex((code) => code === v);
    let tmp = [...value];
    // 如果有选过该选项，要删除该选项
    if (i > -1) {
      tmp.splice(i, 1);
    } else {
      tmp = [...tmp, v];
    }

    onChange(tmp);
  };

  const isSelect = (v: any) => {
    return value.findIndex((code) => code === v) > -1;
  };

  const getIconClass = (v: CheckBoxOption) => {
    const classes = ["option--icon"];
    if (isSelect(v[valueKey])) classes.push("option--icon__selected");
    if (disabled) classes.push("option--icon__disable");
    return classes.join(" ");
  };

  const getOptionClass = () => {
    const classes = ["checkbox--option"];
    if (disabled) classes.push("checkbox--option__disabled");
    return classes.join(" ");
  };

  return (
    <View className='checkbox__container'>
      {options?.map((v, i) => {
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
                <View className={getIconClass(v)}>
                  {isSelect(v[valueKey]) ? (
                    <View className='checkbox__selected'></View>
                  ) : null}
                </View>
                {/* text */}
                <View>
                  {v[labelKey]}
                  {isSelect(v[valueKey])}
                </View>
              </View>
              {/* slot content（show after selection） */}
              {isSelect(v[valueKey]) ? (
                <View className='s-ml-lg s-pl-sm'>{props.children(i, v)}</View>
              ) : null}
            </View>
          </View>
        );
      })}
    </View>
  );
};

SiCheckBox.defaultProps = {
  value: [],
  options: [],
  labelKey: "label",
  valueKey: "value",
  disabledKey: "disabled",
  disabled: false,
  onChange: () => void 0,
  children: () => null,
};

SiCheckBox.propTypes = {
  value: PropTypes.any,
  options: PropTypes.any,
  labelKey: PropTypes.any,
  valueKey: PropTypes.any,
  disabled: PropTypes.any,
  disabledKey: PropTypes.any,
  onChange: PropTypes.any,
  children: PropTypes.any,
};

export default SiCheckBox;
