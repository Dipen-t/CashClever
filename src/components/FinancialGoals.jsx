import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, Trophy, TrendingUp, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function FinancialGoals() {
  const goals = [
    {
      id: 1,
      title: "New Laptop Fund",
      target: 50000,
      current: 35000,
      deadline: "2024-06-01",
      category: "Electronics",
      icon: Trophy,
    },
    {
      id: 2,
      title: "Emergency Fund",
      target: 10000,
      current: 8000,
      deadline: "2024-03-01",
      category: "Savings",
      icon: Target,
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Financial Goals</CardTitle>
        <CardDescription>Track your savings goals and milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100
            const Icon = goal.icon

            return (
              <motion.div
                key={goal.id}
                whileHover={{ scale: 1.02 }}
                className="p-4 border rounded-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{goal.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Target: ₹{goal.target.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <Badge>{goal.category}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{progress.toFixed(0)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹{goal.current.toLocaleString()} saved</span>
                    <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Star className="h-4 w-4 mr-2" />
                  Add to Goal
                </Button>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

