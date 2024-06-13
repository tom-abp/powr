import { useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Routes,
  Navigate,
} from "react-router-dom";
import { format } from "date-fns";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

function App() {
  const defaultPair = "ETH-USDC";
  const today = useMemo(() => {
    return format(new Date(), "yyyy-MM-dd");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/:pair/:strike" element={<Content />} />
          <Route index element={<Navigate to={`/${defaultPair}/${today}`} />} />
        </Route>
      </Routes>
    </Router>
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
