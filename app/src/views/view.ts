export abstract class View<T> {

  protected _elemento: HTMLElement;
  private _escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this._elemento = elemento as HTMLElement;
    } else {
      throw new Error(`Seletor ${seletor} não existe no DOM. Verifique com o desenvolvedor.`);
    }

    this._escapar = escapar || this._escapar;
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