export abstract class View<T> {

  protected _elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this._elemento = elemento as HTMLElement;
    } else {
      throw new Error(`Seletor ${seletor} não existe no DOM. Verifique com o desenvolvedor.`);
    }
  }

  protected abstract _template(model: T): string;

  public update(model: T): void {
    this._elemento.innerHTML = this._template(model);
  }
}