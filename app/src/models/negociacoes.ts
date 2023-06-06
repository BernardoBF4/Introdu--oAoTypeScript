import { Modelo } from "../interfaces/objeto";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private _negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  public list(): readonly Negociacao[] {
    return this._negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this._negociacoes, null, 2);
  }

  public ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(negociacoes.list()) === JSON.stringify(this._negociacoes)
  }
}