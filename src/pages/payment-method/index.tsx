// styles
import {
  CardsContainer,
  PaymentMethodContainer,
  PaymentMethodContent,
  Title,
} from "./styles";

// components
import Cards from "../../components/cards";

// images
import Logo from "../../../public/assets/logo/logo.svg";

function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <PaymentMethodContent>
        <img src={Logo} alt="Logo" width={123.51} />
        <Title>João, como você quer pagar?</Title>

        <CardsContainer>
          <Cards
            title="Pix"
            divide="1x"
            card_value="R$ 30.500,00"
            card_text="Ganhe 3% de Cashback"
            isText={true}
            isFees={true}
            isCashback={true}
          >
            🤑 R$ 300,00 de volta no seu Pix na hora
          </Cards>

          <div style={{ marginTop: "34px" }}>
            <Cards
              title="Pix Parcelado"
              divide="2x"
              card_value="R$ 30.500,00"
              card_text="Ganhe 3% de Cashback"
              isText={true}
              isFees={false}
              isCashback={false}
              total="Total: R$ 30.600,00"
            />
            <Cards
              divide="3x"
              card_value="R$ 30.500,00"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={true}
              isCashback={false}
              total="Total: R$ 30.600,00"
            >
              🤑 R$ 300,00 de volta no seu Pix na hora
            </Cards>
            <Cards
              divide="4x"
              card_value="R$ 30.500,00"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={false}
              isCashback={false}
              total="Total: R$ 30.600,00"
            />
            <Cards
              divide="5x"
              card_value="R$ 30.500,00"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={false}
              isCashback={false}
              total="Total: R$ 30.600,00"
            />
            <Cards
              divide="6x"
              card_value="R$ 30.500,00"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={false}
              isCashback={false}
              total="Total: R$ 30.600,00"
            />
            <Cards
              divide="7x"
              card_value="R$ 30.500,00"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={false}
              isCashback={false}
              total="Total: R$ 30.600,00"
            />
          </div>
        </CardsContainer>
      </PaymentMethodContent>
    </PaymentMethodContainer>
  );
}

export default PaymentMethod;
