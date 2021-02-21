import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#333748",
  orange: {
    50: "#ffdfcc",
    100: "#ffcfb3",
    200: "#ffb080",
    300: "#ff904d",
    400: "#ff701a",
    500: "#ff6000",
    600: "#e65600",
    700: "#b34300",
    800: "#803000",
    900: "#4c1d00",
  },
  purple: {
    50: "#dee4fe",
    100: "#ced6fd",
    200: "#aebbfc",
    300: "#8d9ffb",
    400: "#6c84fa",
    500: "#5c76f9",
    600: "#4a5ec7",
    700: "#374795",
    800: "#252f64",
    900: "#121832",
  },
  hepsiback: {
    brokeWhite: "#F4F3F4",
    grey: "#E1E1E1",
    darkGrey: "#D8D8D8",
  },
};

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  colors,
  components: {
    Button: {
      baseStyle: {
        _focus: {
          outline: 0,
          boxShadow: 0,
        },
      },
    },
  },
});

export default theme;
