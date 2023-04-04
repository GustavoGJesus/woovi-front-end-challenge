// react or any library related content
import { Navigate, Route, Routes } from "react-router-dom";

// components
import PaymentMethod from "../src/pages/payment-method";
import Footer from "./components/footer";
import PixCredtirCard from "./pages/pix-credit-card";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
