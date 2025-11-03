/**
 * Notification utility for the educational platform
 * Handles automated alerts and parent notifications
 */

export interface NotificationData {
  studentName: string;
  studentId: string;
  parentName: string;
  parentEmail: string;
  parentPhone?: string;
  type: 'attendance' | 'performance' | 'behavior' | 'general';
  value?: number;
  subject?: string;
  message: string;
  timestamp: Date;
}

/**
 * Checks if attendance is below threshold and returns notification data
 */
export function checkAttendanceThreshold(
  attendance: number,
  studentName: string,
  studentId: string,
  parentName: string,
  parentEmail: string,
  parentPhone?: string
): NotificationData | null {
  const ATTENDANCE_THRESHOLD = 85;
  
  if (attendance < ATTENDANCE_THRESHOLD) {
    return {
      studentName,
      studentId,
      parentName,
      parentEmail,
      parentPhone,
      type: 'attendance',
      value: attendance,
      message: `URGENT: Your child ${studentName}'s attendance has dropped to ${attendance}%, which is below the required ${ATTENDANCE_THRESHOLD}% threshold. Regular attendance is crucial for academic success. Please contact the school administration if there are any concerns.`,
      timestamp: new Date()
    };
  }
  
  return null;
}

/**
 * Simulates sending notification to parent
 */
export function sendParentNotification(notification: NotificationData): boolean {
  // In a real application, this would:
  // 1. Send email to parent
  // 2. Send SMS if phone number provided
  // 3. Create in-app notification
  // 4. Log notification in database
  
  console.log('📧 Sending notification to parent:', {
    to: notification.parentEmail,
    subject: `${notification.type.toUpperCase()} Alert: ${notification.studentName}`,
    message: notification.message,
    timestamp: notification.timestamp
  });
  
  // Simulate successful notification
  return true;
}

/**
 * Gets the color scheme for different notification types
 */
export function getNotificationColor(type: string): {
  bg: string;
  border: string;
  text: string;
  badge: string;
} {
  switch (type) {
    case 'urgent':
    case 'attendance':
      return {
        bg: 'bg-red-50',
        border: 'border-red-500',
        text: 'text-red-900',
        badge: 'bg-red-600'
      };
    case 'warning':
      return {
        bg: 'bg-yellow-50',
        border: 'border-yellow-300',
        text: 'text-yellow-900',
        badge: 'bg-yellow-600'
      };
    case 'success':
      return {
        bg: 'bg-green-50',
        border: 'border-green-300',
        text: 'text-green-900',
        badge: 'bg-green-600'
      };
    default:
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        text: 'text-blue-900',
        badge: 'bg-blue-600'
      };
  }
}

/**
 * Format notification message for display
 */
export function formatNotificationMessage(notification: NotificationData): string {
  const dateStr = notification.timestamp.toLocaleDateString();
  const timeStr = notification.timestamp.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  return `[${dateStr} ${timeStr}] ${notification.message}`;
}
