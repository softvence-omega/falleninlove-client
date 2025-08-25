import  { useState } from 'react';
import { Languages, ChevronDown } from 'lucide-react';

// Language options - you can extend this when integrating with API
const languageOptions = [
  { value: 'en-AU', label: 'English ( Australia ) - Default' },
  { value: 'en-US', label: 'English ( United States )' },
  { value: 'en-UK', label: 'English ( United Kingdom )' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'zh', label: 'Chinese' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'ar', label: 'Arabic' },
];

export default function AdminLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState('en-AU');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (languageValue: string) => {
    setSelectedLanguage(languageValue);
    setIsDropdownOpen(false);
    // TODO: Add API call here to update language preference
    console.log('Language changed to:', languageValue);
  };

  const selectedLanguageLabel = languageOptions.find(
    option => option.value === selectedLanguage
  )?.label || 'English ( Australia ) - Default';

  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Language</h1>

      {/* Language Settings Card */}
      <div className="bg-white rounded-2xl border border-yellow-400 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Languages className="h-6 w-6 text-gray-600" />
          <h2 className="text-lg font-medium text-gray-600">Language Settings</h2>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-600">
            Select Display Language:
          </label>

          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-left text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-colors duration-200 flex items-center justify-between"
            >
              <span>{selectedLanguageLabel}</span>
              <ChevronDown 
                className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleLanguageChange(option.value)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
                      selectedLanguage === option.value 
                        ? 'bg-orange-50 text-orange-600 font-medium' 
                        : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Info Text */}
          <p className="text-sm text-orange-400 mt-4">
            Changing the display language will update text across the platform.
          </p>
        </div>
      </div>
      {/* Click outside handler */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
}