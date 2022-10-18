import Header from "@components/navigation/Header";
import { Grid, Slide, Step, StepLabel, Stepper } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import EmailCart from "../components/recovery/emailCart";
import { styles } from "@styles/pages/recoveryAccount";
import CodeCart from "../components/recovery/codeCart";
import { stepesList } from "../src/contents/steperList";
import PasswordCart from "../components/recovery/passwordCart";

const ResetPassword: NextPage = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [token,setToken]  = useState("");

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
            {stepesList.map((curStep) => (
              <Step key={curStep.number} completed={step >curStep.number}>
                <StepLabel>{curStep.label}</StepLabel>
              </Step>
            ))}
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
            <CodeCart email={email} changeToken={(token) => setToken(token)} changeSteper={(step) => setStep(step)} />
          </div>
        </Slide>
      )}
        {step === 2 && (
        <Slide direction="left" in={step == 2} mountOnEnter unmountOnExit>
          <div>
            <PasswordCart token={token} changeSteper={(step) => setStep(step)} />
          </div>
        </Slide>
      )}
    </>
  );
};

export default ResetPassword;
