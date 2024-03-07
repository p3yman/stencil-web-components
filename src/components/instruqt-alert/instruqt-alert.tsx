import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'instruqt-alert',
  styleUrl: 'instruqt-alert.css',
  shadow: false,
})
export class InstruqtAlert {
  render() {
    return (
      <Host>
        <span class="alert">
          <slot></slot>
        </span>
      </Host>
    );
  }
}
