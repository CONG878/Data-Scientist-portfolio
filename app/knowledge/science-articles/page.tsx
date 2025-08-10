import { Button } from "@/components/ui/button"
import { ArrowLeft, Microscope } from "lucide-react"
import Link from "next/link"

export default function ScienceArticlesPage() {
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
          <Microscope className="w-20 h-20 text-purple-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Science & Articles</h1>
          <p className="text-lg text-gray-600 mb-8">
            과학적 사고와 연구 방법론, 최신 논문 리뷰에 대한 상세 콘텐츠를 준비하고 있습니다. 물리학, 환경, 수학, 상식
            등의 주제를 다룰 예정입니다.
          </p>
          <div className="text-4xl mb-4">🚧</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">콘텐츠 준비 중</h3>
          <p className="text-gray-600 mb-8">곧 과학적 지식과 최신 연구 동향을 공유할 예정입니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/knowledge">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg"
              >
                Knowledge로 돌아가기
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-200 hover:bg-purple-50 bg-transparent"
              >
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
    title: "Science & Articles - CONG878",
    description: "과학적 사고와 연구 방법론, 최신 논문 리뷰",
  }
}
