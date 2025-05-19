import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import FirstPage from "./pages/firstPage";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./index.css";
import Certificate from "./pages/certificate";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<FirstPage />} />
            <Route path="resume" element={<Resume />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
