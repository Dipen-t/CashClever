import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bell, AlertTriangle, Wallet, PiggyBank, Lock, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export function SpendingLimitSettings() {
  const [dailyLimit, setDailyLimit] = useState(100)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [autoSave, setAutoSave] = useState(false)
  const [parentalLock, setParentalLock] = useState(false)
  const todaySpent = 75 // This would come from your state management
  const percentageSpent = (todaySpent / dailyLimit) * 100

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Spending Controls</CardTitle>
          <CardDescription>Manage your daily spending limits and notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Daily Limit Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dailyLimit">Daily Spending Limit</Label>
              <Badge 
                variant={percentageSpent > 80 ? "destructive" : "secondary"}
                className="ml-2"
              >
                {todaySpent}/{dailyLimit} spent today
              </Badge>
            </div>
            <div className="flex gap-4">
              <Input
                id="dailyLimit"
                type="number"
                value={dailyLimit}
                onChange={(e) => setDailyLimit(Number(e.target.value))}
                className="w-full"
              />
              <Button variant="outline" onClick={() => setDailyLimit(dailyLimit + 50)}>
                +50
              </Button>
            </div>
            <Progress value={percentageSpent} className="h-2" />
            {percentageSpent > 80 && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  You're close to your daily spending limit!
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Smart Features */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Spending Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get alerts when nearing your limit
                </p>
              </div>
              <Switch
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Smart Auto-Save</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically save unspent daily limit
                </p>
              </div>
              <Switch
                checked={autoSave}
                onCheckedChange={setAutoSave}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Parental Lock</Label>
                <p className="text-sm text-muted-foreground">
                  Require parent approval for limit changes
                </p>
              </div>
              <Switch
                checked={parentalLock}
                onCheckedChange={setParentalLock}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Smart Insights Card */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Insights</CardTitle>
          <CardDescription>Your spending patterns and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <motion.div
              className="p-4 rounded-lg border bg-card hover:shadow-md transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Spending Trend</h4>
                  <p className="text-sm text-muted-foreground">
                    You typically spend more on weekends. Consider adjusting your limits accordingly.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg border bg-card hover:shadow-md transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <PiggyBank className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium">Savings Potential</h4>
                  <p className="text-sm text-muted-foreground">
                    You could save ₹1,500 more this month by reducing entertainment spending.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg border bg-card hover:shadow-md transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Shield className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium">Safety Score</h4>
                  <p className="text-sm text-muted-foreground">
                    Your spending controls are well set up. Keep it up!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
