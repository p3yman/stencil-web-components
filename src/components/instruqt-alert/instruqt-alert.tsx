import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'instruqt-alert',
  styleUrl: 'instruqt-alert.css',
  shadow: true,
})
export class InstruqtAlert {
  render() {
    return (
      <Host>
        <span class="alert error">
          <slot></slot>
        </span>
      </Host>
    );
  }
}
