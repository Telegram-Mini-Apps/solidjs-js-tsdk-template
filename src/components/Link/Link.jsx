import { A } from '@solidjs/router';

import { getWebApp } from '@/utils/getWebApp.js';

import './Link.css';

/**
 * @param {import('@solidjs/router').AnchorProps} props
 * @return {import('solid-js').JSXElement}
 */
export function Link(props) {
  /**
   * @param {MouseEvent} e
   */
  const onClick = (e) => {
    // Compute if target path is external. In this case we would like to open link using
    // TMA method.
    const targetUrl = new URL(props.href, window.location.toString());
    const currentUrl = new URL(window.location.toString());
    const isExternal = targetUrl.protocol !== currentUrl.protocol
      || targetUrl.host !== currentUrl.host;

    if (isExternal) {
      e.preventDefault();
      getWebApp().openLink(targetUrl.toString());
    }
  };

  return (
    <A
      {...props}
      onClick={onClick}
      class={[props.class, 'link'].filter(Boolean).join(' ')}
    />
  );
}
