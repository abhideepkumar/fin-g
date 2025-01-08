import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center px-4 py-8">
      <Card className="max-w-3xl w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary-800">About FinG</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-center text-primary-700">
            FinG is your trusted partner for financial growth and independence, 
            specifically designed for rural Indian women.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary-700">Our Mission</h2>
            <p>
              We aim to empower rural women with the knowledge and tools they need to 
              make informed financial decisions, build savings, and create a secure future 
              for themselves and their families.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary-700">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Easy-to-understand financial education modules</li>
              <li>Interactive practice scenarios to apply your knowledge</li>
              <li>Safe investment opportunities tailored for beginners</li>
              <li>A supportive community of like-minded women</li>
              <li>Access to financial mentors and experts</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary-700">Why Choose FinG?</h2>
            <p>
              FinG is more than just a financial app. We understand the unique challenges 
              faced by rural Indian women and have designed our platform to address these 
              specific needs. With FinG, you're not just learning about finance - you're 
              joining a movement towards financial independence and empowerment.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/register">Start Your Journey Today</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

