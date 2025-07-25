import { render, screen } from "@testing-library/react-native";
import { Day } from "@components/Day";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should render day", () => {
    // dá erro por causa do svg: Element type is invalid
    // tem que mockar com npm i jest-transformer-svg
    // const { debug } = render(
    render(
      <Day
        data={{
          day: "18/07",
          min: "20°C",
          max: "30°C",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />
    );

    // debug();
    expect(screen.getByText("18/07")).toBeTruthy();
  });
});
