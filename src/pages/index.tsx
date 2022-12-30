import "twin.macro";
import { FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <div tw={"text-center text-3xl"}>
      <h1>Hello, next.js!</h1>
      <FaReact tw={"m-auto"} />
    </div>
  );
}
