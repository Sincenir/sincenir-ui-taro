import React from "react";
import { BaseEventOrig, Input } from "@tarojs/components";
import PropTypes from "prop-types";
import { InputProps } from "@tarojs/components/types/Input";

import { SiInputProps } from "../../../types/input2";

interface SInputState {
  isFocus: boolean;
  value: string;
}

export default class SiInput extends React.Component<
  SiInputProps,
  SInputState
> {
  public static propTypes: PropTypes.InferProps<SiInputProps>;
  public static defaultProps: SiInputProps;

  constructor(props: SiInputProps) {
    super(props);
    this.state = {
      isFocus: false,
      value: String(this.props.defaultValue) ?? "",
    };
  }

  componentWillReceiveProps(nextProps: SiInputProps) {
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
    const v = e.detail.value;
    this.setState({ ...this.state, value: v });
    this.props.onChange(v);
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
    const { style, placeholder, disabled } = this.props;
    return (
      <Input
        className={this.getClass()}
        style={style}
        onInput={this.handleInput}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholder={placeholder}
        value={this.state.value}
        disabled={disabled}
      ></Input>
    );
  }
}

SiInput.defaultProps = {
  maxlength: "140",
  borderless: false,
  placeholder: "",
  defaultValue: "",
  size: "md",
  disabled: false,
  onChange: () => {},
};

SiInput.propTypes = {
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderless: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
