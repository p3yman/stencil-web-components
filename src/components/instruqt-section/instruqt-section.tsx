import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'instruqt-section',
  styleUrl: 'instruqt-section.css',
  shadow: true,
})
export class InstruqtSection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
