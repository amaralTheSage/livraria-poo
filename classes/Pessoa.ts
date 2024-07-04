export abstract class Pessoa {
  private _nome = "";
  private _endereco = "";
  private _telefone = "";

  public abstract adicionar(): void;
  public abstract atualizar(): void;

  public abstract deletar(): void;

}
