import { render, screen, fireEvent } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";
import { CityProps } from "@services/getCityByNameService";

describe("Component: SelectList", () => {
  it("should return city details selected", () => {
    const data: CityProps[] = [
      {
        id: "1",
        name: "Campinas",
        latitude: 123,
        longitude: 456,
      },
      {
        id: "2",
        name: "Campo Grande",
        latitude: 789,
        longitude: 987,
      },
    ];

    // mock do onPress, uamos jedt.fn()
    const onPress = jest.fn();

    // const { debug } = render(
    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);
    // debug();

    // const selectedCity = screen.getByText("Campinas");
    // const selectedCity = screen.getByText(data[0].name);
    // podemos usar regex
    // "Campo" em qualquer lugar, é case sensitive
    // const selectedCity = screen.getByText(/Campo/);
    // com o i, fica sem case sensitive
    const selectedCity = screen.getByText(/campo/i);
    // const selectedCity = screen.getByText("Campo", {
    //   exact: false,
    // });
    // console.log(selectedCity);

    // vamos clicar no botão da cidade
    // vamos verificar se o item que passa para o onPress é a cidade que selecionamos acima, temos que criar um mock
    fireEvent.press(selectedCity);

    // selecionamos campo grande, o index 1 do data
    expect(onPress).toHaveBeenCalledWith(data[1]);

    // verificar qts vezes foi chamada
    // expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("should not show options when data props is empty", () => {
    // const { debug } = render(
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    // debug();

    const options = screen.getByTestId("options");
    // console.log(options.children); // loga [] (array vazio)
    // length 0, vazio
    expect(options.children).toHaveLength(0);
  });
});
