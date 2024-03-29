import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";

function App() {
  const [data, setData] = useState({
    homeValue:3000,
    downPayment:3000 * 0.2,
    loanAmount:3000 * 0.8,
    loanTerm:5,
    interestRate:5
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container maxWidth="lg" sx = {{marginTop:4}}>
        <Grid container spacing={5} alignItems = "center">
          <Grid item xs={12} md={6}>
            <SliderSelect data = {data} setData = {setData}></SliderSelect>
            <Tenure data = {data} setData = {setData}></Tenure>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data = {data}></Result>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
