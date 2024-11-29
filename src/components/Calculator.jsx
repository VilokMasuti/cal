import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Breadcrumb from './Breadcrumb';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Calculator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    cycles: 1,
    procedures: {
      icsi: '',
      pgt: ''
    },
    conditions: []
  });

  const ageRanges = [
    'Under 30',
    'Between 30 - 34',
    'Between 35 - 37',
    'Between 38 - 40',
    'Between 41 - 43',
    'Above 43'
  ];

  const conditions = [
    'PCOS',
    'Endometriosis',
    'Low Ovarian Reserve',
    'Male Factor Infertility'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result', { state: { cycles: formData.cycles } });
  };

  return (
    <div className="min-h-screen bg-white ">
      <Navbar />

      <main className="max-w-[800px] mx-auto px-4 py-8">
        <div className="hidden md:block">
          <Breadcrumb />
        </div>
        <div className="md:hidden mb-6">
          <Link to="/" className="flex items-center gap-2 text-gray-600">
            <ChevronLeft className="w-4 h-4" />
            <span>IVF Success Rate Calculator</span>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Age Range */}
          <div className="space-y-8">
            <h2 className="lg:text-2xl lg:text-center font-medium">
              Which age range applies to you?
            </h2>
            <div className="lg:grid lg:grid-cols-3  flex flex-col gap-4 lg:pl-[90px]">
              {ageRanges.map((range) => (
                <label key={range} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="age"
                    value={range}
                    checked={formData.age === range}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-[#E45D61] peer-checked:border-4" />
                  <span>{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* IVF Cycles */}
          <div className="space-y-8">
            <h2 className="lg:text-2xl lg:text-center  font-medium">
              Number of IVF Cycles?
            </h2>
            <div className="relative max-w-md mx-auto px-4">
              <input
                type="range"
                min="1"
                max="5"
                value={formData.cycles}
                onChange={(e) => setFormData({ ...formData, cycles: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none"
              />
              <div className="absolute w-full flex justify-between px-1 mt-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="w-1 h-1 bg-gray-300 rounded-full" />
                ))}
              </div>
              <div
                className="absolute w-6 h-6 bg-white border-2 border-[#E45D61] rounded-full -mt-2"
                style={{ left: `${((formData.cycles - 1) / 4) * 100}%`, top: '0' }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#E45D61] text-white px-2 py-1 rounded text-sm">
                  {formData.cycles}
                </div>
              </div>
            </div>
          </div>

          {/* Previous Procedures */}
          <div className="space-y-8">
            <h2 className="lg:text-2xl lg:text-center  font-medium">
              Have you undergone these procedures before?
            </h2>
            {/* Wrapper for responsive layout */}
            <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-16  sm:space-x-0 gap-5 sm:items-center">
              {/* ICSI Procedure */}
              <div className="flex items-center gap-4">
                <span className="font-medium">ICSI Procedure:</span>
                <div className="flex gap-4">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="icsi"
                        value={option}
                        checked={formData.procedures.icsi === option}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            procedures: { ...formData.procedures, icsi: e.target.value },
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-[#E45D61] peer-checked:border-4" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* PGT Testing */}
              <div className="flex items-center gap-4 ">
                <span className="font-medium">PGT Testing:</span>
                <div className="flex gap-4 ml-6">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pgt"
                        value={option}
                        checked={formData.procedures.pgt === option}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            procedures: { ...formData.procedures, pgt: e.target.value },
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-[#E45D61] peer-checked:border-4" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>






          {/* Medical Conditions */}
          <div className="space-y-8">
            <h2 className="lg:text-2xl lg:text-center font-medium">
              Do you have any of these medical conditions?
            </h2>
            <div className="lg:flex lg:flex-row lg:justify-center flex
             flex-col gap-3 lg:gap-8">
              {conditions.map((condition) => (
                <label key={condition} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.conditions.includes(condition)}
                    onChange={(e) => {
                      const newConditions = e.target.checked
                        ? [...formData.conditions, condition]
                        : formData.conditions.filter(c => c !== condition);
                      setFormData({ ...formData, conditions: newConditions });
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 border-2 border-gray-300 rounded peer-checked:bg-[#E45D61] peer-checked:border-[#E45D61]">
                    <svg
                      className="w-3 h-3 text-white mx-auto mt-0.5 opacity-0 peer-checked:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{condition}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#E45D61] text-white px-8 py-3 rounded hover:bg-[#d54f53]"
            >
              Calculator
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

