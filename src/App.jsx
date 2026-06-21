import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const Home = lazy(() => import("./pages/home.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
