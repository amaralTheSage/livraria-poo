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

export class Pessoa {
  protected _nome = "";
  protected _matricula = "";
  protected _endereco = "";
  protected _telefone = "";
}

export class Membro extends Pessoa {
  protected _matricula = "";

  constructor(
    nome: string,
    matricula: string,
    endereco: string,
    telefone: string
  ) {
    super();
    this._nome = nome;
    this._matricula = matricula;
    this._endereco = endereco;
    this._telefone = telefone;
  }
}

export class Emprestimo {
  protected _dataEmprestimo = "";
  protected _dataDevolucao = "";

  constructor(dataEmprestimo: string, dataDevolucao: string) {
    this._dataEmprestimo = dataEmprestimo;
    this._dataDevolucao = dataDevolucao;
  }

  
}
