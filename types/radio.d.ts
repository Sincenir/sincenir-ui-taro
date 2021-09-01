import { ComponentClass } from 'react';
import SiComponent from './base';

export interface RadioOption {
  [index: string]: unknown
}

export interface SiRadioProps extends SiComponent {
  value: string | number
  options: Array<RadioOption>
  labelKey: string
  valueKey: string
  disabledKey: string
  onChange: (v: string | number) => void
}

declare const SiRadio: ComponentClass<SiRadioProps>;

export default SiRadio;


// import React from 'react';
// import SiComponent from './base';

// export interface RadioOption {
//   [index: string]: unknown
// }

// export interface SiRadioProps extends SiComponent {
//   value: string | number
//   options: Array<RadioOption>
//   labelKey: string
//   valueKey: string
//   disabledKey: string
//   onChange: (v: string | number) => void
// }

// declare const SiRadio: React.FC<SiRadioProps>;

// export default SiRadio;