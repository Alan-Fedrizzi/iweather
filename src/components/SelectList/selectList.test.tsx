import { render, screen } from "@testing-library/react-native";

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

    // const { debug } = render(
    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);
    // debug();

    const selectedCity = screen.getByText("Campinas");
    // const selectedCity = screen.getByText(data[0].name);
    console.log(selectedCity);
  });
});
