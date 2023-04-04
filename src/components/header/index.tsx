// styles
import { ContainerHeader, Title } from "./styles";

// images
import Logo from "../../../public/assets/logo/logo.svg";

// interface type
interface HeaderProps {
  text: string;
}


function Header({ text }: HeaderProps){
  return (
    <ContainerHeader>
      <img src={Logo} alt="Logo" width={123.51} />
      <Title>{text}</Title>
    </ContainerHeader>
  );
}

export default Header;