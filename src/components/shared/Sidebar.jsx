import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Wallet, PiggyBank, CreditCard, GraduationCap, User, Settings, HelpCircle, LogOut } from 'lucide-react'

const sidebarLinks = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Expenses',
    icon: Wallet,
    href: '/expenses',
    color: 'from-red-600 to-pink-600'
  },
  {
    title: 'Savings',
    icon: PiggyBank,
    href: '/savings',
    color: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Payments',
    icon: CreditCard,
    href: '/payments',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Learn',
    icon: GraduationCap,
    href: '/learn',
    color: 'from-yellow-600 to-amber-600'
  },
]

const moreLinks = [
  {
    title: 'Profile',
    icon: User,
    href: '/profile',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'from-gray-600 to-slate-600'
  },
]

export default function Sidebar() {
  const location = useLocation()

  // Desktop Sidebar
  const DesktopSidebar = () => (
    <div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:w-72">
      <div className="relative flex h-screen flex-col overflow-hidden border-r bg-white/10 backdrop-blur-xl">
        {/* Logo Section */}
        <div className="flex h-16 items-center border-b bg-white/50 px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-2">
              <PiggyBank className="h-full w-full text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              TeenFinance
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 space-y-1 overflow-auto p-4">
          {sidebarLinks.map((link, idx) => (
            <SidebarLink key={link.href} link={link} idx={idx} isActive={location.pathname === link.href} />
          ))}
          
          <div className="mt-6 pt-6 border-t">
            {moreLinks.map((link, idx) => (
              <SidebarLink key={link.href} link={link} idx={idx} isActive={location.pathname === link.href} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-white/50 p-4">
          <Link to="/login">
            <Button 
              variant="ghost" 
              className="w-full justify-between px-4 py-6 group hover:bg-red-50"
            >
              <span className="flex items-center">
                <div className="h-8 w-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-red-600 to-pink-600 opacity-70 group-hover:opacity-100">
                  <LogOut className="h-4 w-4 text-white" />
                </div>
                <span className="ml-3 font-medium text-red-600">Log Out</span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )

  // Mobile Bottom Navigation
  const MobileNav = () => (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t"
    >
      <div className="flex items-center justify-around p-2">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.href
          const Icon = link.icon
          
          return (
            <Link key={link.href} to={link.href} className="w-16">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center"
              >
                <div className={cn(
                  "p-2 rounded-xl transition-all duration-200",
                  isActive ? "bg-gradient-to-br" : "bg-gray-100",
                  isActive && link.color
                )}>
                  <Icon className={cn(
                    "h-5 w-5",
                    isActive ? "text-white" : "text-gray-600"
                  )} />
                </div>
                <span className={cn(
                  "text-xs mt-1",
                  isActive ? "font-medium text-gray-900" : "text-gray-600"
                )}>
                  {link.title}
                </span>
              </motion.div>
            </Link>
          )
        })}
        
        {/* More Menu for mobile */}
        <Link to="/profile" className="w-16">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <div className="p-2 rounded-xl bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <span className="text-xs mt-1 text-gray-600">More</span>
          </motion.div>
        </Link>
      </div>
      
      {/* Extra padding for bottom nav */}
      <div className="h-safe-area-inset-bottom bg-white" />
    </motion.div>
  )

  // Sidebar Link Component
  const SidebarLink = ({ link, idx, isActive }) => {
    const Icon = link.icon
    
    return (
      <Link to={link.href}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className={cn(
              "relative w-full group px-4 py-6",
              isActive && "bg-gradient-to-r from-gray-50 to-gray-100/50"
            )}
          >
            <span className="flex items-center">
              <div className={cn(
                "h-8 w-8 rounded-xl flex items-center justify-center bg-gradient-to-br",
                link.color,
                isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
              )}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              <span className={cn(
                "ml-3 font-medium",
                isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
              )}>
                {link.title}
              </span>
            </span>
          </Button>
        </motion.div>
      </Link>
    )
  }

  return (
    <>
      <DesktopSidebar />
      <MobileNav />
    </>
  )
}

