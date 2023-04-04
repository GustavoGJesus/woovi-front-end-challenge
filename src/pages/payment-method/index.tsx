// styles
import {
  CardsContainer,
  PaymentMethodContainer,
  PaymentMethodContent,
} from "./styles";

// components
import Cards from "../../components/cards";
import Header from "../../components/header";

function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <PaymentMethodContent>
        <Header text="João, como você quer pagar?" />

        <CardsContainer>
          <Cards
            title="Pix"
            divide="1x"
            card_value="R$ 30.500,00"
            card_text="Ganhe 3% de Cashback"
            isText={true}
            isFees={true}
            isCashback={true}
            style={{ borderRadius: "10px" }}
          >
            🤑 R$ 300,00 de volta no seu Pix na hora
          </Cards>

          <div style={{ marginTop: "34px" }}>
            <Cards
              title="Pix Parcelado"
              divide="2x"
              card_value="R$ 15.300,00"
              card_text="Ganhe 3% de Cashback"
              isText={true}
              isFees={false}
              isCashback={false}
              total="Total: R$ 30.600,00"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Cards
              divide="3x"
              card_value="R$ 10.196,66"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={false}
              isCashback={false}
              total="Total: R$ 30.620,00"
            />
            <Cards
              divide="4x"
              card_value="R$ 7.725,00"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={true}
              isCashback={false}
              total="Total: R$ 30.600,00"
            >
              🤑 R$ 300,00 de volta no seu Pix na hora
            </Cards>
            <Cards
              divide="5x"
              card_value="R$ 6.300,00"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={false}
              isCashback={false}
              total="Total: R$ 31.500,00"
            />
            <Cards
              divide="6x"
              card_value="R$ 5.283,33"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={false}
              isCashback={false}
              total="Total: R$ 31.699,98"
            />
            <Cards
              divide="7x"
              card_value="R$ 4.542,85"
              card_text="Ganhe 3% de Cashback"
              isText={false}
              isFees={false}
              isCashback={false}
              total="Total: R$ 31.800,00"
              style={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            />
          </div>
        </CardsContainer>
      </PaymentMethodContent>
    </PaymentMethodContainer>
  );
}

export default PaymentMethod;
