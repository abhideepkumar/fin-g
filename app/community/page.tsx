'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, MessageCircle, Users, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mentors = [
  {
    id: 1,
    name: 'Priya Sharma',
    expertise: 'Personal Finance Expert',
    experience: '10+ years in financial planning',
    rating: 4.8,
    image: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'Rahul Gupta',
    expertise: 'Investment Advisor',
    experience: '15+ years in stock market investments',
    rating: 4.9,
    image: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Anita Desai',
    expertise: 'Retirement Planning Specialist',
    experience: '12+ years in retirement and estate planning',
    rating: 4.7,
    image: '/placeholder.svg',
  },
]

const communityGroups = [
  { name: 'Budgeting Basics', members: 1250 },
  { name: 'Investment Strategies', members: 980 },
  { name: 'Savings Challenge', members: 1500 },
  { name: 'Financial Freedom', members: 1100 },
]

export default function Community() {
  const { t } = useLanguage()
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-8">
      <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-primary-800">Community and Mentorship</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary-700">Our Mentors</h2>
          <div className="space-y-4">
            {mentors.map((mentor) => (
              <Card
                key={mentor.id}
                className="cursor-pointer hover:shadow-lg transition duration-300"
                onClick={() => setSelectedMentor(mentor.id)}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{mentor.name}</CardTitle>
                    <CardDescription>{mentor.expertise}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{mentor.experience}</p>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>{mentor.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary-700">Community Groups</h2>
          <div className="grid grid-cols-2 gap-4">
            {communityGroups.map((group, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {group.members} Members
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Join Group</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedMentor && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Schedule Mentorship</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Schedule a one-on-one mentorship session with your selected mentor.  Discuss your financial goals and receive personalized guidance.</p>
          </CardContent>
          <CardFooter>
            <Button>Schedule Session</Button>
          </CardFooter>
        </Card>
      )}

      <div className="mt-8 bg-primary-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-primary-800">Join Our Community</h2>
        <p className="text-primary-700 mb-4">Connect with fellow finance enthusiasts, share your experiences, and learn from experts in our vibrant community.</p>
        <Button>
          <Users className="w-5 h-5 mr-2" />
          Join Community
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700">Community Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardHeader>
              <Award className="w-8 h-8 mx-auto text-accent-500" />
            </CardHeader>
            <CardContent>
              <p className="font-semibold">1,000+</p>
              <p className="text-sm text-muted-foreground">Mentorship Sessions</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Users className="w-8 h-8 mx-auto text-accent-500" />
            </CardHeader>
            <CardContent>
              <p className="font-semibold">5,000+</p>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="w-8 h-8 mx-auto text-accent-500" />
            </CardHeader>
            <CardContent>
              <p className="font-semibold">10,000+</p>
              <p className="text-sm text-muted-foreground">Community Posts</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Star className="w-8 h-8 mx-auto text-accent-500" />
            </CardHeader>
            <CardContent>
              <p className="font-semibold">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  )
}

