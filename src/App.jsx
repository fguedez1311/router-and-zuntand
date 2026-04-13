import {lazy,Suspense} from 'react'
import { Routes,Route } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";




const HomePage=lazy(()=>import('./pages/Home.jsx'))

const SearchPage=lazy(()=>import('./pages/SearchPage.jsx'))

const NoFoundPage=lazy(()=>import('./pages/404.jsx'))

const JobDetail=lazy(()=>import('./pages/Detail.jsx'))

function App() {
  
  
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>Cargando...</div>}>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/jobs/:jobId" element={<JobDetail />} />
            <Route path="*" element={<NoFoundPage/>} />

        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
