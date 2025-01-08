import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Lightbulb, TrendingUp, TrendingDown, AlertTriangle, PiggyBank, Target, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const insights = [
  {
    category: "Spending",
    items: [
      {
        title: "High Entertainment Spending",
        description: "Your entertainment spending is 30% higher than last month. Consider setting a budget for this category.",
        type: "warning",
        icon: AlertTriangle,
        action: "Set Budget",
        impact: "high"
      },
      {
        title: "Food Expenses Reduced",
        description: "Great job! You've reduced your food delivery expenses by 20% this month.",
        type: "success",
        icon: TrendingDown,
        action: "View Details",
        impact: "medium"
      }
    ]
  },
  {
    category: "Savings",
    items: [
      {
        title: "Savings Opportunity",
        description: "You could save ₹500 more by reducing subscription services.",
        type: "tip",
        icon: Lightbulb,
        action: "See How",
        impact: "medium"
      },
      {
        title: "Goal Progress",
        description: "You're on track to reach your laptop savings goal by June 2024.",
        type: "success",
        icon: Target,
        action: "View Goal",
        impact: "low"
      }
    ]
  },
  {
    category: "Investment",
    items: [
      {
        title: "New Investment Option",
        description: "Consider starting a recurring deposit with your savings.",
        type: "tip",
        icon: TrendingUp,
        action: "Learn More",
        impact: "high"
      }
    ]
  }
]

function InsightCard({ insight }) {
  const Icon = insight.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className={cn(
              "p-2 rounded-lg",
              insight.type === "warning" && "bg-rose-100",
              insight.type === "success" && "bg-emerald-100",
              insight.type === "tip" && "bg-amber-100"
            )}>
              <Icon className={cn(
                "h-4 w-4",
                insight.type === "warning" && "text-rose-600",
                insight.type === "success" && "text-emerald-600",
                insight.type === "tip" && "text-amber-600"
              )} />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">{insight.title}</h3>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          </div>
          <Badge variant="outline" className={cn(
            insight.impact === "high" && "border-rose-200 text-rose-600",
            insight.impact === "medium" && "border-amber-200 text-amber-600",
            insight.impact === "low" && "border-emerald-200 text-emerald-600"
          )}>
            {insight.impact} impact
          </Badge>
        </div>
        <Button variant="link" className="p-0 h-auto">
          {insight.action} <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </Card>
    </motion.div>
  )
}

export function InsightsModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Financial Insights
          </DialogTitle>
          <DialogDescription>
            Personalized insights to help you make better financial decisions
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {insights.map((category) => (
              <div key={category.category} className="space-y-4">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  {category.category === "Spending" && <TrendingDown className="h-5 w-5 text-rose-500" />}
                  {category.category === "Savings" && <PiggyBank className="h-5 w-5 text-emerald-500" />}
                  {category.category === "Investment" && <TrendingUp className="h-5 w-5 text-blue-500" />}
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((insight) => (
                    <InsightCard key={insight.title} insight={insight} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
