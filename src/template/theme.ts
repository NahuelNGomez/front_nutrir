import { createTheme } from '@mui/material/styles';

const themeComponents = (theme:any) => (
  {MuiDrawer:{
    styleOverrides:{
      paperAnchorLeft:{          
        width:"20%",
        [theme.breakpoints.between('xs','sm')]:{
          width:"50%",
        },
        [theme.breakpoints.between('md','lg')]:{
          width:"30%",
        }
      }
    }
  }}
);

let lightTheme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    warning: {
      main: '#FDECEA',
    }
  },
});

lightTheme = createTheme(lightTheme,{
  components: {
    ...themeComponents(lightTheme)
  }
})

let darkTheme = createTheme({
  palette: {
    mode:'dark'
  }
});

darkTheme = createTheme(darkTheme,{
  components: {
    ...themeComponents(darkTheme)
  }
})

console.log(darkTheme.components);


export {lightTheme,darkTheme};



