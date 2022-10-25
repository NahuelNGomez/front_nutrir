import { Card, Grid, Slide } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import EmailCart from "../components/recovery/EmailCart";
import { styles as stylesAuth } from "@styles/pages/auth";
import CodeCart from "../components/recovery/CodeCart";
import PasswordCart from "../components/recovery/PasswordCart";
import { useAppCtx } from "../src/contexts/store";
import UnloggedLayout from "@components/layouts/UnloggedLayout";

const ResetPassword: NextPage = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const { modeTheme } = useAppCtx();

  const style = stylesAuth(modeTheme);

  return (
    <UnloggedLayout>
      <Grid
        flexDirection={"column"}
        xs={12}
        sm={12}
        lg={5}
        xl={5}
        sx={{ padding: "10px" }}
      >
        {step === 0 && (
          <Slide direction="left" in={step == 0} mountOnEnter unmountOnExit>
            <Card>
              <EmailCart
                changeEmail={(email) => setEmail(email)}
                changeSteper={(step) => setStep(step)}
              />
            </Card>
          </Slide>
        )}
        {step === 1 && (
          <Slide direction="left" in={step == 1} mountOnEnter unmountOnExit>
            <Card>
              <CodeCart
                email={email}
                changeToken={(token) => setToken(token)}
                changeSteper={(step) => setStep(step)}
              />
            </Card>
          </Slide>
        )}
        {step === 2 && (
          <Slide direction="left" in={step == 2} mountOnEnter unmountOnExit>
            <Card>
              <PasswordCart
                token={token}
                changeSteper={(step) => setStep(step)}
              />
            </Card>
          </Slide>
        )}
      </Grid>
    </UnloggedLayout>
  );
};

export default ResetPassword;
