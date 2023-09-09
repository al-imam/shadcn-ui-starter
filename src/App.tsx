import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@context/auth-context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider defaultTheme="light">Hello</ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
