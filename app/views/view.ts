export abstract class View<T> {

  protected _elemento: HTMLElement;
  private _escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    this._elemento = document.querySelector(seletor);
    this._escapar = escapar && this._escapar;
  }

  protected abstract _template(model: T): string;

  public update(model: T): void {
    let template = this._template(model);

    if (this._escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this._elemento.innerHTML = template;

  }
}