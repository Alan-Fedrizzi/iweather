import {
  getStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

describe("Storage: CityStorage", () => {
  it("should return null when there isn't a city in storage", async () => {
    const response = await getStorageCity();
    // console.log(response);
    // dá erro.. o teste não acessa o storage do dispositivo, até pq não estamos rodando a aplicação
    // configuramos para mockar o async storage, no async-storage.js e no jest.config
    expect(response).toBeNull();
  });

  it("should return storaged city", async () => {
    const newCity: CityProps = {
      id: "1",
      name: "São Paulo",
      longitude: 123,
      latitude: 456,
    };

    // primeiro salva e depois pega
    await saveStorageCity(newCity);
    const response = await getStorageCity();
    expect(response).toEqual(newCity);
  });
});
