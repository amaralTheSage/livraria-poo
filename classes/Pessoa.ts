export abstract class Pessoa {
  protected _nome = "";
  protected _endereco = "";
  protected _telefone = "";

  public abstract alugarLivro(
    ISBN: string,
    dataEmprestimo: string,
    titulo: string,
    dataDevolucao: string
  ): void;
}
