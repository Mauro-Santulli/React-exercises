import { LanguageContext } from './LanguageContext';
import { DisplayLanguage } from "./DisplayLanguage";
import { useState } from 'react';

export default function App() {
    const [language, setLanguage] = useState("en")


    function handleLanguageChange(event) {
        setLanguage(event.target.value)
    }
    return (
        <div>
            <div>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>
            </div>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />

            </LanguageContext.Provider>
        </div>
    )

}

