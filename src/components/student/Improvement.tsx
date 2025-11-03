import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Alert, AlertDescription } from '../ui/alert';
import { AlertTriangle, BookOpen, Target, CheckCircle, Clock, TrendingUp, Lightbulb } from 'lucide-react';

const weakSubjects = [
  {
    subject: 'Geography',
    currentScore: 82,
    targetScore: 90,
    weakness: 'Map reading and spatial analysis',
    priority: 'High',
    difficulty: 'Medium',
    timeToImprove: '3-4 weeks',
    resources: ['Interactive maps', 'Practice quizzes', 'Study groups']
  },
  {
    subject: 'Mathematics',
    currentScore: 92,
    targetScore: 95,
    weakness: 'Complex problem solving',
    priority: 'Medium',
    difficulty: 'High',
    timeToImprove: '4-6 weeks',
    resources: ['Additional practice sets', 'Tutoring sessions', 'Online tutorials']
  }
];

const recommendations = [
  {
    id: 1,
    title: 'Join Geography Study Group',
    description: 'Connect with peers who excel in geography for collaborative learning.',
    priority: 'High',
    estimatedTime: '2 hours/week',
    difficulty: 'Easy',
    category: 'Peer Learning',
    icon: BookOpen
  },
  {
    id: 2,
    title: 'Use Interactive Map Tools',
    description: 'Practice with online geography tools to improve spatial understanding.',
    priority: 'High',
    estimatedTime: '1 hour/day',
    difficulty: 'Easy',
    category: 'Study Tools',
    icon: Target
  },
  {
    id: 3,
    title: 'Schedule Math Tutoring',
    description: 'Get personalized help with complex problem-solving techniques.',
    priority: 'Medium',
    estimatedTime: '1 hour/week',
    difficulty: 'Medium',
    category: 'Professional Help',
    icon: TrendingUp
  },
  {
    id: 4,
    title: 'Daily Problem Practice',
    description: 'Solve 3-5 challenging math problems daily to build confidence.',
    priority: 'Medium',
    estimatedTime: '30 min/day',
    difficulty: 'Medium',
    category: 'Practice',
    icon: CheckCircle
  }
];

const studyPlan = [
  {
    week: 'Week 1-2',
    focus: 'Geography Fundamentals',
    tasks: [
      'Review basic map reading techniques',
      'Practice identifying geographical features',
      'Join study group sessions'
    ],
    target: 'Improve to 85%'
  },
  {
    week: 'Week 3-4',
    focus: 'Advanced Geography & Math Review',
    tasks: [
      'Advanced spatial analysis practice',
      'Start math problem-solving sessions',
      'Take practice geography quiz'
    ],
    target: 'Reach 87% in Geography'
  },
  {
    week: 'Week 5-6',
    focus: 'Mathematics Enhancement',
    tasks: [
      'Focus on complex math problems',
      'Continue geography maintenance',
      'Seek tutor feedback'
    ],
    target: 'Achieve 94% in Math'
  }
];

export function Improvement() {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'Medium':
        return <Badge className="bg-yellow-100 text-yellow-700">Medium Priority</Badge>;
      case 'Low':
        return <Badge variant="secondary">Low Priority</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Improvement Plan</h1>
        <p className="text-muted-foreground">Personalized recommendations to enhance your academic performance.</p>
      </div>

      {/* Alert for immediate attention */}
      <Alert className="border-orange-200 bg-orange-50">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800">
          Focus on Geography this month to reach your target score. You're making great progress!
        </AlertDescription>
      </Alert>

      {/* Weak Subjects Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {weakSubjects.map((subject, index) => (
          <Card key={index} className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{subject.subject}</CardTitle>
                {getPriorityBadge(subject.priority)}
              </div>
              <CardDescription>
                Current weakness: {subject.weakness}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Current Score: {subject.currentScore}%</span>
                    <span>Target: {subject.targetScore}%</span>
                  </div>
                  <Progress 
                    value={(subject.currentScore / subject.targetScore) * 100} 
                    className="h-3"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {subject.targetScore - subject.currentScore} points to goal
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Difficulty</p>
                    <p className="text-muted-foreground">{subject.difficulty}</p>
                  </div>
                  <div>
                    <p className="font-medium">Time Needed</p>
                    <p className="text-muted-foreground">{subject.timeToImprove}</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium text-sm mb-2">Recommended Resources:</p>
                  <div className="flex flex-wrap gap-1">
                    {subject.resources.map((resource, resIndex) => (
                      <Badge key={resIndex} variant="outline" className="text-xs">
                        {resource}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <span>Personalized Recommendations</span>
          </CardTitle>
          <CardDescription>
            AI-generated suggestions based on your learning patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((rec) => {
              const Icon = rec.icon;
              return (
                <Card key={rec.id} className="border-dashed">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              {getPriorityBadge(rec.priority)}
                              <Badge variant="outline" className="text-xs">{rec.category}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {rec.estimatedTime} • {rec.difficulty}
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Start
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Study Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-green-500" />
            <span>6-Week Improvement Plan</span>
          </CardTitle>
          <CardDescription>
            A structured timeline to achieve your academic goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {studyPlan.map((period, index) => (
              <div key={index} className="relative">
                {index < studyPlan.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-16 bg-gray-200" />
                )}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{period.week}</h4>
                      <Badge variant="outline">{period.target}</Badge>
                    </div>
                    <h5 className="text-sm font-medium text-blue-600 mb-2">{period.focus}</h5>
                    <ul className="space-y-1">
                      {period.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Track Your Progress</CardTitle>
          <CardDescription>
            Monitor your improvement journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">2</div>
              <p className="text-sm text-muted-foreground">Recommendations Started</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <p className="text-sm text-muted-foreground">Study Sessions This Week</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">3.2%</div>
              <p className="text-sm text-muted-foreground">Average Improvement</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}