import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'
import { motion } from "framer-motion"

export function FinancialInsights() {
  const insights = [
    {
      type: "alert",
      title: "Spending Alert",
      description: "You've spent 80% of your daily limit",
      action: "Review spending",
      icon: AlertTriangle,
      color: "text-red-500",
      progress: 80
    },
    {
      type: "tip",
      title: "Smart Saving Tip",
      description: "Setting aside 10% of your allowance can help build your emergency fund faster",
      action: "Learn more",
      icon: Lightbulb,
      color: "text-amber-500"
    },
    {
      type: "trend",
      title: "Positive Trend",
      description: "You've reduced entertainment spending by 15% this month",
      action: "See details",
      icon: TrendingDown,
      color: "text-green-500"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          Smart Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 border rounded-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <insight.icon className={`h-5 w-5 ${insight.color}`} />
                <h3 className="font-semibold">{insight.title}</h3>
              </div>
              <Badge variant="secondary">{insight.type}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {insight.description}
            </p>
            {insight.progress && (
              <div className="space-y-2">
                <Progress value={insight.progress} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  {insight.progress}% of daily limit used
                </p>
              </div>
            )}
            <Button variant="link" className="p-0 h-auto">
              {insight.action}
            </Button>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

