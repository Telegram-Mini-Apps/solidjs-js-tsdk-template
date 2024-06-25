import { For, Match, Switch } from 'solid-js';

import { RGB } from '@/components/RGB/RGB.jsx';

import './DisplayData.css';

/**
 * @typedef {object} DisplayDataRow
 * @property {string} title
 * @property {string | boolean | import('solid-js').JSXElement} [value]
 */

/**
 * @param {{ rows: DisplayDataRow[] }} props
 * @return {import('solid-js').JSXElement}
 */
export function DisplayData(props) {
  return (
    <div>
      <For each={props.rows}>
        {(row) => (
          <div class="display-data__line">
            <span class="display-data__line-title">{row.title}</span>
            <span class="display-data__line-value">
              <Switch fallback={row.value}>
                <Match
                  when={
                    typeof row.value === 'string' && row.value.match(/^#[a-f0-9]{3,6}$/i)
                      ? row.value
                      : false
                  }
                >
                  {(color) => <RGB color={color()}/>}
                </Match>
                <Match when={row.value === false}>❌</Match>
                <Match when={row.value === true}>✔️</Match>
                <Match when={row.value === undefined}><i>empty</i></Match>
              </Switch>
            </span>
          </div>
        )}
      </For>
    </div>
  );
}
