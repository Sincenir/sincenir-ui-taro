import React from "react";
import SiComponent from "./base";

export interface BtnToggleOption {
  label: string
  value: string | number
} 

export interface SiBtnToggleProps extends SiComponent {
  options: BtnToggleOption[]
  value: string | number
  spread?: boolean
  clearable?: boolean
  disabled: boolean
  onChange: (v: string | number) => void
}


/**
 * @description: 栏组件 一般用于dialog的头部
 * @param options: 绑定的数据，例：[{label: '父亲', value: '1'}]
 * @param value: 绑定的选中数据
 * @param spread: 是否扩展到可用空间
 * @param clearable: 是否可以通过重复点击清除选中
 * @param disabled: 是否禁用
 * @param onChange: event: 数据更新
*/
declare const SiBtnToggle: React.FC<SiBtnToggleProps>

export default SiBtnToggle