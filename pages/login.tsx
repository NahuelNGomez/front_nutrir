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
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "@components/navigation/Header";
import { styles } from "@styles/pages/login";

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
        location.href = "/";
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
        sx={styles.container}
      >
        <Grid item xs={11} sm={8} lg={4} xl={3}>
          <Card>
            {loading && <LinearProgress color="primary" />}
            <form onSubmit={handleSubmit}>
              <CardContent
                sx={styles.content}
              >
                <Avatar
                  src="/logo-nutrir.png"
                  sx={styles.icon}
                />
                <Typography gutterBottom variant="h5" component="div">
                  Iniciar Session
                </Typography>
                <div style={styles.semiFullWidth}>
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
                    type={"password"}
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
                sx={styles.actions.container}
              >
                <Button disabled={loading}  type="submit" variant="contained" size="medium" color={loading ? "inherit" : "primary"}>
                  Entrar {loading && <CircularProgress size={20} sx={styles.circularProgress} color="inherit" />}
                </Button>
              </CardActions>
              <CardActions
                sx={styles.actions.second_container}
              >
                <Button size="small">Olvide mi contraseña</Button>
                <Button size="small">Registrarse</Button>
              </CardActions>
              {!validate && (
                <div style={styles.error_message}>
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
