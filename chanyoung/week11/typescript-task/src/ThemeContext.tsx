import { ReactNode, createContext, useContext, useState } from "react";

type Theme = "purple" | "green";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "purple",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("purple");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme } = useContext(ThemeContext);
  return theme;
}

export function useSetTheme() {
  const { setTheme } = useContext(ThemeContext);
  return setTheme;
}
