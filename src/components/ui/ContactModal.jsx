import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles, ChevronDown, Check, User, Building2, Mail, Phone, DollarSign, Users, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';

const revenueRanges = [
    { value: '0-20k', label: '0 - $20k / month' },
    { value: '20k-60k', label: '$20k - $60k / month' },
    { value: '60k-150k', label: '$60k - $150k / month' },
    { value: '150k-400k', label: '$150k - $400k / month' },
    { value: '400k-1m', label: '$400k - $1M / month' },
    { value: '1m-plus', label: 'Over $1M / month' },
];

const teamSizes = [
    { value: '1-10', label: '1 - 10 employees' },
    { value: '11-50', label: '11 - 50 employees' },
    { value: '51-200', label: '51 - 200 employees' },
    { value: '200-plus', label: '200+ employees' },
];

const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸', label: 'United States' },
    { code: '+1', country: 'CA', flag: '🇨🇦', label: 'Canada' },
    { code: '+44', country: 'GB', flag: '🇬🇧', label: 'United Kingdom' },
    { code: '+49', country: 'DE', flag: '🇩🇪', label: 'Germany' },
    { code: '+33', country: 'FR', flag: '🇫🇷', label: 'France' },
    { code: '+34', country: 'ES', flag: '🇪🇸', label: 'Spain' },
    { code: '+39', country: 'IT', flag: '🇮🇹', label: 'Italy' },
    { code: '+31', country: 'NL', flag: '🇳🇱', label: 'Netherlands' },
    { code: '+32', country: 'BE', flag: '🇧🇪', label: 'Belgium' },
    { code: '+41', country: 'CH', flag: '🇨🇭', label: 'Switzerland' },
    { code: '+43', country: 'AT', flag: '🇦🇹', label: 'Austria' },
    { code: '+351', country: 'PT', flag: '🇵🇹', label: 'Portugal' },
    { code: '+353', country: 'IE', flag: '🇮🇪', label: 'Ireland' },
    { code: '+45', country: 'DK', flag: '🇩🇰', label: 'Denmark' },
    { code: '+46', country: 'SE', flag: '🇸🇪', label: 'Sweden' },
    { code: '+47', country: 'NO', flag: '🇳🇴', label: 'Norway' },
    { code: '+358', country: 'FI', flag: '🇫🇮', label: 'Finland' },
    { code: '+48', country: 'PL', flag: '🇵🇱', label: 'Poland' },
    { code: '+55', country: 'BR', flag: '🇧🇷', label: 'Brazil' },
    { code: '+52', country: 'MX', flag: '🇲🇽', label: 'Mexico' },
    { code: '+54', country: 'AR', flag: '🇦🇷', label: 'Argentina' },
    { code: '+56', country: 'CL', flag: '🇨🇱', label: 'Chile' },
    { code: '+57', country: 'CO', flag: '🇨🇴', label: 'Colombia' },
    { code: '+61', country: 'AU', flag: '🇦🇺', label: 'Australia' },
    { code: '+64', country: 'NZ', flag: '🇳🇿', label: 'New Zealand' },
    { code: '+81', country: 'JP', flag: '🇯🇵', label: 'Japan' },
    { code: '+82', country: 'KR', flag: '🇰🇷', label: 'South Korea' },
    { code: '+86', country: 'CN', flag: '🇨🇳', label: 'China' },
    { code: '+91', country: 'IN', flag: '🇮🇳', label: 'India' },
    { code: '+65', country: 'SG', flag: '🇸🇬', label: 'Singapore' },
    { code: '+852', country: 'HK', flag: '🇭🇰', label: 'Hong Kong' },
    { code: '+971', country: 'AE', flag: '🇦🇪', label: 'UAE' },
    { code: '+966', country: 'SA', flag: '🇸🇦', label: 'Saudi Arabia' },
    { code: '+972', country: 'IL', flag: '🇮🇱', label: 'Israel' },
    { code: '+27', country: 'ZA', flag: '🇿🇦', label: 'South Africa' },
    { code: '+234', country: 'NG', flag: '🇳🇬', label: 'Nigeria' },
    { code: '+20', country: 'EG', flag: '🇪🇬', label: 'Egypt' },
    { code: '+7', country: 'RU', flag: '🇷🇺', label: 'Russia' },
    { code: '+380', country: 'UA', flag: '🇺🇦', label: 'Ukraine' },
    { code: '+90', country: 'TR', flag: '🇹🇷', label: 'Turkey' },
    { code: '+30', country: 'GR', flag: '🇬🇷', label: 'Greece' },
    { code: '+420', country: 'CZ', flag: '🇨🇿', label: 'Czech Republic' },
    { code: '+36', country: 'HU', flag: '🇭🇺', label: 'Hungary' },
    { code: '+40', country: 'RO', flag: '🇷🇴', label: 'Romania' },
];

const initialFormState = {
    name: '',
    email: '',
    phone: '',
    phoneCountry: '+44',
    company: '',
    revenue: '',
    teamSize: '',
    message: '',
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30, filter: 'blur(10px)' },
    visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    },
};

const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.1 + i * 0.05, ease: 'easeOut' }
    }),
};

const titleId = 'contact-modal-title';
const descId = 'contact-modal-desc';

// ============================================================================
// CUSTOM INPUT COMPONENT
// ============================================================================
const FormInput = ({ 
    label, 
    icon: Icon, 
    type = 'text', 
    name, 
    value, 
    onChange, 
    placeholder, 
    required,
    index 
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value && value.length > 0;

    return (
        <motion.div 
            className="relative group"
            custom={index}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Label */}
            <label className="flex items-center gap-2 mb-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white/10 border border-white/20">
                    <Icon className="w-3 h-3 text-white" />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white">
                    {label}
                </span>
                {required && (
                    <span className="w-1 h-1 rounded-full bg-white/80" />
                )}
            </label>

            {/* Input wrapper */}
            <div className="relative">
                {/* Glow effect on focus - silver */}
                <motion.div
                    className="absolute -inset-0.5 rounded-xl opacity-0 blur-md pointer-events-none"
                    animate={{
                        opacity: isFocused ? 0.4 : 0,
                        background: 'linear-gradient(135deg, rgba(148,163,184,0.3), rgba(100,116,139,0.2))'
                    }}
                    transition={{ duration: 0.3 }}
                />

                <input
                    type={type}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className={`
                        relative w-full px-4 py-3.5 
                        rounded-xl 
                        bg-white/90
                        border transition-all duration-300
                        text-sm text-slate-900 font-medium
                        placeholder:text-slate-400 placeholder:font-normal
                        focus:outline-none
                        ${isFocused 
                            ? 'border-slate-400/80 shadow-[0_0_20px_rgba(148,163,184,0.2)]' 
                            : hasValue 
                                ? 'border-slate-300' 
                                : 'border-white/60 hover:border-slate-300'
                        }
                    `}
                />

                {/* Check mark for filled fields */}
                <AnimatePresence>
                    {hasValue && !isFocused && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                                <Check className="w-3 h-3 text-emerald-600" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

// ============================================================================
// CUSTOM PHONE INPUT WITH COUNTRY CODE
// ============================================================================
const FormPhoneInput = ({ 
    label, 
    icon: Icon, 
    name, 
    value, 
    countryCode,
    onChange, 
    onCountryChange,
    placeholder, 
    required,
    index 
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const hasValue = value && value.length > 0;
    const dropdownRef = useRef(null);

    const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[2]; // Default to UK

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsCountryOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <motion.div 
            className="relative group"
            custom={index}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Label */}
            <label className="flex items-center gap-2 mb-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white/10 border border-white/20">
                    <Icon className="w-3 h-3 text-white" />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white">
                    {label}
                </span>
                {required && (
                    <span className="w-1 h-1 rounded-full bg-white/80" />
                )}
            </label>

            {/* Input wrapper */}
            <div className="relative flex gap-2">
                {/* Country Code Selector */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                        className={`
                            flex items-center gap-1.5 px-3 py-3.5 
                            rounded-xl 
                            bg-white/90
                            border transition-all duration-300
                            text-sm
                            focus:outline-none cursor-pointer
                            min-w-[90px]
                            ${isCountryOpen 
                                ? 'border-slate-400/80 shadow-[0_0_20px_rgba(148,163,184,0.2)]' 
                                : 'border-white/60 hover:border-slate-300'
                            }
                        `}
                    >
                        <span className="text-lg leading-none">{selectedCountry.flag}</span>
                        <span className="text-slate-900 font-medium">{selectedCountry.code}</span>
                        <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Country Dropdown */}
                    <AnimatePresence>
                        {isCountryOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="absolute z-50 left-0 w-64 mt-2 py-1.5 rounded-xl 
                                    bg-[#0a0e18]
                                    border border-slate-700/60 
                                    shadow-[0_20px_50px_rgba(0,0,0,0.7)]
                                    overflow-hidden max-h-60 overflow-y-auto
                                    [&::-webkit-scrollbar]:w-1.5
                                    [&::-webkit-scrollbar-track]:bg-transparent
                                    [&::-webkit-scrollbar-thumb]:bg-white/20
                                    [&::-webkit-scrollbar-thumb]:rounded-full"
                            >
                                {countryCodes.map((country, i) => (
                                    <motion.button
                                        key={`${country.country}-${i}`}
                                        type="button"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.015 }}
                                        onClick={() => {
                                            onCountryChange({ target: { name: 'phoneCountry', value: country.code } });
                                            setIsCountryOpen(false);
                                        }}
                                        className={`
                                            w-full px-3 py-2 text-left text-sm
                                            transition-all duration-200
                                            flex items-center gap-3 group/item
                                            ${countryCode === country.code && selectedCountry.country === country.country
                                                ? 'bg-gradient-to-r from-slate-600/30 to-transparent text-white' 
                                                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                                            }
                                        `}
                                    >
                                        <span className="text-lg leading-none">{country.flag}</span>
                                        <span className="flex-1">{country.label}</span>
                                        <span className="text-slate-500 text-xs">{country.code}</span>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Phone Number Input */}
                <div className="relative flex-1">
                    {/* Glow effect on focus */}
                    <motion.div
                        className="absolute -inset-0.5 rounded-xl opacity-0 blur-md pointer-events-none"
                        animate={{
                            opacity: isFocused ? 0.4 : 0,
                            background: 'linear-gradient(135deg, rgba(148,163,184,0.3), rgba(100,116,139,0.2))'
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    <input
                        type="tel"
                        name={name}
                        required={required}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={placeholder}
                        className={`
                            relative w-full px-4 py-3.5 
                            rounded-xl 
                            bg-white/90
                            border transition-all duration-300
                            text-sm text-slate-900 font-medium
                            placeholder:text-slate-400 placeholder:font-normal
                            focus:outline-none
                            ${isFocused 
                                ? 'border-slate-400/80 shadow-[0_0_20px_rgba(148,163,184,0.2)]' 
                                : hasValue 
                                    ? 'border-slate-300' 
                                    : 'border-white/60 hover:border-slate-300'
                            }
                        `}
                    />

                    {/* Check mark for filled fields */}
                    <AnimatePresence>
                        {hasValue && !isFocused && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-emerald-600" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

// ============================================================================
// CUSTOM SELECT COMPONENT
// ============================================================================
const FormSelect = ({ 
    label, 
    icon: Icon, 
    name, 
    value, 
    onChange, 
    options, 
    placeholder,
    required,
    index 
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const hasValue = value && value.length > 0;
    const selectRef = useRef(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsOpen(false);
                setIsFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
        setIsFocused(false);
    };

    return (
        <motion.div 
            className="relative group"
            custom={index}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            ref={selectRef}
        >
            {/* Label */}
            <label className="flex items-center gap-2 mb-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white/10 border border-white/20">
                    <Icon className="w-3 h-3 text-white" />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white">
                    {label}
                </span>
                {required && (
                    <span className="w-1 h-1 rounded-full bg-white/80" />
                )}
            </label>

            {/* Select trigger */}
            <div className="relative">
                {/* Glow effect on focus - silver */}
                <motion.div
                    className="absolute -inset-0.5 rounded-xl opacity-0 blur-md pointer-events-none"
                    animate={{
                        opacity: isFocused ? 0.4 : 0,
                        background: 'linear-gradient(135deg, rgba(148,163,184,0.3), rgba(100,116,139,0.2))'
                    }}
                    transition={{ duration: 0.3 }}
                />

                <button
                    type="button"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setIsFocused(!isOpen);
                    }}
                    className={`
                        relative w-full px-4 py-3.5 
                        rounded-xl 
                        bg-white/90
                        border transition-all duration-300
                        text-sm text-left
                        focus:outline-none cursor-pointer
                        flex items-center justify-between
                        ${isFocused 
                            ? 'border-slate-400/80 shadow-[0_0_20px_rgba(148,163,184,0.2)]' 
                            : hasValue 
                                ? 'border-slate-300' 
                                : 'border-white/60 hover:border-slate-300'
                        }
                    `}
                >
                    <span className={hasValue ? 'text-slate-900 font-medium' : 'text-slate-400'}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                    </motion.div>
                </button>

                {/* Dropdown - darker background for better legibility */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute z-50 w-full mt-2 py-1.5 rounded-xl 
                                bg-[#0a0e18]
                                border border-slate-700/60 
                                shadow-[0_20px_50px_rgba(0,0,0,0.7)]
                                overflow-hidden"
                        >
                            {options.map((option, i) => (
                                <motion.button
                                    key={option.value}
                                    type="button"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.03 }}
                                    onClick={() => handleSelect(option.value)}
                                    className={`
                                        w-full px-4 py-2.5 text-left text-sm
                                        transition-all duration-200
                                        flex items-center justify-between group/item
                                        ${value === option.value 
                                            ? 'bg-gradient-to-r from-slate-600/30 to-transparent text-white' 
                                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                                        }
                                    `}
                                >
                                    <span>{option.label}</span>
                                    {value === option.value && (
                                        <Check className="w-4 h-4 text-slate-300" />
                                    )}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

// ============================================================================
// CUSTOM TEXTAREA COMPONENT
// ============================================================================
const FormTextarea = ({ 
    label, 
    icon: Icon, 
    name, 
    value, 
    onChange, 
    placeholder, 
    required,
    index 
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value && value.length > 0;

    return (
        <motion.div 
            className="relative group"
            custom={index}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Label */}
            <label className="flex items-center gap-2 mb-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white/10 border border-white/20">
                    <Icon className="w-3 h-3 text-white" />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white">
                    {label}
                </span>
                {required && (
                    <span className="w-1 h-1 rounded-full bg-white/80" />
                )}
            </label>

            {/* Textarea wrapper */}
            <div className="relative">
                {/* Glow effect on focus - silver */}
                <motion.div
                    className="absolute -inset-0.5 rounded-xl opacity-0 blur-md pointer-events-none"
                    animate={{
                        opacity: isFocused ? 0.4 : 0,
                        background: 'linear-gradient(135deg, rgba(148,163,184,0.3), rgba(100,116,139,0.2))'
                    }}
                    transition={{ duration: 0.3 }}
                />

                <textarea
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    rows={4}
                    className={`
                        relative w-full px-4 py-3.5 
                        rounded-xl 
                        bg-white/90
                        border transition-all duration-300
                        text-sm text-slate-900 font-medium
                        placeholder:text-slate-400 placeholder:font-normal
                        focus:outline-none resize-none
                        ${isFocused 
                            ? 'border-slate-400/80 shadow-[0_0_20px_rgba(148,163,184,0.2)]' 
                            : hasValue 
                                ? 'border-slate-300' 
                                : 'border-white/60 hover:border-slate-300'
                        }
                    `}
                />

                {/* Character count */}
                {isFocused && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-3 right-3 text-[10px] text-slate-400"
                    >
                        {value.length} / 500
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

// ============================================================================
// SUCCESS STATE COMPONENT
// ============================================================================
const SuccessState = ({ onClose }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="py-8 text-center"
    >
        {/* Success icon with animated rings */}
        <div className="relative mx-auto w-24 h-24 mb-8">
            {/* Outer pulsing rings */}
            <motion.div
                className="absolute inset-0 rounded-full border border-slate-400/30"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
                className="absolute inset-0 rounded-full border border-emerald-400/20"
                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* Main circle */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative w-full h-full rounded-full 
                    bg-gradient-to-br from-emerald-500/20 via-slate-500/15 to-emerald-500/10
                    border border-emerald-400/40
                    flex items-center justify-center
                    shadow-[0_0_40px_rgba(52,211,153,0.2)]"
            >
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                >
                    <Check className="w-10 h-10 text-emerald-400" strokeWidth={2.5} />
                </motion.div>
            </motion.div>
        </div>

        {/* Success message */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-4"
        >
            <h3 className="text-2xl font-heading font-bold text-white">
                Request Received
            </h3>
            <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">
                Our team will review your details and reach out within 
                <span className="text-white font-medium"> 24 hours </span> 
                to schedule your strategy session.
            </p>
        </motion.div>

        {/* What's next section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 p-5 rounded-2xl bg-slate-800/30 border border-slate-700/40"
        >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">What happens next</p>
            <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-400/10 border border-slate-400/30 flex items-center justify-center text-[10px] font-bold text-slate-300">1</span>
                    <span className="text-slate-400">Review</span>
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-slate-400/40 to-slate-500/40" />
                <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-400/10 border border-slate-400/30 flex items-center justify-center text-[10px] font-bold text-slate-300">2</span>
                    <span className="text-slate-400">Schedule</span>
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-slate-500/40 to-emerald-400/40" />
                <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-[10px] font-bold text-emerald-400">3</span>
                    <span className="text-slate-400">Call</span>
                </div>
            </div>
        </motion.div>

        {/* Close button */}
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            onClick={onClose}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-slate-800/50 border border-slate-700/50
                text-sm font-medium text-white
                hover:bg-slate-700/50 hover:border-slate-600/50
                transition-all duration-300"
        >
            Close window
        </motion.button>
    </motion.div>
);

// ============================================================================
// MAIN MODAL COMPONENT
// ============================================================================
const ContactModal = ({ isOpen, onClose }) => {
    const [formValues, setFormValues] = useState(initialFormState);
    const [status, setStatus] = useState('idle');
    const modalRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            setFormValues(initialFormState);
            setStatus('idle');
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return undefined;
        const focusableSelector =
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        let focusableElements = [];
        const updateFocusableList = () => {
            const node = modalRef.current;
            if (!node) {
                focusableElements = [];
                return;
            }
            focusableElements = Array.from(node.querySelectorAll(focusableSelector)).filter(
                (element) => !element.hasAttribute('disabled')
            );
        };

        updateFocusableList();

        const timer = setTimeout(() => {
            updateFocusableList();
            const firstElement = focusableElements[0];
            firstElement?.focus();
        }, 20);

        const trapFocus = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onClose();
                return;
            }

            if (event.key !== 'Tab' || focusableElements.length === 0) {
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        document.addEventListener('keydown', trapFocus);
        return () => {
            clearTimeout(timer);
            document.removeEventListener('keydown', trapFocus);
        };
    }, [isOpen, status, onClose]);

    const isSending = status === 'sending';

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSending) return;
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
        }, 1200);
    };

    const isSuccess = status === 'success';

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                >
                    {/* Backdrop with subtle blur for glassmorphism effect */}
                    <motion.div
                        className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Ambient glow effects - silver tones */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-slate-400/8 rounded-full blur-[100px]" />
                        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-300/6 rounded-full blur-[100px]" />
                    </div>

                    {/* Modal container with custom scrollbar */}
                    <motion.div
                        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto
                            [&::-webkit-scrollbar]:w-1.5
                            [&::-webkit-scrollbar-track]:bg-transparent
                            [&::-webkit-scrollbar-thumb]:bg-white/20
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:hover:bg-white/30
                            scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={cardVariants}
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        aria-describedby={descId}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Card - Glassmorphism style */}
                        <div className="relative overflow-hidden rounded-3xl 
                            bg-gradient-to-br from-white/[0.15] via-white/[0.10] to-white/[0.06]
                            backdrop-blur-3xl
                            border border-white/25
                            shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]"
                        >
                            {/* Glass reflection overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
                            {/* Subtle inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.05] pointer-events-none" />
                            
                            {/* Grid pattern */}
                            <div 
                                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                                    `,
                                    backgroundSize: '40px 40px'
                                }}
                            />

                            {/* Content wrapper */}
                            <div className="relative p-6 sm:p-10">

                                {/* Close button */}
                                <motion.button
                                    type="button"
                                    aria-label="Close contact form"
                                    onClick={onClose}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute right-4 top-4 sm:right-6 sm:top-6 
                                        w-10 h-10 rounded-full 
                                        flex items-center justify-center
                                        bg-slate-800/50 border border-slate-700/50
                                        text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-slate-600/50
                                        transition-all duration-300
                                        group"
                                >
                                    <X className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
                                </motion.button>

                                {/* Header */}
                                <div className="mb-8">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                            bg-gradient-to-r from-slate-500/10 to-slate-600/10
                                            border border-slate-500/20 mb-5"
                                    >
                                        <Sparkles className="w-3.5 h-3.5 text-slate-300" />
                                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                                            Free Strategy Session
                                        </span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        id={titleId}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3"
                                    >
                                        Tell us about your business
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        id={descId}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md"
                                    >
                                        We'll craft a personalized 30-minute session showing exactly what's possible with the NTEX growth system.
                                    </motion.p>
                                </div>

                                {/* Form or Success State */}
                                {isSuccess ? (
                                    <SuccessState onClose={onClose} />
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5" aria-live="polite">
                                        
                                        {/* Row 1: Name & Company */}
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <FormInput
                                                label="Full Name"
                                                icon={User}
                                                type="text"
                                                name="name"
                                                value={formValues.name}
                                                onChange={handleChange}
                                                placeholder="John Smith"
                                                required
                                                index={0}
                                            />
                                            <FormInput
                                                label="Company"
                                                icon={Building2}
                                                type="text"
                                                name="company"
                                                value={formValues.company}
                                                onChange={handleChange}
                                                placeholder="Acme Inc."
                                                required
                                                index={1}
                                            />
                                        </div>

                                        {/* Row 2: Email & Phone */}
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <FormInput
                                                label="Email Address"
                                                icon={Mail}
                                                type="email"
                                                name="email"
                                                value={formValues.email}
                                                onChange={handleChange}
                                                placeholder="john@company.com"
                                                required
                                                index={2}
                                            />
                                            <FormPhoneInput
                                                label="Phone"
                                                icon={Phone}
                                                name="phone"
                                                value={formValues.phone}
                                                countryCode={formValues.phoneCountry}
                                                onChange={handleChange}
                                                onCountryChange={handleChange}
                                                placeholder="7700 900000"
                                                required
                                                index={3}
                                            />
                                        </div>

                                        {/* Row 3: Revenue & Team Size */}
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <FormSelect
                                                label="Monthly Revenue"
                                                icon={DollarSign}
                                                name="revenue"
                                                value={formValues.revenue}
                                                onChange={handleChange}
                                                options={revenueRanges}
                                                placeholder="Select revenue range"
                                                required
                                                index={4}
                                            />
                                            <FormSelect
                                                label="Team Size"
                                                icon={Users}
                                                name="teamSize"
                                                value={formValues.teamSize}
                                                onChange={handleChange}
                                                options={teamSizes}
                                                placeholder="Select team size"
                                                required
                                                index={5}
                                            />
                                        </div>

                                        {/* Message */}
                                        <FormTextarea
                                            label="What would you like to focus on?"
                                            icon={MessageSquare}
                                            name="message"
                                            value={formValues.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your current challenges — acquisition, creative strategy, scaling issues, KPI clarity..."
                                            required
                                            index={6}
                                        />

                                        {/* Submit Button */}
                                        <motion.div
                                            custom={7}
                                            variants={fieldVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="pt-4"
                                        >
                                            <button
                                                type="submit"
                                                disabled={isSending}
                                                className={`shiny-cta w-full group ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    {isSending ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 animate-spin" />
                                                            <span>Sending your request...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Schedule Strategy Session</span>
                                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                        </>
                                                    )}
                                                </span>
                                            </button>

                                            {/* Privacy note */}
                                            <p className="mt-4 text-center text-xs text-slate-500">
                                                Your data is secure. We'll only use it to contact you about your session.
                                            </p>
                                        </motion.div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
