import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "1",
  name: "São Paulo",
  longitude: 123,
  latitude: 456,
};

describe("Storage: CityStorage", () => {
  it("should return null when there isn't a city in storage", async () => {
    const response = await getStorageCity();
    // console.log(response);
    // dá erro.. o teste não acessa o storage do dispositivo, até pq não estamos rodando a aplicação
    // configuramos para mockar o async storage, no async-storage.js e no jest.config
    expect(response).toBeNull();
  });

  it("should return storaged city", async () => {
    // primeiro salva e depois pega
    await saveStorageCity(newCity);
    const response = await getStorageCity();
    expect(response).toEqual(newCity);
  });

  it("should remove storaged city", async () => {
    // primeiro salva e depois remove
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});
