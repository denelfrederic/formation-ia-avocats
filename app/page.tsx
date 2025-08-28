'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Clock, FileText, Brain, Shield, Award, ChevronRight, Mail, Calendar, Users, TrendingUp } from 'lucide-react'

export default function Home() {
  const [moduleProgress, setModuleProgress] = useState({
    module1: 0,
    module2: 0,
    module3: 0,
    module4: 0
  })

  const [quizScores, setQuizScores] = useState({
    module1: null,
    module2: null,
    module3: null,
    module4: null
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="mb-6 text-white">IA & Organisation pour Avocats</h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Concentrez-vous sur vos clients. Laissez l'IA alléger vos tâches répétitives.
          </p>
          <Button size="lg" className="glow">
            Commencer la formation
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-8 text-sm text-muted-foreground">
            Site réalisé par <a href="https://www.cactusmentor.com/" className="text-primary hover:underline">Cactus Mentor</a>
          </p>
        </div>
      </section>

      {/* Problématiques Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white">Vos défis quotidiens</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, title: "Trop de mails clients", desc: "à traiter et classer" },
              { icon: Calendar, title: "Calendriers chronophages", desc: "et rendez-vous complexes" },
              { icon: Users, title: "Pas de collaborateur", desc: "pour déléguer" },
              { icon: TrendingUp, title: "Charge mentale élevée", desc: "liée à la gestion du cabinet" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:glow transition-all duration-300">
                <CardHeader>
                  <item.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white">Nos solutions IA</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Automatisation Outlook + Windows",
                desc: "Gestion automatisée des mails, RDV et calendriers",
                features: ["Tri automatique des emails", "Planification intelligente", "Rappels personnalisés"]
              },
              {
                title: "Formation NotebookLM",
                desc: "Organisation de la doctrine, jurisprudence et notes internes",
                features: ["Structuration des documents", "Recherche intelligente", "Synthèses automatiques"]
              },
              {
                title: "Ateliers IA dédiés",
                desc: "Rédaction juridique et veille assistées par IA",
                features: ["Templates d'actes", "Veille jurisprudentielle", "Rédaction optimisée"]
              },
              {
                title: "Coaching en visio",
                desc: "Adapté au rythme des avocats",
                features: ["Sessions personnalisées", "Suivi individuel", "Support 24h/48h"]
              }
            ].map((solution, index) => (
              <Card key={index} className="hover:glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-primary">{solution.title}</CardTitle>
                  <CardDescription>{solution.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white">ROI concret sur l'analyse documentaire</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Analyse de contrats",
                before: "4h par contrat",
                after: "45min par contrat",
                saving: "80% de temps économisé",
                desc: "IA analyse les clauses, identifie les risques et génère un résumé exécutif automatiquement"
              },
              {
                title: "Synthèse de jurisprudence",
                before: "6h de recherche",
                after: "1h de validation",
                saving: "85% de temps économisé",
                desc: "NotebookLM structure et synthétise automatiquement les décisions pertinentes"
              },
              {
                title: "Rédaction d'actes",
                before: "3h de rédaction",
                after: "30min d'adaptation",
                saving: "85% de temps économisé",
                desc: "Templates IA personnalisés selon le type d'acte et les spécificités du dossier"
              }
            ].map((roi, index) => (
              <Card key={index} className="hover:glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{roi.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avant :</span>
                      <span className="text-sm font-medium">{roi.before}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Après :</span>
                      <span className="text-sm font-medium text-primary">{roi.after}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-full justify-center bg-primary/20 text-primary">
                    {roi.saving}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{roi.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules de Formation */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white">Modules de formation interactifs</h2>
          
          <Tabs defaultValue="module1" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="module1">Module 1</TabsTrigger>
              <TabsTrigger value="module2">Module 2</TabsTrigger>
              <TabsTrigger value="module3">Module 3</TabsTrigger>
              <TabsTrigger value="module4">Module 4</TabsTrigger>
            </TabsList>

            <TabsContent value="module1">
              <ModuleCard
                title="Organisation & automatisation"
                description="Maîtrisez l'automatisation des mails, rendez-vous et agendas"
                icon={<Mail className="h-8 w-8" />}
                progress={moduleProgress.module1}
                quizScore={quizScores.module1}
                content={{
                  lessons: [
                    "Configuration Outlook avancée",
                    "Règles de tri automatique",
                    "Intégration calendrier intelligent",
                    "Automatisation des réponses"
                  ],
                  quiz: "Quiz : 10 questions sur l'automatisation Outlook"
                }}
              />
            </TabsContent>

            <TabsContent value="module2">
              <ModuleCard
                title="Gestion documentaire & confidentialité"
                description="NotebookLM et structuration sécurisée des dossiers"
                icon={<Shield className="h-8 w-8" />}
                progress={moduleProgress.module2}
                quizScore={quizScores.module2}
                content={{
                  lessons: [
                    "Introduction à NotebookLM",
                    "Structuration des dossiers clients",
                    "Confidentialité et RGPD",
                    "Recherche intelligente dans les documents"
                  ],
                  quiz: "Quiz : 12 questions sur la gestion documentaire"
                }}
              />
            </TabsContent>

            <TabsContent value="module3">
              <ModuleCard
                title="Productivité IA pour avocats"
                description="Synthèses, rédaction d'actes et veille juridique"
                icon={<Brain className="h-8 w-8" />}
                progress={moduleProgress.module3}
                quizScore={quizScores.module3}
                content={{
                  lessons: [
                    "Prompts juridiques efficaces",
                    "Rédaction assistée d'actes",
                    "Synthèses automatiques",
                    "Veille jurisprudentielle IA"
                  ],
                  quiz: "Quiz : 15 questions sur la productivité IA"
                }}
              />
            </TabsContent>

            <TabsContent value="module4">
              <ModuleCard
                title="Formation complète 6 mois (Débutant → Expert)"
                description="Parcours complet avec certification finale"
                icon={<Award className="h-8 w-8" />}
                progress={moduleProgress.module4}
                quizScore={quizScores.module4}
                isMainModule={true}
                content={{
                  lessons: [
                    "24 semaines de formation structurée",
                    "1 visio live/semaine (60-90 min)",
                    "2 micro-leçons/semaine (10-15 min)",
                    "Devoirs pratiques hebdomadaires",
                    "Support Q/R 24h ouvrées"
                  ],
                  quiz: "Certification finale : Praticien IA Cabinet Individuel"
                }}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Parcours détaillé Module 4 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white">Parcours détaillé - Formation 6 mois</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { weeks: "S1-4", title: "Fondamentaux IA", desc: "Prompts, limites, confidentialité pour avocats" },
              { weeks: "S5-8", title: "Automatisations simples", desc: "Outlook, mails, RDV" },
              { weeks: "S9-12", title: "Rédaction assistée", desc: "Actes, CR, synthèses" },
              { weeks: "S13-16", title: "Automatisations avancées", desc: "Tableaux de bord, alertes délais" },
              { weeks: "S17-20", title: "Sécurité & conformité", desc: "PII, RGPD, traçabilité" },
              { weeks: "S21-24", title: "Projet capstone", desc: "Cabinet prêt IA avec soutenance finale" }
            ].map((phase, index) => (
              <Card key={index} className="hover:glow transition-all duration-300">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{phase.weeks}</Badge>
                  <CardTitle className="text-lg text-primary">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Certification finale</CardTitle>
                <CardDescription>Praticien IA Cabinet Individuel — niveau Expert</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Livrables inclus : modèles de prompts juridiques, checklists, templates Outlook/Windows, 
                  playbook sécurité, espace NotebookLM structuré
                </p>
                <Button size="lg" className="w-full">
                  Démarrer la formation complète
                  <Award className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

interface ModuleCardProps {
  title: string
  description: string
  icon: React.ReactNode
  progress: number
  quizScore: number | null
  isMainModule?: boolean
  content: {
    lessons: string[]
    quiz: string
  }
}

function ModuleCard({ title, description, icon, progress, quizScore, isMainModule = false, content }: ModuleCardProps) {
  const [showQuiz, setShowQuiz] = useState(false)
  
  return (
    <Card className={`${isMainModule ? 'border-primary glow' : ''}`}>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="text-primary">{icon}</div>
          <div>
            <CardTitle className={isMainModule ? 'text-primary' : ''}>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Progression</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Lessons */}
        <div>
          <h4 className="font-semibold mb-3">Contenu du module</h4>
          <ul className="space-y-2">
            {content.lessons.map((lesson, index) => (
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                {lesson}
              </li>
            ))}
          </ul>
        </div>

        {/* Quiz */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold">Évaluation</span>
            {quizScore && (
              <Badge variant={quizScore >= 80 ? "default" : "secondary"}>
                Score: {quizScore}%
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3">{content.quiz}</p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowQuiz(!showQuiz)}
            className="w-full"
          >
            {showQuiz ? 'Masquer' : 'Commencer'} l'évaluation
          </Button>
        </div>

        {isMainModule && (
          <div className="border-t pt-4">
            <Button size="lg" className="w-full">
              Accéder à la formation complète
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
