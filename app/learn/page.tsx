'use client'

import { useState } from 'react'
import { BookOpen, CheckCircle, Lock } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { motion } from 'framer-motion'

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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 px-4 py-8">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 gradient-text text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          Learning Modules
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-4"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            {modules.map((module) => (
              <Card 
                key={module.id}
                className={`cursor-pointer hover:shadow-lg transition duration-300 ${module.locked ? 'opacity-50' : ''} ${module.progress === 100 ? 'bg-green-50' : 'bg-white'} card-hover`}
                onClick={() => !module.locked && setSelectedModule(module.id)}
                aria-label={`${module.title} module, ${module.locked ? 'Locked' : `${module.progress}% complete`}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                    {module.title}
                    {module.locked && <Lock className="ml-2 h-4 w-4 text-gray-400" />}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress 
                    value={module.progress} 
                    className={`w-full ${module.progress === 100 ? "bg-green-200" : ""}`}
                  >
                    <div 
                      className={`h-full ${module.progress === 100 ? "bg-green-500" : "bg-blue-500"}`} 
                      style={{ width: `${module.progress}%` }}
                    />
                  </Progress>
                  <p className="text-sm text-gray-700 mt-2">{module.progress}% Complete</p>
                </CardContent>
                <CardFooter>
                  <Button variant={module.progress === 100 ? "outline" : "default"} disabled={module.locked}>
                    {module.progress === 100 ? 'Review' : 'Continue'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <Card className="h-fit sticky top-4">
              <CardHeader>
                <CardTitle className="gradient-text">Selected Module</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedModule ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                      {modules.find((m) => m.id === selectedModule)?.title || ''}
                    </h2>
                    <p className="mb-4 text-gray-700">
                      Module content description
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                      Start Learning
                    </Button>
                  </>
                ) : (
                  <p className="text-center text-gray-500">
                    Select a module to view its content.
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

