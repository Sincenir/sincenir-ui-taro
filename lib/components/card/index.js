import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
export default class SiCard extends React.Component {
    constructor() {
        super(...arguments);
        this.getClass = () => {
            const className = this.props.className
                ? this.props.className.split(' ')
                : [];
            className.push('s-card');
            className.push('s-ma-md');
            !this.props.square && className.push('s-radius');
            !this.props.flat && className.push('s-shadow');
            this.props.bordered && className.push('s-border');
            return className.join(' ');
        };
    }
    render() {
        return (React.createElement(View, { className: this.getClass(), style: this.props.style }, this.props.children));
    }
}
SiCard.defaultProps = {
    dark: false,
    square: false,
    flat: false,
    bordered: false,
};
SiCard.propTypes = {
    dark: PropTypes.bool,
    square: PropTypes.bool,
    flat: PropTypes.bool,
    bordered: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.string,
};
//# sourceMappingURL=index.js.map