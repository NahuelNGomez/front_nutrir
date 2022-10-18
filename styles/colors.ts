const colors = (mode:string) => ({
    primary: "#003892",
    secondary:"rgba(61,136,236,255)",
    light_secondary:mode == "light" ? "rgba(232,240,253,255)" : "",
    text_input: mode == 'dark' ? "rgba(255, 255, 255, 0.9)" : 'rgba(0, 0, 0, 0.6)'
});

export default colors;