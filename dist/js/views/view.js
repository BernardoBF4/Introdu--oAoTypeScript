export class View {
    constructor(seletor, escapar) {
        this._escapar = false;
        this._elemento = document.querySelector(seletor);
        this._escapar = escapar && this._escapar;
    }
    update(model) {
        let template = this._template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }
}
