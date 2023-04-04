// react or any library related content
import { Navigate, Route, Routes } from "react-router-dom";

// components
import PaymentMethod from "../src/pages/payment-method";
import Footer from "./components/footer";
import PixCredtirCard from "./pages/pix-credit-card";
import Payment from "./pages/payment";

// styles
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<PaymentMethod />}/>
        <Route path="/pix-credit-card" element={<PixCredtirCard />}/>
        <Route path="/payment" element={<Payment />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
