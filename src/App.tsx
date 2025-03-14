import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CompanyProfile from "./components/company/CompanyProfile";
import ContentDetail from "./components/content/ContentDetail";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AdminDashboard from "./components/admin/AdminDashboard";
import CompanyList from "./components/company/CompanyList";
import CreatorDashboard from "./components/dashboard/CreatorDashboard";
import CreatorProfile from "./components/profile/CreatorProfile";
import routes from "tempo-routes";
import Pricing from "./components/pages/Pricing";
import About from "./components/pages/About";
import FAQ from "./components/pages/FAQ";
import Contact from "./components/pages/Contact";

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
          <Route
            path="/creator-dashboard"
            element={<CreatorDashboard isLoggedIn={true} />}
          />
          <Route
            path="/creator/:creatorId"
            element={<CreatorProfile isLoggedIn={true} />}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
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
