import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CompanyProfile from "./components/company/CompanyProfile";
import ContentDetail from "./components/content/ContentDetail";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AdminDashboard from "./components/admin/AdminDashboard";
import CompanyList from "./components/company/CompanyList";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/company/:companyId" element={<CompanyProfile />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/content/:contentId" element={<ContentDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
