import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Lightbulb, TrendingUp, Users, BookOpen, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    type: 'individual',
    priority: 'high',
    title: 'Targeted Support for David Miller',
    description: 'Student showing consistent low performance in Mathematics. Recommend one-on-one tutoring sessions.',
    impact: 'High',
    effort: 'Medium',
    timeline: '2-3 weeks',
    actions: ['Schedule weekly tutoring', 'Provide additional practice materials', 'Monitor progress closely'],
    icon: Users,
    category: 'Student Support'
  },
  {
    id: 2,
    type: 'curriculum',
    priority: 'medium',
    title: 'Enhance Science Lab Activities',
    description: 'Science scores could improve with more hands-on laboratory experiences and practical demonstrations.',
    impact: 'Medium',
    effort: 'High',
    timeline: '1 month',
    actions: ['Plan weekly lab sessions', 'Update lab equipment', 'Train teaching assistants'],
    icon: BookOpen,
    category: 'Curriculum'
  },
  {
    id: 3,
    type: 'teaching',
    priority: 'medium',
    title: 'Implement Peer Learning Groups',
    description: 'Create study groups pairing high-performing students with those needing improvement.',
    impact: 'High',
    effort: 'Low',
    timeline: '1-2 weeks',
    actions: ['Form study groups', 'Assign peer mentors', 'Schedule group sessions'],
    icon: Users,
    category: 'Teaching Method'
  },
  {
    id: 4,
    type: 'assessment',
    priority: 'low',
    title: 'Diversify Assessment Methods',
    description: 'Include project-based assessments and presentations to accommodate different learning styles.',
    impact: 'Medium',
    effort: 'Medium',
    timeline: '2-4 weeks',
    actions: ['Design project rubrics', 'Schedule presentation dates', 'Train evaluation criteria'],
    icon: CheckCircle,
    category: 'Assessment'
  },
  {
    id: 5,
    type: 'individual',
    priority: 'high',
    title: 'Advanced Challenge for Top Performers',
    description: 'Emma Thompson and top students need advanced materials to stay engaged and challenged.',
    impact: 'Medium',
    effort: 'Low',
    timeline: '1 week',
    actions: ['Prepare advanced worksheets', 'Assign research projects', 'Offer enrichment activities'],
    icon: TrendingUp,
    category: 'Advanced Learning'
  }
];

const performanceInsights = [
  {
    insight: 'Mathematics scores show 15% improvement with visual learning aids',
    confidence: 'High',
    source: 'Class A comparison study'
  },
  {
    insight: 'Students with consistent attendance perform 23% better',
    confidence: 'Very High',
    source: 'Semester attendance analysis'
  },
  {
    insight: 'Group projects increase engagement by 40% in History class',
    confidence: 'Medium',
    source: 'Student feedback survey'
  }
];

export function Recommendations() {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-700">Medium Priority</Badge>;
      case 'low':
        return <Badge variant="secondary">Low Priority</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Recommendations</h1>
        <p className="text-muted-foreground">Personalized suggestions to improve learning outcomes and teaching effectiveness.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">High Priority</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              <div>
                <p className="text-sm font-medium">Medium Priority</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold">7</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Active</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {recommendations.map((rec) => {
          const Icon = rec.icon;
          return (
            <Card key={rec.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        {getPriorityBadge(rec.priority)}
                        <Badge variant="outline">{rec.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <Button size="sm">
                    Implement
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{rec.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Expected Impact</p>
                    <p className="text-sm text-muted-foreground">{rec.impact}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Implementation Effort</p>
                    <p className="text-sm text-muted-foreground">{rec.effort}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Timeline</p>
                    <p className="text-sm text-muted-foreground">{rec.timeline}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Recommended Actions:</p>
                  <ul className="space-y-1">
                    {rec.actions.map((action, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <span>Performance Insights</span>
          </CardTitle>
          <CardDescription>
            Data-driven insights from your classroom analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {performanceInsights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="p-1 bg-blue-100 rounded">
                  <Lightbulb className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{insight.insight}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {insight.confidence} Confidence
                    </Badge>
                    <p className="text-xs text-muted-foreground">{insight.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}