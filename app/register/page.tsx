'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from '../contexts/LanguageContext'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
  { code: 'ml', name: 'മലയാളം (Malayalam)' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
  { code: 'or', name: 'ଓଡ଼ିଆ (Odia)' },
  { code: 'as', name: 'অসমীয়া (Assamese)' },
]

type FormStep = 'registration' | 'assessment'

export default function RegisterPage() {
  const router = useRouter()
  const { setLanguage } = useLanguage()
  const [currentStep, setCurrentStep] = useState<FormStep>('registration')
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    language: '',
    goals: '',
  })

  const [assessmentAnswers, setAssessmentAnswers] = useState({
    experience: '',
    knowledge: '',
    goals: '',
    risk: '',
    timeframe: '',
  })

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('assessment')
  }

  const handleAssessmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send both formData and assessmentAnswers to your backend
    console.log('Registration Data:', formData)
    console.log('Assessment Answers:', assessmentAnswers)
    router.push('/dashboard')
  }

  const handleLanguageChange = (value: string) => {
    setFormData(prev => ({ ...prev, language: value }))
    setLanguage(value) // Update the app's language context
  }

  if (currentStep === 'registration') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-peacock-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-heading">Register</CardTitle>
            <CardDescription className="text-center">Join FinG to start your financial journey</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select
                  value={formData.language}
                  onValueChange={handleLanguageChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Financial Goals</Label>
                <Input
                  id="goals"
                  placeholder="Enter your financial goals"
                  value={formData.goals}
                  onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-peacock-600 hover:bg-peacock-700">
                Register
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="text-peacock-600 hover:text-peacock-700">
                  Login
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-peacock-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-heading">Financial Assessment</CardTitle>
          <CardDescription className="text-center">Help us understand your financial background</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAssessmentSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>What is your experience with financial management?</Label>
              <Select
                value={assessmentAnswers.experience}
                onValueChange={(value) => setAssessmentAnswers(prev => ({ ...prev, experience: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">No prior experience</SelectItem>
                  <SelectItem value="intermediate">Some experience</SelectItem>
                  <SelectItem value="advanced">Experienced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>How would you rate your financial knowledge?</Label>
              <Select
                value={assessmentAnswers.knowledge}
                onValueChange={(value) => setAssessmentAnswers(prev => ({ ...prev, knowledge: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your knowledge level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic understanding</SelectItem>
                  <SelectItem value="moderate">Moderate understanding</SelectItem>
                  <SelectItem value="advanced">Advanced understanding</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>What are your primary financial goals?</Label>
              <Select
                value={assessmentAnswers.goals}
                onValueChange={(value) => setAssessmentAnswers(prev => ({ ...prev, goals: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your primary goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="savings">Building savings</SelectItem>
                  <SelectItem value="investment">Learning about investments</SelectItem>
                  <SelectItem value="business">Starting a business</SelectItem>
                  <SelectItem value="education">Children's education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>How comfortable are you with financial risk?</Label>
              <Select
                value={assessmentAnswers.risk}
                onValueChange={(value) => setAssessmentAnswers(prev => ({ ...prev, risk: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your risk comfort level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Very conservative</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="aggressive">Comfortable with risk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>What is your preferred learning timeframe?</Label>
              <Select
                value={assessmentAnswers.timeframe}
                onValueChange={(value) => setAssessmentAnswers(prev => ({ ...prev, timeframe: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your preferred timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quick">Quick (1-2 months)</SelectItem>
                  <SelectItem value="moderate">Moderate (3-6 months)</SelectItem>
                  <SelectItem value="comprehensive">Comprehensive (6+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-peacock-600 hover:bg-peacock-700">
              Submit Assessment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

