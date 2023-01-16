import React from "react";
import SiComponent from "./base";

export interface SiInputNumberProps extends SiComponent {
  defaultValue?: string | number;
  width?: number;
  minValue?: number;
  maxValue?: number;
  size?: string;
  disabled?: boolean;
  disabledInput?: boolean;
  onChange: (v: string) => void;
}
declare const SiInputNumber: React.FC<SiInputNumberProps>;

export default SiInputNumber;
