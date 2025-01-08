"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/charts"
import { Wallet, PiggyBank, Activity, TrendingUp, Calendar, DollarSign, CreditCard, ArrowUpRight, ArrowDownRight, Target, Award, Zap, ChevronRight, Lightbulb, TrendingDown, AlertCircle, Gift, Smartphone } from 'lucide-react'
import { cn } from "@/lib/utils"

const statsCards = [
  {
    title: "Total Balance",
    value: "$1,234.56",
    change: "+20.1%",
    icon: Wallet,
    gradient: "before:from-blue-600/20 before:to-blue-800/20 after:from-blue-600 after:to-blue-800",
    delay: 0.1
  },
  {
    title: "Savings Goal",
    value: "$5,000.00",
    progress: 45,
    icon: Target,
    gradient: "before:from-purple-600/20 before:to-purple-800/20 after:from-purple-600 after:to-purple-800",
    delay: 0.2
  },
  {
    title: "Activity",
    value: "12",
    subtitle: "transactions this week",
    icon: Activity,
    gradient: "before:from-emerald-600/20 before:to-emerald-800/20 after:from-emerald-600 after:to-emerald-800",
    delay: 0.3
  }
]

const recentTransactions = [
  { id: 1, name: 'Savings Deposit', amount: 50.00, type: 'credit', date: '2024-01-08', category: 'Savings' },
  { id: 2, name: 'Game Purchase', amount: 29.99, type: 'debit', date: '2024-01-07', category: 'Entertainment' },
  { id: 3, name: 'Allowance', amount: 100.00, type: 'credit', date: '2024-01-06', category: 'Income' },
]

const achievements = [
  { title: "First Save", icon: PiggyBank, points: 100, description: "Made your first savings deposit" },
  { title: "Budget Master", icon: Target, points: 200, description: "Created your first budget" },
  { title: "Smart Spender", icon: Award, points: 150, description: "Stayed under budget for a month" }
]

const spendingData = [
  { name: "Mon", amount: 120 },
  { name: "Tue", amount: 85 },
  { name: "Wed", amount: 140 },
  { name: "Thu", amount: 95 },
  { name: "Fri", amount: 180 },
  { name: "Sat", amount: 210 },
  { name: "Sun", amount: 130 },
]

const savingsData = [
  { name: "Week 1", amount: 500 },
  { name: "Week 2", amount: 650 },
  { name: "Week 3", amount: 800 },
  { name: "Week 4", amount: 950 },
]

const insights = [
  {
    title: "Spending Alert",
    description: "Your entertainment spending is 15% higher than last month",
    icon: AlertCircle,
    color: "text-rose-500",
    action: "Review Budget"
  },
  {
    title: "Savings Opportunity",
    description: "You could save $50 more by reducing food delivery expenses",
    icon: Lightbulb,
    color: "text-amber-500",
    action: "See How"
  },
  {
    title: "Achievement Within Reach",
    description: "You're $100 away from your 'Shopping Pro' badge",
    icon: Gift,
    color: "text-emerald-500",
    action: "View Progress"
  }
]

function InsightCard({ insight }) {
  const Icon = insight.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-4 md:p-6">
          <div className="flex items-start gap-3 md:gap-4">
            <div className={cn(
              "rounded-xl p-2 transition-transform duration-300 group-hover:scale-110",
              "bg-gradient-to-br from-gray-50 to-gray-100"
            )}>
              <Icon className={cn("h-4 w-4 md:h-5 md:w-5", insight.color)} />
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-medium text-sm md:text-base">{insight.title}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{insight.description}</p>
              <Button 
                variant="link" 
                className={cn("px-0 text-xs md:text-sm font-medium", insight.color)}
              >
                {insight.action}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SpendingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Weekly Spending</CardTitle>
        <CardDescription className="text-sm">Your spending pattern for the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[200px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={spendingData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                dy={8}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
                dx={-8}
              />
              <Tooltip 
                content={<ChartTooltip />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Bar
                dataKey="amount"
                fill="currentColor"
                radius={[4, 4, 0, 0]}
                className="fill-primary"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function SavingsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Savings Growth</CardTitle>
        <CardDescription className="text-sm">Your savings trajectory this month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[200px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={savingsData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                dy={8}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
                dx={-8}
              />
              <Tooltip 
                content={<ChartTooltip />}
                cursor={{ stroke: 'rgba(0, 0, 0, 0.05)', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="amount"
                strokeWidth={2}
                className="stroke-primary"
                dot={{ r: 4, className: "fill-primary stroke-primary" }}
                activeDot={{ r: 6, className: "fill-primary stroke-primary" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function StatsCard({ card }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: card.delay, duration: 0.5 }}
    >
      <Card className={cn(
        "relative overflow-hidden hover:shadow-lg transition-all duration-500",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:transition-opacity before:duration-500",
        "after:absolute after:inset-0 after:bg-gradient-to-br after:opacity-0 after:transition-opacity after:duration-500",
        "hover:before:opacity-0 hover:after:opacity-[0.08]",
        card.gradient
      )}>
        <CardHeader className="relative z-10 flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm md:text-base font-medium">{card.title}</CardTitle>
          <div className={cn(
            "p-2 rounded-xl transition-transform duration-500 hover:scale-110",
            "bg-gradient-to-br shadow-lg",
            card.gradient.split(' ').slice(2).join(' ').replace('/20', '')
          )}>
            <card.icon className="h-4 w-4 text-white" />
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="text-xl md:text-2xl font-bold">{card.value}</div>
          {card.change && (
            <div className="flex items-center text-xs md:text-sm text-emerald-600 mt-1">
              <ArrowUpRight className="h-4 w-4" />
              <span>{card.change} from last month</span>
            </div>
          )}
          {card.progress && (
            <div className="mt-4 space-y-2">
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  className={cn(
                    "absolute h-full rounded-full",
                    "bg-gradient-to-r shadow-lg",
                    card.gradient.split(' ').slice(2).join(' ').replace('/20', '')
                  )}
                  initial={{ width: 0 }}
                  animate={{ width: `${card.progress}%` }}
                  transition={{ duration: 1, delay: card.delay }}
                />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                {card.progress}% of goal reached
              </p>
            </div>
          )}
          {card.subtitle && (
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{card.subtitle}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

function TransactionItem({ transaction }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "relative overflow-hidden rounded-xl p-3 md:p-4 transition-all duration-500",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-50 before:to-gray-100/50",
        "after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100 after:to-gray-200/50 after:opacity-0",
        "hover:after:opacity-100 hover:shadow-md",
        "before:transition-opacity before:duration-500",
        "after:transition-opacity after:duration-500"
      )}
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <div className={cn(
            "relative h-8 w-8 md:h-10 md:w-10 rounded-xl flex items-center justify-center transition-transform duration-500 hover:scale-110",
            "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-100 before:transition-opacity before:duration-500",
            "after:absolute after:inset-0 after:bg-gradient-to-br after:opacity-0 after:transition-opacity after:duration-500",
            "hover:before:opacity-0 hover:after:opacity-100",
            transaction.type === 'credit' 
              ? "before:from-emerald-500 before:to-emerald-700 after:from-emerald-600 after:to-emerald-800"
              : "before:from-rose-500 before:to-rose-700 after:from-rose-600 after:to-rose-800"
          )}>
            {transaction.type === 'credit' 
              ? <ArrowUpRight className="relative z-10 h-4 w-4 md:h-5 md:w-5 text-white" />
              : <ArrowDownRight className="relative z-10 h-4 w-4 md:h-5 md:w-5 text-white" />
            }
          </div>
          <div>
            <p className="font-medium text-sm md:text-base">{transaction.name}</p>
            <p className="text-xs md:text-sm text-muted-foreground">{transaction.category}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={cn(
            "font-medium text-sm md:text-base",
            transaction.type === 'credit' ? 'text-emerald-600' : 'text-rose-600'
          )}>
            {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">{transaction.date}</p>
        </div>
      </div>
    </motion.div>
  )
}

function AchievementItem({ achievement, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative overflow-hidden rounded-xl p-3 md:p-4 transition-all duration-500",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-amber-50 before:to-amber-100/50",
        "after:absolute after:inset-0 after:bg-gradient-to-br after:from-amber-100 after:to-amber-200/50 after:opacity-0",
        "hover:after:opacity-100 hover:shadow-md",
        "before:transition-opacity before:duration-500",
        "after:transition-opacity after:duration-500"
      )}
    >
      <div className="relative z-10 flex items-center gap-3 md:gap-4">
        <div className={cn(
          "relative h-10 w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center p-2 md:p-3 transition-transform duration-500 hover:scale-110",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-amber-400 before:to-amber-600 before:opacity-100 before:transition-opacity before:duration-500",
          "after:absolute after:inset-0 after:bg-gradient-to-br after:from-amber-500 after:to-amber-700 after:opacity-0 after:transition-opacity after:duration-500",
          "hover:before:opacity-0 hover:after:opacity-100",
          "before:rounded-xl after:rounded-xl"
        )}>
          <achievement.icon className="relative z-10 h-full w-full text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-sm md:text-base">{achievement.title}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{achievement.description}</p>
          <p className="text-xs md:text-sm font-medium text-amber-600 mt-1">+{achievement.points} points</p>
        </div>
      </div>
    </motion.div>
  )
}

function QuickActionButton({ icon: Icon, title, gradient }) {
  return (
    <Button 
      variant="outline" 
      className={cn(
        "relative h-24 flex-col items-center justify-center transition-all duration-500",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 before:transition-opacity before:duration-500",
        "after:absolute after:inset-0 after:bg-gradient-to-br after:opacity-0 after:transition-opacity after:duration-500",
        "hover:border-transparent hover:before:opacity-[0.08] hover:after:opacity-[0.05]",
        gradient
      )}
    >
      <Icon className={cn(
        "h-6 w-6 mb-2 transition-transform duration-500",
        "group-hover:scale-110"
      )} />
      {title}
    </Button>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-4 md:space-y-8 p-2 md:p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-1"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">Track your financial progress and achieve your goals</p>
        </motion.div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-blue-500/25 text-sm md:text-base py-4 md:py-6">
            <Zap className="mr-2 h-4 w-4" />
            Quick Transfer
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {statsCards.map((card) => (
          <StatsCard key={card.title} card={card} />
        ))}
      </div>

      {/* Insights Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {insights.map((insight, index) => (
          <InsightCard 
            key={insight.title} 
            insight={insight}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
        <SpendingChart />
        <SavingsChart />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 md:gap-6">
        {/* Transactions Section */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
            <div className="space-y-1">
              <CardTitle className="text-lg md:text-xl">Recent Transactions</CardTitle>
              <CardDescription className="text-sm">Your latest financial activities</CardDescription>
            </div>
            <Tabs defaultValue="all" className="w-full md:w-[200px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="in">In</TabsTrigger>
                <TabsTrigger value="out">Out</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] md:h-[400px] pr-4">
              <div className="space-y-3 md:space-y-4">
                {recentTransactions.map((transaction) => (
                  <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-lg md:text-xl">Achievements</CardTitle>
                <CardDescription className="text-sm">Your financial milestones</CardDescription>
              </div>
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                Level 5
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] md:h-[400px] pr-4">
              <div className="space-y-3 md:space-y-4">
                {achievements.map((achievement, i) => (
                  <AchievementItem key={achievement.title} achievement={achievement} index={i} />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg md:text-xl">Quick Actions</CardTitle>
          <CardDescription className="text-sm">Frequently used financial tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
            <QuickActionButton 
              icon={PiggyBank} 
              title="Add to Savings" 
              gradient="before:from-blue-500 before:to-blue-700 after:from-blue-600 after:to-blue-800" 
            />
            <QuickActionButton 
              icon={CreditCard} 
              title="Record Expense" 
              gradient="before:from-green-500 before:to-green-700 after:from-green-600 after:to-green-800" 
            />
            <QuickActionButton 
              icon={Target} 
              title="Set New Goal" 
              gradient="before:from-purple-500 before:to-purple-700 after:from-purple-600 after:to-purple-800" 
            />
            <QuickActionButton 
              icon={Smartphone} 
              title="UPI Payment" 
              gradient="before:from-rose-500 before:to-rose-700 after:from-rose-600 after:to-rose-800" 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

