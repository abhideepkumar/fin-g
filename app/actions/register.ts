'use server'

interface RegistrationData {
  name: string
  age: string
  gender: string
  phone: string
  language: string
  goals: string
}

interface AssessmentData {
  experience: string
  knowledge: string
  goals: string
  risk: string
  timeframe: string
}

export async function registerUser(formData: RegistrationData, assessmentData: AssessmentData) {
  // Here you would typically:
  // 1. Validate the input
  // 2. Create a user record in your database
  // 3. Generate a personalized learning path based on assessment
  // 4. Return the user data and learning path

  // For now, we'll return a mock response
  const learningPath = generateLearningPath(assessmentData)
  
  return {
    success: true,
    user: {
      id: 'user_' + Math.random().toString(36).substr(2, 9),
      ...formData
    },
    learningPath
  }
}

function generateLearningPath(assessment: AssessmentData) {
  const modules = []

  // Basic financial literacy (always included)
  modules.push({
    id: 'basic_1',
    title: 'Understanding Money Basics',
    level: 'beginner',
    required: true
  })

  // Add modules based on experience level
  if (assessment.experience === 'beginner') {
    modules.push({
      id: 'basic_2',
      title: 'Budgeting Fundamentals',
      level: 'beginner',
      required: true
    })
  }

  // Add modules based on goals
  if (assessment.goals === 'investment') {
    modules.push({
      id: 'invest_1',
      title: 'Introduction to Investments',
      level: assessment.knowledge === 'basic' ? 'beginner' : 'intermediate',
      required: true
    })
  }

  if (assessment.goals === 'business') {
    modules.push({
      id: 'biz_1',
      title: 'Small Business Basics',
      level: 'intermediate',
      required: true
    })
  }

  // Add risk-related modules
  if (assessment.risk === 'aggressive') {
    modules.push({
      id: 'risk_1',
      title: 'Understanding Investment Risks',
      level: 'advanced',
      required: false
    })
  }

  // Adjust module sequence based on timeframe
  const isQuickPath = assessment.timeframe === 'quick'
  
  return {
    modules,
    estimatedDuration: isQuickPath ? '4-8 weeks' : '12-24 weeks',
    intensity: isQuickPath ? 'high' : 'moderate',
    recommended: true
  }
}

