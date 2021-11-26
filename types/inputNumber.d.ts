import React from 'react';
import SiComponent from './base';

export interface SiInputNumberProps extends SiComponent {
  value: string | number
  width?: number
  minValue?: number
  maxValue?: number
  step?: number
  disabled?: boolean
  disabledInput?: boolean
  onChange: (v: number) => void
  onBlur?: (v: number) => void
}
declare const SiInputNumber: React.FC<SiInputNumberProps>;

export default SiInputNumber