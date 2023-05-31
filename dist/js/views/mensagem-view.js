import { View } from "./view.js";
export class MensagemView extends View {
    _template(model) {
        return `
      <p class="alert alert-inof">${model}</p>
    `;
    }
}
