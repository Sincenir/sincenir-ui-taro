import React from "react";
import { Picker, View, Text } from "@tarojs/components";
import PropTypes from "prop-types";
import { ISelectOption, SiSelectProps } from "../../../types/select";

interface SiSelectState {
  selectedIndex: number;
  selectedOption: null | ISelectOption;
}

export default class SiSelect extends React.Component<
  SiSelectProps,
  SiSelectState
> {
  public static propTypes: PropTypes.InferProps<SiSelectProps>;
  public static defaultProps: SiSelectProps;

  state = {
    selectedIndex: 0,
    selectedOption: null,
  };

  componentWillReceiveProps(nextProps: SiSelectProps) {
    if (nextProps.defaultSelected !== this.props.defaultSelected) {
      if (
        nextProps.defaultSelected !== void 0 &&
        nextProps.defaultSelected > -1
      ) {
        this.setState({
          selectedIndex: nextProps.defaultSelected,
          selectedOption: nextProps.options[nextProps.defaultSelected],
        });
      } else {
        this.setState({
          selectedIndex: 0,
          selectedOption: null,
        });
      }
    }
  }

  handleChange(v: number | string) {
    const { onChange, options } = this.props;

    this.setState({
      selectedIndex: Number(v),
      selectedOption: options[Number(v)],
    });

    onChange?.(options[Number(v)]);
  }

  render() {
    const { options, labelKey, disabled } = this.props;
    const { selectedIndex, selectedOption } = this.state;

    return (
      <Picker
        mode='selector'
        value={selectedIndex}
        range={options}
        rangeKey={labelKey}
        onChange={(e) => this.handleChange(e.detail.value)}
        disabled={disabled}
      >
        <View className='picker'>
          <Text style={{ color: "#999" }}>点击选择</Text>
          {selectedOption !== null ? (
            <Text>{(selectedOption as unknown as ISelectOption)[labelKey] ?? ""}</Text>
          ) : null}
        </View>
      </Picker>
    );
  }
}
SiSelect.defaultProps = {
  options: [],
  defaultSelected: -1,
  labelKey: "label",
  disabled: false,
  onChange: () => {},
};

SiSelect.propTypes = {
  options: PropTypes.array.isRequired,
  defaultSelected: PropTypes.number,
  labelKey: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
