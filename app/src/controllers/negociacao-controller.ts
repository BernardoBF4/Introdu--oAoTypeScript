import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacao-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector('#data')
  private _input_data: HTMLInputElement;
  @domInjector('#quantidade')
  private _input_quantidade: HTMLInputElement;
  @domInjector('#valor')
  private _input_valor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoes_view = new NegociacoesView('#negociacoesView');
  private _mensagem_view = new MensagemView('#mensagemView');
  private _negociacoes_servico = new NegociacoesService;

  constructor() {
    this._atualizaView();
  }

  @inspect()
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

  public importaDados(): void {
    this._negociacoes_servico.obterNegociacoes()
      .then((negociacoes: Array<Negociacao>) => {
        for (const negociacao of negociacoes) {
          this._negociacoes.adiciona(negociacao);
        }
        this._negociacoes_view.update(this._negociacoes);
      });
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