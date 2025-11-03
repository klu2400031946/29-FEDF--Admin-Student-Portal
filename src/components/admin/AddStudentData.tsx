import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { toast } from 'sonner@2.0.3';
import { UserPlus, Save, AlertTriangle } from 'lucide-react';
import { checkAttendanceThreshold, sendParentNotification } from '../../utils/notifications';

export function AddStudentData() {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    email: '',
    grade: '',
    subject: '',
    marks: '',
    attendance: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    remarks: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const attendanceValue = parseFloat(formData.attendance);
    
    // Check if attendance is below threshold
    const notification = checkAttendanceThreshold(
      attendanceValue,
      formData.name,
      formData.studentId,
      formData.parentName,
      formData.parentEmail,
      formData.parentPhone
    );
    
    if (notification) {
      // Send notification to parent
      const sent = sendParentNotification(notification);
      
      if (sent) {
        toast.warning(
          `⚠️ Low Attendance Alert: ${formData.name}'s attendance (${attendanceValue}%) is below 85%. Automated notification sent to ${formData.parentName} at ${formData.parentEmail}.`,
          { duration: 6000 }
        );
      }
    } else {
      toast.success('Student data saved successfully!');
    }
    
    // Reset form
    setFormData({
      studentId: '',
      name: '',
      email: '',
      grade: '',
      subject: '',
      marks: '',
      attendance: '',
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      remarks: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Add Student Data</h1>
        <p className="text-muted-foreground">Enter student performance and attendance information.</p>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserPlus className="h-5 w-5 text-blue-600" />
              <span>Student Information</span>
            </CardTitle>
            <CardDescription>
              Fill in the student's academic performance data and parent contact details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Low Attendance Warning */}
              {formData.attendance && formData.parentEmail && parseFloat(formData.attendance) < 85 && (
                <Alert variant="destructive" className="border-red-500 bg-red-50">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Low Attendance Alert</AlertTitle>
                  <AlertDescription>
                    Attendance is below 85% ({formData.attendance}%). An automated notification will be sent to {formData.parentName || 'the parent'} at {formData.parentEmail} when this form is submitted.
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Student Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input
                      id="studentId"
                      placeholder="e.g., STU001"
                      value={formData.studentId}
                      onChange={(e) => handleInputChange('studentId', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., John Smith"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Student Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g., john.smith@school.edu"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade/Class</Label>
                    <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grade-9">Grade 9</SelectItem>
                        <SelectItem value="grade-10">Grade 10</SelectItem>
                        <SelectItem value="grade-11">Grade 11</SelectItem>
                        <SelectItem value="grade-12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Parent/Guardian Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent Name</Label>
                    <Input
                      id="parentName"
                      placeholder="e.g., Sarah Smith"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentEmail">Parent Email</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      placeholder="e.g., sarah.smith@email.com"
                      value={formData.parentEmail}
                      onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentPhone">Parent Phone</Label>
                    <Input
                      id="parentPhone"
                      type="tel"
                      placeholder="e.g., (555) 123-4567"
                      value={formData.parentPhone}
                      onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Academic Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="geography">Geography</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="marks">Marks (out of 100)</Label>
                    <Input
                      id="marks"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="e.g., 85"
                      value={formData.marks}
                      onChange={(e) => handleInputChange('marks', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attendance">Attendance %</Label>
                    <Input
                      id="attendance"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="e.g., 92"
                      value={formData.attendance}
                      onChange={(e) => handleInputChange('attendance', e.target.value)}
                      required
                      className={formData.attendance && parseFloat(formData.attendance) < 85 ? 'border-red-500 focus-visible:ring-red-500' : ''}
                    />
                    {formData.attendance && parseFloat(formData.attendance) < 85 && (
                      <p className="text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠️</span>
                        Low attendance alert will be sent to parent
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="remarks">Remarks</Label>
                <Textarea
                  id="remarks"
                  placeholder="Additional comments about student performance..."
                  value={formData.remarks}
                  onChange={(e) => handleInputChange('remarks', e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => setFormData({
                  studentId: '',
                  name: '',
                  email: '',
                  grade: '',
                  subject: '',
                  marks: '',
                  attendance: '',
                  parentName: '',
                  parentEmail: '',
                  parentPhone: '',
                  remarks: ''
                })}>
                  Reset
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Student Data
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Automated Notification Info */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-blue-600" />
              <span>Automated Notification System</span>
            </CardTitle>
            <CardDescription>
              How the attendance alert system works
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <p>
                  <strong>Attendance Threshold:</strong> When a student's attendance drops below 85%, the system automatically triggers a notification.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <p>
                  <strong>Parent Notification:</strong> An automated message is sent to the parent's email address with details about the attendance concern.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <p>
                  <strong>Real-time Alerts:</strong> Parents receive immediate notification through the parent portal and email.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <p>
                  <strong>Dashboard Tracking:</strong> All low attendance alerts are tracked on the admin dashboard for follow-up.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Entries */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Entries</CardTitle>
            <CardDescription>
              Last 5 student records added
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { id: 'STU123', name: 'Emma Thompson', subject: 'Mathematics', marks: 96, date: '2024-01-15', parent: 'Linda Thompson' },
                { id: 'STU124', name: 'James Wilson', subject: 'Science', marks: 94, date: '2024-01-15', parent: 'Robert Wilson' },
                { id: 'STU125', name: 'Sofia Chen', subject: 'English', marks: 92, date: '2024-01-14', parent: 'Ming Chen' },
                { id: 'STU126', name: 'Marcus Johnson', subject: 'History', marks: 91, date: '2024-01-14', parent: 'Karen Johnson' },
                { id: 'STU127', name: 'Lisa Anderson', subject: 'Geography', marks: 88, date: '2024-01-13', parent: 'David Anderson' }
              ].map((entry) => (
                <div key={entry.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{entry.name}</p>
                    <p className="text-sm text-muted-foreground">{entry.id} • {entry.subject}</p>
                    <p className="text-sm text-muted-foreground">Parent: {entry.parent}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{entry.marks}%</p>
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
