import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Brain, Lightbulb, TrendingUp, Users, Award, Infinity, Mail } from "lucide-react" // Mail 아이콘 추가
import Link from "next/link"

export default function HomePage() {
  const featuredProjects = [
    {
      title: "생태계 실험실",
      description: "미분방정식을 활용한 생태계 모의실험 및 웹 차트 시각화",
      tags: ["생태계", "미분방정식", "모의실험", "친환경", "웹차트"],
      status: "완료",
    },
    {
      title: "2025 전력사용량 예측 AI 경진대회",
      description: "시계열 데이터를 활용한 전력사용량 예측 모델 개발",
      tags: ["에너지", "전력사용량", "시계열", "정형"],
      status: "진행중",
    },
  ]

  const knowledgeAreas = [
    {
      icon: Database,
      title: "Data Science",
      description: "전처리, EDA, 시각화, 모델링",
      color: "bg-blue-50 text-blue-700 border-blue-200",
      href: "/knowledge/data-science",
    },
    {
      icon: Brain,
      title: "Domain Expertise",
      description: "금융, 기상, 의료, 에너지",
      color: "bg-green-50 text-green-700 border-green-200",
      href: "/knowledge/domain-expertise",
    },
    {
      icon: Lightbulb,
      title: "Science & Articles",
      description: "물리학, 환경, 수학 상식",
      color: "bg-purple-50 text-purple-700 border-purple-200",
      href: "/knowledge/science-articles",
    },
  ]

  const techStack = [
    { name: "Python", color: "bg-blue-100 text-blue-800" },
    { name: "TensorFlow", color: "bg-green-100 text-green-800" },
    { name: "Feature Engineering", color: "bg-purple-100 text-purple-800" },
    { name: "Domain Expertise", color: "bg-orange-100 text-orange-800" },
    { name: "Machine Learning", color: "bg-indigo-100 text-indigo-800" },
    { name: "Deep Learning", color: "bg-pink-100 text-pink-800" },
  ]

  const portfolioStats = [
    { value: "5+", label: "Major Projects", icon: TrendingUp, color: "text-blue-600" },
    { value: "4", label: "Domain Areas", icon: Users, color: "text-green-600" },
    { value: "10+", label: "Tech Skills", icon: Award, color: "text-purple-600" },
    { value: "∞", label: "Learning", icon: Infinity, color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8">
            <div className="relative w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg md:block hidden">
              C{/* Data Science indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                <Database className="w-4 h-4 text-yellow-800" />
              </div>
              {/* Brain indicator */}
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-md">
                <Brain className="w-4 h-4 text-green-800" />
              </div>
            </div>

            {/* Mobile Avatar - smaller */}
            <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg md:hidden">
              C
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                <Database className="w-2.5 h-2.5 text-yellow-800" />
              </div>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-4">CONG878</h1>
            <p className="text-xl text-gray-600 mb-2">Feature Engineering Specialist</p>
            <p className="text-lg text-gray-500 mb-8">도메인 지식 기반 데이터 사이언티스트</p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techStack.map((tech, index) => (
              <span key={index} className={`px-4 py-2 ${tech.color} rounded-full text-sm font-medium shadow-sm`}>
                {tech.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
            >
              <Link href="/about">About Me</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-blue-200 hover:bg-blue-50 bg-transparent"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
            >
              <a href="mailto:cong878@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Knowledge Areas */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Knowledge Areas</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {knowledgeAreas.map((area, index) => (
            <Link key={index} href={area.href}>
              <Card
                className={`text-center hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${area.color} hover:scale-105`}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full ${area.color.replace("border-", "bg-").replace("text-", "text-")} flex items-center justify-center mx-auto mb-4 shadow-md`}
                  >
                    <area.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                  <ArrowRight className="w-5 h-5 mx-auto mt-4 text-gray-400" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-2 border-blue-200 hover:bg-blue-50 bg-transparent">
            <Link href="/knowledge">모든 지식 보기</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 hover:scale-105"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge
                    variant={project.status === "완료" ? "default" : "secondary"}
                    className={project.status === "완료" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="p-0 h-auto font-medium text-blue-600 hover:text-blue-800">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-2 border-blue-200 hover:bg-blue-50 bg-transparent">
            <Link href="/projects">모든 프로젝트 보기</Link>
          </Button>
        </div>
      </section>

      {/* Portfolio Statistics */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Portfolio Overview</h2>
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
      </section>
    </div>
  )
}
