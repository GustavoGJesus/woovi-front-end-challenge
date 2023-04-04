// react or any library related content
import { Navigate, Route, Routes } from "react-router-dom";

// components
import PaymentMethod from "../src/pages/payment-method";

// styles
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<PaymentMethod />}/>
      </Routes>
    </>
  );
}

export default App;
