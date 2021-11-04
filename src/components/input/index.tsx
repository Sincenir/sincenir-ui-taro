import React from 'react';
import { BaseEventOrig, Input } from '@tarojs/components';
import PropTypes from 'prop-types';
import { InputProps } from '@tarojs/components/types/Input';

import { SiInputProps } from '../../../types/input';


interface SInputState {
  focusClass: string;
}

export default class SiInput extends React.Component<
  SiInputProps,
  SInputState
> {
  public static propTypes: PropTypes.InferProps<SiInputProps>;
  public static defaultProps: SiInputProps;

  constructor(props: SiInputProps) {
    super(props);
    this.state = { focusClass: '' };
  }

  getClass = () => {
    const className: Array<string> = this.props.className
      ? this.props.className.split(' ')
      : [];
    className.push('s-input');
    className.push(`s-size-${this.props.size}`);
    this.props.borderless && className.push(`s-input-borderless`);
    return className.join(' ');
  };

  handleInput = (e: BaseEventOrig<InputProps.inputEventDetail>) => {
    this.props.onChange(e.detail.value);
  };

  handleFocus = () => {
    this.setState({
      focusClass: 'input-focus',
    });
  };

  handleBlur = () => {
    this.setState({
      focusClass: '',
    });
  };

  render() {
    return (
      <Input
        className={`${this.getClass()} ${this.state.focusClass}`}
        style={this.props.style}
        onInput={this.handleInput}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholder={this.props.placeholder}
        value={this.props.value}
        disabled={this.props.disabled}
      ></Input>
    );
  }
}

SiInput.defaultProps = {
  maxlength: '140',
  borderless: false,
  placeholder: '',
  value: '',
  size: 'md',
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
  disabled: PropTypes.bool
};
