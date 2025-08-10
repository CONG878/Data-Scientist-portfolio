"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Code, Brain, Clock, ArrowRight, Filter } from "lucide-react"
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

// 알고리즘별 색상 매핑
const algorithmColors = {
  BFS: "bg-purple-100 text-purple-800",
  DFS: "bg-indigo-100 text-indigo-800",
  그래프: "bg-cyan-100 text-cyan-800",
  DP: "bg-pink-100 text-pink-800",
  수학: "bg-emerald-100 text-emerald-800",
  "이분 탐색": "bg-teal-100 text-teal-800",
  "우선순위 큐": "bg-violet-100 text-violet-800",
  "연결 리스트": "bg-rose-100 text-rose-800",
  "투 포인터": "bg-amber-100 text-amber-800",
}

export default function ChallengesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("all")

  // 모든 난이도와 알고리즘 추출
  const allDifficulties = useMemo(() => {
    const difficulties = new Set<string>()
    challenges.forEach((challenge) => difficulties.add(challenge.difficulty))
    return Array.from(difficulties).sort()
  }, [])

  const allAlgorithms = useMemo(() => {
    const algorithms = new Set<string>()
    challenges.forEach((challenge) => challenge.algorithm.forEach((algo) => algorithms.add(algo)))
    return Array.from(algorithms).sort()
  }, [])

  // 필터링된 데이터
  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const matchesSearch =
        searchTerm === "" ||
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesDifficulty = selectedDifficulty === "all" || challenge.difficulty === selectedDifficulty

      const matchesAlgorithm = selectedAlgorithm === "all" || challenge.algorithm.includes(selectedAlgorithm)

      return matchesSearch && matchesDifficulty && matchesAlgorithm
    })
  }, [searchTerm, selectedDifficulty, selectedAlgorithm])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coding Challenges</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            프로그래머스 코딩 테스트 문제 풀이를 정리했습니다. 각 문제의 접근법과 상세한 해설을 확인해보세요.
          </p>
        </div>

        {/* 필터 및 검색 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          {/* 검색 */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="문제 제목, 내용, 태그로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* 난이도 필터 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">난이도</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedDifficulty === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty("all")}
              >
                전체
              </Button>
              {allDifficulties.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                >
                  {difficulty}
                </Button>
              ))}
            </div>
          </div>

          {/* 알고리즘 필터 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">알고리즘</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedAlgorithm === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAlgorithm("all")}
              >
                전체
              </Button>
              {allAlgorithms.map((algorithm) => (
                <Button
                  key={algorithm}
                  variant={selectedAlgorithm === algorithm ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedAlgorithm(algorithm)}
                >
                  {algorithm}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* 결과 통계 */}
        <div className="mb-8">
          <p className="text-gray-600">
            총 <span className="font-semibold text-blue-600">{filteredChallenges.length}</span>개의 문제
          </p>
        </div>

        {/* 문제 카드들 */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredChallenges.map((challenge) => (
            <Card
              key={challenge.id}
              className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 hover:scale-105"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{challenge.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {new Date(challenge.date).toLocaleDateString("ko-KR")}
                      </div>
                      {challenge.timeComplexity && (
                        <div className="flex items-center gap-1">
                          <Code className="w-4 h-4" />
                          {challenge.timeComplexity}
                        </div>
                      )}
                    </div>
                  </div>
                  <Badge className={`${difficultyColors[challenge.difficulty]} border`}>{challenge.difficulty}</Badge>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mb-4">{challenge.summary}</p>
              </CardHeader>

              <CardContent>
                {/* 알고리즘 태그 */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">알고리즘</h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.algorithm.map((algo, index) => (
                      <Badge
                        key={index}
                        className={`text-xs ${algorithmColors[algo as keyof typeof algorithmColors] || "bg-gray-100 text-gray-800"}`}
                      >
                        {algo}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 언어 태그 */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">사용 언어</h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.languages.map((lang, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 태그 */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">태그</h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 풀이 보기 버튼 */}
                <Link href={`/coding/challenges/${challenge.slug}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Code className="w-4 h-4 mr-2" />
                    풀이 보기
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 결과 없음 */}
        {filteredChallenges.length === 0 && (
          <div className="text-center py-12">
            <Code className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-400">다른 키워드나 필터를 시도해보세요.</p>
          </div>
        )}

        {/* 통계 요약 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">문제 통계</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{challenges.length}</div>
              <div className="text-sm text-gray-600">총 문제 수</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{allAlgorithms.length}</div>
              <div className="text-sm text-gray-600">알고리즘 종류</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{allDifficulties.length}</div>
              <div className="text-sm text-gray-600">난이도 단계</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {challenges.reduce((acc, challenge) => acc + challenge.languages.length, 0)}
              </div>
              <div className="text-sm text-gray-600">언어 구현</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
