import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, TrendingUp, Star } from 'lucide-react'
import { motion } from "framer-motion"

export function GoalsTracker() {
  const goals = [
    {
      title: "New Laptop",
      current: 15000,
      target: 50000,
      deadline: "2024-06-01",
      category: "Electronics",
      progress: 30,
    },
    {
      title: "Emergency Fund",
      current: 5000,
      target: 20000,
      deadline: "2024-12-31",
      category: "Savings",
      progress: 25,
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          Financial Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 border rounded-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">{goal.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Target: ₹{goal.target.toLocaleString()}
                </p>
              </div>
              <Badge variant="secondary">{goal.category}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress: {goal.progress}%</span>
                <span className="text-green-600">₹{goal.current.toLocaleString()}</span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
              <span>₹{((goal.target - goal.current) / 6).toFixed(0)}/month needed</span>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

    