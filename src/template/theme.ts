import { createTheme } from '@mui/material/styles';

const components = {
  MuiMenu:{
    styleOverrides:{
      list: {
        paddingTop:"0px",
        paddingBottom:"0px"
      }
    }
  }
}

let lightTheme = createTheme({
  palette: {
    primary: {
      main: '#003892',
    },
    warning: {
      main: '#FDECEA',
    }
  },
  components : {...components}
});

let darkTheme = createTheme({
  palette: {
    mode:'dark'
  },
  components:{
    MuiAppBar:{
      styleOverrides:{
        root:{
          backgroundColor:lightTheme.palette.primary.main
        }
      }
    },
   ...components
  }
});


export {lightTheme,darkTheme};



