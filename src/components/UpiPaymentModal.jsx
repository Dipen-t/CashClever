import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { Check, Copy, Smartphone, Users, History, Wallet, AlertTriangle, Info, Star, Clock, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const frequentContacts = [
  { id: 1, name: "Mom", upiId: "mom@upi", category: "Family" },
  { id: 2, name: "Dad", upiId: "dad@upi", category: "Family" },
  { id: 3, name: "School Fees", upiId: "school@upi", category: "Education" },
  { id: 4, name: "Tutor", upiId: "tutor@upi", category: "Education" },
]

const spendingCategories = [
  { value: "education", label: "Education", limit: 500 },
  { value: "food", label: "Food", limit: 200 },
  { value: "entertainment", label: "Entertainment", limit: 100 },
  { value: "transport", label: "Transport", limit: 150 },
  { value: "others", label: "Others", limit: 50 },
]

const recentTransactions = [
  { 
    id: 1, 
    name: "School Fees", 
    amount: 300, 
    date: "2024-01-08", 
    category: "Education",
    upiId: "school@upi" 
  },
  { 
    id: 2, 
    name: "Lunch", 
    amount: 15, 
    date: "2024-01-07", 
    category: "Food",
    upiId: "cafe@upi" 
  },
]

export function UpiPaymentModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("new")
  const [upiId, setUpiId] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [category, setCategory] = useState("")
  const [copied, setCopied] = useState(false)
  const [showLimitWarning, setShowLimitWarning] = useState(false)

  const handleAmountChange = (value) => {
    setAmount(value)
    const selectedCategory = spendingCategories.find(cat => cat.value === category)
    if (selectedCategory && Number(value) > selectedCategory.limit) {
      setShowLimitWarning(true)
    } else {
      setShowLimitWarning(false)
    }
  }

  const handleContactSelect = (contact) => {
    setUpiId(contact.upiId)
    setActiveTab("new")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create UPI deep link with category and note
    const upiLink = `upi://pay?pa=${upiId}&pn=TeenFinance&am=${amount}&tn=${note}&cu=INR&mc=${category}`
    window.location.href = upiLink
  }

  const handleCopyUpiId = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Smart UPI Payment
          </DialogTitle>
          <DialogDescription>
            Make secure payments with spending insights
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="new">New Payment</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <div className="flex gap-2">
                  <Input
                    id="upiId"
                    placeholder="example@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={handleCopyUpiId}
                    className="shrink-0"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Payment Category</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {spendingCategories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        <div className="flex items-center justify-between w-full">
                          <span>{cat.label}</span>
                          <Badge variant="secondary">Limit: ₹{cat.limit}</Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  required
                />
                <AnimatePresence>
                  {showLimitWarning && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <Alert variant="destructive" className="mt-2">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          This amount exceeds your category limit. Consider reviewing your budget.
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Note</Label>
                <Input
                  id="note"
                  placeholder="Add a note for reference"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Smart spending tip: Keep track of your expenses by adding proper notes and categories.
                </AlertDescription>
              </Alert>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-rose-600 to-rose-800"
                  disabled={showLimitWarning}
                >
                  Pay Now
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          <TabsContent value="contacts">
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-2">
                {frequentContacts.map((contact) => (
                  <motion.div
                    key={contact.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                      onClick={() => handleContactSelect(contact)}
                    >
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div className="text-left">
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-sm text-muted-foreground">{contact.upiId}</p>
                        </div>
                      </div>
                      <Badge>{contact.category}</Badge>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="history">
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-2">
                {recentTransactions.map((transaction) => (
                  <motion.div
                    key={transaction.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 border rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{transaction.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {transaction.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-rose-600">-₹{transaction.amount}</p>
                        <Badge variant="outline">{transaction.category}</Badge>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-2"
                      onClick={() => {
                        setUpiId(transaction.upiId)
                        setCategory(transaction.category.toLowerCase())
                        setActiveTab("new")
                      }}
                    >
                      <ArrowUpRight className="h-4 w-4 mr-2" />
                      Pay Again
                    </Button>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="mt-4 text-xs text-muted-foreground">
          <p className="flex items-center gap-1">
            <Star className="h-3 w-3 text-amber-500" />
            Learn more about smart spending in the Learning section
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

