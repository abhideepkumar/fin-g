'use client'

import React, { createContext, useState, useCallback, useContext } from 'react'

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const t = useCallback((key: string) => {
    return translations[language][key] || key
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations: { [key: string]: { [key: string]: string } } = {
  en: {
    'home': 'Home',
    'learn': 'Learn',
    'practice': 'Practice',
    'invest': 'Invest',
    'community': 'Community',
    'welcome': 'Welcome to FinG',
    'your_trusted_partner': 'Your trusted partner for financial growth and independence',
    'start_journey': 'Start Your Journey',
    'your_path': 'Your Path to Financial Success',
    'learn_description': 'Gain easy-to-understand financial knowledge',
    'practice_description': 'Apply your skills safely without risk',
    'grow': 'Grow',
    'grow_description': 'Watch your money and confidence grow',
    'hear_from_women': 'Hear from Women Like You',
    'lakshmi_quote': "FinG helped me start my own small business. I'm now financially independent!",
    'priya_quote': "I learned how to save and invest for my children's future. It's given me peace of mind.",
    'join_community': 'Join Our Supportive Community',
    'connect': 'Connect with other women, share experiences, and grow together',
    'join': 'Join the Community',
    'footer_description': 'Empowering rural women with financial literacy and investment opportunities.',
    'quick_links': 'Quick Links',
    'about_us': 'About Us',
    'contact': 'Contact',
    'privacy_policy': 'Privacy Policy',
    'terms_of_service': 'Terms of Service',
    'connect_with_us': 'Connect With Us',
    'all_rights_reserved': 'All rights reserved.',
    'register': 'Register',
    'login': 'Login',
  },
  hi: {
    'home': 'होम',
    'learn': 'सीखें',
    'practice': 'अभ्यास',
    'invest': 'निवेश',
    'community': 'समुदाय',
    'welcome': 'FinG में आपका स्वागत है',
    'your_trusted_partner': 'वित्तीय विकास और स्वतंत्रता के लिए आपका विश्वसनीय साथी',
    'start_journey': 'अपनी यात्रा शुरू करें',
    'your_path': 'वित्तीय सफलता का आपका मार्ग',
    'learn_description': 'आसानी से समझने योग्य वित्तीय ज्ञान प्राप्त करें',
    'practice_description': 'अपने कौशल का सुरक्षित रूप से बिना जोखिम के अभ्यास करें',
    'grow': 'बढ़ें',
    'grow_description': 'अपने पैसे और आत्मविश्वास को बढ़ते देखें',
    'hear_from_women': 'आप जैसी महिलाओं से सुनें',
    'lakshmi_quote': "FinG ने मुझे अपना छोटा व्यवसाय शुरू करने में मदद की। अब मैं आर्थिक रूप से स्वतंत्र हूं!",
    'priya_quote': "मैंने अपने बच्चों के भविष्य के लिए बचत और निवेश करना सीखा। इसने मुझे मानसिक शांति दी है।",
    'join_community': 'हमारे सहायक समुदाय में शामिल हों',
    'connect': 'अन्य महिलाओं से जुड़ें, अनुभव साझा करें और साथ में बढ़ें',
    'join': 'समुदाय में शामिल हों',
    'footer_description': 'ग्रामीण महिलाओं को वित्तीय साक्षरता और निवेश के अवसरों के साथ सशक्त बनाना।',
    'quick_links': 'त्वरित लिंक',
    'about_us': 'हमारे बारे में',
    'contact': 'संपर्क करें',
    'privacy_policy': 'गोपनीयता नीति',
    'terms_of_service': 'सेवा की शर्तें',
    'connect_with_us': 'हमसे जुड़ें',
    'all_rights_reserved': 'सर्वाधिकार सुरक्षित।',
    'register': 'पंजीकरण करें',
    'login': 'लॉग इन करें',
  },
}

