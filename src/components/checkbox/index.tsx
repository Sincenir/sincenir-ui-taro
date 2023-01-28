import React from "react";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";

import { CheckBoxOption, SiCheckBoxProps } from "../../../types/checkBox";

interface SiCheckBoxState {
  selectedValues: Array<string>;
}

class SiCheckBox extends React.Component<SiCheckBoxProps, SiCheckBoxState> {
  public static propTypes: PropTypes.InferProps<SiCheckBoxProps>;
  public static defaultProps: SiCheckBoxProps;

  constructor(props: SiCheckBoxProps) {
    super(props);
    this.getOptionClass = this.getOptionClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getIconClass = this.getIconClass.bind(this);
    this.isSelect = this.isSelect.bind(this);

    this.state = {
      selectedValues: [],
    };
  }

  componentWillReceiveProps(nextProps: SiCheckBoxProps) {
    const nextDef = nextProps.defaultSelectedValues;
    const propDef = this.props.defaultSelectedValues;

    if (JSON.stringify(nextDef) !== JSON.stringify(propDef)) {
      if (nextDef !== void 0 && nextDef.length > 0) {
        this.setState({ selectedValues: nextDef });
      } else {
        this.setState({ selectedValues: [] });
      }
    }
  }

  handleClick(o: CheckBoxOption) {
    const { disabled, valueKey, disabledKey, onChange } = this.props;
    const { selectedValues } = this.state;
    const curV = o[valueKey] as string;
    const d = o[disabledKey] ?? false;

    if (disabled || d) return;

    const i = selectedValues.findIndex((value) => value === curV);
    let tmp = [...selectedValues];
    // 如果有选过该选项，要删除该选项
    if (i > -1) {
      tmp.splice(i, 1);
    } else {
      tmp = [...tmp, curV];
    }

    this.setState({ selectedValues: [...tmp] });
    onChange(tmp);
  }

  isSelect(o: CheckBoxOption) {
    const { valueKey } = this.props;
    const { selectedValues } = this.state;
    return selectedValues.findIndex((value) => value === o[valueKey]) > -1;
  }

  getOptionClass() {
    const { disabled } = this.props;
    const classes: Array<string> = ["checkbox--option"];
    if (disabled) classes.push("checkbox--option__disabled");
    return classes.join(" ");
  }

  getIconClass(v: CheckBoxOption) {
    const { disabled, needAnimation } = this.props;
    const classes = ["option--icon"];

    if (needAnimation) classes.push("short-animation__all");
    if (this.isSelect(v)) classes.push("option--icon__selected");
    if (disabled) classes.push("option--icon__disabled");

    return classes.join(" ");
  }

  render() {
    const { options, valueKey, labelKey, children } = this.props;

    return (
      <View className='checkbox__container'>
        {options.map((option, i) => (
          <View
            className={this.getOptionClass()}
            key={option[valueKey] as string}
            onClick={() => this.handleClick(option)}
          >
            <View
              className={"option--icon " + this.getIconClass(option)}
            ></View>
            <View style={{ flexGrow: 1 }}>
              {children
                ? children(option, i, this.isSelect(option))
                : option[labelKey]}
            </View>
          </View>
        ))}
      </View>
    );
  }
}

SiCheckBox.defaultProps = {
  defaultSelectedValues: [],
  options: [],
  labelKey: "label",
  valueKey: "value",
  disabledKey: "disabled",
  disabled: false,
  needAnimation: true,
  onChange: () => void 0,
  children: void 0,
};

SiCheckBox.propTypes = {
  defaultSelectedValues: PropTypes.any,
  options: PropTypes.any,
  labelKey: PropTypes.any,
  valueKey: PropTypes.any,
  disabled: PropTypes.any,
  disabledKey: PropTypes.any,
  needAnimation: PropTypes.any,
  onChange: PropTypes.any,
  children: PropTypes.any,
};

export default SiCheckBox;
