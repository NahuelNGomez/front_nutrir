import Header from "@components/navigation/Header";
import { Grid, Slide, Step, StepLabel, Stepper } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import EmailCart from "../components/recovery/emailCart";
import { styles } from "@styles/pages/recoveryAccount";

const ResetPassword: NextPage = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [stepOne, setStepOne] = useState({
    label: "Correo Electronico",
    completed: false,
  });
  const [stepTwo, setStepTwo] = useState({
    label: "Codigo de Seguridad",
    completed: false,
  });
  const [stepThree, setStepThree] = useState({
    label: "Cambia tu contraseña",
    completed: false,
  });

  return (
    <>
      <Header />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        sx={styles.container}
      >
        <Grid item xs={12} sm={12} lg={8} xl={5}>
          <Stepper activeStep={step} alternativeLabel>
            <Step key={1} completed={stepOne.completed}>
              <StepLabel>{stepOne.label}</StepLabel>
            </Step>
            <Step key={2} completed={stepTwo.completed}>
              <StepLabel>{stepTwo.label}</StepLabel>
            </Step>
            <Step key={3} completed={stepThree.completed}>
              <StepLabel>{stepThree.label}</StepLabel>
            </Step>
          </Stepper>
        </Grid>
      </Grid>

      {step === 0 && (
        <Slide direction="left" in={step == 0} mountOnEnter unmountOnExit>
          <div>
            <EmailCart
              changeEmail={(email) => setEmail(email)}
              changeSteper={(step) => setStep(step)}
            />
          </div>
        </Slide>
      )}

      {step === 1 && (
        <Slide direction="left" in={step == 1} mountOnEnter unmountOnExit>
          <div>
           <h1>Paso codigo</h1>
          </div>
        </Slide>
      )}
    </>
  );
};

export default ResetPassword;
