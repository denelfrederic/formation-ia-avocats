'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, ArrowLeft, Play, FileText, Clock, Copy, MessageSquare, Scale, BookOpen, Gavel } from 'lucide-react'

export default function TemplatesPrompts() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("contentieux-civil")
  const [copiedPrompts, setCopiedPrompts] = useState<{[key: string]: boolean}>({})

  const copyToClipboard = async (text: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedPrompts(prev => ({ ...prev, [promptId]: true }))
      setTimeout(() => {
        setCopiedPrompts(prev => ({ ...prev, [promptId]: false }))
      }, 2000)
    } catch (err) {
      console.error('Erreur lors de la copie:', err)
    }
  }

  const promptCategories = [
    {
      id: "contentieux-civil",
      title: "Contentieux Civil",
      icon: Scale,
      description: "Templates pour les litiges civils : contrats, responsabilité, recouvrement",
      prompts: [
        {
          id: "analyse-litige-contractuel",
          title: "Analyse de litige contractuel",
          context: "Vous êtes avocat en contentieux civil. Analysez ce litige né d'un contrat.",
          prompt: `Litige contractuel à analyser :

**Contexte du contrat** : [NATURE DU CONTRAT, DATE, PARTIES, OBJET]
**Faits litigieux** : [CE QUI S'EST PASSÉ - MANQUEMENT, RETARD, DÉFAUT...]
**Préjudices allégués** : [DOMMAGES SUBIS, MONTANT RÉCLAMÉ]
**Éléments de preuve** : [DOCUMENTS, TÉMOIGNAGES, COURRIERS DISPONIBLES]

Analyse juridique :

1. **Qualification juridique** : Quel type de responsabilité/contractuelle/délictuelle ?
2. **Conditions de la mise en œuvre** : Éléments constitutifs de la faute/inexécution
3. **Évaluation des préjudices** : Chiffrage des dommages et intérêts
4. **Exception de nullité** : Vice du consentement, dol, erreur, violence ?
5. **Prescription** : Délais applicables, point de départ
6. **Stratégie procédurale** : Voies de droit, juridiction compétente

Basez-vous sur le Code civil et la jurisprudence récente.`,
          useCase: "Avant une assignation ou négociation contentieuse",
          tips: "Joignez toujours le contrat litigieux et les échanges entre parties"
        },
        {
          id: "responsabilite-civile",
          title: "Évaluation de responsabilité civile délictuelle",
          context: "Vous êtes avocat en responsabilité civile. Évaluez cette situation extracontractuelle.",
          prompt: `Situation délictuelle à analyser :

**Faits** : [DESCRIPTION PRÉCISE DE L'INCIDENT, CIRCONSTANCES, CONSÉQUENCES]
**Parties impliquées** : [VICTIME, RESPONSABLE PRÉSUMÉ, TIERS ÉVENTUELS]
**Préjudices** : [DOMMAGES CORPORELS, MATÉRIELS, ÉCONOMIQUES, MORAUX]
**Éléments probatoires** : [CONSTATS, RAPPORTS MÉDICAUX, TÉMOIGNAGES, PHOTOS]

Évaluation de la responsabilité :

1. **Fait générateur** : Quel événement a causé le dommage ?
2. **Faute** : Imprudence, négligence, violation d'une obligation légale ?
3. **Lien de causalité** : Le fait est-il directement à l'origine du dommage ?
4. **Préjudice indemnisable** : Certain, direct, actuel ?
5. **Responsabilité exclusive** : Une seule partie responsable ?
6. **Assurance** : Couverture applicable, déclaration de sinistre

Basez-vous sur les articles 1240 et suivants du Code civil.`,
          useCase: "Après un accident ou incident dommageable",
          tips: "Constituez immédiatement un dossier probatoire complet"
        },
        {
          id: "recouvrement-creances",
          title: "Stratégie de recouvrement de créances",
          context: "Vous êtes avocat en contentieux civil. Organisez le recouvrement de cette créance.",
          prompt: `Créance à recouvrer :

**Nature de la créance** : [FACTURE, LOYER, PRESTATION DE SERVICE, PRÊT...]
**Montant** : [PRINCIPAL, INTÉRÊTS, FRAIS, PÉNALITÉS]
**Débiteur** : [PARTICULIER OU ENTREPRISE, SITUATION ÉCONOMIQUE CONNUE]
**Garanties** : [CAUTION, HYPOTHÈQUE, GAGE, SÛRETÉS RÉELLES]

Stratégie de recouvrement :

1. **Phase amiable** : Mise en demeure, relances, négociation
2. **Voies d'exécution** : Saisie, injonction de payer, procédure simplifiée
3. **Procédure judiciaire** : Assignation, référé provision, injonction de faire
4. **Mesures conservatoires** : Saisie conservatoire, nantissement
5. **Recours aux tiers** : Huissiers, sociétés de recouvrement
6. **Aspects fiscaux** : Déductibilité des frais, TVA sur honoraires

Respectez la procédure de recouvrement amiable préalable obligatoire.`,
          useCase: "Quand une créance reste impayée malgré les relances",
          tips: "Vérifiez toujours la prescription (généralement 5 ans)"
        },
        {
          id: "defense-procedure-civile",
          title: "Stratégie de défense en procédure civile",
          context: "Vous êtes avocat défendeur. Construisez votre stratégie de défense.",
          prompt: `Procédure civile en cours :

**Demande du demandeur** : [OBJET DE LA DEMANDE, MONTANT RÉCLAMÉ]
**Arguments invoqués** : [CAUSES JURIDIQUES, ARTICLES INVOQUÉS]
**Preuves produites** : [DOCUMENTS, TÉMOIGNAGES, RAPPORTS]
**Échéances** : [DATES DE CONCLUSIONS, AUDIENCE, DÉLAIS PROCÉDURAUX]

Stratégie de défense :

1. **Arguments de fond** : Contestation de la demande, exceptions
2. **Arguments de forme** : Vice de procédure, irrecevabilité, prescription
3. **Offre de règlement** : Transaction, paiement partiel, délais de paiement
4. **Demande reconventionnelle** : Si applicable, montant et justifications
5. **Preuves à produire** : Documents complémentaires, expertise
6. **Tactique procédurale** : Requêtes, incident, renvoi d'audience

Basez-vous sur le Code de procédure civile et les principes directeurs.`,
          useCase: "Après réception d'une assignation ou d'une requête",
          tips: "Constituez-vous avocat dès que possible si vous n'en avez pas"
        }
      ]
    },
    {
      id: "droit-des-affaires",
      title: "Droit des Affaires",
      icon: BookOpen,
      description: "Templates pour la création d'entreprise et la gouvernance",
      prompts: [
        {
          id: "analyse-contrat-commercial",
          title: "Audit de contrat commercial B2B",
          context: "Vous êtes avocat d'affaires. Auditez ce contrat commercial entre entreprises.",
          prompt: `Contrat commercial à analyser :

**Nature du contrat** : [VENTE, PRESTATION DE SERVICE, DISTRIBUTION, FRANCHISE...]
**Parties** : [ENTREPRISES CONCERNÉES, STATUT JURIDIQUE, SECTEUR D'ACTIVITÉ]
**Économie du contrat** : [CONTREPARTIES, ÉQUILIBRE FINANCIER]

Audit juridique approfondi :

1. **Validité du contrat** : Capacité juridique, pouvoirs des signataires
2. **Clauses commerciales essentielles** : Prix, délais, conditions de règlement
3. **Clauses de responsabilité** : Garanties, limitations, assurances, force majeure
4. **Protection de la propriété intellectuelle** : Marques, brevets, savoir-faire
5. **Aspects concurrentiels** : Non-concurrence, exclusivité, clauses territoriales
6. **Résiliation et renouvellement** : Conditions, préavis, indemnités
7. **Droit applicable et juridiction** : Choix du droit, clause attributive

Basez-vous sur le Code de commerce et le droit des contrats.`,
          useCase: "Audit de contrat avant signature avec un partenaire commercial",
          tips: "Portez une attention particulière aux clauses d'exclusivité"
        },
        {
          id: "creation-societe",
          title: "Conseil création d'entreprise",
          context: "Vous êtes avocat d'affaires. Conseillez pour cette création d'entreprise.",
          prompt: `Projet d'entreprise :

**Activité principale** : [DESCRIPTION PRÉCISE DE L'ACTIVITÉ, CODES NAF]
**Porteurs du projet** : [NOMBRE D'ASSOCIÉS, PROFILS, APPORTS]
**Investissement initial** : [MONTANT TOTAL, RÉPARTITION DES APPORTS]
**Objectifs stratégiques** : [MARCHÉ VISÉ, POSITIONNEMENT CONCURRENTIEL]

Conseil juridique complet :

1. **Forme sociale optimale** : SARL, SAS, SASU, SCI selon les besoins
2. **Statuts sociaux** : Clauses essentielles, pacte d'associés
3. **Aspects fiscaux** : Régime d'imposition, TVA, charges sociales
4. **Réglementation sectorielle** : Autorisations, licences, agréments
5. **Protection des associés** : Clauses de sortie, droit de préemption
6. **Gouvernance** : Direction, pouvoirs, prise de décisions
7. **Plan d'action** : Étapes chronologiques de création

Tenez compte des dernières évolutions législatives (loi PACTE, etc.).`,
          useCase: "Accompagnement complet de création d'entreprise",
          tips: "Demandez toujours les prévisionnels financiers détaillés"
        },
        {
          id: "gouvernance-societe",
          title: "Audit de gouvernance d'entreprise",
          context: "Vous êtes avocat d'affaires. Auditez la gouvernance de cette société.",
          prompt: `Société à analyser :

**Forme sociale** : [SARL, SAS, SA, STATUTS ACTUELS]
**Associés/Actionnaires** : [NOMBRE, RÉPARTITION DU CAPITAL, PACTE]
**Organes de direction** : [PRÉSIDENT, DG, COMMISSAIRE AUX COMPTES]
**Historique** : [DATE DE CRÉATION, ÉVÉNEMENTS MAJEURS]

Audit de gouvernance :

1. **Conformité statutaire** : Respect des statuts et du pacte d'associés
2. **Fonctionnement des organes** : Assemblées, décisions collectives
3. **Pouvoirs et responsabilités** : Répartition claire des compétences
4. **Conflits d'intérêts** : Gestion et prévention
5. **Obligations légales** : Comptes annuels, registres, formalités
6. **Recommandations** : Améliorations de la gouvernance

Basez-vous sur le Code de commerce et les meilleures pratiques.`,
          useCase: "Révision périodique de la gouvernance ou résolution de conflits",
          tips: "Vérifiez toujours les PV d'assemblées et les registres légaux"
        },
        {
          id: "cession-parts",
          title: "Cession de parts sociales/actions",
          context: "Vous êtes avocat d'affaires. Accompagnez cette cession de titres.",
          prompt: `Opération de cession :

**Titres concernés** : [NOMBRE DE PARTS/ACTIONS, VALEUR NOMINALE]
**Cédant** : [ASSOCIÉ/ACTIONNAIRE SORTANT, MOTIVATIONS]
**Cessionnaire** : [ACQUÉREUR, PROFIL, GARANTIES]
**Valorisation** : [MÉTHODE D'ÉVALUATION, MONTANT DE LA CESSION]

Structuration de l'opération :

1. **Audit préalable** : Situation juridique de la société, agrément
2. **Garanties du cessionnaire** : Capacité financière, expérience
3. **Modalités de paiement** : Échéancier, garanties de paiement
4. **Obligations du cédant** : Garantie d'actif/passif, concurrence
5. **Formalités légales** : Modification statuts, publicité
6. **Aspects fiscaux** : Plus-values, droits d'enregistrement
7. **Plan d'exécution** : Chronologie détaillée des étapes

Respectez les clauses statutaires et le pacte d'associés.`,
          useCase: "Transmission d'entreprise ou départ d'associé",
          tips: "Anticipez les droits de préemption des autres associés"
        }
      ]
    },
    {
      id: "contentieux-commercial",
      title: "Contentieux Commercial",
      icon: Gavel,
      description: "Templates pour les litiges B2B : impayés, concurrence, rupture",
      prompts: [
        {
          id: "litige-commercial",
          title: "Stratégie de contentieux commercial",
          context: "Vous êtes avocat en contentieux commercial. Gérez ce litige entre entreprises.",
          prompt: `Litige commercial à traiter :

**Nature du litige** : [IMPAYÉ, RUPTURE ABUSIVE, CONCURRENCE DÉLOYALE...]
**Parties** : [ENTREPRISES CONCERNÉES, TAILLE, SECTEUR D'ACTIVITÉ]
**Montant en jeu** : [PRINCIPAL, INTÉRÊTS, DOMMAGES-INTÉRÊTS]
**Éléments de preuve** : [CONTRATS, COURRIERS, FACTURES, TÉMOIGNAGES]

Stratégie contentieuse :

1. **Voie amiable privilégiée** : Médiation, conciliation, arbitrage
2. **Arguments juridiques** : Violation contractuelle, faute délictuelle
3. **Évaluation des risques** : Succès probable, coût de la procédure
4. **Mesures conservatoires** : Saisie, référé provision, expertise
5. **Procédure judiciaire** : Tribunal de commerce, juridiction compétente
6. **Négociation** : Position de départ, concessions possibles

Privilégiez la résolution amiable dans un premier temps.`,
          useCase: "Quand un conflit commercial nécessite une intervention juridique",
          tips: "Le tribunal de commerce privilégie la conciliation"
        },
        {
          id: "defense-concurrence-deloyale",
          title: "Défense contre concurrence déloyale",
          context: "Vous êtes avocat en droit commercial. Défendez contre cette accusation.",
          prompt: `Accusation de concurrence déloyale :

**Pratiques incriminées** : [DÉTOURNEMENT DE CLIENTÈLE, DÉNIGRATION, PARASITISME]
**Préjudice allégué** : [PERTES COMMERCIALES, ATTEINTE À LA RÉPUTATION]
**Éléments de preuve** : [DOCUMENTS, TÉMOIGNAGES, COMPARAISONS MARCHÉ]
**Contexte concurrentiel** : [POSITION DES PARTIES SUR LE MARCHÉ]

Stratégie de défense :

1. **Contestabilité des faits** : Preuve de la légalité des pratiques
2. **Exception de nullité** : Défaut de qualité à agir, prescription
3. **Arguments de fond** : Loyauté commerciale, liberté d'entreprendre
4. **Demande reconventionnelle** : Si pratiques similaires du demandeur
5. **Mesures d'urgence** : Référé, publication d'un communiqué
6. **Évaluation globale** : Rapport coût/bénéfice de la procédure

Basez-vous sur l'article 1240 du Code civil et la jurisprudence.`,
          useCase: "Réponse à une assignation pour concurrence déloyale",
          tips: "Constituez rapidement un dossier chronologique des faits"
        },
        {
          id: "rupture-relation-commerciale",
          title: "Rupture brutale de relation commerciale",
          context: "Vous êtes avocat commercial. Analysez cette rupture de contrat.",
          prompt: `Rupture de relation commerciale :

**Relation établie** : [DURÉE, VOLUME D'AFFAIRES, DÉPENDANCE ÉCONOMIQUE]
**Motif de rupture** : [DÉCISION UNILATÉRALE, CHANGEMENT DE STRATÉGIE]
**Préjudice causé** : [PERTES D'EXPLOITATION, DIFFICULTÉS FINANCIÈRES]
**Éléments probants** : [CONTRATS, COMMANDES, CORRESPONDANCE]

Analyse juridique :

1. **Qualification** : Rupture brutale vs résiliation légitime
2. **Conditions de la faute** : Préavis suffisant, motif légitime
3. **Évaluation du préjudice** : Pertes subies, manque à gagner
4. **Responsabilité civile** : Réparation intégrale du dommage
5. **Procédure adaptée** : Tribunal de commerce, référé expertise
6. **Réparations possibles** : Dommages-intérêts, exécution forcée

Basez-vous sur la loi Doubin et la jurisprudence récente.`,
          useCase: "Quand un partenaire commercial rompt brutalement la relation",
          tips: "Démontrer la dépendance économique est essentiel"
        },
        {
          id: "recouvrement-b2b",
          title: "Recouvrement de créances B2B",
          context: "Vous êtes avocat commercial. Organisez le recouvrement de cette créance interentreprises.",
          prompt: `Créance B2B à recouvrer :

**Nature** : [VENTE DE MARCHANDISES, PRESTATION DE SERVICES, SOUS-TRAITANCE]
**Montant** : [PRINCIPAL, INTÉRÊTS LÉGAUX, CLAUSE PÉNALE]
**Débiteur** : [ENTREPRISE, FORME JURIDIQUE, SITUATION FINANCIÈRE]
**Garanties** : [CAUTION BANCAIRE, LETTRE DE CRÉANCE, HYPOTHÈQUE]

Stratégie de recouvrement spécialisée :

1. **Phase précontentieuse** : Mise en demeure, relances formelles
2. **Injonction de payer** : Procédure simplifiée du tribunal de commerce
3. **Saisie conservatoire** : Si risque d'insolvabilité du débiteur
4. **Procédure collective** : Si débiteur en difficulté
5. **Cession de créance** : Recours à une société de recouvrement
6. **Exécution forcée** : Saisie-vente, saisie-attribution

Adaptez la stratégie à la taille du débiteur et au montant de la créance.`,
          useCase: "Créances impayées dans un contexte professionnel",
          tips: "Les intérêts légaux courent automatiquement (article L.441-6 C.com.)"
        }
      ]
    }
  ]

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
                <h1 className="text-2xl font-bold text-white">📝 Templates de prompts juridiques</h1>
                <p className="text-muted-foreground">Templates spécialisés pour le contentieux civil, droit des affaires et contentieux commercial</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <MessageSquare className="h-4 w-4 mr-1" />
                Templates
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {promptCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {promptCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid gap-6">
                {category.prompts.map((prompt) => (
                  <Card key={prompt.id} className="relative">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{prompt.title}</CardTitle>
                          <CardDescription className="mt-2">
                            <strong>Usage :</strong> {prompt.useCase}
                          </CardDescription>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                          className="shrink-0"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          {copiedPrompts[prompt.id] ? 'Copié !' : 'Copier'}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">📝 Prompt complet :</h4>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                          {prompt.prompt}
                        </div>
                      </div>

                      {prompt.tips && (
                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">💡 Conseils d'utilisation :</h4>
                          <p className="text-sm text-blue-700">{prompt.tips}</p>
                        </div>
                      )}

                      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-800 mb-2">⚠️ Rappel important :</h4>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Adaptez toujours le prompt à votre situation spécifique</li>
                          <li>• Vérifiez les informations fournies par l'IA</li>
                          <li>• Ne partagez jamais d'informations confidentielles avec des IA grand public</li>
                          <li>• Utilisez ces templates comme point de départ, pas comme solution finale</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mt-8">
                <h3 className="font-semibold text-green-800 mb-3">🚀 Comment optimiser vos prompts ?</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                  <div>
                    <h4 className="font-medium mb-2">Structure efficace :</h4>
                    <ul className="space-y-1">
                      <li>• Soyez spécifique dans vos demandes</li>
                      <li>• Fournissez un contexte clair</li>
                      <li>• Structurez la réponse attendue</li>
                      <li>• Précisez le domaine juridique</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Bonnes pratiques :</h4>
                    <ul className="space-y-1">
                      <li>• Utilisez des termes juridiques précis</li>
                      <li>• Mentionnez la législation applicable</li>
                      <li>• Demandez des sources et références</li>
                      <li>• Sollicitez des alternatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
