import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Result from './components/Result';


export default function App() {
  return (
    <BrowserRouter>
      {/* Breadcrumb component is rendered here */}

      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
