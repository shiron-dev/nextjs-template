import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "@/pages";

describe("Rendering", () => {
  it("Home", () => {
    render(<Home />);
    expect(screen).toMatchSnapshot();
  });
});
