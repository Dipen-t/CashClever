import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Star, Gift, Trophy, Target } from 'lucide-react'
import { motion } from "framer-motion"

export function RewardsSection() {
  const rewards = [
    {
      title: "Savings Champion",
      description: "Save 20% of your allowance for 3 months",
      progress: 65,
      points: 500,
      status: "In Progress"
    },
    {
      title: "Budget Master",
      description: "Stay within budget for 30 days",
      progress: 90,
      points: 1000,
      status: "Almost There!"
    },
    {
      title: "Smart Spender",
      description: "Complete 5 transactions in approved categories",
      progress: 100,
      points: 300,
      status: "Completed"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          Rewards & Achievements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {rewards.map((reward, index) => (
          <motion.div
            key={reward.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 border rounded-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">{reward.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {reward.description}
                </p>
              </div>
              <Badge 
                variant={reward.progress === 100 ? "default" : "secondary"}
                className={reward.progress === 100 ? "bg-green-500" : ""}
              >
                {reward.status}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress: {reward.progress}%</span>
                <span className="text-amber-600">{reward.points} points</span>
              </div>
              <Progress value={reward.progress} className="h-2" />
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

    