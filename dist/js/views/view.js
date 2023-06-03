export class View {
    constructor(seletor, escapar) {
        this._escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique com o desenvolvedor.`);
        }
        this._escapar = escapar || this._escapar;
    }
    update(model) {
        let template = this._template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }
}
