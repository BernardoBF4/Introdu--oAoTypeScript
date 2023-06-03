export class Negociacao {

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    return new Date(this._data.getTime());
  }

  public static criaDe(dataInput: string, quantidadeInput: string, valorInput: string): Negociacao {
    const exp = /-/g,
      date = new Date(dataInput.replace(exp, ',')),
      quantidade = parseInt(quantidadeInput),
      valor = parseFloat(valorInput);

    return new Negociacao(date, quantidade, valor);
  }
}