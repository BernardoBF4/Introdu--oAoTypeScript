import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error('Não foi possível inicializar a aplicação. Verifique se o formulário existe.');
}

const botao_importa = document.querySelector('.form');
if (botao_importa) {
  botao_importa.addEventListener('click', () => controller.importaDados());
} else {
  throw new Error('Botão de importação não foi encontrado.');
}