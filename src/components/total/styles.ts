// styles
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";

export const TotalContainer = styled.div`
  width: 424px;
  display: flex;
  padding: 36px 15px 36px 15px;
  margin-top: 21px;
`;

export const TotalContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

export const Button = styled.button`
  display: flex;
  width: 310px;
  height: 39px;
  gap: 10px;

  border-radius: 8px;
  background: var(--blue);
  color: var(--white);

  border: none;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 24.55px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 21.82px;
  color: var(--gray);
`;

export const Span = styled.span`
  font-size: 16px;
  line-height: 21.82px;

  font-weight: 800;
  color: var(--gray-500);

  white-space: nowrap;
`;

export const TotalInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardEntry = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CardEntryCheck = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24.55px;
  }
`;