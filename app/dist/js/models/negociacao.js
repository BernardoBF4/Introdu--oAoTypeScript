export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    static criaDe(dataInput, quantidadeInput, valorInput) {
        const exp = /-/g, date = new Date(dataInput.replace(exp, ',')), quantidade = parseInt(quantidadeInput), valor = parseFloat(valorInput);
        return new Negociacao(date, quantidade, valor);
    }
}
