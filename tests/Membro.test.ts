import { Membro } from "../classes/Membro";
import fs from "fs";;

jest.mock("fs");

// const mockInput = jest.fn();
// jest.mock("prompt-sync", () => () => mockInput)

describe("Membro", () => {
  const nome = 'João';
  const endereco = 'Rua A';
  const cpf = '123.456.789-00';
  const telefone = '9999-9999';
  let membro: Membro;

  beforeEach(() => {
    membro = new Membro(nome, endereco, cpf, telefone);
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify([]));
    (fs.writeFileSync as jest.Mock).mockClear();
  });

  test("Deve adicionar um membro", () => {
    membro.adicionar();
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      './data/membros.json',
      JSON.stringify([{ nome, endereco, cpf, telefone }], null, 2)
    );
  });

  test("Deve listar membros", () => {
    (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
      nome, endereco, cpf, telefone
    }]));

    const visualizarTabela = jest.spyOn(console, 'table').mockImplementation();
    membro.listar();

    expect(visualizarTabela).toHaveBeenCalledWith([{
      nome, endereco, cpf, telefone
    }]);

    visualizarTabela.mockRestore();
  });

  // test("Deve atualizar um membro", () => {
  //   mockInput.mockImplementationOnce(() => cpf);
  //   (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
  //     nome, endereco, cpf, telefone
  //   }]));

  //   const novoNome = 'Carlos';
  //   const novoEndereco = 'Rua B';
  //   const novoCpf = '987.654.321-00';
  //   const novoTelefone = '8888-8888';

  //   mockInput.mockImplementationOnce(() => novoNome)
  //   mockInput.mockImplementationOnce(() => novoEndereco)
  //   mockInput.mockImplementationOnce(() => novoCpf)
  //   mockInput.mockImplementationOnce(() => novoTelefone);

  //   membro.atualizar();

  //   expect(fs.writeFileSync).toHaveBeenCalledWith(
  //     './data/membros.json',
  //     JSON.stringify([{
  //       nome: novoNome,
  //       endereco: novoEndereco,
  //       cpf: novoCpf,
  //       telefone: novoTelefone
  //     }], null, 2)
  //   );
  // });

  // test("Deve remover um membro", () => {
  //   mockInput.mockImplementationOnce(() => cpf);
  //   (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
  //     nome, endereco, cpf, telefone
  //   }]));

  //   membro.deletar();

  //   expect(fs.writeFileSync).toHaveBeenCalledWith(
  //     './data/membros.json',
  //     JSON.stringify([], null, 2)
  //   );
  // });

});
