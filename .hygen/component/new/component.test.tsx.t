---
to: <%= abs_path %>/<%= name %>.test.tsx
---
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { <%= upper_name %> } from "<%= alias_path %>";

describe("<%= upper_name %> rendering test", () => {
  it("<%= upper_name %>", () => {
    const { asFragment } = render(<<%= upper_name %> <% if(have_props) { %>str="Hello, jest"<% } %> />);
    expect(asFragment()).toMatchSnapshot();
  });
});
