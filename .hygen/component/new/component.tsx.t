---
to: <%= abs_path %>/index.tsx
unless_exists: true
---
import "twin.macro";
<% if (have_props) { %>
interface <%= upper_name %>Props {
  str: string;
}
<%}%>
export const <%= upper_name %> = (<% if (have_props) { %> props: <%= upper_name %>Props <% } %>): JSX.Element => {
  return (
    <div><% if (have_props) { %> { props.str } <% } else { %>Hello, hygen!<% } %></div>
  );
};
