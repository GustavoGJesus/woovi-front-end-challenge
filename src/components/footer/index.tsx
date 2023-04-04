// styles
import { FooterContainer, FooterContent, FooterText } from "./styles";

// images
import  Vector from ".././../../public/assets/icons/payment.svg"
import Logo from ".././../../public/assets/logo/logo-footer.svg";

function Footer(){
  return (
    <FooterContainer>
      <FooterContent>
        <img src={Vector} alt="security icon" />
        <FooterText>Pagamento 100% seguro via:</FooterText>
        <img src={Logo} alt="logo" />
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;