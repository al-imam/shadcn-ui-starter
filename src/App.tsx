import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@context/auth-context";
import { NotFound } from "@custom/not-found/not-found";
import { Private } from "@routes/private";
import { Public } from "@routes/public";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider defaultTheme="light">
          <Routes>
            <Route path="/agent" element={<Private page="agent" to="/auth/agent/login" />}>
              <Route index element={<h1>You're in agent index page</h1>} />
              <Route path="*" element={<Navigate to="/agent" />} />
            </Route>
            <Route path="/admin" element={<Private page="admin" to="/auth/admin/login" />}>
              <Route index element={<h1>You're in admin index page</h1>} />
              <Route path="*" element={<Navigate to="/admin" />} />
            </Route>
            <Route path="/auth">
              <Route path="agent" element={<Public page="agent" to="/auth/agent/login" />}>
                <Route path="login" element={<h1>You're in auth/agent/login index page</h1>} />
                <Route path="registration" element={<h1>You're in auth/agent/registration index page</h1>} />
                <Route index path="*" element={<Navigate to="/auth/agent/login" />} />
              </Route>
              <Route path="admin" element={<Public page="admin" to="/admin" />}>
                <Route path="login" element={<h1>You're in auth/agent/login index page</h1>} />
                <Route path="registration" element={<h1>You're in auth/agent/registration index page</h1>} />
                <Route index path="*" element={<Navigate to="/auth/admin/login" />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
