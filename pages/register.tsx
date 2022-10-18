import Header from "@components/navigation/Header";
import AuthCart from "@components/utils/authCart";
import { CardContent, Typography } from "@mui/material";
import { NextPage } from "next";
import { styles } from "@styles/pages/login";
import { useRouter } from "next/router";
import useForm from "../src/hooks/useForm";
import { registerFields } from "../src/types/forms";



const Register: NextPage = () => {
  const router = useRouter();
  
  const { fields, errors, process, updateField, submit } = useForm<registerFields>("register");

  return (
    <>
      <Header />
      <AuthCart>
        <CardContent>
          <Typography
            sx={styles.register.title}
            gutterBottom
            variant="h5"
            component="div"
          >
            Registrarse
          </Typography>
          <div style={styles.semiFullWidth}>
           
          </div>
        </CardContent>
      </AuthCart>
    </>
  );
};

export default Register;
