import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'instruqt-button',
  styleUrl: 'instruqt-button.css',
  shadow: true,
})
export class InstruqtButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
