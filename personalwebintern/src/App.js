import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route
            path="/certificates"
            element={<Certificates></Certificates>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
