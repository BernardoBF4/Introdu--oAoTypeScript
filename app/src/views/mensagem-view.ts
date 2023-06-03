import { View } from "./view.js";

export class MensagemView extends View<string> {

  protected _template(model: string): string {
    return `
      <p class="alert alert-inof">${model}</p>
    `;
  }
}