'use client'

import { useState } from 'react'
import { BookOpen, CheckCircle, Lock } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

const modules = [
  {
    id: 1,
    title: 'Financial Basics',
    description: 'Learn the fundamentals of personal finance',
    progress: 100,
    locked: false,
  },
  {
    id: 2,
    title: 'Budgeting Skills',
    description: 'Master the art of creating and sticking to a budget',
    progress: 60,
    locked: false,
  },
  {
    id: 3,
    title: 'Saving Strategies',
    description: 'Discover effective ways to save money',
    progress: 30,
    locked: false,
  },
  {
    id: 4,
    title: 'Investment Fundamentals',
    description: 'Understand the basics of investing',
    progress: 0,
    locked: true,
  },
  {
    id: 5,
    title: 'Advanced Financial Planning',
    description: 'Plan for long-term financial success',
    progress: 0,
    locked: true,
  },
]

export default function Learn() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary-800">Learning Modules</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {modules.map((module) => (
              <Card 
                key={module.id}
                className={`cursor-pointer hover:shadow-lg transition duration-300 ${module.locked ? 'opacity-50' : ''} ${module.progress === 100 ? 'bg-green-50' : 'bg-white'}`}
                onClick={() => !module.locked && setSelectedModule(module.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-primary-600" />
                    {module.title}
                    {module.locked && <Lock className="ml-2 h-4 w-4 text-muted-foreground" />}
                  </CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress 
                    value={module.progress} 
                    className={`w-full ${module.progress === 100 ? "bg-green-200" : ""}`}
                  >
                    <div 
                      className={`h-full ${module.progress === 100 ? "bg-green-500" : "bg-primary-500"}`} 
                      style={{ width: `${module.progress}%` }}
                    />
                  </Progress>
                  <p className="text-sm text-muted-foreground mt-2">{module.progress}% Complete</p>
                </CardContent>
                <CardFooter>
                  <Button variant={module.progress === 100 ? "outline" : "default"} disabled={module.locked}>
                    {module.progress === 100 ? 'Review' : 'Continue'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card className="h-fit sticky top-4">
            <CardHeader>
              <CardTitle>Selected Module</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedModule ? (
                <>
                  <h2 className="text-2xl font-semibold mb-4">
                    {modules.find((m) => m.id === selectedModule)?.title || ''}
                  </h2>
                  <p className="mb-4">
                    Module content description
                  </p>
                  <Button className="w-full">
                    Start Learning
                  </Button>
                </>
              ) : (
                <p className="text-center text-muted-foreground">
                  Select a module to view its content.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

