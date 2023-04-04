// styles
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";

export const CardContainer = styled.div`
  /* height: 95vh; */
  width: 429px;
  height: auto;
  padding: 21px 20px 21px 20px;
  border: 1px solid var(--gray-200);
  border-radius: 10px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 150px;
  height: 27px;
  border-radius: 100px;

  margin-top: -35px;

  justify-content: center;
  align-items: center;

  background: var(--gray-200);
`;

export const CardTitle = styled.h2`
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardCheck = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between
`;

export const CardValue = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 32.74px;

`;

export const CardPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  margin-top: 10px;
`;

export const CardPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const CardText = styled.p`
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  margin-top: 1px;
  color: var(--green);
`;

export const CardBackgroundPromotion = styled.div`
  width: 100%;
  background: var(--blue);
  padding: 7px;
  margin-top: 5px;
  border-radius: 5px;
`;

export const CardTextTotal = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 21.82px;

  color: var(--gray-100);
`;