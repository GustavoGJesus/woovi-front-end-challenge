// react or any library related
import { ReactNode } from "react";

// styles
import { Radio } from "@mui/material";
import {
  CardBackgroundPromotion,
  CardCheck,
  CardContainer,
  CardContent,
  CardPrice,
  CardPriceContainer,
  CardText,
  CardTextTotal,
  CardTitle,
  CardValue,
  ContainerTitle,
} from "./styles";

// interface types
export interface Cardsprops {
  title?: string;
  divide: string;
  card_value: string;
  card_text: string;
  children?: ReactNode;
  isText: boolean;
  isFees: boolean;
  isCashback: boolean;
  total?: string;
}

function Cards({
  title,
  divide,
  card_value,
  card_text,
  children,
  isText,
  isFees,
  isCashback,
  total,
}: Cardsprops) {
  return (
    <CardContainer>
      {isText && (
        <ContainerTitle>
          <CardTitle>{title}</CardTitle>
        </ContainerTitle>
      )}
      <CardContent>
        <CardCheck>
          <CardPriceContainer>
            <CardPrice>{divide}</CardPrice>
            <CardValue>{card_value}</CardValue>
          </CardPriceContainer>
          <Radio value="a" color="primary" />
        </CardCheck>
        {isCashback && <CardText>{card_text}</CardText>}
        {!isCashback && <CardTextTotal>{total}</CardTextTotal>}

        {isFees && (
          <CardBackgroundPromotion>
            <CardText style={{ color: "var(--white)" }}>{children}</CardText>
          </CardBackgroundPromotion>
        )}
      </CardContent>
    </CardContainer>
  );
}

export default Cards;
