'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, ArrowLeft, Play, Brain, Clock, Award, Lightbulb, Settings, Users, Shield, TrendingUp } from 'lucide-react'

export default function GuideDemarrageIA() {
  const router = useRouter()
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([0])

  const sections = [
    {
      id: 0,
      title: "Comprendre l'IA : Les bases essentielles",
      duration: "10 min",
      icon: Brain,
      content: {
        overview: "Avant de plonger dans les outils, il est crucial de comprendre ce qu'est vraiment l'IA et comment elle peut transformer votre pratique juridique. Pas besoin d'être un expert technique - juste comprendre les concepts fondamentaux.",
        keyPoints: [
          "L'IA analyse des millions de données pour identifier des patterns",
          "Elle apprend de ses erreurs et s'améliore constamment",
          "Elle peut traiter des tâches répétitives plus rapidement qu'un humain",
          "Elle est un outil d'assistance, pas un remplacement de l'expertise juridique"
        ],
        practicalTips: [
          "L'IA est comme un super assistant juridique très rapide",
          "Elle peut traiter 1000 documents en quelques minutes",
          "Elle ne remplace jamais votre jugement professionnel",
          "Commencez petit : testez un outil à la fois"
        ]
      }
    },
    {
      id: 1,
      title: "Évaluer vos besoins : Où l'IA peut vous aider",
      duration: "15 min",
      icon: Lightbulb,
      content: {
        overview: "Tous les cabinets n'ont pas les mêmes besoins. Identifiez les tâches qui vous prennent le plus de temps et qui pourraient être automatisées ou assistées par l'IA.",
        keyPoints: [
          "Analyse de contrats et recherche de clauses",
          "Rédaction de courriers types et réponses standards",
          "Recherche juridique et veille documentaire",
          "Organisation et classification de documents",
          "Analyse de risques et conformité"
        ],
        assessmentQuestions: [
          "Combien de temps passez-vous à rechercher dans vos documents ?",
          "Avez-vous des tâches répétitives que vous pourriez automatiser ?",
          "Recevez-vous souvent les mêmes types de demandes clients ?",
          "Êtes-vous à jour sur toute la législation applicable ?",
          "Vos concurrents utilisent-ils déjà des outils d'IA ?"
        ]
      }
    },
    {
      id: 2,
      title: "Les outils IA adaptés aux avocats",
      duration: "20 min",
      icon: Settings,
      content: {
        overview: "Découvrez les outils spécialement conçus pour les professionnels du droit. De ChatGPT à des solutions plus spécialisées, il existe une multitude d'outils adaptés à vos besoins.",
        tools: [
          {
            name: "ChatGPT",
            category: "Assistant général",
            useCase: "Rédaction, recherche, brainstorming",
            difficulty: "Facile",
            cost: "Gratuit/Freemium"
          },
          {
            name: "Claude",
            category: "Assistant avancé",
            useCase: "Analyse de documents complexes, recherche approfondie",
            difficulty: "Moyen",
            cost: "Freemium"
          },
          {
            name: "NotebookLM",
            category: "Analyse documentaire",
            useCase: "Synthèse de documents, questions-réponses sur vos dossiers",
            difficulty: "Moyen",
            cost: "Freemium"
          },
          {
            name: "LexisNexis AI",
            category: "Outils juridiques spécialisés",
            useCase: "Recherche juridique professionnelle, analyse de jurisprudence",
            difficulty: "Avancé",
            cost: "Premium"
          }
        ],
        gettingStarted: [
          "Créez un compte sur les plateformes gratuites (ChatGPT, Claude)",
          "Testez avec des questions simples pour vous familiariser",
          "Demandez à l'IA de reformuler vos propres textes",
          "Essayez la recherche documentaire avec vos propres documents"
        ]
      }
    },
    {
      id: 3,
      title: "Premiers pas concrets : Votre plan d'action",
      duration: "15 min",
      icon: TrendingUp,
      content: {
        overview: "Il est temps de passer à l'action ! Voici un plan simple pour intégrer l'IA dans votre quotidien sans révolutionner complètement votre façon de travailler.",
        actionPlan: [
          {
            week: "Semaine 1",
            actions: [
              "Créer vos comptes sur ChatGPT et Claude",
              "Tester l'IA avec des tâches simples (résumé d'article, reformulation)",
              "Identifier 3 tâches répétitives dans votre journée"
            ]
          },
          {
            week: "Semaine 2",
            actions: [
              "Commencer à utiliser l'IA pour la recherche documentaire",
              "Créer vos premiers prompts personnalisés",
              "Mesurer le temps gagné sur vos tâches identifiées"
            ]
          },
          {
            week: "Semaine 3-4",
            actions: [
              "Intégrer l'IA dans votre workflow quotidien",
              "Former votre équipe si vous en avez une",
              "Évaluer les premiers résultats et ajuster"
            ]
          }
        ],
        successMetrics: [
          "Temps gagné par semaine (objectif : 3-5 heures)",
          "Qualité des documents produits",
          "Satisfaction client sur les réponses plus rapides",
          "Réduction du stress et de la charge mentale"
        ]
      }
    },
    {
      id: 4,
      title: "Éviter les pièges courants",
      duration: "10 min",
      icon: Shield,
      content: {
        overview: "L'IA est puissante mais elle peut aussi vous jouer des tours. Apprenez à reconnaître les limitations et les risques pour utiliser ces outils en toute sécurité.",
        commonPitfalls: [
          {
            pitfall: "Confiance excessive",
            description: "L'IA peut se tromper - toujours vérifier les informations importantes",
            solution: "Utilisez l'IA comme assistant, pas comme source d'autorité"
          },
          {
            pitfall: "Données sensibles",
            description: "Ne partagez jamais d'informations confidentielles avec des IA grand public",
            solution: "Utilisez des solutions locales ou des IA spécialisées juridiques"
          },
          {
            pitfall: "Perte de compétences",
            description: "Ne laissez pas l'IA faire tout le travail à votre place",
            solution: "Continuez à exercer vos compétences juridiques traditionnelles"
          },
          {
            pitfall: "Dépendance technologique",
            description: "Les outils peuvent tomber en panne ou changer",
            solution: "Gardez toujours une solution de secours manuelle"
          }
        ],
        bestPractices: [
          "Toujours relire et valider les productions de l'IA",
          "Ne partagez que des informations anonymisées",
          "Gardez une trace de vos interactions importantes",
          "Formez-vous continuellement aux nouveaux outils"
        ]
      }
    }
  ]

  const handleSectionComplete = (sectionId: number) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId])
    }
    if (sectionId < sections.length - 1) {
      setCurrentSection(sectionId + 1)
    }
  }

  const progress = (completedSections.length / sections.length) * 100

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
                <h1 className="text-2xl font-bold text-white">🚀 Guide de démarrage rapide IA</h1>
                <p className="text-muted-foreground">Intégrez l'intelligence artificielle dans votre pratique juridique en 5 étapes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <Brain className="h-4 w-4 mr-1" />
                Guide Pratique
              </Badge>
              <div className="text-right">
                <div className="text-sm font-medium">Progression</div>
                <div className="text-sm text-muted-foreground">{Math.round(progress)}%</div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Sections */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sections du guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section, index) => {
                  const IconComponent = section.icon
                  return (
                    <div
                      key={section.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        currentSection === index
                          ? 'bg-primary/20 border border-primary'
                          : 'bg-muted/50 hover:bg-muted'
                      }`}
                      onClick={() => setCurrentSection(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {completedSections.includes(index) ? (
                            <CheckCircle className="h-4 w-4 text-primary" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          )}
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <Clock className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{section.title}</div>
                      <div className="mt-1 text-xs text-primary">{section.duration}</div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <SectionContent
              section={sections[currentSection]}
              onComplete={() => handleSectionComplete(currentSection)}
              isCompleted={completedSections.includes(currentSection)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface SectionContentProps {
  section: any
  onComplete: () => void
  isCompleted: boolean
}

function SectionContent({ section, onComplete, isCompleted }: SectionContentProps) {
  const IconComponent = section.icon

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
              <CardDescription className="flex items-center mt-2">
                <Clock className="h-4 w-4 mr-1" />
                {section.duration}
              </CardDescription>
            </div>
          </div>
          {isCompleted && (
            <Badge variant="default">
              <CheckCircle className="h-4 w-4 mr-1" />
              Terminé
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overview */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Vue d'ensemble</h3>
          <p className="text-muted-foreground leading-relaxed">{section.content.overview}</p>
        </div>

        {/* Key Points */}
        {section.content.keyPoints && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Points clés</h3>
            <div className="grid gap-3">
              {section.content.keyPoints.map((point: string, index: number) => (
                <Card key={index} className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm font-medium">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Practical Tips */}
        {section.content.practicalTips && (
          <div>
            <h3 className="text-lg font-semibold mb-3">💡 Conseils pratiques</h3>
            <div className="space-y-2">
              {section.content.practicalTips.map((tip: string, index: number) => (
                <div key={index} className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Assessment Questions */}
        {section.content.assessmentQuestions && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🔍 Questions d'évaluation</h3>
            <div className="space-y-3">
              {section.content.assessmentQuestions.map((question: string, index: number) => (
                <Card key={index} className="bg-muted/30">
                  <CardContent className="p-4">
                    <p className="text-sm">{question}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {section.content.tools && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🛠️ Outils recommandés</h3>
            <div className="space-y-4">
              {section.content.tools.map((tool: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{tool.name}</h4>
                      <Badge variant="outline">{tool.difficulty}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{tool.category}</p>
                    <p className="text-sm mb-2">{tool.useCase}</p>
                    <p className="text-xs text-primary">{tool.cost}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Getting Started */}
        {section.content.gettingStarted && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🚀 Pour commencer</h3>
            <ul className="space-y-2">
              {section.content.gettingStarted.map((step: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Plan */}
        {section.content.actionPlan && (
          <div>
            <h3 className="text-lg font-semibold mb-3">📅 Plan d'action sur 4 semaines</h3>
            <div className="space-y-4">
              {section.content.actionPlan.map((phase: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-3 text-green-600">{phase.week}</h4>
                    <ul className="space-y-1">
                      {phase.actions.map((action: string, actionIndex: number) => (
                        <li key={actionIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Success Metrics */}
        {section.content.successMetrics && (
          <div>
            <h3 className="text-lg font-semibold mb-3">📊 Métriques de succès</h3>
            <div className="grid gap-3">
              {section.content.successMetrics.map((metric: string, index: number) => (
                <Card key={index} className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-green-800">{metric}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Common Pitfalls */}
        {section.content.commonPitfalls && (
          <div>
            <h3 className="text-lg font-semibold mb-3">⚠️ Pièges à éviter</h3>
            <div className="space-y-4">
              {section.content.commonPitfalls.map((item: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-red-600">{item.pitfall}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-green-800">
                        <strong>Solution :</strong> {item.solution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Best Practices */}
        {section.content.bestPractices && (
          <div>
            <h3 className="text-lg font-semibold mb-3">✅ Bonnes pratiques</h3>
            <div className="grid gap-3">
              {section.content.bestPractices.map((practice: string, index: number) => (
                <Card key={index} className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-blue-800">{practice}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end pt-6">
          <Button onClick={onComplete} disabled={isCompleted}>
            {isCompleted ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Section terminée
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Marquer comme terminé
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
