// styles
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 15px 36px 15px;
  align-items: center;
  justify-content: center;
`;

export const PaymentContent = styled.main`
  width: 400px !important;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 28px;
`;

export const PaymentContentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;