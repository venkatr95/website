import { Container } from "./styles";
import { Personal } from "../personal/Personal";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";
import { Project } from "../project/Project";

export function Main() {
  return (
    <Container>
      <Personal></Personal>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}