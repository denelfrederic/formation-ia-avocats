'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, ArrowLeft, Play, Brain, Clock, Award, FileText, Lock, Database } from 'lucide-react'

export default function Module2() {
  const router = useRouter()
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([])
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizScore, setQuizScore] = useState<number | null>(null)

  const lessons = [
    {
      id: 0,
      title: "ChatGPT : Votre assistant juridique personnel",
      duration: "25 min",
      content: {
        overview: "Découvrez comment ChatGPT peut devenir votre premier assistant pour gagner du temps dans votre pratique quotidienne d'avocat.",
        objectives: [
          "Comprendre le potentiel de ChatGPT pour les avocats",
          "Savoir quand et comment utiliser ChatGPT efficacement",
          "Établir les bonnes pratiques de sécurité et confidentialité"
        ],
        keyPoints: [
          "ChatGPT peut traiter 80% de vos tâches répétitives",
          "Gagnez 3-4 heures par jour avec les bons prompts",
          "L'IA respecte le secret professionnel si utilisée correctement"
        ]
      }
    },
    {
      id: 1,
      title: "L'art du prompt : Parler à l'IA comme un avocat",
      duration: "30 min",
      content: {
        overview: "Apprenez à rédiger des prompts précis qui donnent des résultats juridiques de qualité professionnelle.",
        objectives: [
          "Maîtriser la structure d'un prompt juridique efficace",
          "Utiliser le langage technique approprié selon le domaine du droit",
          "Créer des templates de prompts réutilisables pour votre cabinet"
        ],
        keyPoints: [
          "Un prompt bien écrit donne des réponses 5x plus précises",
          "La précision juridique réduit les risques d'erreurs",
          "Les templates vous font gagner 15 minutes par tâche"
        ]
      }
    },
    {
      id: 2,
      title: "Gestion documentaire : Organiser et analyser vos dossiers",
      duration: "35 min",
      content: {
        overview: "Utilisez ChatGPT pour organiser, analyser et synthétiser vos documents juridiques en quelques minutes.",
        objectives: [
          "Analyser automatiquement des contrats complexes",
          "Créer des synthèses exécutives de dossiers volumineux",
          "Identifier les points clés et risques dans vos documents"
        ],
        keyPoints: [
          "Analysez un contrat de 50 pages en 5 minutes",
          "Identifiez automatiquement les clauses à risque",
          "Créez des résumés clients en langage accessible"
        ]
      }
    },
    {
      id: 3,
      title: "Rédaction assistée : Actes et courriers en un clic",
      duration: "40 min",
      content: {
        overview: "Générez des actes juridiques, courriers et documents professionnels de qualité en quelques minutes.",
        objectives: [
          "Créer des modèles d'actes personnalisables",
          "Rédiger des courriers professionnels adaptés à chaque situation",
          "Adapter automatiquement les documents selon vos besoins"
        ],
        keyPoints: [
          "Divisez par 4 le temps de rédaction d'un acte simple",
          "Toujours la même qualité professionnelle",
          "Personnalisation automatique selon le dossier"
        ]
      }
    },
    {
      id: 4,
      title: "Relecture intelligente : Corrections et améliorations",
      duration: "30 min",
      content: {
        overview: "Utilisez ChatGPT pour relire vos documents, corriger les erreurs et améliorer le style juridique.",
        objectives: [
          "Détecter les erreurs juridiques et stylistiques",
          "Améliorer la clarté et la précision de vos écrits",
          "Vérifier la conformité avec les dernières jurisprudences"
        ],
        keyPoints: [
          "Détection automatique des erreurs potentielles",
          "Suggestions d'amélioration stylistiques",
          "Vérification de conformité réglementaire"
        ]
      }
    },
    {
      id: 5,
      title: "Automatisation avancée : Workflows personnalisés",
      duration: "35 min",
      content: {
        overview: "Créez des workflows automatisés pour les tâches répétitives de votre cabinet.",
        objectives: [
          "Automatiser la réponse aux demandes courantes",
          "Créer des checklists personnalisées pour chaque type de dossier",
          "Mettre en place des rappels intelligents pour les échéances"
        ],
        keyPoints: [
          "Réponses automatiques aux emails standards",
          "Checklists qui s'adaptent au type de dossier",
          "Rappels automatiques pour éviter les oublis"
        ]
      }
    },
    {
      id: 6,
      title: "NotebookLM : L'IA qui organise vos connaissances",
      duration: "30 min",
      content: {
        overview: "Découvrez NotebookLM, l'outil complémentaire à ChatGPT pour organiser et interroger vos documents juridiques.",
        objectives: [
          "Comprendre comment NotebookLM complète ChatGPT",
          "Organiser vos sources juridiques de référence",
          "Créer des notebooks thématiques pour vos spécialités"
        ],
        keyPoints: [
          "Stockage sécurisé de vos connaissances juridiques",
          "Recherche instantanée dans vos documents personnels",
          "Synthèses automatiques de jurisprudence"
        ]
      }
    },
    {
      id: 7,
      title: "Sécurité et confidentialité : Protéger vos données",
      duration: "25 min",
      content: {
        overview: "Maîtrisez les aspects de sécurité et confidentialité essentiels pour un avocat utilisant l'IA.",
        objectives: [
          "Comprendre les risques et les protections nécessaires",
          "Appliquer les règles déontologiques avec l'IA",
          "Mettre en place des procédures de sécurité au quotidien"
        ],
        keyPoints: [
          "Le secret professionnel prime sur toute automatisation",
          "Anonymisation des données sensibles obligatoire",
          "Audit régulier de vos pratiques IA"
        ]
      }
    }
  ]

  const quiz = {
    questions: [
      {
        question: "Quel pourcentage approximatif de tâches répétitives ChatGPT peut-il traiter pour un avocat ?",
        options: ["40%", "60%", "80%", "100%"],
        correct: 2
      },
      {
        question: "Quelle est la principale qualité d'un bon prompt juridique ?",
        options: [
          "Être le plus court possible",
          "Utiliser un langage technique précis",
          "Être écrit en majuscules",
          "Contenir le plus de mots possible"
        ],
        correct: 1
      },
      {
        question: "Quel outil est le plus adapté pour analyser un contrat de 50 pages rapidement ?",
        options: [
          "La lecture manuelle complète",
          "ChatGPT avec un prompt d'analyse",
          "Un simple résumé manuel",
          "La photocopie du document"
        ],
        correct: 1
      },
      {
        question: "Combien de temps peut-on gagner sur la rédaction d'un acte simple avec ChatGPT ?",
        options: ["10% de temps", "25% de temps", "50% de temps", "75% de temps"],
        correct: 3
      },
      {
        question: "Quelle est la règle d'or concernant le secret professionnel avec l'IA ?",
        options: [
          "Le secret professionnel ne s'applique pas à l'IA",
          "Le secret professionnel prime sur toute automatisation",
          "L'IA peut tout traiter automatiquement",
          "Il faut demander l'autorisation du client"
        ],
        correct: 1
      }
    ]
  }

  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
    if (lessonId < lessons.length - 1) {
      setCurrentLesson(lessonId + 1)
    }
  }

  const progress = (completedLessons.length / lessons.length) * 100

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
                <h1 className="text-2xl font-bold text-white">Module 2 : ChatGPT Pro pour avocats</h1>
                <p className="text-muted-foreground">Maîtrisez l'IA pour gagner du temps : gestion documentaire, rédaction, relecture</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <Brain className="h-4 w-4 mr-1" />
                Module 2
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
          {/* Sidebar - Lessons */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leçons du module</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      currentLesson === index
                        ? 'bg-primary/20 border border-primary'
                        : 'bg-muted/50 hover:bg-muted'
                    }`}
                    onClick={() => setCurrentLesson(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {completedLessons.includes(index) ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                        )}
                        <span className="text-sm font-medium">Leçon {index + 1}</span>
                      </div>
                      <Clock className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{lesson.title}</div>
                    <div className="mt-1 text-xs text-primary">{lesson.duration}</div>
                  </div>
                ))}
                
                <Separator className="my-4" />
                
                <div
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    quizStarted ? 'bg-primary/20 border border-primary' : 'bg-muted/50 hover:bg-muted'
                  }`}
                  onClick={() => setQuizStarted(true)}
                >
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Quiz final</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">12 questions</div>
                  {quizScore && (
                    <Badge variant={quizScore >= 80 ? "default" : "secondary"} className="mt-2">
                      Score: {quizScore}%
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!quizStarted ? (
              <LessonContent 
                lesson={lessons[currentLesson]} 
                onComplete={() => handleLessonComplete(currentLesson)}
                isCompleted={completedLessons.includes(currentLesson)}
              />
            ) : (
              <QuizContent 
                quiz={quiz} 
                onComplete={(score) => setQuizScore(score)}
                currentScore={quizScore}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Composants LessonContent et QuizContent identiques au Module 1
function LessonContent({ lesson, onComplete, isCompleted }: any) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-primary">{lesson.title}</CardTitle>
            <CardDescription className="flex items-center mt-2">
              <Clock className="h-4 w-4 mr-1" />
              {lesson.duration}
            </CardDescription>
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
        <div>
          <h3 className="text-lg font-semibold mb-3">Vue d'ensemble</h3>
          <p className="text-muted-foreground leading-relaxed">{lesson.content.overview}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Objectifs d'apprentissage</h3>
          <ul className="space-y-2">
            {lesson.content.objectives.map((objective: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Points clés à retenir</h3>
          <div className="grid gap-4">
            {lesson.content.keyPoints.map((point: string, index: number) => (
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

        <div>
          <h3 className="text-lg font-semibold mb-3">Exemple pratique</h3>
          <Card className="bg-muted/30 border-muted">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-blue-500">Cas concret</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {lesson.id === 0 && "Un avocat reçoit 30 emails par jour. ChatGPT peut automatiquement catégoriser 24 d'entre eux (80%) et générer des réponses appropriées, économisant 2h de travail quotidien."}
                  {lesson.id === 1 && "Prompt efficace : 'En tant qu'avocat spécialisé en droit des sociétés, rédige une lettre de mise en demeure pour un défaut de paiement de 50 000€. Ton client est une SARL, le débiteur est une SAS.'"}
                  {lesson.id === 2 && "Un contrat de 25 pages peut être analysé en 3 minutes par ChatGPT, qui identifie automatiquement les clauses à risque et génère un résumé exécutif de 2 pages."}
                  {lesson.id === 3 && "Au lieu de passer 2h à rédiger un acte de cession de parts sociales, ChatGPT génère un premier jet en 10 minutes, que l'avocat peut ensuite personnaliser et valider."}
                  {lesson.id === 4 && "ChatGPT relit un courrier et détecte : 'Le délai de prescription est de 5 ans' → 'Le délai de prescription est de 3 ans en matière commerciale' (correction automatique)."}
                  {lesson.id === 5 && "Workflow automatisé : Email de demande de rendez-vous → ChatGPT génère réponse + crée événement calendrier + envoie confirmation automatique."}
                  {lesson.id === 6 && "Un avocat importe ses 50 contrats types dans NotebookLM. Il peut maintenant poser des questions comme 'Quels sont les points communs entre mes contrats de cession ?'"}
                  {lesson.id === 7 && "Avant d'utiliser ChatGPT, un avocat anonymise les données : 'M. Dupont' devient 'Client A', 'SARL ABC' devient 'Société X'."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Prompt type à tester</h3>
          <Card className="bg-gradient-to-r from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-green-500">Copiez ce prompt</span>
                </div>
                <div className="bg-background p-3 rounded border text-xs font-mono">
                  {lesson.id === 0 && "Tu es un assistant juridique spécialisé. Explique-moi en 3 points simples comment ChatGPT peut m'aider dans mon cabinet d'avocat."}
                  {lesson.id === 1 && "En tant qu'avocat en droit civil, rédige un prompt efficace pour analyser un contrat de bail commercial. Le prompt doit être précis et juridiquement correct."}
                  {lesson.id === 2 && "Analyse ce contrat [COLLER VOTRE CONTRAT] et identifie : 1) Les clauses à risque 2) Les obligations principales 3) Les points d'attention pour mon client."}
                  {lesson.id === 3 && "Rédige un courrier de relance pour un client qui n'a pas payé une facture de 15 000€ depuis 3 mois. Ton client est une SARL, le débiteur est une SAS."}
                  {lesson.id === 4 && "Relis ce texte juridique [COLLER VOTRE TEXTE] et corrige les erreurs de droit, améliore le style et suggère des améliorations."}
                  {lesson.id === 5 && "Crée un workflow automatisé pour répondre aux demandes de rendez-vous de mes clients. Inclus la génération de réponse, la création d'événement et l'envoi de confirmation."}
                  {lesson.id === 6 && "Explique-moi comment organiser mes documents juridiques dans NotebookLM pour une recherche optimale."}
                  {lesson.id === 7 && "Liste les 5 règles d'or pour protéger la confidentialité de mes clients quand j'utilise ChatGPT."}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end pt-6">
          <Button onClick={onComplete} disabled={isCompleted}>
            {isCompleted ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Leçon terminée
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

function QuizContent({ quiz, onComplete, currentScore }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const correct = answers.reduce((acc, answer, index) => {
        return acc + (answer === quiz.questions[index].correct ? 1 : 0)
      }, 0)
      const score = Math.round((correct / quiz.questions.length) * 100)
      onComplete(score)
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  if (showResults || currentScore) {
    const score = currentScore || Math.round((answers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correct ? 1 : 0)
    }, 0) / quiz.questions.length) * 100)

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary">Résultats du Quiz</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">{score}%</div>
            <p className="text-muted-foreground">
              {score >= 80 ? 'Félicitations ! Vous avez réussi le quiz.' : 'Vous pouvez reprendre le quiz pour améliorer votre score.'}
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={resetQuiz}>
              Reprendre le quiz
            </Button>
            <Button onClick={() => window.location.href = '/'}>
              Retour à l'accueil

          <div className="flex gap-4 mt-4">
            <Button variant="outline" onClick={() => router.push('/modules/module1')}>
              ← Module 1
            </Button>
            <Button variant="outline" onClick={() => router.push('/modules/module3')}>
              Module 3 →
            </Button>
            <Button variant="outline" onClick={() => router.push('/modules/module4')}>
              Module 4 →
            </Button>
          </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-primary">Quiz - Module 2</CardTitle>
          <Badge variant="outline">
            Question {currentQuestion + 1} / {quiz.questions.length}
          </Badge>
        </div>
        <Progress value={((currentQuestion + 1) / quiz.questions.length) * 100} className="mt-4" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">{quiz.questions[currentQuestion].question}</h3>
          <div className="space-y-3">
            {quiz.questions[currentQuestion].options.map((option: string, index: number) => (
              <div
                key={index}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  answers[currentQuestion] === index
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => handleAnswer(index)}
              >
                <div className="flex items-center">
                  <div className={`h-4 w-4 rounded-full border-2 mr-3 ${
                    answers[currentQuestion] === index
                      ? 'border-primary bg-primary'
                      : 'border-muted-foreground'
                  }`} />
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleNext}
            disabled={answers[currentQuestion] === undefined}
          >
            {currentQuestion === quiz.questions.length - 1 ? 'Terminer le quiz' : 'Question suivante'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
