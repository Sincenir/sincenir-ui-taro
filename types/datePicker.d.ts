import { ComponentClass } from 'react';
import SiComponent from './base';

export interface SiDatePickerProps extends SiComponent {
  label?: string
  placeholder?: string
  value: string
  format?: 'YYYY-MM-dd' | 'YY-MM-dd' | 'MM-dd'
  onChange: (v?: string) => void
}

/**
 * @description: 基本的时间选择器
 * @param label: label
 * @param placeholder: input框的默认显示文字
 * @param value: 值
 * @param format: 日期格式 'YYYY-MM-dd' | 'YY-MM-dd' | 'MM-dd'
 * @param onChange: 日期更新的事件
*/
declare const SiDatePicker: ComponentClass<SiDatePickerProps>;

export default SiDatePicker;
