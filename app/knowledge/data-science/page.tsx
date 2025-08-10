import { Button } from "@/components/ui/button"
import { ArrowLeft, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DataSciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* 뒤로 가기 버튼 */}
        <div className="mb-8">
          <Link href="/knowledge">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Knowledge로 돌아가기
            </Button>
          </Link>
        </div>

        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
          <BarChart3 className="w-20 h-20 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Science</h1>
          <p className="text-lg text-gray-600 mb-8">
            데이터 사이언스의 핵심 개념과 실무 적용 방법론에 대한 상세 콘텐츠를 준비하고 있습니다. 통계 분석, EDA,
            시각화, 모델링, 피쳐 엔지니어링 등의 주제를 다룰 예정입니다.
          </p>
          <div className="text-4xl mb-4">🚧</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">콘텐츠 준비 중</h3>
          <p className="text-gray-600 mb-8">곧 풍부한 데이터 사이언스 지식과 실무 경험을 공유할 예정입니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/knowledge">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              >
                Knowledge로 돌아가기
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:bg-blue-50 bg-transparent">
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateMetadata() {
  return {
    title: "Data Science - CONG878",
    description: "데이터 사이언스의 핵심 개념과 실무 적용 방법론",
  }
}
