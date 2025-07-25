import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should render NextDays", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "20°C",
            max: "30°C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "23°C",
            max: "34°C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "20/07",
            min: "22°C",
            max: "32°C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "21/07",
            min: "25°C",
            max: "28°C",
            icon: clearDay,
            weather: "NUblado",
          },
          {
            day: "22/07",
            min: "12°C",
            max: "45°C",
            icon: clearDay,
            weather: "Chuva",
          },
        ]}
      />
    );

    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
