import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import { Form } from "../form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <div className="contacts">
        <div>
        <a href="mailto:be41zehe@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:be41zehe@gmail.com">Email</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}