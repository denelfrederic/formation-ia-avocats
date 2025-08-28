'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Clock, FileText, Brain, Shield, Award, ChevronRight, Mail, Calendar, Users, TrendingUp, Play, RotateCcw } from 'lucide-react'

export default function Home() {
  const router = useRouter()
  const [moduleProgress, setModuleProgress] = useState({
    module1: 25,
    module2: 15,
    module3: 0,
    module4: 0
  })

  const [quizScores, setQuizScores] = useState({
    module1: 85,
    module2: null,
    module3: null,
    module4: null
  })

  const handleStartTraining = () => {
    router.push('/modules/module1')
  }

  const handleModuleAccess = (moduleId: string) => {
    router.push(`/modules/${moduleId}`)
  }

  const handleResetProgress = () => {
    if (confirm("Êtes-vous sûr de vouloir réinitialiser tout votre parcours ? Cette action est irréversible.")) {
      setModuleProgress({
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0
      })
      setQuizScores({
        module1: null,
        module2: null,
        module3: null,
        module4: null
      })
      alert("Parcours réinitialisé avec succès ! Vous pouvez recommencer depuis le début.")
    }
  }

  const totalProgress = Object.values(moduleProgress).reduce((acc, curr) => acc + curr, 0) / 4
  const completedModules = Object.values(moduleProgress).filter(progress => progress === 100).length
  const [showQuiz, setShowQuiz] = useState(false)

  const modules = [
    {
      id: 'module1',
      title: 'Organisation & Automatisation',
      description: 'Optimisez votre organisation quotidienne avec l\'IA',
      icon: Mail,
      progress: moduleProgress.module1,
      score: quizScores.module1,
      lessons: 5,
      duration: '2h30'
    },
    {
      id: 'module2', 
      title: 'Gestion Documentaire & Confidentialité',
      description: 'Maîtrisez la gestion sécurisée de vos documents',
      icon: Shield,
      progress: moduleProgress.module2,
      score: quizScores.module2,
      lessons: 4,
      duration: '2h00'
    },
    {
      id: 'module3',
      title: 'Productivité IA pour Avocats',
      description: 'Boostez votre productivité avec les outils IA spécialisés',
      icon: Brain,
      progress: moduleProgress.module3,
      score: quizScores.module3,
      lessons: 4,
      duration: '2h15'
    },
    {
      id: 'module4',
      title: 'Formation Complète 6 Mois',
      description: 'Programme premium avec suivi personnalisé',
      icon: Award,
      progress: moduleProgress.module4,
      score: quizScores.module4,
      lessons: 24,
      duration: '50h00',
      premium: true
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="mb-6 text-white">IA & Organisation pour Avocats</h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Transformez votre pratique juridique avec l'intelligence artificielle. 
            Formations pratiques pour avocats modernes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={handleStartTraining}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              🚀 Commencer la formation (Module 1)
            </Button>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{Math.round(totalProgress)}%</div>
                <p className="text-muted-foreground">Progression globale</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{completedModules}/4</div>
                <p className="text-muted-foreground">Modules terminés</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8h45</div>
                <p className="text-muted-foreground">Temps total</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="modules" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="modules">📚 Modules</TabsTrigger>
              <TabsTrigger value="progress">📊 Progression</TabsTrigger>
              <TabsTrigger value="resources">📖 Ressources</TabsTrigger>
            </TabsList>

            <TabsContent value="modules" className="space-y-8">
              {/* Section d'accès direct aux modules */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">🎯 Accès direct aux modules</h2>
                <p className="text-muted-foreground mb-6">
                  Cliquez sur n'importe quel module pour explorer son contenu librement
                </p>
                
                {/* Bouton de réinitialisation */}
                <div className="flex justify-center mb-8">
                  <Button 
                    variant="outline" 
                    onClick={handleResetProgress}
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    🔄 Réinitialiser le parcours
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modules.map((module) => {
                  const IconComponent = module.icon
                  return (
                    <Card key={module.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                      {module.premium && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500">
                          Premium
                        </Badge>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                            <CardDescription>{module.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{module.lessons} leçons</span>
                            <span>{module.duration}</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progression</span>
                              <span>{module.progress}%</span>
                            </div>
                            <Progress value={module.progress} className="h-2" />
                          </div>

                          {module.score && (
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Quiz réussi: {module.score}%</span>
                            </div>
                          )}

                          <Button 
                            className="w-full" 
                            variant={module.progress > 0 ? "default" : "outline"}
                            onClick={() => handleModuleAccess(module.id)}
                          >
                            {module.progress > 0 ? "Continuer" : "Accéder maintenant"}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>📈 Votre Progression</CardTitle>
                  <CardDescription>Suivez vos avancées dans chaque module</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {modules.map((module) => (
                      <div key={module.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{module.title}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">{module.progress}%</span>
                            {module.score && (
                              <Badge variant="secondary" className="text-xs">
                                Quiz: {module.score}%
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      📋 Guides Pratiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Guide de démarrage rapide IA</li>
                      <li>• Checklist sécurité données</li>
                      <li>• Templates de prompts juridiques</li>
                      <li>• Bonnes pratiques éthiques</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      👥 Communauté
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Forum des participants</li>
                      <li>• Sessions Q&A mensuelles</li>
                      <li>• Groupe LinkedIn privé</li>
                      <li>• Webinaires exclusifs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
