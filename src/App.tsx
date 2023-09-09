import { Button } from "@/components/ui/button";
import { ThemeProvider, useTheme } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div>
        <MyButton />
      </div>
    </ThemeProvider>
  );
}

function MyButton() {
  const { setTheme, theme } = useTheme();
  return <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme}</Button>;
}

export default App;
