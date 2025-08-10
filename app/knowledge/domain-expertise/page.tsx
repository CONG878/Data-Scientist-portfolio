import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2 } from "lucide-react"
import Link from "next/link"

export default function DomainExpertisePage() {
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
          <Building2 className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Domain Expertise</h1>
          <p className="text-lg text-gray-600 mb-8">
            각 도메인별 전문 지식과 데이터 특성 이해에 대한 상세 콘텐츠를 준비하고 있습니다. 금융, 기상, 의료, 에너지
            분야의 도메인 지식을 다룰 예정입니다.
          </p>
          <div className="text-4xl mb-4">🚧</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">콘텐츠 준비 중</h3>
          <p className="text-gray-600 mb-8">곧 다양한 도메인의 전문 지식과 실무 인사이트를 공유할 예정입니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/knowledge">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
              >
                Knowledge로 돌아가기
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-green-200 hover:bg-green-50 bg-transparent"
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
    title: "Domain Expertise - CONG878",
    description: "각 도메인별 전문 지식과 데이터 특성 이해",
  }
}
