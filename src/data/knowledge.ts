export interface KnowledgeArea {
  id: string
  title: string
  icon: string
  color: "blue" | "green" | "purple"
  importance: number
  topics: string[]
  description: string
  slug: string
}

// 색상 매핑 객체
export const colorMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    dotBg: "bg-blue-500",
    dotText: "text-blue-800",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    buttonActive: "bg-blue-50 border-blue-200 text-blue-800",
    buttonInactive: "bg-white border-gray-200 text-gray-700 hover:bg-gray-50",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    dotBg: "bg-green-500",
    dotText: "text-green-800",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    buttonActive: "bg-green-50 border-green-200 text-green-800",
    buttonInactive: "bg-white border-gray-200 text-gray-700 hover:bg-gray-50",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-800",
    dotBg: "bg-purple-500",
    dotText: "text-purple-800",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    buttonActive: "bg-purple-50 border-purple-200 text-purple-800",
    buttonInactive: "bg-white border-gray-200 text-gray-700 hover:bg-gray-50",
  },
}

export const knowledgeAreas: KnowledgeArea[] = [
  {
    id: "data",
    title: "Data Science",
    icon: "📊",
    color: "blue",
    importance: 5,
    topics: ["통계 분석", "EDA", "시각화", "모델링", "피쳐 엔지니어링"],
    description: "데이터 사이언스의 핵심 개념과 실무 적용 방법론",
    slug: "data-science",
  },
  {
    id: "domain",
    title: "Domain Knowledge",
    icon: "🏭",
    color: "green",
    importance: 4,
    topics: ["금융", "기상", "의료", "에너지"],
    description: "각 도메인별 전문 지식과 데이터 특성 이해",
    slug: "domain-expertise",
  },
  {
    id: "science",
    title: "Science & Articles",
    icon: "🔬",
    color: "purple",
    importance: 2,
    topics: ["물리학", "환경", "수학", "상식"],
    description: "과학적 사고와 연구 방법론, 최신 논문 리뷰",
    slug: "science-articles",
  },
]
