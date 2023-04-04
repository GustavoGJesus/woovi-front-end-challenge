// styles
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Header from "../../components/header";
import Total from "../../components/total";
import { PaymentContainer, PaymentContent, PaymentContentCard } from "./styles";

function Payment() {
  return (
    <PaymentContainer>
      <Header text="João, pague o restante em 1x no cartão" />

      <PaymentContent>
        <TextField
          id="outlined-basic"
          label="Nome completo"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="CPF" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Número do cartão"
          variant="outlined"
        />

        <PaymentContentCard>
          <TextField
            id="outlined-basic"
            label="Vencimento"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="CVV" variant="outlined" />
        </PaymentContentCard>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>1x de R$ 15.300,00</MenuItem>
            <MenuItem value={20}>2x de R$ 15.300,00</MenuItem>
            <MenuItem value={30}>3x de R$ 15.300,00</MenuItem>
          </Select>
        </FormControl>
      </PaymentContent>
      <Total textButton="Pagar" isIcon={false} />
    </PaymentContainer>
  );
}

export default Payment;
