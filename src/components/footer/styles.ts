// styles
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 27px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const FooterText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  color: var(--gray);
`;