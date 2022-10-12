import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
  Alert,
  AlertTitle,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../components/navigation/Header";

type formDataType = {
  email: string;
  password: string;
};

type formErrorsType = {
  email: boolean;
  password: boolean;
};

const Login: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<formErrorsType>({
    email: false,
    password: false,
  });
  const [validate, setValidate] = useState(true); 
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setFormErrors((data) => ({ ...data, email: !formData.email }));
    setFormErrors((data) => ({ ...data, password: !formData.password }));

    if (formData.email && formData.password) {
      setFormErrors({ email: false, password: false });
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (response.success) {
        router.push("/#logged");
      } else {
        setValidate(false);
      }
    }
    setLoading(false);
    return;
  };

  return (
    <>
      <Header />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"flex-start"}
        sx={{ height: "100%",paddingTop:"25px" }}
      >
        <Grid item xs={11} sm={8} lg={4} xl={3}>
          <Card>
            {loading && <LinearProgress color="primary" />}
            <form onSubmit={handleSubmit}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Avatar
                  src="/logo-nutrir.png"
                  sx={{ width: 155, height: 155 }}
                />
                <Typography gutterBottom variant="h5" component="div">
                  Iniciar Session
                </Typography>
                <div style={{ width: "90%" }}>
                  <TextField
                    error={formErrors.email}
                    fullWidth
                    id="input-with-sx"
                    label="Usuario"
                    variant="standard"
                    type="email"
                    margin="normal"
                    value={formData.email}
                    helperText={
                      formErrors.email ? "Debes ingresar tu usuario/correo" : ""
                    }
                    onChange={(e) =>
                      setFormData((data) => ({
                        ...data,
                        email: e.target.value,
                      }))
                    }
                  />

                  <TextField
                    error={formErrors.password}
                    fullWidth
                    id="input-with-sx"
                    label="Contraseña"
                    variant="standard"
                    margin="normal"
                    value={formData.password}
                    helperText={
                      formErrors.password ? "Debes ingresar tu contraseña" : ""
                    }
                    onChange={(e) =>
                      setFormData((data) => ({
                        ...data,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Button type="submit" variant="contained" size="medium">
                  Entrar {loading && <CircularProgress color="inherit" />}
                </Button>
              </CardActions>
              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button size="small">Olvide mi contraseña</Button>
                <Button size="small">Registrarse</Button>
              </CardActions>
              {!validate && (
                <div style={{padding:"15px"}}>
                  <Alert severity="error">
                    Usuario o Contraseña son incorrectas
                  </Alert>
                </div>
              )}
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
