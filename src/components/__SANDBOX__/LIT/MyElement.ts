import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
class MyElement extends LitElement {
  @property()
  message = "Hello again.";

  override render() {
    return html` <p>Hello world! From my-element.</p> `;
  }
}
