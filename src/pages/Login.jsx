import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "../components/shared/Icon"

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary-lighter" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="mr-2 h-10 w-10" />
          TeenFinance
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Start your financial journey today with TeenFinance - where learning about money becomes an adventure!"
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                  />
                </div>
                <Button type="submit" className="w-full bg-success hover:bg-success/90">
                  Sign In
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t pt-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate('/register')}
              >
                Create Account
              </Button>
            </CardFooter>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-2 text-center">
              <Icons.piggyBank className="mx-auto h-6 w-6 mb-1 text-success" />
              <span className="text-sm text-muted-foreground">Track Savings</span>
            </div>
            <div className="rounded-lg border p-2 text-center">
              <Icons.trophy className="mx-auto h-6 w-6 mb-1 text-success" />
              <span className="text-sm text-muted-foreground">Earn Rewards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

