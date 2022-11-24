import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

describe("Rendering", () => {
  it("Home", () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
