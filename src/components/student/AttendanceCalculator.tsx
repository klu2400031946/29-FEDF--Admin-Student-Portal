import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Badge } from '../ui/badge';
import { Calculator, CheckCircle, AlertTriangle, Info, TrendingUp } from 'lucide-react';

export function AttendanceCalculator() {
  const [classesAttended, setClassesAttended] = useState<string>('82');
  const [totalClasses, setTotalClasses] = useState<string>('100');
  const [futureClasses, setFutureClasses] = useState<string>('20');
  const [calculated, setCalculated] = useState(false);

  const attendedNum = parseFloat(classesAttended) || 0;
  const totalNum = parseFloat(totalClasses) || 0;
  const futureNum = parseFloat(futureClasses) || 0;

  const currentPercentage = totalNum > 0 ? (attendedNum / totalNum) * 100 : 0;
  const targetPercentage = 85;

  // Calculate classes needed to reach 85%
  const calculateClassesNeeded = () => {
    if (currentPercentage >= targetPercentage) {
      return 0;
    }
    
    // Formula: (attended + x) / (total + x) = 0.85
    // attended + x = 0.85 * (total + x)
    // attended + x = 0.85 * total + 0.85 * x
    // x - 0.85x = 0.85 * total - attended
    // 0.15x = 0.85 * total - attended
    // x = (0.85 * total - attended) / 0.15
    
    const classesNeeded = (targetPercentage / 100 * totalNum - attendedNum) / (1 - targetPercentage / 100);
    return Math.ceil(Math.max(0, classesNeeded));
  };

  const classesNeeded = calculateClassesNeeded();

  // Calculate future scenarios
  const calculateFutureScenarios = () => {
    const scenarios = [];
    for (let i = 0; i <= futureNum; i += Math.ceil(futureNum / 5)) {
      const futureAttended = attendedNum + i;
      const futureTotal = totalNum + futureNum;
      const futurePercentage = futureTotal > 0 ? (futureAttended / futureTotal) * 100 : 0;
      scenarios.push({
        attended: i,
        percentage: futurePercentage,
      });
    }
    return scenarios;
  };

  const scenarios = calculated ? calculateFutureScenarios() : [];

  const handleCalculate = () => {
    setCalculated(true);
  };

  const handleReset = () => {
    setClassesAttended('82');
    setTotalClasses('100');
    setFutureClasses('20');
    setCalculated(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Attendance Calculator</h1>
        <p className="text-muted-foreground">Calculate how many classes you need to attend to reach 85% attendance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Input Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Your Attendance Details
            </CardTitle>
            <CardDescription>Enter your current attendance statistics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="attended">Classes Attended</Label>
              <Input
                id="attended"
                type="number"
                placeholder="e.g., 82"
                value={classesAttended}
                onChange={(e) => setClassesAttended(e.target.value)}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="total">Total Classes Held</Label>
              <Input
                id="total"
                type="number"
                placeholder="e.g., 100"
                value={totalClasses}
                onChange={(e) => setTotalClasses(e.target.value)}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="future">Expected Future Classes</Label>
              <Input
                id="future"
                type="number"
                placeholder="e.g., 20"
                value={futureClasses}
                onChange={(e) => setFutureClasses(e.target.value)}
                min="0"
              />
              <p className="text-xs text-muted-foreground">
                Number of classes expected to be held in the future
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <Button onClick={handleCalculate} className="flex-1">
                Calculate
              </Button>
              <Button onClick={handleReset} variant="outline">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Current Attendance Status</CardTitle>
            <CardDescription>Your current attendance percentage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <div className="text-5xl font-bold mb-2" style={{ color: currentPercentage >= 85 ? '#22c55e' : currentPercentage >= 75 ? '#f59e0b' : '#ef4444' }}>
                {currentPercentage.toFixed(1)}%
              </div>
              <div className="flex items-center justify-center gap-2">
                {currentPercentage >= 85 ? (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Good Standing
                  </Badge>
                ) : currentPercentage >= 75 ? (
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Warning
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Below Threshold
                  </Badge>
                )}
              </div>
            </div>

            <Progress 
              value={Math.min(currentPercentage, 100)} 
              className="h-3"
            />

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{attendedNum}</div>
                <div className="text-xs text-muted-foreground">Classes Attended</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{totalNum}</div>
                <div className="text-xs text-muted-foreground">Total Classes</div>
              </div>
            </div>

            {currentPercentage < 85 && (
              <Alert className="border-orange-200 bg-orange-50">
                <Info className="h-4 w-4 text-orange-600" />
                <AlertTitle className="text-orange-800">Below Target</AlertTitle>
                <AlertDescription className="text-orange-700">
                  You need to improve your attendance to reach 85%.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Results Section */}
      {calculated && (
        <>
          {/* Classes Needed Alert */}
          {currentPercentage < 85 ? (
            <Alert className="border-blue-200 bg-blue-50">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Classes Required to Reach 85%</AlertTitle>
              <AlertDescription className="text-blue-700">
                You need to attend <strong className="font-bold">{classesNeeded} consecutive classes</strong> without any absence to reach 85% attendance.
                {classesNeeded > futureNum && (
                  <span className="block mt-2 text-orange-700">
                    ⚠️ Note: This exceeds your expected future classes ({futureNum}). You may not be able to reach 85% this semester.
                  </span>
                )}
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Great Job!</AlertTitle>
              <AlertDescription className="text-green-700">
                You have already achieved the 85% attendance target. Keep it up!
              </AlertDescription>
            </Alert>
          )}

          {/* Future Scenarios Card */}
          <Card>
            <CardHeader>
              <CardTitle>Future Attendance Scenarios</CardTitle>
              <CardDescription>
                Projected attendance if you attend different numbers of classes out of the next {futureNum} classes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scenarios.map((scenario, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">
                          Attend {scenario.attended} out of {futureNum} future classes
                        </span>
                        <Badge 
                          className={
                            scenario.percentage >= 85 
                              ? "bg-green-100 text-green-800" 
                              : scenario.percentage >= 75 
                              ? "bg-orange-100 text-orange-800" 
                              : "bg-red-100 text-red-800"
                          }
                        >
                          {scenario.percentage.toFixed(1)}%
                        </Badge>
                      </div>
                      <Progress value={Math.min(scenario.percentage, 100)} className="h-2" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Total: {attendedNum + scenario.attended}/{totalNum + futureNum} classes
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card>
            <CardHeader>
              <CardTitle>Tips to Improve Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Set reminders for your classes to avoid missing them</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Plan your schedule in advance to minimize conflicts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Communicate with teachers if you need to miss a class</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Track your attendance regularly using this calculator</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Remember: 85% attendance is required to avoid parent notifications</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
