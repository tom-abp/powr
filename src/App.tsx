import { useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { format } from "date-fns";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { GlobalStyle } from "./components/GlobalStyle";
import { getTheme } from "./theme";

const client = new QueryClient();

function App() {
  const defaultPair = "ETH-USDC";
  const today = useMemo(() => {
    return format(new Date(), "yyyy-MM-dd");
  }, []);

  const theme = useMemo(() => {
    return getTheme("light", false);
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Template />}>
              <Route path="/:pair/:strike" element={<Content />} />
              <Route
                index
                element={<Navigate to={`/${defaultPair}/${today}`} />}
              />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function Template() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default App;
