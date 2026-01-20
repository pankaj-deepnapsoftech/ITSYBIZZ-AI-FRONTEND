// import React, { Suspense, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./Pages/Home";
// import Slider from "./Pages/Slider"
// import It from "./Pages/task/It"
// import Secuirity from "./Pages/task/Secuirity"
// import HumanResource from "./Pages/task/HumanResource"
// import CRMProducts from "./Pages/Products/Client Resource management"
// import CRMTask from "./Pages/task/Crm"
// import HRMProducts from "./Pages/Products/Human resource management"
// import SoftwareDevelopment from "./Pages/Products/Real time automation"

// import AppDev from "./Pages/task/AppDev"
// import Finance from "./Pages/task/Finance"
// import MainLayout from "./Components/MainLayout";
// import Portfolio from "./Pages/Portfolio";
// import Development from "./Pages/Development";
// import Brand from "./Pages/Brand";
// import About from "./Components/About";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
// import PrivacyPolicy from "./Components/Legal/PrivacyPolicy";
// import Term from "./Components/Legal/Term";
// import DigitalMarketing from "./Pages/DigitalMarketing";
// import MetaAdds from "./Components/DigitalMarketing/MetaAdds";
// import Contact from "./Pages/Contact";
// import Career from "./Components/Career";
// import { Toaster } from "react-hot-toast";
// import Dashboard from "./Pages/Admin/Dashboard";
// import Overview from "./Pages/Admin/Overview";
// import Users from "./Pages/Admin/Users";
// import CareerList from "./Pages/Admin/CareerList";
// import Enquiry from "./Pages/Admin/Enquiry";
// import Contacts from "./Pages/Admin/Contacts";
// import Products from "./Pages/Admin/Products";
// import Employees from "./Pages/Admin/Employees";
// import Followup from "./Pages/Admin/Followup";
// import Refferal from "./Pages/Admin/Refferal";
// import Business from "./Pages/Admin/Business";
// import Corporate from "./Pages/Admin/Corporate";
// import ProductQuote from "./Pages/Admin/ProductQuote";
// import IotProducts from "./Pages/IotProducts";
// import Forgotpwd from "./Pages/Forgotpwd";
// import PageNotFound from "./PageNotFound";
// import ResetPassword from "./Pages/ResetPassword";
// import FAQ from "./Pages/FAQ";
// import Blogs from "./Pages/Blogs";
// import BlogPost from "./Pages/BlogPost";
// import BlogsAdmin from "./Pages/Admin/Blogs";

// import industrialAutomationSoftware from "./Pages/Products/IndustrialAutomationSoftware";
// import factoryAutomationSoftware from "./Pages/Products/FactoryAutomationSoftware";
// import factoryAutomationHardware from "./Pages/Products/FactoryAutomationHardwar";
// import industrialIotHardware from "./Pages/Products/IndustrialIoTHardware";

// import './index.css';
// import IndustrialAutomationSoftware from "./Pages/Products/IndustrialAutomationSoftware";
// import IndustrialIoTHardware from "./Pages/Products/IndustrialIoTHardware";
// import FactoryAutomationHardwar from "./Pages/Products/FactoryAutomationHardwar";
// import FactoryAutomationSoftware from "./Pages/Products/FactoryAutomationSoftware";
// import Loader from "./Pages/Loader";

// // Custom hook to scroll to top on route changes
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Smooth scroll to top with animation
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     });
//   }, [pathname]);

//   return null;
// };

// const App = () => {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Toaster position="top-right" reverseOrder={false} />
//       <Suspense fallback={<Loader/>}>
//         <Routes>
//           {/* Main Layout with Header & Footer */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/forgot-password" element={<Forgotpwd />} />
//           <Route path="/reset-password" element={<ResetPassword />} />

//           <Route path="/" element={<MainLayout />}>
//             <Route index element={<Home />} />
//             <Route path="/slider" element={<Slider />} />
//             <Route path="/it" element={<It />} />
//             <Route path="/secuirity" element={<Secuirity />} />
//             <Route path="/human" element={<HumanResource />} />
//             <Route
//               path="/client-relationship-management"
//               element={<CRMProducts />}
//             />
//             <Route path="/crm/task" element={<CRMTask />} />
//             <Route
//               path="/human-resource-management"
//               element={<HRMProducts />}
//             />
//             <Route
//               path="/Real-Time-Production-Automation-Software"
//               element={<SoftwareDevelopment />}
//             />
//             <Route path="/appdev" element={<AppDev />} />
//             <Route path="/finance" element={<Finance />} />
//             <Route path="portfolio" element={<Portfolio />} />
//             <Route path="development" element={<Development />} />
//             <Route path="digitalmarketing" element={<DigitalMarketing />} />
//             <Route path="brand" element={<Brand />} />
//             <Route path="/about-us" element={<About />} />
//             <Route path="/policy" element={<PrivacyPolicy />} />
//             <Route path="/terms" element={<Term />} />
//             <Route path="/meta/ads" element={<MetaAdds />} />
//             <Route path="/contact-us" element={<Contact />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="/Iot-products" element={<IotProducts />} />
//             <Route path="/faq" element={<FAQ />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/blog/:slug" element={<BlogPost />} />
//             <Route path="/reset-password/:token" element={<ResetPassword />} />

//             <Route
//               path="/Industrial-Automation-Software"
//               element={<IndustrialAutomationSoftware />}
//             />
//             <Route
//               path="/Factory-Automation-Hardware"
//               element={<FactoryAutomationHardwar />}
//             />
//             <Route
//               path="/Industrial-IoT-Hardware"
//               element={<IndustrialIoTHardware />}
//             />
//             <Route
//               path="/Factory-Automation-Software"
//               element={<FactoryAutomationSoftware />}
//             />
//           </Route>
//           <Route path="*" element={<PageNotFound />} />

//           <Route path="/dashboard" element={<Dashboard />}>
//             <Route index element={<Overview />} />
//             <Route path="users" element={<Users />} />
//             <Route path="career" element={<CareerList />} />
//             <Route path="enquiry" element={<Enquiry />} />
//             <Route path="contact-list" element={<Contacts />} />
//             <Route path="products" element={<Products />} />
//             <Route path="employees" element={<Employees />} />
//             <Route path="followups" element={<Followup />} />
//             <Route path="products/quote" element={<ProductQuote />} />
//             <Route path="blogs" element={<BlogsAdmin />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;






//this one is with loading

import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Pages/Loader";
import "./index.css";
import Crmdevelopment from "./Pages/Crmdevelopment";
import BrandBuilding from "./Pages/BrandBuilding";
import Orm from "./Pages/Orm";
import PublicRelation from "./Pages/PublicRelation";
import InfluenceMarkiting from "./Pages/InfluenceMarkiting";
import MetaAds from "./Pages/MetaAds";
import GoogleAds from "./Pages/GoogleAds";
import EmailMarkiting from "./Pages/EmailMarkiting";
import ContentMarkiting from "./Pages/ContentMarkiting";
import SeoServices from "./Pages/SeoServices";
import Ppc from "./Pages/Ppc";

/* =========================
   LAZY IMPORTS
========================= */

const Home = lazy(() => import("./Pages/Home"));
const Slider = lazy(() => import("./Pages/Slider"));
const It = lazy(() => import("./Pages/task/It"));
const Secuirity = lazy(() => import("./Pages/task/Secuirity"));
const HumanResource = lazy(() => import("./Pages/task/HumanResource"));
const CRMProducts = lazy(() =>
  import("./Pages/Products/Client Resource management")
);
const CRMTask = lazy(() => import("./Pages/task/Crm"));
const HRMProducts = lazy(() =>
  import("./Pages/Products/Human resource management")
);
const SoftwareDevelopment = lazy(() =>
  import("./Pages/Products/Real time automation")
);

const AppDev = lazy(() => import("./Pages/task/AppDev"));
const Finance = lazy(() => import("./Pages/task/Finance"));
const MainLayout = lazy(() => import("./Components/MainLayout"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Development = lazy(() => import("./Pages/Development"));
const Brand = lazy(() => import("./Pages/Brand"));
const About = lazy(() => import("./Components/About"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const PrivacyPolicy = lazy(() => import("./Components/Legal/PrivacyPolicy"));
const Term = lazy(() => import("./Components/Legal/Term"));
const DigitalMarketing = lazy(() => import("./Pages/DigitalMarketing"));
const MetaAdds = lazy(() => import("./Components/digital-marketing/MetaAdds"));
const Contact = lazy(() => import("./Pages/Contact"));
const Career = lazy(() => import("./Components/Career"));
const Dashboard = lazy(() => import("./Pages/Admin/Dashboard"));
const Overview = lazy(() => import("./Pages/Admin/Overview"));
const Users = lazy(() => import("./Pages/Admin/Users"));
const CareerList = lazy(() => import("./Pages/Admin/CareerList"));
const Enquiry = lazy(() => import("./Pages/Admin/Enquiry"));
const Contacts = lazy(() => import("./Pages/Admin/Contacts"));
const Products = lazy(() => import("./Pages/Admin/Products"));
const Employees = lazy(() => import("./Pages/Admin/Employees"));
const Followup = lazy(() => import("./Pages/Admin/Followup"));
const ProductQuote = lazy(() => import("./Pages/Admin/ProductQuote"));
const IotProducts = lazy(() => import("./Pages/IotProducts"));
const Forgotpwd = lazy(() => import("./Pages/Forgotpwd"));
const ResetPassword = lazy(() => import("./Pages/ResetPassword"));
const FAQ = lazy(() => import("./Pages/FAQ"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const BlogPost = lazy(() => import("./Pages/BlogPost"));
const BlogsAdmin = lazy(() => import("./Pages/Admin/Blogs"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const WebsiteDevelopment = lazy(() => import("./Pages/WebsiteDevelopment"));
const SoftDevelopment = lazy(() => import("./Pages/SoftwareDevelopment"));
const AppDevelopment = lazy(() => import("./Pages/AppDevelopment"));
const DigitalMarketings = lazy(() => import("./Pages/Digital-Markiting"));
const InfluenceMarkings = lazy(() => import("./Pages/InfluenceMarkiting"));
const SocialMedia = lazy(() => import("./Pages/SocialMedia"));





const IndustrialAutomationSoftware = lazy(() =>
  import("./Pages/Products/IndustrialAutomationSoftware")
);
const IndustrialIoTHardware = lazy(() =>
  import("./Pages/Products/IndustrialIoTHardware")
);
const FactoryAutomationHardwar = lazy(() =>
  import("./Pages/Products/FactoryAutomationHardwar")
);
const FactoryAutomationSoftware = lazy(() =>
  import("./Pages/Products/FactoryAutomationSoftware")
);

/* =========================
   SCROLL TO TOP
========================= */

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

/* =========================
   APP
========================= */

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Forgotpwd />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="slider" element={<Slider />} />
            <Route path="it" element={<It />} />
            <Route path="secuirity" element={<Secuirity />} />
            <Route path="human" element={<HumanResource />} />
            <Route
              path="client-relationship-management"
              element={<CRMProducts />}
            />
            <Route path="crm/task" element={<CRMTask />} />
            <Route path="human-resource-management" element={<HRMProducts />} />
            <Route
              path="Real-Time-Production-Automation-Software"
              element={<SoftwareDevelopment />}
            />
            <Route path="appdev" element={<AppDev />} />
            <Route path="finance" element={<Finance />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="development" element={<Development />} />
            <Route path="digitalmarketing" element={<DigitalMarketing />} />
            <Route path="brand" element={<Brand />} />
            <Route path="about-us" element={<About />} />
            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Term />} />
            <Route path="meta/ads" element={<MetaAdds />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="career" element={<Career />} />
            <Route path="Iot-products" element={<IotProducts />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:slug" element={<BlogPost />} />

            <Route
              path="Industrial-Automation-Software"
              element={<IndustrialAutomationSoftware />}
            />
            <Route
              path="Factory-Automation-Hardware"
              element={<FactoryAutomationHardwar />}
            />
            <Route
              path="Industrial-IoT-Hardware"
              element={<IndustrialIoTHardware />}
            />
            <Route
              path="Factory-Automation-Software"
              element={<FactoryAutomationSoftware />}
            />
            <Route path="web-development" element={<WebsiteDevelopment />} />

            <Route path="software-development" element={<SoftDevelopment />} />

            <Route path="app-development" element={<AppDevelopment />} />

            <Route path="crm" element={<Crmdevelopment />} />

            <Route path="brand-building" element={<BrandBuilding />} />

            <Route path="brand-orm" element={<Orm />} />

            <Route path="public-relations" element={<PublicRelation />} />

            <Route path="digital-marketing" element={<DigitalMarketings />} />

            <Route path="influence-marketing" element={<InfluenceMarkings />} />

            <Route path="social-media" element={<SocialMedia />} />

            <Route path="meta-ads" element={<MetaAds />} />
            <Route path="google-ads" element={<GoogleAds />} />

            <Route path="email-marketing" element={<EmailMarkiting />} />

            <Route path="content-marketing" element={<ContentMarkiting />} />

            <Route path="seo-service" element={<SeoServices />} />

            <Route path="ppc" element={<Ppc />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="users" element={<Users />} />
            <Route path="career" element={<CareerList />} />
            <Route path="enquiry" element={<Enquiry />} />
            <Route path="contact-list" element={<Contacts />} />
            <Route path="products" element={<Products />} />
            <Route path="employees" element={<Employees />} />
            <Route path="followups" element={<Followup />} />
            <Route path="products/quote" element={<ProductQuote />} />
            <Route path="blogs" element={<BlogsAdmin />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;


