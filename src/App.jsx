// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthRoutes from "./routes/AuthRoutes";
// import AllRoutes from "./routes/AllRoutes";
// import PageTransitionWrapper from "./components/PageTransitionWrapper";
// function App() {
//   return (
//     <PageTransitionWrapper>
//       <Router>
//         <Routes>
//           <Route path="/user/*" element={<AuthRoutes />} />
//           <Route path="/*" element={<AuthRoutes />} />
//           <Route path="/dashboard/*" element={<AllRoutes />} />
//         </Routes>
//       </Router>
//     </PageTransitionWrapper>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import AllRoutes from "./routes/AllRoutes";
import PageTransitionWrapper from "./components/PageTransitionWrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/*" element={<AuthRoutes />} />
        <Route path="/*" element={<AuthRoutes />} />
        <Route path="/dashboard/*" element={<AllRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
