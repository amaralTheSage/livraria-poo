export abstract class Pessoa {
  protected _nome = "";
  protected _endereco = "";
  protected _telefone = "";

  public abstract adicionar(): void;
  public abstract atualizar(): void;

  public abstract deletar(): void;

  // public abstract alugarLivro(
  //   ISBN: string,
  //   dataEmprestimo: string,
  //   titulo: string,
  //   dataDevolucao: string
  // ): void;
}
