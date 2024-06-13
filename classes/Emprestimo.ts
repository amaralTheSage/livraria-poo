export class Emprestimo {
  protected _dataEmprestimo = "";
  protected _dataDevolucao = "";

  constructor(dataEmprestimo: string, dataDevolucao: string) {
    this._dataEmprestimo = dataEmprestimo;
    this._dataDevolucao = dataDevolucao;
  }
}
