'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, ArrowLeft, Play, Shield, Clock, Scale, Users, Eye, AlertTriangle, Heart, BookOpen } from 'lucide-react'

export default function BonnesPratiquesEthiques() {
  const router = useRouter()
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([0])

  const sections = [
    {
      id: 0,
      title: "Principes éthiques fondamentaux",
      duration: "15 min",
      icon: Scale,
      content: {
        overview: "L'utilisation de l'IA en droit soulève des questions éthiques majeures. Comprendre ces principes est essentiel pour une pratique responsable et conforme à la déontologie de la profession d'avocat.",
        keyPrinciples: [
          {
            principle: "Primauté de l'humain",
            description: "L'IA est un outil d'assistance, pas un substitut au jugement professionnel de l'avocat",
            implication: "Toujours vérifier et assumer la responsabilité des productions de l'IA"
          },
          {
            principle: "Confidentialité absolue",
            description: "Les données sensibles des clients ne doivent jamais être partagées avec des systèmes non sécurisés",
            implication: "Utiliser des solutions locales ou des IA spécialisées juridiques"
          },
          {
            principle: "Transparence",
            description: "Le client doit être informé de l'utilisation d'outils d'IA dans son dossier",
            implication: "Mentionner explicitement l'usage d'IA dans les communications"
          },
          {
            principle: "Impartialité",
            description: "L'IA doit être utilisée de manière objective, sans discrimination",
            implication: "Vérifier l'absence de biais dans les recommandations de l'IA"
          }
        ],
        ethicalCodes: [
          "Règles de déontologie des avocats (article 1.3)",
          "Règlement général sur la protection des données (RGPD)",
          "Code de déontologie de la CNIL",
          "Principes d'Éthique de l'Intelligence Artificielle (UNESCO)"
        ]
      }
    },
    {
      id: 1,
      title: "Gestion de la confidentialité",
      duration: "20 min",
      icon: Shield,
      content: {
        overview: "La protection des données clients est au cœur de l'éthique professionnelle. L'IA ne doit jamais compromettre le secret professionnel qui est la base de la relation avocat-client.",
        confidentialityRules: [
          {
            rule: "Pas de données sensibles dans le cloud public",
            explanation: "Évitez les services d'IA grand public pour les informations confidentielles",
            alternatives: "IA locale, solutions juridiques spécialisées, pseudonymisation"
          },
          {
            rule: "Anonymisation systématique",
            explanation: "Supprimer ou masquer les données personnelles avant utilisation de l'IA",
            method: "Remplacer noms, adresses, numéros par des variables génériques"
          },
          {
            rule: "Contrôle des accès",
            explanation: "Limiter l'accès aux données aux seuls professionnels autorisés",
            implementation: "Mots de passe forts, chiffrement, journalisation des accès"
          },
          {
            rule: "Destruction sécurisée",
            explanation: "Effacer définitivement les données temporaires utilisées par l'IA",
            procedure: "Suppression sécurisée, pas de corbeille ou récupération possible"
          }
        ],
        practicalExamples: [
          {
            scenario: "Analyse d'un contrat confidentiel",
            badPractice: "Coller le contrat complet dans ChatGPT",
            goodPractice: "Anonymiser le contrat et utiliser une IA juridique spécialisée"
          },
          {
            scenario: "Recherche de jurisprudence similaire",
            badPractice: "Partager les détails personnels du client",
            goodPractice: "Décrire la situation de manière générale sans données nominatives"
          }
        ]
      }
    },
    {
      id: 2,
      title: "Transparence avec le client",
      duration: "15 min",
      icon: Users,
      content: {
        overview: "Le client a le droit de savoir comment son dossier est traité. L'utilisation d'IA doit être clairement communiquée pour maintenir la confiance et respecter le devoir d'information.",
        transparencyRequirements: [
          {
            requirement: "Information préalable",
            description: "Informer le client dès le départ des outils utilisés",
            implementation: "Mention dans la lettre d'engagement ou le contrat d'honoraires"
          },
          {
            requirement: "Explication des apports",
            description: "Expliquer comment l'IA contribue au travail réalisé",
            example: "'J'ai utilisé un outil d'analyse automatique pour identifier les clauses clés'"
          },
          {
            requirement: "Validation humaine",
            description: "Assurer que toutes les productions finales sont revues par l'avocat",
            commitment: "Signature personnelle sur tous les documents"
          },
          {
            requirement: "Droit de refus",
            description: "Le client peut refuser l'utilisation d'IA sur son dossier",
            procedure: "Prévoir cette option dans les conditions générales"
          }
        ],
        communicationTemplates: [
          {
            context: "Première consultation",
            message: "Dans le cadre de votre dossier, je peux utiliser des outils d'intelligence artificielle pour optimiser l'analyse de vos documents et accélérer certaines recherches. Ces outils restent sous mon contrôle et ne remplacent jamais mon expertise professionnelle. Souhaitez-vous que j'utilise ces technologies ?"
          },
          {
            context: "Utilisation ponctuelle",
            message: "J'ai utilisé un outil d'analyse automatique pour examiner votre contrat. Voici mes conclusions après vérification personnelle : [analyse]. Cette méthode m'a permis d'identifier plus rapidement certains points importants."
          }
        ]
      }
    },
    {
      id: 3,
      title: "Responsabilité professionnelle",
      duration: "15 min",
      icon: AlertTriangle,
      content: {
        overview: "L'avocat reste entièrement responsable des conseils donnés et des actes accomplis. L'IA est un auxiliaire, pas un responsable. Cette responsabilité ne peut être déléguée.",
        responsibilityPrinciples: [
          {
            principle: "Responsabilité exclusive",
            description: "L'avocat assume l'entière responsabilité des productions utilisant l'IA",
            implication: "Ne jamais invoquer l'IA comme excuse en cas d'erreur"
          },
          {
            principle: "Vérification systématique",
            description: "Toute production de l'IA doit être relue et validée",
            checklist: "Pertinence, exactitude, mise à jour légale, adaptation au cas d'espèce"
          },
          {
            principle: "Formation continue",
            description: "Maîtriser les outils utilisés et leurs limitations",
            commitment: "Formation régulière aux évolutions technologiques"
          },
          {
            principle: "Assurance professionnelle",
            description: "Vérifier que l'assurance couvre l'utilisation d'IA",
            action: "Contacter son assureur pour confirmation de couverture"
          }
        ],
        errorHandling: [
          {
            type: "Erreur factuelle de l'IA",
            response: "Rechercher la bonne information, corriger, expliquer au client"
          },
          {
            type: "Mauvaise interprétation",
            response: "Revoir l'analyse avec une approche traditionnelle"
          },
          {
            type: "Données obsolètes",
            response: "Vérifier la date des sources et actualiser si nécessaire"
          }
        ]
      }
    },
    {
      id: 4,
      title: "Prévention des biais et discriminations",
      duration: "10 min",
      icon: Heart,
      content: {
        overview: "Les systèmes d'IA peuvent reproduire ou amplifier des biais présents dans leurs données d'entraînement. L'avocat doit être vigilant pour éviter toute discrimination.",
        biasAwareness: [
          {
            bias: "Biais culturel",
            example: "Interprétation différente selon les origines culturelles",
            prevention: "Vérifier les références culturelles utilisées"
          },
          {
            bias: "Biais économique",
            example: "Recommandations influencées par le niveau socio-économique",
            prevention: "Évaluer objectivement indépendamment du profil client"
          },
          {
            bias: "Biais algorithmique",
            example: "Résultats influencés par les données d'entraînement",
            prevention: "Croiser avec d'autres sources d'information"
          },
          {
            bias: "Biais de confirmation",
            example: "IA qui confirme les préjugés de l'utilisateur",
            prevention: "Challenger systématiquement les conclusions"
          }
        ],
        ethicalCheckpoints: [
          "Les recommandations sont-elles objectives ?",
          "Tiennent-elles compte de tous les aspects de la situation ?",
          "Sont-elles applicables quel que soit le profil du client ?",
          "Respectent-elles les principes d'égalité et de non-discrimination ?"
        ]
      }
    },
    {
      id: 5,
      title: "Intégration dans la pratique professionnelle",
      duration: "15 min",
      icon: BookOpen,
      content: {
        overview: "L'IA doit s'intégrer harmonieusement dans la pratique professionnelle sans compromettre les valeurs de la profession. Il s'agit de trouver le bon équilibre entre efficacité et éthique.",
        integrationGuidelines: [
          {
            guideline: "Usage proportionné",
            description: "Utiliser l'IA pour les tâches appropriées, pas systématiquement",
            criteria: "Tâches répétitives, analyse de gros volumes, recherche initiale"
          },
          {
            guideline: "Formation de l'équipe",
            description: "Sensibiliser assistants et collaborateurs aux enjeux éthiques",
            implementation: "Sessions de formation, procédures écrites"
          },
          {
            guideline: "Évaluation continue",
            description: "Mesurer l'impact de l'IA sur la qualité du service",
            metrics: "Satisfaction client, taux d'erreur, temps de traitement"
          },
          {
            guideline: "Évolution des pratiques",
            description: "Adapter les méthodes de travail à l'ère numérique",
            adaptation: "Nouveaux modèles économiques, organisation du travail"
          }
        ],
        futureConsiderations: [
          {
            trend: "IA générative spécialisée",
            implication: "Outils dédiés au droit avec garanties de confidentialité"
          },
          {
            trend: "Régulation de l'IA",
            implication: "Évolution des normes éthiques et légales"
          },
          {
            trend: "IA dans la justice",
            implication: "Nouvelles formes de procédure et de décision"
          }
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
                <h1 className="text-2xl font-bold text-white">⚖️ Bonnes pratiques éthiques</h1>
                <p className="text-muted-foreground">Guide éthique pour une utilisation responsable de l'IA en droit</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <Heart className="h-4 w-4 mr-1" />
                Éthique
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
                <CardTitle className="text-lg">Sections éthiques</CardTitle>
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

            {/* Ethical Reminder */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Rappel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "L'avocat est le conseil et le défenseur de son client.
                  Il doit l'assister avec dévouement et loyauté."
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  - Règles de déontologie des avocats
                </p>
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

        {/* Key Principles */}
        {section.content.keyPrinciples && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🔑 Principes clés</h3>
            <div className="space-y-4">
              {section.content.keyPrinciples.map((item: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">{item.principle}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-700">
                        <strong>Implication :</strong> {item.implication}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Ethical Codes */}
        {section.content.ethicalCodes && (
          <div>
            <h3 className="text-lg font-semibold mb-3">📚 Références éthiques</h3>
            <div className="grid gap-3">
              {section.content.ethicalCodes.map((code: string, index: number) => (
                <Card key={index} className="bg-slate-50 border-slate-200">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <BookOpen className="h-5 w-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-slate-800">{code}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Confidentiality Rules */}
        {section.content.confidentialityRules && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🔒 Règles de confidentialité</h3>
            <div className="space-y-4">
              {section.content.confidentialityRules.map((rule: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-red-800 mb-2">{rule.rule}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{rule.explanation}</p>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-red-700">
                        <strong>Alternative/Méthode :</strong> {rule.alternatives || rule.method || rule.procedure}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Practical Examples */}
        {section.content.practicalExamples && (
          <div>
            <h3 className="text-lg font-semibold mb-3">💡 Exemples pratiques</h3>
            <div className="space-y-4">
              {section.content.practicalExamples.map((example: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-amber-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-amber-800 mb-3">{example.scenario}</h4>
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-700">
                          <strong>❌ À éviter :</strong> {example.badPractice}
                        </p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700">
                          <strong>✅ Bonne pratique :</strong> {example.goodPractice}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Transparency Requirements */}
        {section.content.transparencyRequirements && (
          <div>
            <h3 className="text-lg font-semibold mb-3">👁️ Exigences de transparence</h3>
            <div className="space-y-4">
              {section.content.transparencyRequirements.map((req: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-800 mb-2">{req.requirement}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{req.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-green-700">
                        <strong>Implémentation :</strong> {req.implementation || req.example || req.commitment || req.procedure}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Communication Templates */}
        {section.content.communicationTemplates && (
          <div>
            <h3 className="text-lg font-semibold mb-3">💬 Exemples de communication</h3>
            <div className="space-y-4">
              {section.content.communicationTemplates.map((template: any, index: number) => (
                <Card key={index} className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-3">{template.context}</h4>
                    <div className="bg-white p-3 rounded-lg border">
                      <p className="text-sm italic text-blue-700">"{template.message}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Responsibility Principles */}
        {section.content.responsibilityPrinciples && (
          <div>
            <h3 className="text-lg font-semibold mb-3">⚖️ Principes de responsabilité</h3>
            <div className="space-y-4">
              {section.content.responsibilityPrinciples.map((principle: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">{principle.principle}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{principle.description}</p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-purple-700">
                        <strong>Implication :</strong> {principle.implication || principle.checklist || principle.commitment || principle.action}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Error Handling */}
        {section.content.errorHandling && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🚨 Gestion des erreurs</h3>
            <div className="space-y-4">
              {section.content.errorHandling.map((error: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">{error.type}</h4>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-orange-700">
                        <strong>Réponse :</strong> {error.response}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Bias Awareness */}
        {section.content.biasAwareness && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🎯 Prévention des biais</h3>
            <div className="space-y-4">
              {section.content.biasAwareness.map((bias: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-pink-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-pink-800 mb-2">{bias.bias}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Exemple :</strong> {bias.example}
                    </p>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-pink-700">
                        <strong>Prévention :</strong> {bias.prevention}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Ethical Checkpoints */}
        {section.content.ethicalCheckpoints && (
          <div>
            <h3 className="text-lg font-semibold mb-3">✅ Points de contrôle éthique</h3>
            <div className="grid gap-3">
              {section.content.ethicalCheckpoints.map((checkpoint: string, index: number) => (
                <Card key={index} className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-green-800">{checkpoint}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Integration Guidelines */}
        {section.content.integrationGuidelines && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🔄 Directives d'intégration</h3>
            <div className="space-y-4">
              {section.content.integrationGuidelines.map((guideline: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-indigo-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-indigo-800 mb-2">{guideline.guideline}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{guideline.description}</p>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-indigo-700">
                        <strong>Implémentation :</strong> {guideline.criteria || guideline.implementation || guideline.metrics || guideline.adaptation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Future Considerations */}
        {section.content.futureConsiderations && (
          <div>
            <h3 className="text-lg font-semibold mb-3">🔮 Considérations futures</h3>
            <div className="space-y-4">
              {section.content.futureConsiderations.map((consideration: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-cyan-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-cyan-800 mb-2">{consideration.trend}</h4>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-cyan-700">
                        <strong>Implication :</strong> {consideration.implication}
                      </p>
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
