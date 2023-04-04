// styles
import { PixCreditCardContainer, PixCreditCardContent } from "./styles";

// components
import Header from "../../components/header";
import Total from "../../components/total";

// images
import QrCode from "../../../public/assets/icons/qr-code.svg";

function PixCredtirCard() {
  return (
    <PixCreditCardContainer>
      <Header text="João, pague a entrada de R$ 15.300,00 pelo Pix" />

      <PixCreditCardContent>
        <img src={QrCode} alt="qr-code" width={332} />

        <Total textButton="Clique para copiar QR CODE" isIcon={true}/>
      </PixCreditCardContent>
    </PixCreditCardContainer>
  );
}

export default PixCredtirCard;
