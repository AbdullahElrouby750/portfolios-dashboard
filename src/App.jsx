import { Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import PrivateRoutes from "./shared/components/private-routes/PrivateRoutes";
import Login from "./features/auth/pages/Login";

function App() {

  return (
    <AppProvider>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<h1>test</h1>}/>
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
