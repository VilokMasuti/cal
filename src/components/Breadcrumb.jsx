import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  const isResult = location.pathname.includes('result');

  return (
    <div className="text-sm text-gray-600 mb-8 flex items-center gap-2">
      <Link to="/" className="hover:text-gray-900">Home</Link>
      <span>/</span>
      <Link
        to="/calculator"
        className={`hover:text-gray-900 ${!isResult ? 'text-[#E45D61]' : ''}`}
      >
        IVF Success Rate Calculator
      </Link>
      {isResult && (
        <>
          <span>/</span>
          <span className="text-[#E45D61]">Result</span>
        </>
      )}
    </div>

  );
}
