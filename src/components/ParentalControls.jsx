import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Shield, Bell, Lock, Eye } from 'lucide-react'

export function ParentalControls() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-500" />
          Parental Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Transaction Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive alerts for all transactions
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Spending Limits</Label>
              <p className="text-sm text-muted-foreground">
                Require approval for transactions above limit
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Category Restrictions</Label>
              <p className="text-sm text-muted-foreground">
                Block specific spending categories
              </p>
            </div>
            <Switch />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Parent's Email for Notifications</Label>
          <div className="flex gap-2">
            <Input placeholder="parent@example.com" />
            <Button>Save</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

