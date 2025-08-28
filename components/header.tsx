'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Home, BookOpen, Users, Mail } from 'lucide-react'

export default function Header() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌵</span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary leading-tight">CACTUS</span>
                  <span className="text-xs text-muted-foreground leading-tight">MENTOR</span>
                </div>
              </div>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
              className="flex items-center space-x-2"
            >
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/modules/module1')}
              className="flex items-center space-x-2"
            >
              <BookOpen className="h-4 w-4" />
              <span>Formation</span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center space-x-2"
            >
              <Users className="h-4 w-4" />
              <span>Communauté</span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Button>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Commencer
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
