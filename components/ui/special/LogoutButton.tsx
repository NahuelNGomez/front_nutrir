import { ExitToApp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { drawer } from "@styles/components/navigation";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAppCtx } from "../../../src/contexts/store";

const LogoutButton: FC<{}> = () => {
  const router = useRouter();
  const { menuOpen, modeTheme } = useAppCtx();
  const styles = drawer(menuOpen, modeTheme);
  return (
    <Button sx={styles.exitButton} onClick={() => router.push("/api/logout")}>
      {menuOpen ? (
        <>
          <ExitToApp sx={{ mr: 1 }} />
          Cerrar Sesión
        </>
      ) : (
        <ExitToApp />
      )}
    </Button>
  );
};

export default LogoutButton;
