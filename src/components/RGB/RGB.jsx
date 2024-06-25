import { splitProps } from 'solid-js';

import './RGB.css';

/**
 * @typedef {import('solid-js').JSX.IntrinsicElements['span']} RGBProps
 * @property {string} color
 */

/**
 * @param {RGBProps} props
 * @return {import('solid-js').JSXElement}
 */
export function RGB(props) {
  return (
    <span
      {...splitProps(props, ['class'])[0]}
      class={['rgb', props.class].filter(Boolean).join(' ')}
    >
    <i class="rgb__icon" style={{ 'background-color': props.color }}/>
      {props.color}
  </span>
  );
}
