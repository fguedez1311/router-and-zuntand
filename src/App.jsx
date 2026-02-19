import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { HomePage } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { NoFoundPage } from "./pages/404";
import { Routes,Route } from "react-router";
import {JobDetail} from "./pages/Detail";

function App() {
  
  
  return (
    <>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/jobs/:id" element={<JobDetail/>} />
            <Route path="*" element={<NoFoundPage/>} />

        </Routes>

      <Footer />
    </>
  );
}

export default App;
