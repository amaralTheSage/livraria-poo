import { Emprestimo } from "../classes/Emprestimo";
import { Membro } from "../classes/Membro";
import { Livro } from "../classes/Livro";
import fs from "fs";

jest.mock("fs");

// const mockInput = jest.fn();
// jest.mock("prompt-sync", () => () => mockInput)

describe("Emprestimo", () => {
    const membro = new Membro('João', 'Rua A', '123.456.789-00', '9999-9999');
    const livro = new Livro('Livro 1', 'Autor 1', '123', 2021);
    const dataEmprestimo = '2021-08-01';
    const dataDevolucao = '2021-08-15';
    let emprestimo: Emprestimo;

    
    beforeEach(() => {
        emprestimo = new Emprestimo(membro, livro, dataEmprestimo, dataDevolucao);
        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify([]));
        (fs.writeFileSync as jest.Mock).mockClear();
    });

    test("Deve adicionar um empréstimo", () => {
        (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify([{
            cpf: membro.cpf, ISBN: livro.ISBN, dataEmprestimo: "2021-08-01", dataDevolucao: '2021-08-15'
        }]));
        emprestimo.adicionar();
        expect(fs.writeFileSync).toHaveBeenCalledWith(
            './data/emprestimos.json',
            JSON.stringify([{cpf: membro.cpf, ISBN: livro.ISBN, dataEmprestimo, dataDevolucao}], null, 2)
        );
    });

    test("Deve listar empréstimos", () => {
        (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
            cpfMembro: membro.cpf, ISBN_livro: livro.ISBN, dataEmprestimo, dataDevolucao
        }]));

        const visualizarTabela = jest.spyOn(console, 'table').mockImplementation();
        emprestimo.listar();

        expect(visualizarTabela).toHaveBeenCalledWith([{
            cpfMembro: membro.cpf, ISBN_livro: livro.ISBN, dataEmprestimo, dataDevolucao
          }]);
        
    });

    // test("Deve realizar devolção e excluir empréstimo", () => {
    //     mockInput.mockImplementationOnce(() => membro.cpf);
    //     mockInput.mockImplementationOnce(() => livro.ISBN);
    //     (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
    //         cpfMembro: membro.cpf, ISBN_livro: livro.ISBN, dataEmprestimo, dataDevolucao
    //     }]));

    //     const emprestimos = [{cpfMembro: membro.cpf, ISBN_livro: livro.ISBN, dataEmprestimo, dataDevolucao}];
    //     emprestimo.devolver();

    //     expect(emprestimos).not.toContainEqual({
    //         cpfMembro: membro.cpf, ISBN_livro: livro.ISBN, dataEmprestimo, dataDevolucao
    //     });
    // });

});