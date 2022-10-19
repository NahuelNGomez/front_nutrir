import Header from "@components/navigation/Header";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { styles } from "@styles/pages/login";
import { useRouter } from "next/router";
import useForm from "../src/hooks/useForm";
import { registerFields } from "../src/types/forms";
import { statesForms } from "../src/constants/states";

const Register: NextPage = () => {
  const router = useRouter();

  const { fields, errors, process, updateField, updateFieldProps, submit } =
    useForm<registerFields>(statesForms.register);

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
        <Grid item xs={12} sm={8} lg={7} xl={7}>
          <Card>
            {process.loading && <LinearProgress color="primary" />}
            <form
              onSubmit={(e) =>
                submit(e, "/api/register").then(() => router.push("/"))
              }
            >
              <CardContent>
                <Typography
                  sx={styles.register.title}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Registrarse
                </Typography>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={styles.register.fields}
                  >
                    <TextField
                      error={errors.user}
                      fullWidth
                      id="input-with-sx"
                      label="Usuario"
                      variant="filled"
                      type="text"
                      name="user"
                      margin="normal"
                      value={fields.user}
                      sx={styles.input_text}
                      helperText={
                        errors.user ? "Debes ingresar tu usuario" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={styles.register.fields}
                  >
                    <TextField
                      error={errors.name}
                      fullWidth
                      id="input-with-sx"
                      label="Nombre y Apellido"
                      variant="filled"
                      type="text"
                      name="name"
                      margin="normal"
                      value={fields.name}
                      sx={styles.input_text}
                      helperText={
                        errors.name
                          ? "Debes ingresar tu nombre y appellido"
                          : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={styles.register.fields}
                  >
                    <TextField
                      error={errors.phone}
                      fullWidth
                      id="input-with-sx"
                      label="Telefono"
                      variant="filled"
                      type="text"
                      name="phone"
                      margin="normal"
                      value={fields.phone}
                      sx={styles.input_text}
                      helperText={
                        errors.phone ? "Debes ingresar tu telefono" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={styles.register.fields}
                  >
                    <TextField
                      error={errors.email}
                      fullWidth
                      id="input-with-sx"
                      label="Correo Electronico"
                      variant="filled"
                      type="email"
                      name="email"
                      margin="normal"
                      value={fields.email}
                      sx={styles.input_text}
                      helperText={
                        errors.email ? "Debes ingresar tu correo" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={styles.register.fields}
                  >
                    <TextField
                      error={errors.password}
                      fullWidth
                      id="input-with-sx"
                      label="Elegi una contraseña"
                      variant="filled"
                      type="password"
                      name="password"
                      margin="normal"
                      value={fields.password}
                      sx={styles.input_text}
                      helperText={
                        errors.password ? "Debes ingresar tu telefono" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={styles.register.fields}
                  >
                    <FormControl
                      variant="filled"
                      sx={{ width: "100%", marginTop: "15px" }}
                      error={errors.exists_dinning_room}
                    >
                      <InputLabel id="exists_dinning_room-label">
                        Ya esta registrado su comedor?
                      </InputLabel>
                      <Select
                        labelId="exists_dinning_room-label"
                        id="exists_dinning_room-filled"
                        name="exists_dinning_room"
                        value={fields.exists_dinning_room}
                        onChange={(e: SelectChangeEvent) =>
                          updateFieldProps(
                            "exists_dinning_room",
                            e.target.value
                          )
                        }
                      >
                        <MenuItem value={"yes"}>Ya está registrado.</MenuItem>
                        <MenuItem value={"no"}>
                          Aún no está registrado.
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container direction={"row"} justifyContent={"flex-end"}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={styles.register.fields}
                  >
                    <FormControl
                      variant="filled"
                      sx={{ width: "100%", marginTop: "15px" }}
                      error={errors.dinning_room}
                    >
                      <InputLabel id="dinning_room-label">
                        Comedor al que perteneces.
                      </InputLabel>
                      <Select
                        labelId="dinning_room-label"
                        id="dinning_room-filled"
                        name="dinning_room"
                        value={fields.dinning_room}
                        onChange={(e: SelectChangeEvent) =>
                          updateFieldProps("dinning_room", e.target.value)
                        }
                      >
                        <MenuItem value={"1"}>
                          Por los Chicos del barrio
                        </MenuItem>
                        <MenuItem value={"2"}>Por una sonrisa</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={styles.actions.container}>
                <div style={styles.semiFullWidth}>
                  <Button
                    disabled={process.loading}
                    type="submit"
                    variant="contained"
                    sx={styles.submit_button}
                    color={process.loading ? "inherit" : "primary"}
                  >
                    Registrarse{" "}
                    {process.loading && (
                      <CircularProgress
                        size={20}
                        sx={styles.circularProgress}
                        color="inherit"
                      />
                    )}
                  </Button>
                </div>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
