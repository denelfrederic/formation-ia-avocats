'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, ArrowLeft, Play, Brain, Clock, Award } from 'lucide-react'

export default function Module3() {
  const router = useRouter()
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([])
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizScore, setQuizScore] = useState<number | null>(null)

  const lessons = [
    {
      id: 0,
      title: "Prompts juridiques efficaces",
      duration: "25 min",
      content: {
        overview: "Maîtrisez l'art de créer des prompts spécialisés pour obtenir des résultats précis et pertinents dans le contexte juridique.",
        objectives: [
          "Comprendre la structure d'un prompt juridique efficace",
          "Adapter le langage et le contexte selon le domaine de droit",
          "Créer des templates de prompts réutilisables"
        ],
        keyPoints: [
          "Un prompt bien structuré améliore la qualité des réponses de 70%",
          "La contextualisation juridique est essentielle pour la précision",
          "Les templates permettent une standardisation et un gain de temps"
        ]
      }
    },
    {
      id: 1,
      title: "Rédaction assistée d'actes",
      duration: "35 min",
      content: {
        overview: "Utilisez l'IA pour accélérer la rédaction d'actes juridiques tout en maintenant la qualité et la conformité.",
        objectives: [
          "Créer des modèles d'actes avec assistance IA",
          "Personnaliser automatiquement selon les spécificités du dossier",
          "Vérifier et valider les documents générés"
        ],
        keyPoints: [
          "L'IA peut réduire le temps de rédaction de 80%",
          "La personnalisation automatique évite les erreurs de copier-coller",
          "La validation humaine reste indispensable pour la conformité"
        ]
      }
    },
    {
      id: 2,
      title: "Synthèses automatiques",
      duration: "30 min",
      content: {
        overview: "Générez des synthèses précises et structurées de documents juridiques complexes en quelques minutes.",
        objectives: [
          "Paramétrer l'IA pour des synthèses juridiques pertinentes",
          "Structurer les synthèses selon vos besoins métier",
          "Intégrer les synthèses dans vos workflows"
        ],
        keyPoints: [
          "Les synthèses IA font gagner 4-6h par dossier complexe",
          "La structuration personnalisée améliore l'utilisabilité",
          "L'intégration workflow optimise la productivité globale"
        ]
      }
    },
    {
      id: 3,
      title: "Veille jurisprudentielle IA",
      duration: "40 min",
      content: {
        overview: "Automatisez votre veille juridique avec des outils IA pour rester à jour sur l'évolution du droit.",
        objectives: [
          "Configurer des alertes automatiques personnalisées",
          "Analyser et synthétiser les nouvelles décisions",
          "Créer un système de classification intelligent"
        ],
        keyPoints: [
          "La veille automatisée couvre 10x plus de sources",
          "L'analyse IA identifie les tendances jurisprudentielles",
          "La classification intelligente facilite la recherche ultérieure"
        ]
      }
    }
  ]

  const quiz = {
    questions: [
      {
        question: "De combien un prompt bien structuré améliore-t-il la qualité des réponses ?",
        options: ["50%", "60%", "70%", "80%"],
        correct: 2
      },
      {
        question: "Quel gain de temps l'IA peut-elle apporter à la rédaction d'actes ?",
        options: ["60%", "70%", "80%", "90%"],
        correct: 2
      },
      {
        question: "Combien d'heures les synthèses IA font-elles gagner par dossier complexe ?",
        options: ["2-3h", "3-4h", "4-6h", "6-8h"],
        correct: 2
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
                <h1 className="text-2xl font-bold text-white">Module 3 : Productivité IA pour avocats</h1>
                <p className="text-muted-foreground">Synthèses, rédaction d'actes et veille juridique</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <Brain className="h-4 w-4 mr-1" />
                Module 3
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
                  <div className="mt-1 text-xs text-muted-foreground">15 questions</div>
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

// Composants réutilisés
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
            <Button variant="outline" onClick={() => router.push('/modules/module2')}>
              ← Module 2
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
          <CardTitle className="text-xl text-primary">Quiz - Module 3</CardTitle>
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
