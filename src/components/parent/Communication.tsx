import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner@2.0.3';
import { 
  MessageSquare, 
  Send, 
  User, 
  Clock,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

export function Communication() {
  const [messageSubject, setMessageSubject] = useState('');
  const [messageRecipient, setMessageRecipient] = useState('');
  const [messageContent, setMessageContent] = useState('');

  const messages = [
    {
      from: 'Attendance System (Automated)',
      subject: '⚠️ Low Attendance Alert - Action Required',
      date: '2024-01-16',
      time: '9:00 AM',
      message: 'URGENT: Your child Emily\'s attendance has dropped to 82%, which is below the required 85% threshold. Regular attendance is crucial for academic success. Please contact the school administration if there are any concerns.',
      status: 'unread',
      type: 'automated-urgent'
    },
    {
      from: 'Ms. Johnson',
      subject: 'Emily\'s Progress in Mathematics',
      date: '2024-01-14',
      time: '2:30 PM',
      message: 'Emily is showing excellent progress in Mathematics. She has improved her problem-solving skills significantly.',
      status: 'read',
      type: 'received'
    },
    {
      from: 'Mr. Williams',
      subject: 'Science Project Feedback',
      date: '2024-01-12',
      time: '10:15 AM',
      message: 'Emily\'s science project on renewable energy was outstanding. She demonstrated excellent research skills.',
      status: 'read',
      type: 'received'
    },
    {
      from: 'You',
      subject: 'Regarding Emily\'s Attendance',
      date: '2024-01-10',
      time: '4:45 PM',
      message: 'Thank you for your understanding regarding Emily\'s absence last week due to illness.',
      status: 'sent',
      type: 'sent'
    },
    {
      from: 'School Administration',
      subject: 'Parent-Teacher Conference',
      date: '2024-01-08',
      time: '9:00 AM',
      message: 'Reminder: Parent-Teacher conference is scheduled for January 20th at 2:00 PM.',
      status: 'read',
      type: 'received'
    },
  ];

  const teachers = [
    { name: 'Ms. Johnson', subject: 'Mathematics', email: 'johnson@school.edu', phone: '(555) 123-4567' },
    { name: 'Mr. Williams', subject: 'Science', email: 'williams@school.edu', phone: '(555) 123-4568' },
    { name: 'Mrs. Davis', subject: 'English', email: 'davis@school.edu', phone: '(555) 123-4569' },
    { name: 'Mr. Brown', subject: 'History', email: 'brown@school.edu', phone: '(555) 123-4570' },
  ];

  const upcomingMeetings = [
    { 
      title: 'Parent-Teacher Conference', 
      teacher: 'Ms. Johnson (Mathematics)', 
      date: '2024-01-20', 
      time: '2:00 PM',
      location: 'Room 204'
    },
    { 
      title: 'Science Project Discussion', 
      teacher: 'Mr. Williams (Science)', 
      date: '2024-01-25', 
      time: '3:30 PM',
      location: 'Science Lab'
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setMessageSubject('');
    setMessageRecipient('');
    setMessageContent('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Communication</h1>
        <p className="text-muted-foreground">Connect with teachers and school administration</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <MessageSquare className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Unread Messages</p>
              <p className="text-2xl font-bold text-red-600">1</p>
              <p className="text-sm text-red-600">Urgent Alert</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Upcoming Meetings</p>
              <p className="text-2xl font-bold text-green-600">{upcomingMeetings.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <User className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Teachers</p>
              <p className="text-2xl font-bold text-purple-600">{teachers.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Send New Message */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-blue-600" />
                <span>Send Message</span>
              </CardTitle>
              <CardDescription>Compose a new message to teachers or administration</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient</Label>
                  <Select value={messageRecipient} onValueChange={setMessageRecipient}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select teacher" />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((teacher, index) => (
                        <SelectItem key={index} value={teacher.name}>
                          {teacher.name} - {teacher.subject}
                        </SelectItem>
                      ))}
                      <SelectItem value="admin">School Administration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Enter message subject"
                    value={messageSubject}
                    onChange={(e) => setMessageSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Message History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <span>Message History</span>
              </CardTitle>
              <CardDescription>Recent communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`p-4 border rounded-lg ${
                      msg.type === 'automated-urgent' ? 'bg-red-50 border-red-300' :
                      msg.status === 'unread' ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <p className="font-semibold">{msg.from}</p>
                        {msg.type === 'automated-urgent' && (
                          <Badge className="bg-red-600">Urgent Alert</Badge>
                        )}
                        {msg.type === 'sent' && (
                          <Badge variant="secondary">Sent</Badge>
                        )}
                        {msg.status === 'unread' && msg.type !== 'automated-urgent' && (
                          <Badge className="bg-blue-600">New</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{msg.date} at {msg.time}</span>
                      </div>
                    </div>
                    <p className={`font-medium mb-2 ${msg.type === 'automated-urgent' ? 'text-red-900' : ''}`}>
                      {msg.subject}
                    </p>
                    <p className={`text-sm ${msg.type === 'automated-urgent' ? 'text-red-800' : 'text-gray-600'}`}>
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Meetings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>Upcoming Meetings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingMeetings.map((meeting, index) => (
                  <div key={index} className="p-3 border rounded-lg bg-green-50">
                    <p className="font-semibold text-sm mb-1">{meeting.title}</p>
                    <p className="text-sm text-muted-foreground mb-1">{meeting.teacher}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      {meeting.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {meeting.time}
                    </div>
                    <p className="text-sm text-muted-foreground">{meeting.location}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Teacher Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-blue-600" />
                <span>Teacher Contacts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teachers.map((teacher, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <p className="font-semibold">{teacher.name}</p>
                    <p className="text-sm text-muted-foreground mb-2">{teacher.subject}</p>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="h-3 w-3 mr-2" />
                        <a href={`mailto:${teacher.email}`} className="hover:text-blue-600">
                          {teacher.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Phone className="h-3 w-3 mr-2" />
                        {teacher.phone}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
