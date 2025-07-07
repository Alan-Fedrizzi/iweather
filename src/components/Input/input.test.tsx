import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input";

// é .tsx pois estamos testando um componente
// os testes aparecem em ordem alfabética, ou seja, todos os components vão aparecer juntos
describe("Component: Input", () => {
  it("should render without activity indicator if isLoading prop is undefined", () => {
    // const { debug } = render(<Input />);
    // debug(); // loga no console a View, TextInput, etc
    // se vê que não tem o <ActivityIndicator />
    // para ele, mostra o style tb..????
    // temos que verificar se o ActivityIndicator foi ou não renderizado. Vamos passar testID ActivityIndicator do componente
    render(<Input />);

    // const activityIndicator = screen.getByTestId("activity-indicator");
    // dá erro pois não encontra o componente
    // Unable to find an element with testID: activity-indicator
    // é melhor usar queryByTestId, para não dar erro
    const activityIndicator = screen.queryByTestId("activity-indicator");

    // esperamos que seja nulo
    expect(activityIndicator).toBeNull();
  });

  it("should render with activity indicator if isLoading prop is true", () => {
    // const { debug } = render(<Input isLoading />);
    // debug();
    // tem o <ActivityIndicator />
    render(<Input isLoading />);
    const activityIndicator = screen.getByTestId("activity-indicator");
    // esperamos que exista
    expect(activityIndicator).toBeTruthy();
  });
});
