export class Livro {
  protected _titulo: string = "";
  protected _autor: string = "";
  protected _ISBN: string = "0000000000000"; //'000-0-00-000000-0'
  protected _ano: number = 0;

  constructor(titulo: string, autor: string, ISBN: string, ano: number) {
    this._titulo = titulo;
    this._autor = autor;
    this._ISBN = ISBN;
    this._ano = ano;
  }
}
