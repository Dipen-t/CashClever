import React from 'react'
import { Bell, Search, Sun, Moon, ChevronDown, Menu } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Previous imports remain the same

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 glass border-b border-white/20 shadow-sm">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex flex-1 items-center justify-between space-x-4">
          {/* Mobile Search Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden h-9 w-9 rounded-full hover:bg-white/50"
              >
                <Search className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-16 glass border-white/20">
              <SheetHeader>
                <SheetTitle>Search</SheetTitle>
              </SheetHeader>
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search anything..."
                  className="pl-9 glass border-white/20 focus:bg-white"
                />
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search anything..."
                className="w-[300px] pl-9 glass border-white/20 focus:bg-white"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 rounded-full hover:bg-white/50"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 glass border-white/20">
                <DropdownMenuItem className="cursor-pointer">Light</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Dark</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 rounded-full hover:bg-white/50"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-[10px] font-medium text-white flex items-center justify-center shadow-lg shadow-blue-500/25">
                2
              </span>
            </Button>

            {/* Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 pl-3 pr-8 rounded-full hover:bg-white/50">
                  <Avatar className="h-7 w-7 ring-2 ring-white/50 ring-offset-2 ring-offset-white/10">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                      AC
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="absolute right-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 glass border-white/20">
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-red-600">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}


