import React from "react";
import { View, Text } from "@tarojs/components";
import PropTypes from "prop-types";
const SiRadio = (props) => {
    const { value, options, valueKey, labelKey, disabledKey, onChange } = props;
    const handleClick = (v, d) => {
        if (d) {
            return;
        }
        onChange(v);
    };
    return (React.createElement(View, null, options.map((v) => {
        return (React.createElement(View, { className: 'radio-info', key: v[valueKey], onClick: () => handleClick(v[valueKey], v[disabledKey]) },
            React.createElement(View, { className: `radio-icon ${v[valueKey] === value ? "radio-icon-selected" : ""}` }),
            React.createElement(Text, { className: 'radio-text' }, v[labelKey])));
    })));
};
SiRadio.defaultProps = {
    value: '',
    options: [],
    labelKey: 'label',
    valueKey: 'value',
    disabledKey: 'disabled',
    onChange: () => void 0
};
SiRadio.propTypes = {
    value: PropTypes.any,
    options: PropTypes.any,
    labelKey: PropTypes.any,
    valueKey: PropTypes.any,
    disabledKey: PropTypes.any,
    onChange: PropTypes.any,
};
export default SiRadio;
//# sourceMappingURL=index.js.map