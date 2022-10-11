import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useAppCtx } from "../../../src/contexts/store";
import { styles } from "../../../styles/components/ui";

const MaterialUISwitch = styled(Switch)(({ theme }) => ( styles(theme).switchMode));

export default function SwitchMode() {
  const { modeTheme, updateTheme } = useAppCtx();

  const handleChange = () => {
    updateTheme(modeTheme == "dark" ? "light" : "dark");
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={modeTheme === "dark"}
            onChange={handleChange}
          />
        }
        label={""}
      />
    </FormGroup>
  );
}
