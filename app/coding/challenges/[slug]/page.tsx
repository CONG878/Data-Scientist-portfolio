import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Code, Brain, Lightbulb, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { challenges } from "@/src/data/challenges"

// 난이도별 색상 매핑
const difficultyColors = {
  "Level 1": "bg-green-100 text-green-800 border-green-200",
  "Level 2": "bg-blue-100 text-blue-800 border-blue-200",
  "Level 3": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Level 4": "bg-orange-100 text-orange-800 border-orange-200",
  "Level 5": "bg-red-100 text-red-800 border-red-200",
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function ChallengePage({ params }: PageProps) {
  const challenge = challenges.find((c) => c.slug === params.slug)

  if (!challenge) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* 뒤로 가기 버튼 */}
        <div className="mb-8">
          <Link href="/coding/challenges">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              문제 목록으로 돌아가기
            </Button>
          </Link>
        </div>

        {/* 헤더 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{challenge.title}</h1>
            <Badge className={`${difficultyColors[challenge.difficulty]} border text-lg px-3 py-1`}>
              {challenge.difficulty}
            </Badge>
          </div>

          <p className="text-lg text-gray-600 mb-6">{challenge.summary}</p>

          {/* 메타 정보 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                알고리즘
              </h3>
              <div className="flex flex-wrap gap-2">
                {challenge.algorithm.map((algo, index) => (
                  <Badge key={index} className="bg-purple-100 text-purple-800">
                    {algo}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" />
                사용 언어
              </h3>
              <div className="flex flex-wrap gap-2">
                {challenge.languages.map((lang, index) => (
                  <Badge key={index} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 복잡도 정보 */}
          {(challenge.timeComplexity || challenge.spaceComplexity) && (
            <div className="flex gap-6 text-sm text-gray-600">
              {challenge.timeComplexity && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>시간 복잡도: {challenge.timeComplexity}</span>
                </div>
              )}
              {challenge.spaceComplexity && (
                <div className="flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>공간 복잡도: {challenge.spaceComplexity}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 문제 설명 */}
        <Card className="mb-8 shadow-lg border-2 border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              문제 설명
            </CardTitle>
          </CardHeader>
          <CardContent>
            <details className="cursor-pointer">
              <summary className="text-blue-600 font-medium hover:text-blue-800 mb-4">
                문제 설명 보기 (클릭하여 펼치기)
              </summary>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                  {challenge.problemDescription}
                </pre>
              </div>
            </details>
          </CardContent>
        </Card>

        {/* 접근법 */}
        <Card className="mb-8 shadow-lg border-2 border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-green-600" />
              접근법
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{challenge.approach}</div>
            </div>
          </CardContent>
        </Card>

        {/* 도움말 */}
        <Card className="mb-8 shadow-lg border-2 border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-purple-600" />
              도움말
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{challenge.hints}</div>
            </div>
          </CardContent>
        </Card>

        {/* 단계별 풀이 */}
        <Card className="mb-8 shadow-lg border-2 border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-600" />
              단계별 풀이
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{challenge.stepByStep}</div>
            </div>
          </CardContent>
        </Card>

        {/* 코드 */}
        <Card className="mb-8 shadow-lg border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-gray-600" />
              구현 코드
            </CardTitle>
          </CardHeader>
          <CardContent>
            <details className="cursor-pointer">
              <summary className="text-blue-600 font-medium hover:text-blue-800 mb-4">
                정답 코드 보기 (클릭하여 펼치기)
              </summary>
              <div className="space-y-6">
                {challenge.code.map((codeBlock, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      {codeBlock.language}
                    </h4>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{codeBlock.content}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </details>
          </CardContent>
        </Card>

        {/* 추가 설명 */}
        {challenge.additionalExplanation && (
          <Card className="mb-8 shadow-lg border-2 border-indigo-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-indigo-600" />
                추가 설명
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {challenge.additionalExplanation}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 결론 */}
        <Card className="mb-8 shadow-lg border-2 border-emerald-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              결론
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{challenge.conclusion}</div>
            </div>
          </CardContent>
        </Card>

        {/* 태그 */}
        <Card className="shadow-lg border-2 border-gray-100">
          <CardHeader>
            <CardTitle className="text-lg">관련 태그</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {challenge.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  #{tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// 정적 경로 생성
export function generateStaticParams() {
  return challenges.map((challenge) => ({
    slug: challenge.slug,
  }))
}

// 메타데이터 생성
export function generateMetadata({ params }: PageProps) {
  const challenge = challenges.find((c) => c.slug === params.slug)

  if (!challenge) {
    return {
      title: "문제를 찾을 수 없습니다",
    }
  }

  return {
    title: `${challenge.title} - CONG878`,
    description: challenge.summary,
  }
}
