import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'show-name'
})
export class ShowName {
  @Prop() name: string;

  render() {
    return (
      <p>Name is: {this.name}</p>
    )
  }
}