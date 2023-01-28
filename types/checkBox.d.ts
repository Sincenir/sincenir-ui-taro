// import { ComponentClass } from 'react';
import React from "react";
import SiComponent from "./base";

export interface CheckBoxOption {
  [index: string]: unknown;
}

export interface SiCheckBoxProps extends SiComponent {
  defaultSelectedValues: Array<string>;
  options: Array<CheckBoxOption>;
  labelKey: string;
  valueKey: string;
  disabledKey: string;
  disabled: boolean;
  needAnimation?: boolean;
  children?: (option: CheckBoxOption, index: number, isSelect: boolean) => any;
  onChange: (v: Array<string | number>) => void;
}

declare const SiCheckBox: React.FC<SiCheckBoxProps>;

export default SiCheckBox;
