import { render } from "@testing-library/react";
import { Converter } from "./converter";
import useGetCoins from "../../core/hooks/useGetCoins";

jest.mock("../../core/hooks/useGetCoins");

describe("<Conveter />", () => {
  test("Render rows mocked", () => {
    useGetCoins.mockImplementation(() => ({
      data: [],
      modal: {
        isOpen: false,
        id: "",
      },
    }));
    const component = render(<Converter />);

    expect(
      component.getByText("Listado de Mercado Criptografico")
    ).toBeInTheDocument();
  });
});
