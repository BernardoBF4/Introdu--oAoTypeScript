import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private _input_data: HTMLInputElement;
  private _input_quantidade: HTMLInputElement;
  private _input_valor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoes_view = new NegociacoesView('#negociacoesView');
  private _mensagem_view = new MensagemView('#mensagemView');

  constructor() {
    this._input_data = document.querySelector('#data') as HTMLInputElement;
    this._input_quantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this._input_valor = document.querySelector('#valor') as HTMLInputElement;

    this._atualizaView();
  }

  @logarTempoDeExecucao()
  public adiciona(): void {
    /*
      Cria negociação se for dia útil e atualiza as views
    */
    const negociacao = Negociacao.criaDe(this._input_data.value, this._input_quantidade.value, this._input_valor.value);

    if (negociacao.data.getDay() > DiasDaSemana.DOMINGO && negociacao.data.getDay() < DiasDaSemana.SABADO) {
      this._negociacoes.adiciona(negociacao);
      this._atualizaView();
      this._limparFormulario();
      this._input_data.focus(); // Coloca focus no input da data quano acaba de atualilizar a view
    } else {
      this._mensagem_view.update('Apenas negociações em dias úteis são aceitas.');
    }
  }

  private _limparFormulario(): void {
    this._input_data.value = '';
    this._input_quantidade.value = '';
    this._input_valor.value = '';
  }

  private _atualizaView(): void {
    this._negociacoes_view.update(this._negociacoes);
    this._mensagem_view.update('Negociação adicionada com sucesso!');
  }
}