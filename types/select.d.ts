import { ComponentClass } from "react";
import SiComponent from "./base";

export interface ISelectOption {
  [key: string]: any;
}
export interface SiSelectProps extends SiComponent {
  options: ISelectOption[];
  defaultSelected?: number;
  labelKey: string;
  disabled: boolean;
  onChange: (ISelectOption) => void;
}

/**
 * @description: 栏组件 一般用于Input的头部
 * @param options:
 * @param defaultSelected:
 * @param labelKey:
 * @param disabled:
 * @param onChange:
 */
declare const SiSelect: ComponentClass<SiSelectProps>;

export default SiSelect;
