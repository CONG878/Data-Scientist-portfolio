"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { knowledgeAreas, colorMap } from "@/src/data/knowledge"

export default function KnowledgePage() {
  const [selectedArea, setSelectedArea] = useState("data")

  const selectedAreaData = knowledgeAreas.find((area) => area.id === selectedArea)

  if (!selectedAreaData) return null

  const colors = colorMap[selectedAreaData.color]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Knowledge</h1>
            <p className="text-gray-600">도메인별 전문 지식과 인사이트를 체계적으로 정리합니다.</p>
          </div>

          {/* Knowledge Areas Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              {knowledgeAreas.map((area) => {
                const areaColors = colorMap[area.color]
                const isSelected = selectedArea === area.id

                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all ${
                      isSelected ? areaColors.buttonActive : areaColors.buttonInactive
                    }`}
                  >
                    <span className="text-xl">{area.icon}</span>
                    <span className="font-medium">{area.title}</span>
                    <span className={`px-2 py-1 ${areaColors.badgeBg} ${areaColors.badgeText} rounded-full text-xs`}>
                      {area.importance}/5
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Selected Area Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">{selectedAreaData.icon}</span>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{selectedAreaData.title}</h2>
                <p className="text-gray-600">{selectedAreaData.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* 주요 토픽 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">주요 토픽</h3>
                <div className="space-y-2">
                  {selectedAreaData.topics.map((topic, index) => (
                    <div key={index} className={`flex items-center space-x-2 p-3 ${colors.bg} rounded-lg`}>
                      <span className={`w-2 h-2 ${colors.dotBg} rounded-full`}></span>
                      <span className={`${colors.text} font-medium`}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 상세 페이지 링크 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">상세 내용</h3>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="text-gray-600 mb-4">{selectedAreaData.title} 관련 상세 콘텐츠를 확인해보세요.</p>
                  <Link href={`/knowledge/${selectedAreaData.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      상세 내용 보기
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">콘텐츠 준비 중</h3>
              <p className="text-gray-600">
                {selectedAreaData.title} 관련 상세 콘텐츠를 준비하고 있습니다. 곧 풍부한 지식과 인사이트를 공유할
                예정입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
