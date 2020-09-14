import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'select-city',
  styleUrl: 'select-city.css',
  shadow: true,
})
export class SelectCity {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
