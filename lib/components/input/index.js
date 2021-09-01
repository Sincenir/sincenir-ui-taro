import React from 'react';
import { Input } from '@tarojs/components';
import PropTypes from 'prop-types';
export default class SiInput extends React.Component {
    constructor(props) {
        super(props);
        this.getClass = () => {
            const className = this.props.className
                ? this.props.className.split(' ')
                : [];
            className.push('s-input');
            className.push(`s-size-${this.props.size}`);
            this.props.borderless && className.push(`s-input-borderless`);
            return className.join(' ');
        };
        this.handleInput = (e) => {
            this.props.onChange(e.detail.value);
        };
        this.handleFocus = () => {
            this.setState({
                focusClass: 'input-focus',
            });
        };
        this.handleBlur = () => {
            this.setState({
                focusClass: '',
            });
        };
        this.state = { focusClass: '' };
    }
    render() {
        return (React.createElement(Input, { className: `${this.getClass()} ${this.state.focusClass}`, style: this.props.style, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, placeholder: this.props.placeholder, value: this.props.value }));
    }
}
SiInput.defaultProps = {
    maxlength: '140',
    borderless: false,
    placeholder: '',
    value: '',
    size: 'md',
    onChange: () => { },
};
SiInput.propTypes = {
    maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderless: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func,
};
//# sourceMappingURL=index.js.map