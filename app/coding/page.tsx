import { Code } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CodingOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
        <Code className="w-20 h-20 text-orange-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Coding Section</h1>
        <p className="text-lg text-gray-600 mb-8">
          이곳은 코딩 관련 콘텐츠의 개요 페이지입니다. 다양한 코딩 챌린지, 알고리즘 학습 자료 등을 찾아볼 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/coding/challenges">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg"
            >
              코딩 챌린지 보기
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-200 hover:bg-orange-50 bg-transparent"
            >
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
