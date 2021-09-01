import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
export default class SiBadge extends React.Component {
    render() {
        return (React.createElement(View, { className: `s-badge s-bg-${this.props.color} s-text-${this.props.textColor}` }, this.props.label));
    }
}
SiBadge.defaultProps = {
    label: '默认值',
    color: 'red',
    textColor: 'white',
};
SiBadge.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    textColor: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.string,
};
//# sourceMappingURL=index.js.map