"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Home,
  User,
  BookOpen,
  Code,
  Brain,
  Rocket,
  Menu,
  ChevronDown,
  ChevronUp,
  Mail,
  Github,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// 네비게이션 항목 타입 정의
interface NavItem {
  name: string
  href: string
  icon: React.ElementType // LucideIcon 대신 React.ElementType 사용
  color: string
  children?: { name: string; href: string }[]
}

const navigation: NavItem[] = [
  { name: "Home", href: "/", icon: Home, color: "text-blue-600" },
  { name: "About", href: "/about", icon: User, color: "text-green-600" },
  { name: "TIL", href: "/til", icon: BookOpen, color: "text-purple-600" },
  {
    name: "Coding",
    href: "/coding", // 코딩 섹션 개요 페이지
    icon: Code,
    color: "text-orange-600",
    children: [
      { name: "Challenges", href: "/coding/challenges" },
      // { name: 'Algorithms', href: '/coding/algorithms' }, // 향후 추가될 하위 섹션 예시
    ],
  },
  {
    name: "Knowledge",
    href: "/knowledge", // 지식 섹션 개요 페이지
    icon: Brain,
    color: "text-indigo-600",
    children: [
      { name: "Data Science", href: "/knowledge/data-science" },
      { name: "Domain Expertise", href: "/knowledge/domain-expertise" },
      { name: "Science & Articles", href: "/knowledge/science-articles" },
    ],
  },
  { name: "Projects", href: "/projects", icon: Rocket, color: "text-pink-600" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<{ [key: string]: boolean }>({})
  const pathname = usePathname()

  const toggleMobileSubMenu = (name: string) => {
    setMobileSubMenuOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              C
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">CONG878</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => {
              const IconComponent = item.icon
              if (item.children) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                          pathname.startsWith(item.href)
                            ? `${item.color} bg-blue-50`
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                        )}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{item.name}</span>
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link href={item.href} className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4" />
                          <span>{item.name} Overview</span>
                        </Link>
                      </DropdownMenuItem>
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link href={child.href} className="flex items-center space-x-2">
                            {/* 자식 아이콘은 필요에 따라 추가 */}
                            <span>{child.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? `${item.color} bg-blue-50`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Contact <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <a href="mailto:cong878@example.com" className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://github.com/cong878"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => {
                  const IconComponent = item.icon
                  if (item.children) {
                    return (
                      <div key={item.name}>
                        <button
                          onClick={() => toggleMobileSubMenu(item.name)}
                          className={cn(
                            "flex items-center space-x-3 text-lg font-medium transition-colors w-full text-left",
                            pathname.startsWith(item.href) ? `${item.color}` : "text-gray-600 hover:text-gray-900",
                          )}
                        >
                          <IconComponent className="w-5 h-5" />
                          <span>{item.name}</span>
                          {mobileSubMenuOpen[item.name] ? (
                            <ChevronUp className="ml-auto w-4 h-4" />
                          ) : (
                            <ChevronDown className="ml-auto w-4 h-4" />
                          )}
                        </button>
                        {mobileSubMenuOpen[item.name] && (
                          <div className="ml-8 mt-2 space-y-2">
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-600 hover:text-gray-900 text-base font-medium"
                            >
                              {item.name} Overview
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-600 hover:text-gray-900 text-base font-medium"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 text-lg font-medium transition-colors",
                        pathname === item.href ? `${item.color}` : "text-gray-600 hover:text-gray-900",
                      )}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
                {/* Mobile Contact Links */}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:cong878@example.com"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://github.com/cong878"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
