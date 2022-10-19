const colors = (mode:string) => ({
    primary:  mode == "dark" ? "#6dc1c0" : "#6bc3c3",
    secondary:"#7af7a3",
    light_secondary:mode == "light" ? "rgba(232,240,253,255)" : "",
    text_input: mode == 'dark' ? "rgba(255, 255, 255, 0.9)" : 'rgba(0, 0, 0, 0.6)'
});

export default colors;