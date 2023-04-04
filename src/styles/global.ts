import { css } from "@emotion/react";

export const MediaQuerys = {
  sm: "@media (max-width: 768px)",
  md: "@media (max-width: 1024px)",
};

export const GlobalStyles = css`
  :root {
    --white: #ffffff;
    --gray-200: #e5e5e5;
    --gray-500: #4d4d4d;

    --green: #03d69d;
    --blue: #133a6f;
  }
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-family: "Nunito", sans-serif;
    background: var(--white);
    color: var(--gray-500);
  }
`;