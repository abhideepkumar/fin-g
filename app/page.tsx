'use client'

import Link from 'next/link'
import { BookOpen, TrendingUp, Users } from 'lucide-react'
import { useLanguage } from './contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function Home() {
  const { t, language } = useLanguage()

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <motion.section 
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">{t('welcome')}</h1>
          <p className="text-2xl mb-8 text-gray-800">{t('your_trusted_partner')}</p>
          <div className="flex justify-center space-x-4">
            <Link href="/register" className="btn-primary text-lg">
              {t('start_journey')}
            </Link>
            <Link href="/learn" className="btn-secondary text-lg">
              {t('learn_more')}
            </Link>
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">{t('your_path')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('learn'), icon: BookOpen, description: t('learn_description'), color: 'blue' },
              { title: t('invest'), icon: TrendingUp, description: t('invest_description'), color: 'teal' },
              { title: t('community'), icon: Users, description: t('community_description'), color: 'purple' },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className={`w-12 h-12 mb-6 text-${feature.color}-500`} />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">{t('hear_from_women')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Lakshmi', village: 'Rajasthan', quote: t('lakshmi_quote') },
              { name: 'Priya', village: 'Tamil Nadu', quote: t('priya_quote') },
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
                whileHover={{ scale: 1.03 }}
              >
                <p className="mb-6 text-gray-700 italic text-lg">{testimonial.quote}</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}, {testimonial.village}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="text-center bg-blue-600 p-12 rounded-2xl shadow-lg"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">{t('join_community')}</h2>
          <p className="text-2xl mb-8 text-white">{t('connect')}</p>
          <Link href="/community" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
            {t('join')}
          </Link>
        </motion.section>
      </div>
    </div>
  )
}

