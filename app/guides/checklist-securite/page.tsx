'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, ArrowLeft, Play, Shield, Clock, Award, AlertTriangle, Lock, Eye, FileText, Users, Server, Smartphone } from 'lucide-react'

export default function ChecklistSecurite() {
  const router = useRouter()
  const [currentCategory, setCurrentCategory] = useState(0)
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({})

  const categories = [
    {
      id: 0,
      title: "Sécurité des comptes et accès",
      duration: "15 min",
      icon: Lock,
      items: [
        {
          id: "2fa_enabled",
          text: "Authentification à deux facteurs activée sur tous les comptes professionnels",
          priority: "critical",
          explanation: "L'authentification à deux facteurs réduit drastiquement les risques de piratage"
        },
        {
          id: "password_manager",
          text: "Gestionnaire de mots de passe professionnel utilisé (LastPass, Bitwarden, etc.)",
          priority: "high",
          explanation: "Permet de générer et stocker des mots de passe complexes de manière sécurisée"
        },
        {
          id: "account_separation",
          text: "Comptes personnels séparés des comptes professionnels",
          priority: "high",
          explanation: "Évite la contamination croisée en cas de compromission d'un compte personnel"
        },
        {
          id: "regular_password_change",
          text: "Mots de passe changés tous les 3-6 mois minimum",
          priority: "medium",
          explanation: "Réduit l'impact potentiel d'une fuite de données ancienne"
        },
        {
          id: "access_review",
          text: "Révision trimestrielle des accès utilisateurs aux systèmes",
          priority: "medium",
          explanation: "Supprime les accès obsolètes des anciens employés ou collaborateurs"
        }
      ]
    },
    {
      id: 1,
      title: "Protection des données clients",
      duration: "20 min",
      icon: FileText,
      items: [
        {
          id: "data_encryption",
          text: "Chiffrement activé sur tous les appareils (ordinateurs, téléphones, cloud)",
          priority: "critical",
          explanation: "Rend les données illisibles en cas de vol physique de l'appareil"
        },
        {
          id: "client_data_segregation",
          text: "Données clients stockées séparément des données internes",
          priority: "high",
          explanation: "Limite l'exposition des données sensibles en cas d'incident"
        },
        {
          id: "confidentiality_agreements",
          text: "Tous les collaborateurs ont signé un accord de confidentialité",
          priority: "critical",
          explanation: "Engagement juridique à protéger les données confidentielles"
        },
        {
          id: "data_minimization",
          text: "Principe de minimisation des données appliqué (ne collecter que le nécessaire)",
          priority: "high",
          explanation: "Réduit la surface d'attaque et les risques de fuite"
        },
        {
          id: "data_retention_policy",
          text: "Politique de conservation des données définie et appliquée",
          priority: "medium",
          explanation: "Suppression automatique des données obsolètes"
        }
      ]
    },
    {
      id: 2,
      title: "Sécurité réseau et appareils",
      duration: "15 min",
      icon: Server,
      items: [
        {
          id: "firewall_active",
          text: "Pare-feu activé sur tous les appareils et réseau",
          priority: "critical",
          explanation: "Première ligne de défense contre les intrusions extérieures"
        },
        {
          id: "antivirus_updated",
          text: "Antivirus à jour sur tous les appareils (mise à jour automatique)",
          priority: "critical",
          explanation: "Détection et blocage des logiciels malveillants"
        },
        {
          id: "wifi_security",
          text: "WiFi professionnel sécurisé (WPA3, mot de passe complexe)",
          priority: "high",
          explanation: "Protège contre les écoutes et intrusions réseau"
        },
        {
          id: "remote_access_secure",
          text: "Accès à distance sécurisé (VPN obligatoire pour les connexions externes)",
          priority: "high",
          explanation: "Chiffre les communications lors de l'accès à distance"
        },
        {
          id: "device_lock",
          text: "Verrouillage automatique des appareils après 5 minutes d'inactivité",
          priority: "medium",
          explanation: "Protège contre l'accès non autorisé en cas d'oubli"
        }
      ]
    },
    {
      id: 3,
      title: "Utilisation sécurisée de l'IA",
      duration: "15 min",
      icon: Shield,
      items: [
        {
          id: "ai_data_anonymization",
          text: "Données anonymisées avant utilisation avec des IA grand public",
          priority: "critical",
          explanation: "Évite la fuite d'informations confidentielles vers des services tiers"
        },
        {
          id: "ai_local_solutions",
          text: "Utilisation privilégiée d'IA locales ou de solutions juridiques spécialisées",
          priority: "high",
          explanation: "Garde le contrôle des données sensibles dans l'environnement du cabinet"
        },
        {
          id: "ai_output_verification",
          text: "Vérification systématique des productions de l'IA avant utilisation",
          priority: "critical",
          explanation: "L'IA peut produire des erreurs factuelles ou juridiques"
        },
        {
          id: "ai_usage_policy",
          text: "Politique d'utilisation de l'IA définie et communiquée à l'équipe",
          priority: "high",
          explanation: "Cadre les bonnes pratiques d'utilisation de l'IA"
        },
        {
          id: "ai_training_data",
          text: "Formation de l'équipe aux risques liés à l'utilisation de l'IA",
          priority: "medium",
          explanation: "Sensibilisation aux risques de sécurité et confidentialité"
        }
      ]
    },
    {
      id: 4,
      title: "Gestion des incidents et conformité",
      duration: "10 min",
      icon: AlertTriangle,
      items: [
        {
          id: "incident_response_plan",
          text: "Plan de réponse aux incidents de sécurité documenté et testé",
          priority: "high",
          explanation: "Permet de réagir rapidement et efficacement en cas d'incident"
        },
        {
          id: "data_backup_regular",
          text: "Sauvegardes régulières des données (quotidiennes, testées mensuellement)",
          priority: "critical",
          explanation: "Permet la restauration des données en cas de ransomware ou perte"
        },
        {
          id: "rgpd_compliance",
          text: "Conformité RGPD vérifiée (registre des traitements, droits des personnes)",
          priority: "critical",
          explanation: "Obligation légale de protection des données personnelles"
        },
        {
          id: "security_audit",
          text: "Audit de sécurité annuel réalisé par un professionnel externe",
          priority: "medium",
          explanation: "Évaluation indépendante des mesures de sécurité"
        },
        {
          id: "insurance_cyber",
          text: "Assurance cyber-risques souscrite et à jour",
          priority: "medium",
          explanation: "Couverture financière en cas d'incident de sécurité"
        }
      ]
    }
  ]

  const handleItemToggle = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  const getCategoryProgress = (categoryIndex: number) => {
    const categoryItems = categories[categoryIndex].items
    const checkedCount = categoryItems.filter(item => checkedItems[item.id]).length
    return (checkedCount / categoryItems.length) * 100
  }

  const getOverallProgress = () => {
    const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0)
    const totalChecked = Object.values(checkedItems).filter(Boolean).length
    return (totalChecked / totalItems) * 100
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200'
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <AlertTriangle className="h-4 w-4" />
      case 'high': return <Shield className="h-4 w-4" />
      case 'medium': return <Eye className="h-4 w-4" />
      default: return <CheckCircle className="h-4 w-4" />
    }
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
                <h1 className="text-2xl font-bold text-white">🔒 Checklist sécurité données</h1>
                <p className="text-muted-foreground">Protégez vos données et celles de vos clients avec cette checklist complète</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <Shield className="h-4 w-4 mr-1" />
                Sécurité
              </Badge>
              <div className="text-right">
                <div className="text-sm font-medium">Progression globale</div>
                <div className="text-sm text-muted-foreground">{Math.round(getOverallProgress())}%</div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={getOverallProgress()} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Catégories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => {
                  const IconComponent = category.icon
                  const progress = getCategoryProgress(index)
                  return (
                    <div
                      key={category.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        currentCategory === index
                          ? 'bg-primary/20 border border-primary'
                          : 'bg-muted/50 hover:bg-muted'
                      }`}
                      onClick={() => setCurrentCategory(index)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="text-xs text-primary">{Math.round(progress)}%</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">{category.title}</div>
                      <Progress value={progress} className="h-1" />
                      <div className="mt-1 text-xs text-muted-foreground">{category.duration}</div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Summary Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Résumé</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Total des éléments</span>
                    <span>{categories.reduce((acc, cat) => acc + cat.items.length, 0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Éléments cochés</span>
                    <span className="text-primary">{Object.values(checkedItems).filter(Boolean).length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Progression</span>
                    <span className="text-primary">{Math.round(getOverallProgress())}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <CategoryContent
              category={categories[currentCategory]}
              checkedItems={checkedItems}
              onItemToggle={handleItemToggle}
              getPriorityColor={getPriorityColor}
              getPriorityIcon={getPriorityIcon}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface CategoryContentProps {
  category: any
  checkedItems: {[key: string]: boolean}
  onItemToggle: (itemId: string) => void
  getPriorityColor: (priority: string) => string
  getPriorityIcon: (priority: string) => JSX.Element
}

function CategoryContent({ category, checkedItems, onItemToggle, getPriorityColor, getPriorityIcon }: CategoryContentProps) {
  const IconComponent = category.icon
  const checkedCount = category.items.filter((item: any) => checkedItems[item.id]).length
  const totalItems = category.items.length
  const progress = (checkedCount / totalItems) * 100

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              <CardDescription className="flex items-center mt-2">
                <Clock className="h-4 w-4 mr-1" />
                {category.duration}
              </CardDescription>
            </div>
          </div>
          <Badge variant="outline">
            {checkedCount}/{totalItems} éléments
          </Badge>
        </div>
        <div className="mt-4">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            {Math.round(progress)}% complété ({checkedCount} sur {totalItems})
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          {category.items.map((item: any, index: number) => (
            <Card
              key={item.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                checkedItems[item.id] ? 'bg-green-50 border-green-200' : ''
              }`}
              onClick={() => onItemToggle(item.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {checkedItems[item.id] ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${getPriorityColor(item.priority)} border`}>
                        {getPriorityIcon(item.priority)}
                        <span className="ml-1 capitalize">{item.priority}</span>
                      </Badge>
                    </div>

                    <p className={`font-medium ${checkedItems[item.id] ? 'line-through text-muted-foreground' : ''}`}>
                      {item.text}
                    </p>

                    <p className="text-sm text-muted-foreground mt-2">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {checkedCount === totalItems && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <p className="font-medium text-green-800">
                Félicitations ! Vous avez complété toutes les vérifications de cette catégorie.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">💡 Conseil de sécurité</h3>
          <p className="text-sm text-blue-700">
            Revoyez cette checklist trimestriellement et après tout changement dans votre infrastructure
            (nouvel employé, nouveau logiciel, changement d'appareil, etc.).
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
