'use client'

import { useState } from 'react'
import { PiggyBank, TrendingUp, ArrowRight } from 'lucide-react'
// import { useLanguage } from '../contexts/LanguageContext' // Removed as translation keys are replaced
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const portfolioData = [
  { name: 'Stocks', value: 5000, allocation: 50 },
  { name: 'Bonds', value: 3000, allocation: 30 },
  { name: 'Real Estate', value: 1500, allocation: 15 },
  { name: 'Commodities', value: 500, allocation: 5 },
]

const recommendations = [
  { id: 1, name: 'Diversified Mutual Fund', type: 'Mutual Fund', risk: 'Moderate', returns: '8-10% p.a.' },
  { id: 2, name: 'Blue Chip Stocks', type: 'Equity', risk: 'High', returns: '12-15% p.a.' },
  { id: 3, name: 'Government Bonds', type: 'Debt', risk: 'Low', returns: '5-7% p.a.' },
]

export default function Invest() {
  // const { t } = useLanguage() // Removed as translation keys are replaced
  const [selectedRecommendation, setSelectedRecommendation] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary-800">Investment Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span>₹{item.value} ({item.allocation}%)</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Asset Allocation</h3>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden flex">
                  {portfolioData.map((item, index) => (
                    <div
                      key={index}
                      className="h-full"
                      style={{
                        width: `${item.allocation}%`,
                        backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <Card
                    key={rec.id}
                    className="cursor-pointer hover:shadow-md transition duration-300"
                    onClick={() => setSelectedRecommendation(rec.id)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{rec.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Type: {rec.type}</p>
                      <p className="text-sm text-muted-foreground">Risk: {rec.risk}</p>
                      <p className="text-sm text-muted-foreground">Expected Returns: {rec.returns}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {selectedRecommendation && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Investment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Investment details description will be shown here.</p>
            </CardContent>
            <CardFooter>
              <Button>Invest Now</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

