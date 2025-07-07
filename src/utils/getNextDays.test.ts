import { getNextDays } from "./getNextDays";

// o nome do arquivo pode ser .test ou .spec

/*
// primeiro é o nome do teste
// segundo é a function do teste
// pode usar "it" ao invés de "test"
// it é um alias, é a mesma coisa..
it("should return the next five days", () => {
  // test("should return the next five days", () => {
  const days = getNextDays();
  // console.log(days);
  expect(days.length).toBe(5);
});
*/

// cada teste testa só uma coisa..
// se tem um if na function testada, tem que ter mais de um teste
// podemos agrupar os testes.. com describe
describe("getNextDays", () => {
  it("should return the next five days", () => {
    const days = getNextDays();
    expect(days.length).toBe(5);
  });
  // podemos executar esse teste separados, com extensão Jest Runner
  // aparece um botão em cima do teste, que dá para rodar individualmente
});
