import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
