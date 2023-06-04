var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoes_view = new NegociacoesView('#negociacoesView');
        this._mensagem_view = new MensagemView('#mensagemView');
        this._input_data = document.querySelector('#data');
        this._input_quantidade = document.querySelector('#quantidade');
        this._input_valor = document.querySelector('#valor');
        this._atualizaView();
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this._input_data.value, this._input_quantidade.value, this._input_valor.value);
        if (negociacao.data.getDay() > DiasDaSemana.DOMINGO && negociacao.data.getDay() < DiasDaSemana.SABADO) {
            this._negociacoes.adiciona(negociacao);
            this._atualizaView();
            this._limparFormulario();
            this._input_data.focus();
        }
        else {
            this._mensagem_view.update('Apenas negociações em dias úteis são aceitas.');
        }
    }
    _limparFormulario() {
        this._input_data.value = '';
        this._input_quantidade.value = '';
        this._input_valor.value = '';
    }
    _atualizaView() {
        this._negociacoes_view.update(this._negociacoes);
        this._mensagem_view.update('Negociação adicionada com sucesso!');
    }
}
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
