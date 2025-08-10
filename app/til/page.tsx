"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Tag, BookOpen, Code, Brain, BarChart3, Filter, ChevronDown, ChevronUp } from "lucide-react"

// TIL 데이터 타입 정의
interface TILEntry {
  id: string
  date: string
  title: string
  summary: string[]
  insights: string[]
  code?: string
  questions?: string[]
  tags: string[]
  category: string
}

// 샘플 TIL 데이터 (기존 문서들을 간소화)
const tilData: TILEntry[] = [
  {
    id: "til-20250807",
    date: "2025-08-07",
    title: "합성곱 신경망 (CNN)",
    summary: [
      "CNN의 기본 구조: Conv → Pooling → FC → Output",
      "합성곱층에서 필터를 사용한 지역적 특징 추출",
      "패딩과 스트라이드로 출력 크기 조절",
      "MNIST 데이터셋으로 CNN 분류 모델 구현",
    ],
    insights: [
      "Dense 층 대신 Conv 층을 사용하는 이유: 파라미터 효율성",
      "Max Pooling vs Strided Convolution의 트레이드오프",
      "CNN이 NLP에도 적용 가능한 이유 (n-gram 패턴 추출)",
    ],
    code: `model = keras.Sequential([
  layers.Conv2D(32, (3,3), activation='relu', input_shape=(28,28,1)),
  layers.MaxPooling2D((2,2)),
  layers.Conv2D(64, (3,3), activation='relu'),
  layers.MaxPooling2D((2,2)),
  layers.Flatten(),
  layers.Dropout(0.5),
  layers.Dense(10, activation='softmax')
])`,
    questions: ["Q: 왜 CNN에서는 Dense 대신 Conv를 계속 사용하는가?", "A: 파라미터 수 급증 방지 및 공간적 특징 보존"],
    tags: ["딥러닝", "CNN", "이미지처리", "TensorFlow"],
    category: "딥러닝",
  },
  {
    id: "til-20250805",
    date: "2025-08-05",
    title: "인공신경망 과적합 방지",
    summary: [
      "과적합: 훈련 데이터에 과도하게 적합되어 일반화 실패",
      "EarlyStopping으로 최적 시점에 학습 중단",
      "Dropout으로 학습 시 일부 뉴런 비활성화",
      "L1/L2 정규화로 가중치 크기 제약",
    ],
    insights: [
      "Dropout은 추론 시 자동으로 비활성화됨",
      "patience 설정은 데이터 노이즈 수준에 따라 조정",
      "L2는 가중치 축소, L1은 희소성 유도",
    ],
    code: `early_stop = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)
model.add(layers.Dropout(0.3))
model.add(layers.Dense(64, kernel_regularizer=regularizers.l2(0.01)))`,
    questions: [
      "Q: Dropout과 BatchNorm을 함께 사용할 때 순서는?",
      "A: Dense → BatchNorm → Activation → Dropout 순서 권장",
    ],
    tags: ["딥러닝", "과적합", "정규화", "드롭아웃"],
    category: "딥러닝",
  },
  {
    id: "til-20250804",
    date: "2025-08-04",
    title: "인공신경망 기초",
    summary: [
      "ANN 구조: 입력층 → 은닉층 → 출력층",
      "순전파: 입력 → 가중합 → 활성화 함수 → 출력",
      "역전파: 오차를 역방향으로 전파하여 가중치 업데이트",
      "NumPy 직접 구현 vs TensorFlow 프레임워크 비교",
    ],
    insights: [
      "직접 구현으로 수학적 원리 이해, 프레임워크로 개발 효율성 확보",
      "Sequential vs Functional API vs Subclassing의 적용 상황",
      "XOR 문제로 비선형 분류 능력 확인",
    ],
    code: `model = keras.Sequential([
  layers.Dense(4, activation='relu', input_shape=(2,)),
  layers.Dense(1, activation='sigmoid')
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])`,
    questions: ["Q: Sequential로 구현하기 어려운 구조는?", "A: 다중 입력/출력, 스킵 연결, 병렬 브랜치 등"],
    tags: ["딥러닝", "신경망", "역전파", "TensorFlow"],
    category: "딥러닝",
  },
  {
    id: "til-20250721",
    date: "2025-07-21",
    title: "분류 모델 심화",
    summary: [
      "k-NN: 가장 가까운 k개 이웃의 클래스로 분류",
      "로지스틱 회귀: 시그모이드 함수로 확률 예측",
      "앙상블: 여러 모델 결합으로 성능 향상",
      "보팅, 배깅, 부스팅의 차이점과 적용",
    ],
    insights: [
      "k-NN은 거리 측정 방식과 스케일링이 성능에 큰 영향",
      "로지스틱 회귀의 계수는 오즈비로 해석 가능",
      "앙상블은 편향-분산 트레이드오프 개선",
    ],
    code: `# k-NN with scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
knn = KNeighborsClassifier(n_neighbors=5)

# Voting Ensemble
ensemble = VotingClassifier([
  ('lr', LogisticRegression()),
  ('svc', SVC(probability=True)),
  ('dt', DecisionTreeClassifier())
], voting='soft')`,
    questions: ["Q: k-NN에서 동점 발생 시 해결법은?", "A: 거리 가중 투표 또는 가장 가까운 이웃 우선"],
    tags: ["머신러닝", "분류", "k-NN", "앙상블"],
    category: "머신러닝",
  },
  {
    id: "til-20250718",
    date: "2025-07-18",
    title: "분류 모델 기초",
    summary: [
      "분류 vs 회귀: 이산적 클래스 vs 연속적 실수값",
      "성능 지표: 정확도, 정밀도, 재현율, F1 Score",
      "의사결정나무: 지니계수/엔트로피로 불순도 측정",
      "교차검증과 하이퍼파라미터 튜닝",
    ],
    insights: [
      "도메인에 따른 지표 선택: 의료(재현율), 법률(정밀도)",
      "혼동행렬로 모델 성능의 세부 분석 가능",
      "Stratified K-Fold로 불균형 데이터 안정적 검증",
    ],
    code: `dt = DecisionTreeClassifier(max_depth=3, random_state=42)
dt.fit(X_train, y_train)

# GridSearch with CV
param_grid = {'max_depth': [3, 5, 7], 'min_samples_split': [2, 5, 10]}
grid_search = GridSearchCV(dt, param_grid, cv=5, scoring='f1')`,
    questions: ["Q: One-Hot Encoding의 차원 폭발 대처법은?", "A: 희소행렬 + 차원축소 또는 임베딩 기법 활용"],
    tags: ["머신러닝", "분류", "의사결정나무", "교차검증"],
    category: "머신러닝",
  },
  {
    id: "til-20250716",
    date: "2025-07-16",
    title: "선형 회귀 모델",
    summary: [
      "통계적 회귀 vs 머신러닝 회귀의 목적과 가정 차이",
      "최소제곱법(OLS): 해석적 해로 빠른 계산",
      "경사하강법: 반복적 최적화로 대규모 데이터 적용",
      "Ridge, Lasso, ElasticNet 정규화 기법",
    ],
    insights: [
      "OLS는 볼록함수 특성으로 유일해 보장",
      "R²가 음수인 경우: 모델이 평균 예측보다 못함",
      "L1은 특징 선택, L2는 가중치 축소 효과",
    ],
    code: `# Ridge Regression
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Gradient Descent
theta = theta - alpha * (1/m) * X.T.dot(X.dot(theta) - y)`,
    questions: ["Q: 학습률 α 최적화 방법은?", "A: 그리드 서치, 학습률 스케줄링, Adam 등 적응형 옵티마이저"],
    tags: ["머신러닝", "회귀", "정규화", "최적화"],
    category: "머신러닝",
  },
  {
    id: "til-20250708",
    date: "2025-07-08",
    title: "기초 통계",
    summary: [
      "통계의 정의: 불확실성 하에서 합리적 의사결정 지원",
      "측정 척도: 명목, 서열, 등간, 비율 척도의 특징",
      "중심경향성: 평균, 중앙값, 최빈값의 적용 상황",
      "산포도: 분산, 표준편차, 범위, IQR",
    ],
    insights: [
      "표본 분산에서 n-1로 나누는 이유: 불편 추정량",
      "왜도는 분포의 비대칭성, 첨도는 꼬리 두께 측정",
      "척도 수준에 따른 적절한 통계량 선택 중요",
    ],
    code: `# 불편 표본 분산
sample_var = np.sum((X - X.mean())**2) / (n - 1)

# 왜도와 첨도
from scipy.stats import skew, kurtosis
skewness = skew(data)
kurt = kurtosis(data)`,
    questions: [
      "Q: 첨도가 중심 뾰족함과 관련된 이유는?",
      "A: 4제곱 항이 극단값에 민감하고, 중심 집중이 꼬리 극단값을 부각",
    ],
    tags: ["통계", "기술통계", "척도", "분포"],
    category: "통계",
  },
]

// 카테고리별 아이콘 매핑
const categoryIcons = {
  딥러닝: Brain,
  머신러닝: BarChart3,
  통계: BookOpen,
  기타: Code,
}

// 카테고리별 색상 매핑
const categoryColors = {
  딥러닝: "bg-purple-50 text-purple-700 border-purple-200",
  머신러닝: "bg-blue-50 text-blue-700 border-blue-200",
  통계: "bg-green-50 text-green-700 border-green-200",
  기타: "bg-gray-50 text-gray-700 border-gray-200",
}

export default function TILPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [expandedCards, setExpandedCards] = useState<string[]>([])

  // 모든 태그 추출
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    tilData.forEach((entry) => entry.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [])

  // 모든 카테고리 추출
  const allCategories = useMemo(() => {
    const categories = new Set<string>()
    tilData.forEach((entry) => categories.add(entry.category))
    return Array.from(categories).sort()
  }, [])

  // 필터링된 데이터
  const filteredData = useMemo(() => {
    return tilData.filter((entry) => {
      const matchesSearch =
        searchTerm === "" ||
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.summary.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
        entry.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || entry.category === selectedCategory

      const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => entry.tags.includes(tag))

      return matchesSearch && matchesCategory && matchesTags
    })
  }, [searchTerm, selectedCategory, selectedTags])

  // 월별 그룹핑
  const groupedByMonth = useMemo(() => {
    const groups: { [key: string]: TILEntry[] } = {}

    filteredData.forEach((entry) => {
      const date = new Date(entry.date)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
      const monthLabel = date.toLocaleDateString("ko-KR", { year: "numeric", month: "long" })

      if (!groups[monthKey]) {
        groups[monthKey] = []
      }
      groups[monthKey].push(entry)
    })

    // 월별로 정렬 (최신순)
    const sortedGroups = Object.keys(groups)
      .sort((a, b) => b.localeCompare(a))
      .map((key) => ({
        key,
        label: new Date(key + "-01").toLocaleDateString("ko-KR", { year: "numeric", month: "long" }),
        entries: groups[key].sort((a, b) => b.date.localeCompare(a.date)),
      }))

    return sortedGroups
  }, [filteredData])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const toggleCardExpansion = (id: string) => {
    setExpandedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Today I Learned</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            데이터 사이언스 학습 여정을 기록합니다. 매일의 작은 깨달음이 큰 성장으로 이어집니다.
          </p>
        </div>

        {/* 필터 및 검색 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          {/* 검색 */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="제목, 내용, 태그로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* 카테고리 필터 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">카테고리</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                전체
              </Button>
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* 태그 필터 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">태그</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-blue-100"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* 결과 통계 */}
        <div className="mb-8">
          <p className="text-gray-600">
            총 <span className="font-semibold text-blue-600">{filteredData.length}</span>개의 TIL 기록
          </p>
        </div>

        {/* 월별 그룹핑된 TIL 카드들 */}
        {groupedByMonth.map((group) => (
          <div key={group.key} className="mb-12">
            {/* 월별 헤더 */}
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{group.label}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {group.entries.length}개
              </Badge>
            </div>

            {/* 해당 월의 TIL 카드들 */}
            <div className="grid lg:grid-cols-2 gap-6">
              {group.entries.map((entry) => {
                const CategoryIcon = categoryIcons[entry.category as keyof typeof categoryIcons] || Code
                const isExpanded = expandedCards.includes(entry.id)

                return (
                  <Card
                    key={entry.id}
                    className={`hover:shadow-lg transition-all duration-300 border-2 ${categoryColors[entry.category as keyof typeof categoryColors]} hover:scale-105`}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <CategoryIcon className="w-5 h-5" />
                          <Badge className={categoryColors[entry.category as keyof typeof categoryColors]}>
                            {entry.category}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(entry.date).toLocaleDateString("ko-KR")}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{entry.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      {/* 요약 */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">📚 오늘 배운 내용</h4>
                        <ul className="space-y-1">
                          {entry.summary.slice(0, isExpanded ? undefined : 2).map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                          {!isExpanded && entry.summary.length > 2 && (
                            <li className="text-sm text-gray-400">... 외 {entry.summary.length - 2}개 항목</li>
                          )}
                        </ul>
                      </div>

                      {/* 확장된 내용 */}
                      {isExpanded && (
                        <>
                          {/* 인사이트 */}
                          {entry.insights.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">💡 주요 인사이트</h4>
                              <ul className="space-y-1">
                                {entry.insights.map((insight, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                    {insight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* 코드 */}
                          {entry.code && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">🔧 코드</h4>
                              <pre className="bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
                                <code>{entry.code}</code>
                              </pre>
                            </div>
                          )}

                          {/* 질문과 답변 */}
                          {entry.questions && entry.questions.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">❓ 궁금한 점 & 해결</h4>
                              <div className="space-y-2">
                                {entry.questions.map((qa, index) => (
                                  <p key={index} className="text-sm text-gray-600">
                                    {qa}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {/* 태그 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {entry.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* 확장/축소 버튼 */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCardExpansion(entry.id)}
                        className="w-full"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            간략히 보기
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            자세히 보기
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}

        {/* 결과 없음 */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-400">다른 키워드나 필터를 시도해보세요.</p>
          </div>
        )}

        {/* 통계 요약 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">학습 통계</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{tilData.length}</div>
              <div className="text-sm text-gray-600">총 TIL 기록</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{allCategories.length}</div>
              <div className="text-sm text-gray-600">학습 카테고리</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{allTags.length}</div>
              <div className="text-sm text-gray-600">사용된 태그</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{groupedByMonth.length}</div>
              <div className="text-sm text-gray-600">학습한 월</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
