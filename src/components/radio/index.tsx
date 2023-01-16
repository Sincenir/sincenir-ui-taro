import React from "react";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";
import { RadioOption, SiRadioProps } from "../../../types/radio";

interface SiRadioState {
  selectedKey: string;
}
class SiRadio extends React.Component<SiRadioProps, SiRadioState> {
  public static propTypes: PropTypes.InferProps<SiRadioProps>;
  public static defaultProps: SiRadioProps;

  constructor(props: SiRadioProps) {
    super(props);
    this.getOptionClass = this.getOptionClass.bind(this);
    this.getIconClass = this.getIconClass.bind(this);
    this.isSelect = this.isSelect.bind(this);

    this.state = {
      selectedKey: "",
    };
  }

  componentWillReceiveProps(nextProps: SiRadioProps) {
    const nextDef = nextProps.defaultSelected;
    const propDef = this.props.defaultSelected;

    if (nextDef !== propDef) {
      if (nextDef !== void 0) {
        this.setState({ selectedKey: nextDef });
      } else {
        this.setState({ selectedKey: "" });
      }
    }
  }

  getOptionClass(): string {
    const { disabled } = this.props;
    const classes = ["radio--option"];
    if (disabled) classes.push("radio--option__disabled");
    return classes.join(" ");
  }

  getIconClass(v: RadioOption): string {
    const { disabled } = this.props;

    const classes: Array<string> = [];
    if (this.isSelect(v)) classes.push("option--icon__selected");
    if (disabled) classes.push("option--icon__disable");
    return classes.join(" ");
  }

  isSelect(option: RadioOption): boolean {
    return option[this.props.valueKey] === this.state.selectedKey;
  }

  handleClick(o: RadioOption) {
    const { valueKey, disabledKey, disabled, onChange } = this.props;
    const v = o[valueKey] as string;
    const d = o[disabledKey] ?? false;

    if (disabled || d) return;

    this.setState({ selectedKey: v });
    onChange(v);
  }

  render() {
    const { options, valueKey, labelKey, children } = this.props;

    return (
      <View className='radio__container'>
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

SiRadio.defaultProps = {
  defaultSelected: "",
  options: [],
  labelKey: "label",
  valueKey: "value",
  disabledKey: "disabled",
  disabled: false,
  onChange: () => void 0,
  children: () => null,
};

SiRadio.propTypes = {
  defaultSelected: PropTypes.any,
  options: PropTypes.any,
  labelKey: PropTypes.any,
  valueKey: PropTypes.any,
  disabled: PropTypes.any,
  disabledKey: PropTypes.any,
  onChange: PropTypes.any,
  children: PropTypes.any,
};

export default SiRadio;
