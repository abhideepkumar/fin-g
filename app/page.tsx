'use client'

import Link from 'next/link'
import { BookOpen, Dumbbell, Sprout } from 'lucide-react'
import { useLanguage } from './contexts/LanguageContext'

export default function Home() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-saffron-50">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-16 indian-border bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-peacock-800 font-heading">{t('welcome')}</h1>
          <p className={`text-xl mb-8 text-saffron-800 ${language === 'hi' ? 'font-hindi' : ''}`}>{t('your_trusted_partner')}</p>
          <div className="flex justify-center space-x-4">
            <Link href="/register" className="bg-saffron-500 text-white px-6 py-3 rounded-full hover:bg-saffron-600 transition duration-300 text-lg font-semibold">
              {t('start_journey')}
            </Link>
            <Link href="/register" className="bg-peacock-100 text-peacock-800 px-6 py-3 rounded-full hover:bg-peacock-200 transition duration-300 text-lg font-semibold">
              {t('register')}
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-peacock-800 font-heading">{t('your_path')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('learn'), icon: BookOpen, description: t('learn_description'), color: 'saffron' },
              { title: t('practice'), icon: Dumbbell, description: t('practice_description'), color: 'peacock' },
              { title: t('grow'), icon: Sprout, description: t('grow_description'), color: 'marigold' },
            ].map((stage, index) => (
              <div key={index} className={`text-center p-6 border-2 border-${stage.color}-500 rounded-lg shadow-md bg-white hover:bg-${stage.color}-50 transition-colors duration-300`}>
                <stage.icon className={`w-12 h-12 mx-auto mb-4 text-${stage.color}-500`} />
                <h3 className="text-xl font-semibold mb-2 text-peacock-700 font-heading">{stage.title}</h3>
                <p className={`text-saffron-800 ${language === 'hi' ? 'font-hindi' : ''}`}>{stage.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-peacock-800 font-heading">{t('hear_from_women')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Lakshmi', village: 'Rajasthan', quote: t('lakshmi_quote') },
              { name: 'Priya', village: 'Tamil Nadu', quote: t('priya_quote') },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-marigold-300">
                <p className={`mb-4 text-peacock-700 italic ${language === 'hi' ? 'font-hindi' : ''}`}>"{testimonial.quote}"</p>
                <p className="font-semibold text-saffron-800">{testimonial.name}, {testimonial.village}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-peacock-100 p-8 rounded-lg indian-border">
          <h2 className="text-3xl font-bold mb-4 text-peacock-800 font-heading">{t('join_community')}</h2>
          <p className={`text-xl mb-8 text-saffron-800 ${language === 'hi' ? 'font-hindi' : ''}`}>{t('connect')}</p>
          <Link href="/community" className="bg-saffron-500 text-white px-6 py-3 rounded-full hover:bg-saffron-600 transition duration-300 text-lg font-semibold">
            {t('join')}
          </Link>
        </section>
      </div>
      <div className="fixed inset-0 pointer-events-none rangoli-bg"></div>
    </div>
  )
}

