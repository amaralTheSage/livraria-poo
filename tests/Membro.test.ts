import { Membro } from "../classes/Membro";

describe('Pessoa', () => {
    test('Instancia a classe pessoa', () => {
        expect(new Membro("cleber", "rua 7 de setembro", "12345678900", "51")).toBeInstanceOf(Membro);
    });
});