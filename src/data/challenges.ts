export interface Challenge {
  id: string
  slug: string
  title: string
  difficulty: "Level 1" | "Level 2" | "Level 3" | "Level 4" | "Level 5"
  algorithm: string[]
  languages: string[]
  tags: string[]
  date: string
  summary: string
  problemDescription: string
  approach: string
  hints: string
  stepByStep: string
  code: {
    language: string
    content: string
  }[]
  additionalExplanation?: string
  conclusion: string
  timeComplexity?: string
  spaceComplexity?: string
}

export const challenges: Challenge[] = [
  {
    id: "number-expression",
    slug: "number-expression",
    title: "숫자의 표현",
    difficulty: "Level 2",
    algorithm: ["수학", "투 포인터"],
    languages: ["JavaScript", "Python"],
    tags: ["연속합", "홀수약수", "수학적증명"],
    date: "2024-01-15",
    summary: "주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수를 구하는 문제입니다.",
    problemDescription: `두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

**제한사항**
- n은 10,000 이하의 자연수 입니다.`,
    approach: `이 문제는 주어진 자연수 n을 연속된 자연수의 합으로 나타내는 방법의 수를 찾는 것입니다. 얼핏 보면 단순한 문제처럼 보이지만, 효율적인 해결을 위해서는 수학적인 접근 방식이 필요합니다. 여기서는 두 가지 주요 전략을 소개합니다.

1. **연속합의 중앙값 조건**을 활용하여 탐색하는 방법
2. **n의 홀수 약수 개수**를 이용하는 수학적 증명 기반 풀이`,
    hints: `**첫 번째 풀이: 연속합의 중앙값 조건**

k개의 연속된 자연수의 합이 n이 되려면, n은 k로 나누어 떨어지거나, 나눈 나머지가 특정 조건을 만족해야 합니다. 특히 k가 홀수라면 n/k는 해당 연속된 수열의 중앙값이 됩니다.

**두 번째 풀이: 홀수 약수의 개수 찾기**

자연수 n을 연속된 자연수의 합으로 표현하는 방법의 수는 n의 홀수 약수의 개수와 같습니다. 이 사실을 이용하면 복잡한 탐색 없이 간단하게 답을 구할 수 있습니다.`,
    stepByStep: `#### 1. 연속합의 중앙값 조건

**1단계: 변수 초기화**
- \`answer = 1\`: n은 항상 자기 자신으로 표현이 가능하므로 초기값을 1로 설정합니다.

**2단계: 반복문 (k 값 탐색)**
- \`k = 2\`부터 시작하여, \`k * (k + 1) <= 2 * n\` 조건을 만족하는 동안 반복합니다.
- **k가 짝수인 경우**: \`n % k == k / 2\` 조건을 만족하면 \`answer\`를 1 증가시킵니다.
- **k가 홀수인 경우**: \`n % k == 0\` 조건을 만족하면 \`answer\`를 1 증가시킵니다.

**3단계: 결과 출력**
- \`answer\` 값을 반환합니다.`,
    code: [
      {
        language: "JavaScript",
        content: `function solution(n) {
    let answer = 1;
    for(let k = 2; k*(k+1) <= 2*n; ++k) {
        if(k % 2 == 0) {
            if(n % k == k/2) ++answer;
        }
        else if(n % k == 0) ++answer;
    }
    return answer;
}`,
      },
      {
        language: "Python",
        content: `def solution(n):
    answer = 1
    k = 2
    while k * (k + 1) <= 2 * n:
        if k % 2 == 0:
            if n % k == k / 2:
                answer += 1
        elif n % k == 0:
            answer += 1
        k += 1
    return answer`,
      },
    ],
    additionalExplanation: `**홀수 약수의 개수를 이용한 O(√n) 풀이**

두 번째 풀이법은 n의 홀수 약수의 개수를 직접 세는 방식입니다. 이는 수학적으로 증명된 사실을 활용한 것으로, 연속된 자연수의 합으로 n을 표현하는 방법의 수와 n의 홀수 약수의 개수가 정확히 일치합니다.`,
    conclusion: `두 가지 풀이법은 겉으로는 전혀 다른 방식으로 문제를 접근하는 것처럼 보이지만, 놀랍게도 같은 결과를 산출하며 O(√n)의 시간 복잡도를 갖는다는 공통점을 지닙니다. 이는 자연수 n을 연속된 자연수의 합으로 표현하는 방법의 수가 n의 홀수 약수의 개수와 정확히 일치하는 깊은 수학적 원리에 기반합니다.`,
    timeComplexity: "O(√n)",
    spaceComplexity: "O(1)",
  },
  {
    id: "ranking",
    slug: "ranking",
    title: "순위",
    difficulty: "Level 3",
    algorithm: ["그래프", "BFS", "DFS"],
    languages: ["JavaScript"],
    tags: ["그래프탐색", "승패관계", "연결성"],
    date: "2024-01-20",
    summary: "선수들의 경기 결과를 바탕으로 정확하게 순위를 매길 수 있는 선수의 수를 구하는 문제입니다.",
    problemDescription: `n명의 선수가 참여하는 토너먼트에서 어떤 선수의 순위가 몇 위인지 궁금해졌습니다. n명의 선수가 있고, m번의 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때, 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.

**제한사항**
- 선수의 수는 1명 이상 100명 이하입니다.
- 경기 결과는 1개 이상 4,500개 이하입니다.
- results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.`,
    approach: `이 문제는 주어진 경기 결과를 바탕으로 각 선수의 순위를 '정확하게' 매길 수 있는지 판별하는 문제입니다. 어떤 선수의 순위가 정확하게 결정되려면, 그 선수는 **자신을 제외한 모든 다른 선수와의 승패 관계를 명확히 알 수 있어야 합니다.** 이 관계는 선수들을 노드로, 경기 결과를 방향성 간선으로 하는 그래프로 모델링하여 **그래프 탐색(Graph Traversal)**을 통해 확인할 수 있습니다.`,
    hints: `**그래프 모델링:**
- 각 선수를 그래프의 노드(정점)로 표현합니다.
- 경기 결과 \`[A, B]\` (A가 B를 이김)를 노드 A에서 노드 B로 향하는 방향성 간선 \`A -> B\`로 표현합니다.

**승패 관계 파악:**
- **A가 이기는 선수들:** 그래프에서 노드 A로부터 시작하여 정방향 간선을 따라 도달할 수 있는 모든 노드들
- **A에게 지는 선수들:** 그래프에서 노드 A로 향하는 역방향 간선을 따라 도달할 수 있는 모든 노드들

**BFS/DFS 활용:**
BFS와 DFS는 모두 시작 노드로부터 연결된 모든 노드를 체계적으로 방문하는 알고리즘입니다.`,
    stepByStep: `1. **그래프 초기화 (인접 리스트):**
   - \`wins\` 배열: 각 인덱스 \`i\`에 선수 \`i\`가 이긴 선수들의 목록을 저장합니다.
   - \`losses\` 배열: 각 인덱스 \`i\`에 선수 \`i\`에게 진 선수들의 목록을 저장합니다.

2. **그래프 탐색 함수 구현 (BFS 또는 DFS):**
   - 선수 번호 \`startNode\`와 탐색 방향(\`isWin\`)을 인자로 받아, 해당 방향으로 도달 가능한 모든 선수의 수를 반환하는 탐색 함수를 구현합니다.

3. **순위 확정 선수 판별:**
   - 각 선수 \`i\`에 대해 이기는 선수 수와 지는 선수 수를 계산합니다.
   - 두 결과의 합이 \`n - 1\`과 같은지 확인하고, 같다면 순위를 확정할 수 있습니다.`,
    code: [
      {
        language: "JavaScript",
        content: `function solution(n, results) {
    const wins = Array.from({ length: n + 1 }, () => []);
    const losses = Array.from({ length: n + 1 }, () => []);

    // 1. 인접 리스트 생성
    for (const [w, l] of results) {
        wins[w].push(l);  // w는 l을 이김
        losses[l].push(w); // l은 w에게 짐
    }

    // 2. BFS 함수 정의
    const bfs = (startNode, isWin) => {
        const queue = [];
        const visited = new Array(n + 1).fill(false);
        let count = 0;
        const adjList = isWin ? wins : losses;

        for (const nextNode of adjList[startNode]) {
            if (!visited[nextNode]) {
                queue.push(nextNode);
                visited[nextNode] = true;
                count++;
            }
        }

        let head = 0;
        while (head < queue.length) {
            const currentNode = queue[head++];

            for (const nextNode of adjList[currentNode]) {
                if (!visited[nextNode]) {
                    visited[nextNode] = true;
                    queue.push(nextNode);
                    count++;
                }
            }
        }
        return count;
    };

    let answer = 0;
    // 3. 각 선수에 대해 순위 확정 가능 여부 판별
    for (let i = 1; i <= n; i++) {
        const winCount = bfs(i, true);
        const lossCount = bfs(i, false);

        if (winCount + lossCount === n - 1) {
            answer++;
        }
    }

    return answer;
}`,
      },
    ],
    conclusion: `"순위" 문제는 선수 간의 승패 관계를 그래프로 모델링하고, 각 선수가 다른 모든 선수와의 관계를 직간접적으로 알 수 있는지 판별하는 문제입니다. 이를 위해 BFS 또는 DFS와 같은 그래프 탐색 알고리즘을 효과적으로 활용할 수 있습니다.`,
    timeComplexity: "O(N * (N + E))",
    spaceComplexity: "O(N + E)",
  },
  {
    id: "word-transformation",
    slug: "word-transformation",
    title: "단어 변환",
    difficulty: "Level 3",
    algorithm: ["BFS", "그래프"],
    languages: ["JavaScript"],
    tags: ["최단경로", "BFS", "단어변환"],
    date: "2024-01-25",
    summary: "한 번에 한 글자씩 바꿔가며 begin에서 target으로 변환하는 최소 단계를 구하는 문제입니다.",
    problemDescription: `두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

**제한사항**
- 각 단어는 알파벳 소문자로만 이루어져 있습니다.
- 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
- words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.`,
    approach: `이 문제는 단어 변환이라는 퍼즐의 최소 단계를 찾는 문제입니다. 각 단어를 그래프의 노드로 생각하고, 한 번의 알파벳 변화로 다른 단어로 변환할 수 있다면 두 단어 사이에 간선이 있다고 볼 수 있습니다. 따라서, 시작 단어(\`begin\`)에서 목표 단어(\`target\`)까지의 최단 경로를 찾는 문제로 모델링할 수 있으며, 이를 해결하기 위해 **너비 우선 탐색(Breadth-First Search, BFS)** 알고리즘을 사용하는 것이 적합합니다.`,
    hints: `BFS는 시작 노드에서 가까운 노드부터 차례대로 탐색하는 알고리즘입니다. 큐(Queue) 자료구조를 사용하여 탐색할 노드들을 관리하며, 현재 노드에서 갈 수 있는 모든 인접한 노드를 큐에 추가하고 방문 처리합니다. 이 과정을 통해 시작 노드에서 목표 노드까지의 최단 경로를 효율적으로 찾을 수 있습니다.`,
    stepByStep: `1. **초기화:**
   - 큐(Queue)를 생성하고, 시작 단어 \`begin\`과 변환 횟수 0을 함께 큐에 추가합니다.
   - 방문한 단어를 기록하기 위한 Set 자료구조 \`visited\`를 생성합니다.

2. **BFS 탐색:**
   - 큐가 빌 때까지 다음 단계를 반복합니다.
   - 큐에서 현재 단어와 현재까지의 변환 단계를 꺼냅니다.
   - 목표 단어와 같다면 현재 변환 단계를 반환합니다.

3. **변환 불가능한 경우:**
   - 큐가 빌 때까지 목표 단어를 찾지 못했다면 0을 반환합니다.`,
    code: [
      {
        language: "JavaScript",
        content: `function solution(begin, target, words) {
    const wordSet = new Set(words);
    if (!wordSet.has(target)) {
        return 0;
    }

    const queue = [[begin, 0]];
    const visited = new Set();
    visited.add(begin);

    while (queue.length > 0) {
        const [currentWord, currentStep] = queue.shift();

        if (currentWord === target) {
            return currentStep;
        }

        for (let i = 0; i < currentWord.length; i++) {
            const wordArray = currentWord.split('');
            for (let charCode = 97; charCode <= 122; charCode++) {
                const nextChar = String.fromCharCode(charCode);
                if (wordArray[i] === nextChar) {
                    continue;
                }
                const originalChar = wordArray[i];
                wordArray[i] = nextChar;
                const nextWord = wordArray.join('');

                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push([nextWord, currentStep + 1]);
                }
                wordArray[i] = originalChar;
            }
        }
    }

    return 0;
}`,
      },
    ],
    conclusion: `이 문제에서는 BFS 알고리즘을 적용하여 시작 단어에서 목표 단어로 변환하는 최소 단계를 찾는 방법을 살펴보았습니다. BFS는 그래프 탐색 문제에서 최단 경로를 찾는 데 널리 사용되는 효율적인 알고리즘입니다.`,
  },
]
