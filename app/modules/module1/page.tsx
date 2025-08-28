'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, ArrowLeft, Play, Mail, Clock, Award } from 'lucide-react'

export default function Module1() {
  const router = useRouter()
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([0])
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizScore, setQuizScore] = useState<number | null>(null)

  const lessons = [
    {
      id: 0,
      title: "Introduction à l'automatisation pour avocats",
      duration: "15 min",
      content: {
        overview: "Découvrez comment l'automatisation peut transformer votre pratique quotidienne et vous faire gagner des heures précieuses chaque jour.",
        objectives: [
          "Comprendre les enjeux de l'automatisation dans un cabinet d'avocat",
          "Identifier les tâches répétitives à automatiser en priorité",
          "Évaluer le ROI potentiel de l'automatisation"
        ],
        keyPoints: [
          "L'automatisation permet d'économiser 3-5h par jour en moyenne",
          "Les tâches administratives représentent 40% du temps d'un avocat",
          "L'IA peut traiter 80% des emails entrants automatiquement"
        ]
      }
    },
    {
      id: 1,
      title: "Premiers pas avec l'automatisation",
      duration: "20 min",
      content: {
        overview: "Apprenez les bases de l'automatisation : organiser vos emails, gérer votre agenda et créer des modèles de documents.",
        objectives: [
          "Configurer des règles simples de tri automatique des emails",
          "Paramétrer des rappels automatiques pour vos échéances",
          "Créer vos premiers modèles de documents réutilisables"
        ],
        keyPoints: [
          "Les règles Outlook peuvent traiter 90% des emails automatiquement",
          "Les rappels intelligents améliorent la ponctualité de 80%",
          "Les modèles de réponse font gagner 2h par jour"
        ]
      }
    },
    {
      id: 2,
      title: "Préparation à l'IA : Organiser son environnement de travail",
      duration: "15 min",
      content: {
        overview: "Avant d'utiliser ChatGPT et NotebookLM efficacement, apprenez à organiser votre environnement de travail numérique.",
        objectives: [
          "Structurer vos dossiers et fichiers de manière logique",
          "Mettre en place des conventions de nommage cohérentes",
          "Préparer votre espace de travail pour l'intégration de l'IA"
        ],
        keyPoints: [
          "Une bonne organisation multiplie l'efficacité de l'IA par 3",
          "Les conventions de nommage facilitent l'automatisation",
          "L'environnement de travail influence directement votre productivité"
        ]
      }
    }
  ]

  const quiz = {
    questions: [
      {
        question: "Quel pourcentage approximatif du temps d'un avocat est consacré aux tâches administratives ?",
        options: ["20%", "30%", "40%", "50%"],
        correct: 2
      },
      {
        question: "Combien d'heures par jour peut-on économiser en moyenne avec l'automatisation ?",
        options: ["1-2h", "2-3h", "3-5h", "5-7h"],
        correct: 2
      },
      {
        question: "Pourquoi une bonne organisation des fichiers est-elle importante avant d'utiliser l'IA ?",
        options: [
          "Pour faire joli sur l'ordinateur",
          "Parce que l'IA travaille mieux avec des données bien structurées",
          "Pour impressionner ses collègues",
          "C'est complètement inutile"
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
                <h1 className="text-2xl font-bold text-white">Module 1 : Gagner du temps au quotidien</h1>
                <p className="text-muted-foreground">Découvrez comment automatiser vos tâches administratives sans connaissances techniques</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <Mail className="h-4 w-4 mr-1" />
                Module 1
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
                  <div className="mt-1 text-xs text-muted-foreground">10 questions</div>
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

interface LessonContentProps {
  lesson: any
  onComplete: () => void
  isCompleted: boolean
}

function LessonContent({ lesson, onComplete, isCompleted }: LessonContentProps) {
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
                  <span className="text-sm font-medium text-blue-500">Situation réelle</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {lesson.id === 0 && "Un avocat en droit des affaires passe 2h par jour à répondre aux mêmes emails de demandes de rendez-vous. Avec l'automatisation, il peut créer une réponse type et l'envoyer en 30 secondes."}
                  {lesson.id === 1 && "Avant : 50 emails non triés dans la boîte de réception. Après : emails automatiquement rangés dans des dossiers 'Clients', 'Urgences', 'Facturation'. Gain de temps : 15 minutes par jour."}
                  {lesson.id === 2 && "Un cabinet organise ses dossiers clients avec des conventions de nommage : 'CLIENT_2024_001_DOSSIER'. L'IA peut alors facilement identifier et traiter chaque type de document."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Prochaines étapes</h3>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              {lesson.id === 0 && "Dans la prochaine leçon, vous apprendrez à configurer des règles simples pour automatiser le tri de vos emails."}
              {lesson.id === 1 && "La prochaine leçon vous montrera comment créer des réponses automatiques pour gagner encore plus de temps."}
              {lesson.id === 2 && "Vous êtes maintenant prêt à découvrir ChatGPT et NotebookLM dans les modules suivants !"}
            </p>
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

interface QuizContentProps {
  quiz: any
  onComplete: (score: number) => void
  currentScore: number | null
}

function QuizContent({ quiz, onComplete, currentScore }: QuizContentProps) {
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
      // Calculate score
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
            </Button>

            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={() => window.location.href = '/modules/module2'}>
                Module 2 →
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/modules/module3'}>
                Module 3 →
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/modules/module4'}>
                Module 4 →
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-primary">Quiz - Module 1</CardTitle>
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
