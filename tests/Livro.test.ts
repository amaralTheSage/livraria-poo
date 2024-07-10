import { Livro } from "../classes/Livro";
import fs from "fs";

jest.mock("fs");

// const mockInput = jest.fn();
// jest.mock("prompt-sync", () => () => mockInput)

describe("Livro", () => {
    const titulo = 'Livro 1';
    const autor = 'Autor 1';
    const ISBN = '123';
    const ano = 2021;
    let livro: Livro;


    beforeEach(() => {
        livro = new Livro(titulo, autor, ISBN, ano);
        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify([]));
        (fs.writeFileSync as jest.Mock).mockClear();
    });


    test("Deve adicionar um livro", () => {
        livro.adicionar();
        expect(fs.writeFileSync).toHaveBeenCalledWith(
            './data/livros.json',
            JSON.stringify([{titulo, autor, ISBN, ano}], null, 2)
        );
    });

    test("Deve listar livros", () => {
        (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
            titulo, autor, ISBN, ano
        }]));

        const visualizarTabela = jest.spyOn(console, 'table').mockImplementation();
        livro.listar();

        expect(visualizarTabela).toHaveBeenCalledWith([{
            titulo, autor, ISBN, ano
          }]);
        
    });

    // test("Deve atualizar um livro", () => {
    //     mockInput.mockImplementationOnce(() => ISBN);
    //     (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
    //         titulo, autor, ISBN, ano
    //     }]));

    //     const novoTitulo = 'Livro 2';
    //     const novoAutor = 'Autor 2';
    //     const novoISBN = '456';
    //     const novoAno = 2022;

    //     mockInput.mockImplementationOnce(() => novoTitulo)
    //     mockInput.mockImplementationOnce(() => novoAutor)
    //     mockInput.mockImplementationOnce(() => novoISBN)
    //     mockInput.mockImplementationOnce(() => novoAno);

    //     livro.atualizar();

    //     expect(fs.writeFileSync).toHaveBeenCalledWith(
    //         './data/livros.json',
    //         JSON.stringify([{titulo: novoTitulo, autor: novoAutor, ISBN: novoISBN, ano: novoAno}], null, 2)
    //     );
    // });

    // test("Deve excluir um livro", () => {
    //     mockInput.mockImplementationOnce(() => ISBN);
    //     (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
    //         titulo, autor, ISBN, ano
    //     }]));

    //     livro.deletar();

    //     expect(fs.writeFileSync).toHaveBeenCalledWith(
    //         './data/livros.json',
    //         JSON.stringify([], null, 2)
    //     );
    // });

});
