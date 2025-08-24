import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    color?: 'orange' | 'green';
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, color = 'orange' }) => {
    const bgColor = checked
        ? color === 'green'
            ? 'bg-[#2CBCA4]'
            : 'bg-[#FF715B]'
        : 'bg-gray-300';

    return (
        <button
            onClick={() => onChange(!checked)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors  ${bgColor}`}
        >
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'
                    }`}
            />
        </button>
    );
};

interface DropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#FF6A0066] rounded-lg text-left "
            >
                <span className="text-[#6B7280]">{value}</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-[#FF6A0066] rounded-lg shadow-lg">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

function LanguageAndAccessability() {
    const [language, setLanguage] = useState('English (Australia) - Default');
    const [textSize, setTextSize] = useState('Medium - Default');
    const [highContrast, setHighContrast] = useState(true);
    const [dyslexiaFont, setDyslexiaFont] = useState(true);
    const [screenReader, setScreenReader] = useState(true);

    const languageOptions = [
        'English (Australia) - Default',
        'English (United States)',
        'English (United Kingdom)',
        'Spanish',
        'French',
        'German'
    ];

    const textSizeOptions = [
        'Small',
        'Medium - Default',
        'Large',
        'Extra Large'
    ];

    return (
        <div className="min-h-screen  py-8 px-4">
            <div className=" mx-auto">
                {/* Header */}
                <h1 className=" text-4xl font-bold text-[#2D2D2D] mb-8">
                    Language & Accessibility
                </h1>

                {/* Language Settings Section */}
                <div className="bg-white rounded-xl border border-[#FF6A0066] p-6 mb-6">
                    <div className="flex items-center  mb-4">
                        <Globe className="w-6 h-6 text-gray-600 mr-3" />
                        <h2 className="text-2xl font-bold text-[#6B7280] ">Language Settings</h2>
                    </div>

                    <div className="space-y-4 w-2/3">
                        <div>
                            <label className="block  font-medium text-[#6B7280] mb-2">
                                Select Display Language:
                            </label>
                            <Dropdown
                                value={language}
                                onChange={setLanguage}
                                options={languageOptions}
                            />
                        </div>
                        <p className="text-sm text-[#FF715B]">
                            Changing the display language will update text across the platform.
                        </p>
                    </div>
                </div>

                {/* Accessibility Features Section */}

                <h2 className="text-2xl font-bold text-[#6B7280] mb-6">
                    Accessibility Features
                </h2>

                <div className="bg-white rounded-xl border border-[#FF6A0066] p-6 mb-8">

                    <div className="space-y-6">
                        {/* Text Size */}
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <h3 className="font-medium text-[#2D2D2D]  mb-1">Text Size</h3>
                                <p className="text-sm text-[#6B7280]">
                                    Adjust the size of the text on the screen.
                                </p>
                            </div>
                            <div className="ml-0 sm:ml-6 w-full sm:w-80 md:w-96 lg:w-[28rem] pr-4 sm:pr-6 md:pr-8">
                                <Dropdown
                                    value={textSize}
                                    onChange={setTextSize}
                                    options={textSizeOptions}
                                />
                            </div>

                        </div>

                        {/* High Contrast Mode */}
                        <div className="flex items-center justify-between py-2">
                            <div className="flex-1">
                                <h3 className="font-medium text-[#2D2D2D] mb-1">High Contrast Mode</h3>
                                <p className="text-sm text-[#6B7280]">
                                    Enhance color contrast for better readability.
                                </p>
                            </div>
                            <Toggle
                                checked={highContrast}
                                onChange={setHighContrast}
                                color="orange"
                            />
                        </div>

                        {/* Dyslexia-Friendly Font */}
                        <div className="flex items-center justify-between py-2">
                            <div className="flex-1">
                                <h3 className="font-medium text-[#2D2D2D] mb-1">Dyslexia-Friendly Font</h3>
                                <p className="text-sm text-[#6B7280]">
                                    Switch to a font designed for easier reading for dyslexic users.
                                </p>
                            </div>
                            <Toggle
                                checked={dyslexiaFont}
                                onChange={setDyslexiaFont}
                                color="green"
                            />
                        </div>

                        {/* Screen Reader Compatibility */}
                        <div className="flex items-center justify-between py-2">
                            <div className="flex-1">
                                <h3 className="font-medium text-[#2D2D2D] mb-1">Screen Reader Compatibility</h3>
                                <p className="text-sm text-[#6B7280]">
                                    Optimize the interface for use with screen reader software.
                                </p>
                            </div>
                            <Toggle
                                checked={screenReader}
                                onChange={setScreenReader}
                                color="orange"
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="pt-6 mb-6 mt-16  flex justify-center">
                        <button className="w-full sm:max-w-2xl bg-[#2CBCA4]  cursor-pointer text-white font-medium py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                            Save
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguageAndAccessability;