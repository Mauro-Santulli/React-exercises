import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        CURRENT_LAN: "ENGLISH"
    },
    it: {
        CURRENT_LAN: "ITALIANO"
    },
}

export function DisplayLanguage() {

    const language = useContext(LanguageContext)
    return (

        <>
            <h1>Current language: {language}</h1>

        </>
    )

}