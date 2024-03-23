const commonTheme = {
  white: "#fff",
  grey: "#F2F4F7",
  red: "#E44848",
  redHover: "#D84343",
  orange: "#FFC531",
  inputBackground: "#F7F7F7",
  backdrop: "rgba(17, 18, 19, 0.40)",
  borderColor: "rgba(16, 24, 40, 0.2)",
  placeholderColor: "rgba(16, 24, 40, 0.6)",
  heroGradiend: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
};

export const lightTheme = Object.freeze({
  background: "#F2F4F7",
  text: "#101828",
  lightText: "#475467",
  cardBoxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  ...commonTheme,
});

export const darkTheme = Object.freeze({
  background: "#101828",
  text: "#F2F4F7",
  lightText: "#F7F7F7",
  cardBoxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  ...commonTheme,
});
