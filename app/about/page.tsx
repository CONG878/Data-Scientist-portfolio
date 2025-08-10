import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Github, Award, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const programmingLanguages = [
    { name: "Python", color: "bg-blue-100 text-blue-800" },
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
    { name: "SQL", color: "bg-gray-100 text-gray-800" },
  ]

  const dataScienceStack = [
    { name: "TensorFlow", color: "bg-orange-100 text-orange-800" },
    { name: "Pandas", color: "bg-blue-100 text-blue-800" },
    { name: "scikit-learn", color: "bg-green-100 text-green-800" },
    { name: "matplotlib", color: "bg-red-100 text-red-800" },
    { name: "NumPy", color: "bg-purple-100 text-purple-800" },
    //{ name: "stack1", color: "bg-cyan-100 text-cyan-800" }, // 가상 스택 추가
    //{ name: "stack2", color: "bg-pink-100 text-pink-800" }, // 가상 스택 추가
    //{ name: "stack3", color: "bg-teal-100 text-teal-800" }, // 가상 스택 추가
  ]

  const webTechnologies = [
    { name: "React", color: "bg-cyan-100 text-cyan-800" },
    { name: "Svelte", color: "bg-orange-100 text-orange-800" },
    //{ name: "Astro", color: "bg-purple-100 text-purple-800" },
  ]

  const databases = [
    { name: "MySQL", color: "bg-blue-100 text-blue-800" },
    { name: "MariaDB", color: "bg-green-100 text-green-800" },
  ]

  const domainExpertise = [
    {
      title: "🏦 금융 (Finance)",
      description: "금융 데이터 분석 및 리스크 모델링",
      color: "border-green-200 bg-green-50",
      textColor: "text-green-800",
    },
    {
      title: "🌤️ 기상 (Weather)",
      description: "기상 데이터 분석 및 예측 모델링",
      color: "border-blue-200 bg-blue-50",
      textColor: "text-blue-800",
    },
    {
      title: "🏥 의료 (Healthcare)",
      description: "의료 데이터 분석 및 헬스케어 솔루션",
      color: "border-red-200 bg-red-50",
      textColor: "text-red-800",
    },
    {
      title: "⚡ 에너지 (Energy)",
      description: "에너지 사용량 예측 및 최적화",
      color: "border-yellow-200 bg-yellow-50",
      textColor: "text-yellow-800",
    },
  ]

  const education = [
    { type: "학교", name: "물리학 전공", icon: "🎓" },
    { type: "학교", name: "항공우주공학 복수전공", icon: "🚀" },
    { type: "직업", name: "데이터 사이언스 부트캠프", icon: "💻" },
    { type: "직업", name: "머신러닝 전문가 과정", icon: "🤖" },
    { type: "직업", name: "피쳐 엔지니어링 심화 과정", icon: "⚙️" },
  ]

  const certifications = [
    {
      name: "데이터분석준전문가 (ADsP)",
      issuer: "한국데이터산업진흥원",
      year: "2024",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "SQL 개발자 (SQLD)", issuer: "한국데이터산업진흥원", year: "2024", color: "bg-green-100 text-green-800" },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2023",
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon",
      year: "2023",
      color: "bg-yellow-100 text-yellow-800",
    },
    { name: "Python Institute PCAP", issuer: "Python Institute", year: "2023", color: "bg-purple-100 text-purple-800" },
    {
      name: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      color: "bg-indigo-100 text-indigo-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            안녕하세요! 도메인 전문성을 바탕으로 데이터에서 실질적인 가치를 창출하는 피쳐 엔지니어 CONG878입니다.
          </p>
        </div>

        {/* Introduction & Quick Contact */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <Card className="shadow-lg border-2 border-blue-100 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                저는 금융, 기상, 의료, 에너지 분야의 도메인 지식을 바탕으로 데이터 사이언스 프로젝트를 수행하는 피쳐
                엔지니어입니다. 단순한 모델링을 넘어서 비즈니스 문제를 깊이 이해하고, 도메인 특성을 반영한 피쳐를
                설계하여 실질적인 성과를 창출합니다.
              </p>
              <p>
                특히 시계열 데이터 분석과 정형 데이터 처리에 강점을 가지고 있으며, 통계적 접근법과 머신러닝 기법을
                적절히 조합하여 robust한 솔루션을 제공합니다.
              </p>
              <p>
                지속적인 학습을 통해 최신 기술 트렌드를 파악하고, TIL(Today I Learned)을 통해 일일 학습 내용을 기록하며
                성장하고 있습니다.
              </p>
            </CardContent>
          </Card>

          {/* Quick Contact Card */}
          <Card className="shadow-lg border-2 border-gray-100 md:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-sm">cong878@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-gray-500" />
                <Link href="https://github.com/cong878" className="text-sm text-blue-600 hover:underline">
                  github.com/cong878
                </Link>
              </div>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <a href="mailto:cong878@example.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <Card className="shadow-lg border-2 border-gray-100 max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-lg">{edu.icon}</span>
                <div>
                  <span className="text-sm text-gray-500 font-medium">{edu.type}</span>
                  <div className="text-gray-700 font-medium">{edu.name}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="shadow-lg border-2 border-green-100 max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="w-6 h-6 text-green-600" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
                    <Badge className={`${cert.color} text-xs`}>{cert.year}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Competencies */}
        <Card className="shadow-lg border-2 border-purple-100 max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Core Competencies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang, index) => (
                  <span key={index} className={`px-3 py-1 ${lang.color} rounded-full text-sm font-medium`}>
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Data Science Stack</h4>
              <div className="flex flex-wrap gap-2">
                {dataScienceStack.map((tech, index) => (
                  <span key={index} className={`px-3 py-1 ${tech.color} rounded-full text-sm font-medium`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Web Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {webTechnologies.map((tech, index) => (
                  <span key={index} className={`px-3 py-1 ${tech.color} rounded-full text-sm font-medium`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Database</h4>
              <div className="flex flex-wrap gap-2">
                {databases.map((db, index) => (
                  <span key={index} className={`px-3 py-1 ${db.color} rounded-full text-sm font-medium`}>
                    {db.name}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Domain Expertise */}
        <Card className="shadow-lg border-2 border-green-100 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Domain Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {domainExpertise.map((domain, index) => (
                <div
                  key={index}
                  className={`p-4 border-2 ${domain.color} rounded-lg hover:shadow-md transition-shadow`}
                >
                  <h3 className={`font-semibold ${domain.textColor} mb-2`}>{domain.title}</h3>
                  <p className="text-gray-600 text-sm">{domain.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
