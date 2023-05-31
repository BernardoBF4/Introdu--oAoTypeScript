export abstract class View<T> {

  protected _elemento: HTMLElement;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  protected abstract _template(model: T): string;

  public update(model: T): void {
    this._elemento.innerHTML = this._template(model);
  }
}