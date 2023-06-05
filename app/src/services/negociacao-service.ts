import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

  public async obterNegociacoes(): Promise<Array<Negociacao>> {
    return await fetch('http://localhost:8080/dados')
      .then(response => response.json())
      .then((dados: Array<NegociacoesDoDia>) => {
        return dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
      });
  }
}