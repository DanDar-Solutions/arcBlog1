import './Customize.css'
import { useState, useEffect } from 'react'

export default function Customize(){
    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or use default
        return localStorage.getItem('theme') || 'blue';
    });
    
    const [language, setLanguage] = useState(() => {
        // Get language from localStorage or use default
        return localStorage.getItem('language') || 'english';
    });
    
    const [showThemeOptions, setShowThemeOptions] = useState(false);
    const [showLanguageOptions, setShowLanguageOptions] = useState(false);
    
    // Available themes
    const themes = [
        { name: 'blue', primary: '#002fff', hover: '#00aeff', background: '#000000' },
        { name: 'red', primary: '#ff2200', hover: '#ff6b00', background: '#000000' },
        { name: 'green', primary: '#00b300', hover: '#00ff22', background: '#000000' },
        { name: 'purple', primary: '#6600cc', hover: '#9933ff', background: '#000000' }
    ];
    
    // Available languages
    const languages = [
        { code: 'english', name: 'English' },
        { code: 'mongolian', name: 'Монгол хэл' }
    ];
    
    // Apply theme when it changes
    useEffect(() => {
        document.documentElement.style.setProperty('--color-primary', themes.find(t => t.name === theme)?.primary);
        document.documentElement.style.setProperty('--color-hover', themes.find(t => t.name === theme)?.hover);
        
        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    // Save language preference
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);
    
    // Theme change handler
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        setShowThemeOptions(false);
    };
    
    // Language change handler
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        setShowLanguageOptions(false);
    };
    
    // Toggle theme options display
    const toggleThemeOptions = () => {
        setShowThemeOptions(!showThemeOptions);
        setShowLanguageOptions(false);
    };
    
    // Toggle language options display
    const toggleLanguageOptions = () => {
        setShowLanguageOptions(!showLanguageOptions);
        setShowThemeOptions(false);
    };
    
    return(
        <div className="customize-container">
            <h1>{language === 'english' ? 'Customize' : 'Тохиргоо'}</h1>
            <p>{language === 'english' ? 'You can customize your experience here' : 'Та энд өөрийн туршлагыг тохируулах боломжтой'}</p>
            
            <div className="customize-section">
                <h2>{language === 'english' ? 'Theme' : 'Загвар'}</h2>
                <div className="theme-preview">
                    <div className="current-theme" style={{ backgroundColor: themes.find(t => t.name === theme)?.primary }}></div>
                    <span className="current-theme-name">
                        {language === 'english' ? `Current: ${theme}` : `Одоогийн: ${theme}`}
                    </span>
                </div>
                
                <div className="customize-options">
                    <button className="theme-btn" onClick={toggleThemeOptions}>
                        {language === 'english' ? 'Change Theme' : 'Загвар солих'}
                    </button>
                    
                    {showThemeOptions && (
                        <div className="options-dropdown">
                            {themes.map(t => (
                                <div 
                                    key={t.name} 
                                    className="theme-option" 
                                    onClick={() => handleThemeChange(t.name)}
                                >
                                    <div className="theme-color" style={{ backgroundColor: t.primary }}></div>
                                    <span>{t.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="customize-section">
                <h2>{language === 'english' ? 'Language' : 'Хэл'}</h2>
                <div className="current-selection">
                    {language === 'english' ? 'Current: English' : 'Одоогийн: Монгол хэл'}
                </div>
                
                <div className="customize-options">
                    <button className="language-btn" onClick={toggleLanguageOptions}>
                        {language === 'english' ? 'Change Language' : 'Хэл солих'}
                    </button>
                    
                    {showLanguageOptions && (
                        <div className="options-dropdown">
                            {languages.map(lang => (
                                <div 
                                    key={lang.code} 
                                    className="language-option" 
                                    onClick={() => handleLanguageChange(lang.code)}
                                >
                                    {lang.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="reset-section">
                <button 
                    className="reset-btn"
                    onClick={() => {
                        setTheme('blue');
                        setLanguage('english');
                    }}
                >
                    {language === 'english' ? 'Reset to Defaults' : 'Үндсэн тохиргоонд шилжих'}
                </button>
            </div>
            
            <div className="ai-attribution">
                <p>This page made by 100% AI</p>
            </div>
        </div>
    );
}