import React from "react";
import SiComponent from "./base";

export interface RadioOption {
  [index: string]: unknown;
}

export interface SiRadioProps extends SiComponent {
  defaultSelected?: string;
  options: Array<RadioOption>;
  labelKey: string;
  valueKey: string;
  disabledKey: string;
  disabled: boolean;
  needAnimation?: boolean;
  children?: (option: RadioOption, index: number, isSelect: boolean) => any;
  onChange: (v: string | number) => void;
}

declare const SiRadio: React.FC<SiRadioProps>;

export default SiRadio;
