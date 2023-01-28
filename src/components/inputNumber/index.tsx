import React from "react";
import { BaseEventOrig, Input } from "@tarojs/components";
import PropTypes from "prop-types";
import { InputProps } from "@tarojs/components/types/Input";

import { SiInputNumberProps } from "../../../types/inputNumber";

interface SiInputNumberState {
  isFocus: boolean;
  value?: string;
}
class SiInputNumber extends React.Component<
  SiInputNumberProps,
  SiInputNumberState
> {
  public static propTypes: PropTypes.InferProps<SiInputNumberProps>;
  public static defaultProps: SiInputNumberProps;

  constructor(props: SiInputNumberProps) {
    super(props);

    this.getInputClasses = this.getInputClasses.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      isFocus: false,
      value: String(this.props.defaultValue) ?? "",
    };
  }

  componentWillReceiveProps(nextProps: SiInputNumberProps) {
    const nextDef = nextProps.defaultValue;
    const propDef = this.props.defaultValue;

    if (nextDef !== propDef) {
      if (nextDef !== void 0) {
        this.setState({ ...this.state, value: String(nextDef) });
      } else {
        this.setState({ ...this.state, value: "" });
      }
    }
  }

  getInputClasses(): string {
    const { size, disabled } = this.props;
    const { isFocus } = this.state;
    const classes: Array<string> = [];

    classes.push("s-input--number");
    classes.push(`s-size--${size}`);
    isFocus && classes.push("s-input--number__focus");
    disabled && classes.push("s-input--number__disabled");

    return classes.join(" ");
  }

  handleValue(v: string) {
    let curValue = Number(v);
    const { minValue, maxValue } = this.props;
    if (minValue && curValue < minValue) curValue = minValue;
    if (maxValue && curValue > maxValue) curValue = maxValue;

    return String(curValue);
  }

  handleInput(e: BaseEventOrig<InputProps.inputEventDetail>) {
    const value = this.handleValue(e.detail.value);
    this.setState({ ...this.state, value: value });
    this.props.onChange(value);
  }

  handleFocus() {
    if (this.props.disabled) return;
    this.setState({ isFocus: true });
  }

  handleBlur() {
    this.setState({ isFocus: false });
  }

  render() {
    const { disabled } = this.props;
    const { value } = this.state;

    return (
      <Input
        className={this.getInputClasses()}
        type='number'
        value={value}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onInput={this.handleInput}
        disabled={disabled}
      ></Input>
    );
  }
}

SiInputNumber.defaultProps = {
  defaultValue: "",
  width: 120,
  minValue: Number.MIN_SAFE_INTEGER,
  maxValue: Number.MAX_SAFE_INTEGER,
  size: "md",
  disabled: false,
  disabledInput: false,
  onChange: () => void 0,
};

SiInputNumber.propTypes = {
  defaultValue: PropTypes.any,
  width: PropTypes.number.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  disabledInput: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default SiInputNumber;
