"use client";

import {
  ChakraProvider as Provider,
  type ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      body: {
        background: "",
      },
    }),
  },
});

// delete theme.styles.global;

export default function ChakraUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider theme={theme} resetCSS={false} disableGlobalStyle={true}>
        {children}
      </Provider>
    </>
  );
}
