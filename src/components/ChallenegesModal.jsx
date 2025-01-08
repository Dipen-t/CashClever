import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Gift, Target, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const challenges = [
  {
    id: 1,
    title: "Savings Sprint",
    description: "Save ₹1000 in the next 7 days",
    reward: 500,
    progress: 60,
    deadline: "3 days left",
    difficulty: "Easy",
    category: "Savings"
  },
  {
    id: 2,
    title: "Budget Master",
    description: "Stay under budget in all categories for 2 weeks",
    reward: 1000,
    progress: 75,
    deadline: "10 days left",
    difficulty: "Medium",
    category: "Budgeting"
  },
  {
    id: 3,
    title: "Investment Rookie",
    description: "Complete the Investment Basics course",
    reward: 750,
    progress: 30,
    deadline: "5 days left",
    difficulty: "Hard",
    category: "Learning"
  }
]

export function ChallengesModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            Financial Challenges
          </DialogTitle>
          <DialogDescription>
            Complete challenges to earn rewards and improve your financial skills
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
          <div className="space-y-1">
            <p className="font-semibold">Your Challenge Stats</p>
            <p className="text-sm text-muted-foreground">Level 5 Challenger</p>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-500" />
            <span className="font-bold">2,500 points</span>
          </div>
        </div>

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border rounded-lg space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                  <Badge 
                    variant="secondary"
                    className={cn(
                      challenge.difficulty === "Easy" && "bg-green-100 text-green-700",
                      challenge.difficulty === "Medium" && "bg-amber-100 text-amber-700",
                      challenge.difficulty === "Hard" && "bg-rose-100 text-rose-700"
                    )}
                  >
                    {challenge.difficulty}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress: {challenge.progress}%</span>
                    <span className="text-amber-600">{challenge.deadline}</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="gap-1">
                    <Target className="h-3 w-3" />
                    {challenge.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-amber-600">
                    <Gift className="h-4 w-4" />
                    <span className="font-medium">{challenge.reward} points</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </ScrollArea>

        <DialogFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Complete challenges to unlock special rewards!</span>
          </div>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
