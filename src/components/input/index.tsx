import React from "react";
import { BaseEventOrig, Input } from "@tarojs/components";
import PropTypes from "prop-types";
import { InputProps } from "@tarojs/components/types/Input";

import { SiInputProps } from "../../../types/input";

interface SInputState {
  isFocus: boolean;
}

export default class SiInput extends React.Component<
  SiInputProps,
  SInputState
> {
  public static propTypes: PropTypes.InferProps<SiInputProps>;
  public static defaultProps: SiInputProps;

  constructor(props: SiInputProps) {
    super(props);
    this.state = { isFocus: false };
  }

  getClass = () => {
    const { size, disabled } = this.props;
    const { isFocus } = this.state;

    const className: Array<string> = this.props.className
      ? this.props.className.split(" ")
      : [];
    className.push("s-input");
    className.push(`s-size-${size}`);
    isFocus && className.push("s-input__focus");
    disabled && className.push("s-input__disabled");
    return className.join(" ");
  };

  handleInput = (e: BaseEventOrig<InputProps.inputEventDetail>) => {
    this.props.onChange(e.detail.value);
  };

  handleFocus = () => {
    this.setState({
      isFocus: true,
    });
  };

  handleBlur = () => {
    this.setState({
      isFocus: false,
    });
  };

  render() {
    const { style, placeholder, value, disabled } = this.props;
    return (
      <Input
        className={this.getClass()}
        style={style}
        onInput={this.handleInput}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      ></Input>
    );
  }
}

SiInput.defaultProps = {
  maxlength: "140",
  borderless: false,
  placeholder: "",
  value: "",
  size: "md",
  disabled: false,
  onChange: () => {},
};

SiInput.propTypes = {
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderless: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
