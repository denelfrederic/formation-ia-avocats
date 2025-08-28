'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, ArrowLeft, Award, Calendar, Users, BookOpen, Trophy, Star } from 'lucide-react'

export default function Module4() {
  const router = useRouter()
  const [currentWeek, setCurrentWeek] = useState(1)
  const [completedWeeks, setCompletedWeeks] = useState([1, 2])

  const phases = [
    {
      id: 1,
      title: "Mise en pratique ChatGPT",
      weeks: "Semaines 1-2",
      description: "Appliquez ChatGPT à vos dossiers réels",
      color: "bg-blue-500/20 border-blue-500/30",
      lessons: [
        "Semaine 1: Création de vos premiers prompts juridiques personnalisés",
        "Semaine 2: Analyse de vos premiers contrats avec ChatGPT"
      ]
    },
    {
      id: 2,
      title: "Mise en pratique NotebookLM",
      weeks: "Semaines 3-4",
      description: "Construisez votre base de connaissances",
      color: "bg-green-500/20 border-green-500/30",
      lessons: [
        "Semaine 3: Organisation de vos documents dans NotebookLM",
        "Semaine 4: Recherche avancée dans vos dossiers personnels"
      ]
    },
    {
      id: 3,
      title: "Workflows intégrés",
      weeks: "Semaines 5-6",
      description: "Combinez ChatGPT + NotebookLM",
      color: "bg-purple-500/20 border-purple-500/30",
      lessons: [
        "Semaine 5: Création de workflows automatisés",
        "Semaine 6: Optimisation de votre productivité quotidienne"
      ]
    }
  ]

  const deliverables = [
    "Bibliothèque de prompts juridiques personnalisés",
    "Workflows ChatGPT + NotebookLM optimisés",
    "Base de connaissances NotebookLM opérationnelle",
    "Templates de documents automatisés",
    "Guide de sécurité et confidentialité pour l'IA",
    "Tableaux de bord de suivi de productivité",
    "Documentation de vos processus IA",
    "Support continu post-formation"
  ]

  const weeklyFormat = {
    liveSession: "1 visio live/semaine (45-60 min)",
    microLessons: "3 micro-leçons/semaine (15-20 min)",
    practicalWork: "Devoir pratique appliqué à vos dossiers réels",
    support: "Support personnalisé et coaching individuel"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-white">Module 4 : Mise en pratique & certification</h1>
                <p className="text-muted-foreground">Appliquez ChatGPT et NotebookLM à vos dossiers réels sur 6 semaines</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-primary text-primary">
                <Award className="h-4 w-4 mr-1" />
                Formation Premium
              </Badge>
              <div className="text-right">
                                  <div className="text-sm font-medium">Semaine actuelle</div>
                  <div className="text-sm text-primary">S{currentWeek}/6</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="progress">Progression</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Format hebdomadaire */}
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">Format de formation hebdomadaire</CardTitle>
                <CardDescription>Cadence optimisée pour les avocats en activité</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{weeklyFormat.liveSession}</div>
                        <div className="text-sm text-muted-foreground">Session interactive en direct</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{weeklyFormat.microLessons}</div>
                        <div className="text-sm text-muted-foreground">Contenu à votre rythme</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{weeklyFormat.practicalWork}</div>
                        <div className="text-sm text-muted-foreground">Application concrète</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{weeklyFormat.support}</div>
                        <div className="text-sm text-muted-foreground">Accompagnement personnalisé</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Livrables */}
            <Card>
              <CardHeader>
                <CardTitle>Livrables inclus</CardTitle>
                <CardDescription>Outils et ressources que vous recevrez</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-6">
            <div className="grid gap-6">
              {phases.map((phase) => (
                <Card key={phase.id} className={phase.color}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <Badge variant="outline">{phase.weeks}</Badge>
                          <span>{phase.title}</span>
                        </CardTitle>
                        <CardDescription className="mt-2">{phase.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">4 semaines</div>
                        <div className="text-xs text-muted-foreground">16 heures de formation</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {phase.lessons.map((lesson, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Votre progression</CardTitle>
                <CardDescription>Suivi détaillé de votre avancement dans la formation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Progression globale</span>
                    <span className="text-sm text-muted-foreground">{Math.round((completedWeeks.length / 6) * 100)}%</span>
                  </div>
                  <Progress value={(completedWeeks.length / 6) * 100} className="h-3" />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{completedWeeks.length}</div>
                      <div className="text-sm text-muted-foreground">Semaines terminées</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-500/5 border-blue-500/20">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-500">{24 - completedWeeks.length}</div>
                      <div className="text-sm text-muted-foreground">Semaines restantes</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-500/5 border-green-500/20">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-500">85%</div>
                      <div className="text-sm text-muted-foreground">Score moyen</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Prochaines échéances</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm">Visio live - S3: Confidentialité et secret professionnel</span>
                      </div>
                      <Badge variant="outline">Demain 14h</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Devoir pratique - Configuration Outlook</span>
                      </div>
                      <Badge variant="outline">Vendredi</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certification" className="space-y-6">
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Trophy className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Certification IA pour avocats</CardTitle>
                <CardDescription className="text-lg">Spécialiste ChatGPT & NotebookLM — niveau Praticien</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Obtenez une certification reconnue qui atteste de votre maîtrise des outils IA 
                    pour la pratique juridique moderne.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Critères d'évaluation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm">Participation aux sessions live (80%)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm">Réalisation des devoirs pratiques</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm">Projet capstone réussi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm">Soutenance finale (note ≥ 16/20)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Avantages de la certification</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Reconnaissance professionnelle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Différenciation concurrentielle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Accès à la communauté d'experts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Formations continues gratuites</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <Button size="lg" className="w-full md:w-auto">
                    <Award className="mr-2 h-5 w-5" />
                    Commencer la formation complète
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
