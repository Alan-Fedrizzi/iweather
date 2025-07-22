import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("Service: getCityByNameService", () => {
  it("should return city details", async () => {
    // spyOn fica observando as requisiçãoes feitas para a api, do tipo get no caso
    // e vamos mockar o retorno, deve ser igual ao da api
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityAPIResponse,
    });
    const response = await getCityByNameService("São Paulo");
    // o spyOn vai interceptar a requisição e retornar nosso mock]
    // na nossa function, formata dos dados que recebe da api.
    // console.log(response);
    expect(response.length).toBeGreaterThan(0);
  });
});
