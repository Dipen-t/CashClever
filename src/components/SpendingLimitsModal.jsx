import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Bell, Lock, Shield, Sparkles, AlertTriangle, Smartphone, Coffee, ShoppingBag, Gamepad } from 'lucide-react'
import { motion } from 'framer-motion'

export function SpendingLimitsModal({ isOpen, onClose }) {
  const [dailyLimit, setDailyLimit] = useState(100)
  const [weeklyLimit, setWeeklyLimit] = useState(500)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [parentalLockEnabled, setParentalLockEnabled] = useState(false)
  const [emergencyFund, setEmergencyFund] = useState(50)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    { id: 'food', name: 'Food & Drinks', icon: Coffee, limit: 30, spent: 15 },
    { id: 'shopping', name: 'Shopping', icon: ShoppingBag, limit: 50, spent: 35 },
    { id: 'entertainment', name: 'Entertainment', icon: Gamepad, limit: 20, spent: 5 }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Smart Spending Limits
          </DialogTitle>
          <DialogDescription>
            Set and manage your daily spending limits and controls
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Main Limits Section */}
          <div className="space-y-4">
            <Label>Daily Spending Limit</Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[dailyLimit]}
                onValueChange={(value) => setDailyLimit(value[0])}
                max={200}
                step={10}
                className="flex-1"
              />
              <div className="w-20">
                <Input
                  type="number"
                  value={dailyLimit}
                  onChange={(e) => setDailyLimit(Number(e.target.value))}
                />
              </div>
            </div>
            <Progress value={(75/dailyLimit) * 100} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Today's Spending: ₹75</span>
              <span>Limit: ₹{dailyLimit}</span>
            </div>
          </div>

          {/* Category Limits */}
          <div className="space-y-4">
            <Label>Category Limits</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`p-4 cursor-pointer ${
                      selectedCategory === category.id ? 'border-primary' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <category.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant={category.spent > category.limit ? "destructive" : "secondary"}>
                        ₹{category.spent}/₹{category.limit}
                      </Badge>
                    </div>
                    <Progress 
                      value={(category.spent/category.limit) * 100} 
                      className="h-2 mt-2"
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emergency Fund */}
          <div className="space-y-4">
            <Label>Emergency Fund</Label>
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertDescription>
                Keep some money aside for unexpected expenses
              </AlertDescription>
            </Alert>
            <div className="flex items-center gap-4">
              <Slider
                value={[emergencyFund]}
                onValueChange={(value) => setEmergencyFund(value[0])}
                max={100}
                step={5}
                className="flex-1"
              />
              <div className="w-20">
                <Input
                  type="number"
                  value={emergencyFund}
                  onChange={(e) => setEmergencyFund(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Smart Controls */}
          <div className="space-y-4">
            <Label>Smart Controls</Label>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Spending Alerts</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get notified when nearing limits
                  </p>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Parental Lock</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Require parent approval above limit
                  </p>
                </div>
                <Switch
                  checked={parentalLockEnabled}
                  onCheckedChange={setParentalLockEnabled}
                />
              </div>
            </div>
          </div>

          {/* Warning Section */}
          {dailyLimit > 150 && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                This daily limit seems high. Consider reducing it to build better spending habits.
              </AlertDescription>
            </Alert>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-800">
              Save Limits
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}

