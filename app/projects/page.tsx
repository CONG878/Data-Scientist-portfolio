import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Presentation,
  Trophy,
  TrendingUp,
  Users,
  Award,
  Infinity,
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "ecosystem-lab",
      title: "생태계 실험실",
      subtitle: "EcoDynamics Lab",
      description: "미분방정식을 활용한 생태계 동역학 시뮬레이션 웹 애플리케이션",
      tags: ["생태계", "미분방정식", "모의실험", "친환경", "웹차트"],
      techStack: ["JavaScript", "React", "D3.js", "Mathematical Modeling"],
      status: "완료",
      duration: "3개월",
      date: "2024.01 - 2024.03",
      links: {
        demo: "https://ecodynamicslab.web.app/#/",
        presentation: "https://docs.google.com/presentation/d/15Id6BQe-RjARUtpK_n-l210SrvCA5RH2XrrL35_48Vc/edit",
        github: "https://github.com/CONG878/EcoDynamicsLab",
      },
      category: "환경/생태",
      color: "green",
    },
    {
      id: "power-prediction",
      title: "2025 전력사용량 예측 AI 경진대회",
      subtitle: "Power Usage Prediction Challenge",
      description: "시계열 데이터를 활용한 전력사용량 예측 모델 개발",
      tags: ["에너지", "전력사용량", "시계열", "정형"],
      techStack: ["Python", "TensorFlow", "Pandas", "Time Series Analysis"],
      status: "진행중",
      duration: "2개월",
      date: "2024.11 - 진행중",
      links: {
        competition: "https://dacon.io/competitions/official/236531/overview/description",
      },
      category: "에너지",
      color: "blue",
    },
    {
      id: "financial-risk",
      title: "금융 리스크 예측 모델",
      subtitle: "Financial Risk Assessment",
      description: "금융 도메인 지식을 활용한 신용 리스크 예측 모델 개발",
      tags: ["금융", "리스크", "신용평가", "피쳐엔지니어링"],
      techStack: ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
      status: "완료",
      duration: "4개월",
      date: "2024.06 - 2024.09",
      links: {
        github: "https://github.com/cong878/financial-risk",
      },
      category: "금융",
      color: "emerald",
    },
    {
      id: "weather-analysis",
      title: "기상 데이터 분석 플랫폼",
      subtitle: "Weather Data Analytics Platform",
      description: "기상청 공공데이터를 활용한 날씨 패턴 분석 및 예측 시스템",
      tags: ["기상", "공공데이터", "시각화", "예측"],
      techStack: ["Python", "FastAPI", "PostgreSQL", "Plotly"],
      status: "계획중",
      duration: "예상 3개월",
      date: "2025.01 예정",
      links: {},
      category: "기상",
      color: "sky",
    },
    {
      id: "medical-mining",
      title: "의료 데이터 마이닝",
      subtitle: "Medical Data Mining System",
      description: "의료 빅데이터를 활용한 질병 패턴 분석 및 조기 진단 모델 개발",
      tags: ["의료", "빅데이터", "진단", "연합학습"],
      techStack: ["Python", "PyTorch", "Federated Learning", "Medical AI"],
      status: "계획중",
      duration: "예상 5개월",
      date: "2025.03 예정",
      links: {},
      category: "의료",
      color: "red",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "완료":
        return "bg-green-100 text-green-800"
      case "진행중":
        return "bg-blue-100 text-blue-800"
      case "계획중":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "금융":
        return "bg-emerald-50 border-emerald-200"
      case "기상":
        return "bg-sky-50 border-sky-200"
      case "의료":
        return "bg-red-50 border-red-200"
      case "에너지":
        return "bg-blue-50 border-blue-200"
      case "환경/생태":
        return "bg-green-50 border-green-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      green: "bg-green-50 text-green-700 border-green-200",
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
      sky: "bg-sky-50 text-sky-700 border-sky-200",
      red: "bg-red-50 text-red-700 border-red-200",
    }
    return colorMap[color] || "bg-gray-50 text-gray-700 border-gray-200"
  }

  const portfolioStats = [
    { value: "2", label: "완료된 프로젝트", icon: TrendingUp, color: "text-green-600" },
    { value: "1", label: "진행 중인 프로젝트", icon: Users, color: "text-blue-600" },
    { value: "5", label: "도메인 영역", icon: Award, color: "text-purple-600" },
    { value: "∞", label: "학습과 성장", icon: Infinity, color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            데이터 사이언스와 도메인 지식을 결합한 실무 프로젝트들을 소개합니다.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`hover:shadow-lg transition-all duration-300 border-2 ${getCategoryColor(project.category)} hover:scale-105`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                    <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>
                  </div>
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {project.duration}
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-4">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} className={`text-xs border ${getColorClass(project.color)}`}>
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">기술 스택</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2">
                  {project.links.demo && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Link href={project.links.demo} target="_blank">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        데모
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.github} target="_blank">
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.links.presentation && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.presentation} target="_blank">
                        <Presentation className="w-3 h-3 mr-1" />
                        발표자료
                      </Link>
                    </Button>
                  )}
                  {project.links.competition && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.competition} target="_blank">
                        <Trophy className="w-3 h-3 mr-1" />
                        대회
                      </Link>
                    </Button>
                  )}
                  {Object.keys(project.links).length === 0 && (
                    <Button variant="ghost" size="sm" disabled>
                      준비중
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Project Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {portfolioStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Categories Summary */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">프로젝트 도메인</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["금융", "기상", "의료", "에너지", "환경/생태"].map((domain) => (
              <Badge key={domain} variant="secondary" className="px-4 py-2 text-sm">
                {domain}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
