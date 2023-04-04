// styles
import { Button, CardEntry, CardEntryCheck, Span, Text, TotalContainer, TotalContainerContent, TotalInfo } from "./styles";
import { Divider, Radio } from "@mui/material";

// images
import Vector from "../../../public/assets/icons/vector.svg"

// interface types
export interface TotalProps{
  textButton: string;
  isIcon: boolean;
}

function Total({ textButton, isIcon }: TotalProps) {
  return (
    <TotalContainer>
      <TotalContainerContent>
        <Button>
          {textButton}
          {isIcon && <img src={Vector} alt="" />}
        </Button>

        <div style={{ textAlign: "center" }}>
          <Text>Prazo de pagamento:</Text>
          <Span>15/12/2021 - 08:17</Span>
        </div>

        <TotalInfo>
          <CardEntry>
            <CardEntryCheck>
              <input type="radio" />
              <p>1ª entrada no Pix</p>
            </CardEntryCheck>

            <Span>R$ 15.300,00</Span>
          </CardEntry>

          <CardEntry>
            <CardEntryCheck>
              <input type="radio" />
              <p>1ª entrada no Pix</p>
            </CardEntryCheck>

            <Span>R$ 15.300,00</Span>
          </CardEntry>

          <Divider />

          <CardEntry>
            <CardEntryCheck>
              <p>CET: 0,5%</p>
            </CardEntryCheck>

            <Span>Total: R$ 30.600,00</Span>
          </CardEntry>

          <Divider />

          <CardEntry>
            <CardEntryCheck>
              <p>Como funciona ?</p>
            </CardEntryCheck>

            <Span>⌃</Span>
          </CardEntry>

          <Divider />

          <div style={{ textAlign: "center" }}>
            <Text>Identificador: </Text>
            <Span>2c1b951f356c4680b13ba1c9fc889c47</Span>
          </div>
        </TotalInfo>
      </TotalContainerContent>
    </TotalContainer>
  );
}

export default Total;