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
      title: "NotebookLM : Base de connaissances juridiques personnelles",
      duration: "30 min",
      content: {
        overview: "Transformez NotebookLM en votre bibliothèque juridique personnelle : stockez, organisez et interrogez tous vos documents de référence.",
        objectives: [
          "Comprendre l'architecture et les capacités de NotebookLM",
          "Créer votre première base de connaissances juridiques",
          "Importer et organiser vos documents de référence"
        ],
        keyPoints: [
          "Stockage sécurisé et confidentiel de vos connaissances",
          "Analyse simultanée de centaines de documents",
          "Recherche intelligente par concepts, pas seulement par mots"
        ]
      }
    },
    {
      id: 1,
      title: "Organisation intelligente : Structurer vos connaissances",
      duration: "35 min",
      content: {
        overview: "Apprenez à structurer vos documents juridiques pour une recherche et récupération optimales avec l'IA.",
        objectives: [
          "Créer une taxonomie juridique adaptée à votre pratique",
          "Utiliser les métadonnées pour améliorer la recherche",
          "Organiser vos documents par domaine et spécialité"
        ],
        keyPoints: [
          "Une bonne organisation multiplie l'efficacité par 5",
          "Les métadonnées permettent des recherches ultra-précises",
          "L'organisation thématique facilite les références croisées"
        ]
      }
    },
    {
      id: 2,
      title: "Recherche sémantique avancée : Trouver l'information parfaite",
      duration: "40 min",
      content: {
        overview: "Maîtrisez la recherche sémantique pour retrouver instantanément les informations pertinentes dans vos documents juridiques.",
        objectives: [
          "Comprendre le fonctionnement de la recherche sémantique",
          "Utiliser des requêtes naturelles et contextuelles",
          "Créer des recherches sauvegardées pour vos besoins récurrents"
        ],
        keyPoints: [
          "La recherche sémantique trouve des concepts même sans mots-clés exacts",
          "Les requêtes en langage naturel donnent des résultats plus pertinents",
          "Les recherches sauvegardées automatisent vos tâches répétitives"
        ]
      }
    },
    {
      id: 3,
      title: "Intégration ChatGPT + NotebookLM : Le duo gagnant",
      duration: "35 min",
      content: {
        overview: "Apprenez à combiner ChatGPT et NotebookLM pour créer un workflow d'IA complet et ultra-efficace.",
        objectives: [
          "Connecter vos connaissances NotebookLM à ChatGPT",
          "Créer des prompts enrichis par vos documents personnels",
          "Automatiser les workflows entre les deux outils"
        ],
        keyPoints: [
          "La combinaison des deux outils multiplie leur puissance",
          "Vos documents personnels enrichissent les réponses de ChatGPT",
          "Création de workflows automatisés pour la productivité maximale"
        ]
      }
    }
  ]

  const quiz = {
    questions: [
      {
        question: "Quelle est la principale différence entre NotebookLM et ChatGPT ?",
        options: [
          "NotebookLM est plus rapide que ChatGPT",
          "NotebookLM analyse vos documents personnels, ChatGPT est généraliste",
          "ChatGPT coûte plus cher que NotebookLM",
          "Ils font exactement la même chose"
        ],
        correct: 1
      },
      {
        question: "Quel type de recherche NotebookLM permet-il ?",
        options: [
          "Uniquement par mots-clés exacts",
          "Par concepts et idées, même sans mots-clés précis",
          "Seulement dans des documents PDF",
          "Uniquement dans des documents créés après 2020"
        ],
        correct: 1
      },
      {
        question: "Quel avantage apporte la combinaison ChatGPT + NotebookLM ?",
        options: [
          "Réduction des coûts d'abonnement",
          "Réponses enrichies par vos connaissances personnelles",
          "Interface plus jolie",
          "Possibilité de travailler hors ligne"
        ],
        correct: 1
      },
      {
        question: "Combien de documents NotebookLM peut-il analyser simultanément ?",
        options: ["5 documents", "20 documents", "50 documents", "1000 documents"],
        correct: 2
      },
      {
        question: "Quelle fonctionnalité permet de gagner le plus de temps avec NotebookLM ?",
        options: [
          "L'interface colorée",
          "Les recherches sauvegardées pour les tâches répétitives",
          "Les notifications push",
          "Le mode sombre"
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
                <h1 className="text-2xl font-bold text-white">
                  Module 3 : <span className="text-primary">NotebookLM</span> - Base de connaissances IA
                </h1>
                <p className="text-muted-foreground">
                  Organisez vos connaissances juridiques et boostez ChatGPT avec vos documents personnels
                </p>
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
                  {lesson.id === 0 && "Un avocat importe 200 contrats de cession de parts sociales dans NotebookLM. Il peut maintenant poser des questions comme 'Quels sont les points communs entre tous mes contrats ?' et obtenir des réponses instantanées."}
                  {lesson.id === 1 && "Structure organisée : Dossiers 'Contrats commerciaux' → Sous-dossiers 'Cession parts', 'Bail commercial', 'Prestations services'. Métadonnées : Date, Montant, Type de client, Risques identifiés."}
                  {lesson.id === 2 && "Recherche sémantique : 'Trouve tous les contrats qui parlent de garantie de passif' trouve même les documents qui utilisent 'garantie des dettes' ou 'responsabilité du cédant'."}
                  {lesson.id === 3 && "Workflow intégré : Question sur un contrat → NotebookLM trouve l'info → ChatGPT génère une réponse enrichie avec vos connaissances personnelles → Réponse plus précise et contextuelle."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Questions types à poser</h3>
          <Card className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span className="text-sm font-medium text-purple-500">Testez ces questions</span>
                </div>
                <div className="bg-background p-3 rounded border text-xs font-mono">
                  {lesson.id === 0 && "Quels sont les points communs entre tous mes contrats de cession de parts sociales ?"}
                  {lesson.id === 1 && "Trouve tous les contrats qui contiennent des clauses de garantie de passif"}
                  {lesson.id === 2 && "Quels sont les montants moyens de mes transactions commerciales ?"}
                  {lesson.id === 3 && "Génère un résumé de mes pratiques contractuelles en matière de cession de parts"}
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
            </Button>
          </div>

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
