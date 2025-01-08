'use client'

import { useState } from 'react'
import { Dumbbell, Star, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const scenarios = [
  {
    id: 1,
    title: 'Monthly Budget Planning',
    description: 'Create a balanced monthly budget for a family of four',
    difficulty: 'easy',
  },
  {
    id: 2,
    title: 'Emergency Fund Setup',
    description: 'Plan and allocate resources for an emergency fund',
    difficulty: 'medium',
  },
  {
    id: 3,
    title: 'Retirement Savings Strategy',
    description: 'Develop a long-term retirement savings plan',
    difficulty: 'hard',
  },
]

export default function Practice() {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500 text-white'
      case 'medium': return 'bg-yellow-500 text-white'
      case 'hard': return 'bg-red-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary-800">Practice Scenarios</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {scenarios.map((scenario) => (
              <Card 
                key={scenario.id}
                className="cursor-pointer hover:shadow-lg transition duration-300"
                onClick={() => setSelectedScenario(scenario.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Dumbbell className="mr-2 h-5 w-5 text-primary-600" />
                    {scenario.title}
                  </CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className={getDifficultyColor(scenario.difficulty)}>
                    {scenario.difficulty}
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card className="h-fit sticky top-4">
            <CardHeader>
              <CardTitle>Selected Scenario</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedScenario ? (
                <>
                  <h2 className="text-2xl font-semibold mb-4">
                    {scenarios.find((s) => s.id === selectedScenario)?.title || ''}
                  </h2>
                  <p className="mb-4">
                    Scenario Content Description
                  </p>
                  <Button className="w-full">
                    Start Practice
                  </Button>
                </>
              ) : (
                <p className="text-center text-muted-foreground">
                  Select a scenario to view its details and start practicing.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

