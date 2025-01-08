import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bell, AlertTriangle, TrendingUp, PiggyBank } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function SmartAlerts({ dailySpent, dailyLimit, onDismiss }) {
  const percentageSpent = (dailySpent / dailyLimit) * 100

  return (
    <AnimatePresence>
      {percentageSpent > 80 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 w-96 z-50"
        >
          <Alert variant="destructive" className="border-red-500">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Spending Alert</AlertTitle>
            <AlertDescription className="mt-2">
              <div className="space-y-2">
                <p>You've spent {percentageSpent.toFixed(0)}% of your daily limit</p>
                <Progress value={percentageSpent} className="h-2" />
                <div className="flex justify-between text-xs">
                  <span>₹{dailySpent} spent</span>
                  <span>₹{dailyLimit} limit</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-2"
                  onClick={onDismiss}
                >
                  Got it
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

