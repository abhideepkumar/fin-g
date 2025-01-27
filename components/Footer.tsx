'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-peacock-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 font-logo">फिंग</h3>
            <p className="text-sm">{t('footer_description')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">{t('quick_links')}</h4>
            <ul className="text-sm">
              <li><Link href="/about" className="hover:text-saffron-300">{t('about_us')}</Link></li>
              <li><Link href="/contact" className="hover:text-saffron-300">{t('contact')}</Link></li>
              <li><Link href="/privacy" className="hover:text-saffron-300">{t('privacy_policy')}</Link></li>
              <li><Link href="/terms" className="hover:text-saffron-300">{t('terms_of_service')}</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">{t('connect_with_us')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-saffron-300">Facebook</a>
              <a href="#" className="text-white hover:text-saffron-300">Twitter</a>
              <a href="#" className="text-white hover:text-saffron-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} फिंग. {t('all_rights_reserved')}
        </div>
      </div>
    </footer>
  )
}

