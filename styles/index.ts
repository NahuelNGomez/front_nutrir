import layout from "./components/layout";
import navigation from "./components/navigation";
import dashboard from "./pages/dashboard";
import edit from "./pages/edit";
import login from "./pages/login";
import profile from "./pages/profile";
import recoveryAccount from "./pages/recoveryAccount";
import register from "./pages/register";

export const pagesStyles = (theme = "light") => ({
  loginStyles: login(theme),
  registerStyles: register(theme),
  recoveryAccountStyles: recoveryAccount(theme),
  dashboardStyles:dashboard(theme),
  editStyles:edit(theme),
  profileStyles:profile(theme)
});


export const componentsStyles = (theme = 'light') => ({
  navigationStyles: (open = false) => navigation(theme,open),
  layoutStyles: layout(theme),
});

