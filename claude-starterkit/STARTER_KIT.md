# 📦 API 검색 프로젝트 Starter Kit

## 저장소 URL
```
https://github.com/사용자명/api-search-kit
```

---

## 🎯 기술 스택

### 프론트엔드
- **React 18** + TypeScript 5 - 타입 안전성과 재사용 가능한 컴포넌트
- **Vite 5** - 번개같은 빌드 속도 (<100ms)
- **React Query** (TanStack Query 5) - 서버 상태 관리 및 자동 캐싱
- **Tailwind CSS 3.4** - 유틸리티 기반 빠른 UI 개발
- **Axios** - HTTP 클라이언트

### 백엔드
- **Node.js 20** + Express 4 - 가볍고 확장 가능한 API 서버
- **TypeScript** - 타입 안정성
- **Prisma ORM 5** - 타입 안전한 데이터베이스 접근
- **SQLite** - 파일 기반 로컬 데이터베이스 (설치 불필요)
- **Zod** - 런타임 타입 검증

### 배포
- **Vercel** - 프론트엔드 배포 (Git 연동, 자동 배포, 무료)
- **Railway** - 백엔드 배포 ($5/월)

---

## ✨ 주요 기능

### 백엔드 API
✅ **API 래핑** - 외부 API를 안전하게 호출하고 스키마 검증  
✅ **응답 캐싱** - SQLite에 결과 저장하여 중복 요청 최소화  
✅ **검색 이력** - 사용자 검색 기록 저장 및 조회  
✅ **즐겨찾기** - 자주 찾는 항목 저장 및 관리  
✅ **에러 처리** - 안전한 Try-Catch 및 타입 검증  
✅ **타입 안전** - Prisma + TypeScript로 DB 쿼리 안정성 확보

### 프론트엔드 UI
✅ **검색 인터페이스** - 직관적인 검색 폼 및 자동완성  
✅ **결과 표시** - 법령 검색 결과를 보기 좋게 표시  
✅ **즐겨찾기** - 마음에 드는 항목 저장  
✅ **검색 이력** - 최근 검색 목록 표시  
✅ **로딩 상태** - React Query의 자동 로딩/에러 처리  
✅ **반응형 디자인** - 모바일/태블릿에서도 완벽한 사용성

---

## 🚀 용도

### 적합한 경우
- 📌 공공 API(국세법령정보시스템, 지방세법령정보시스템 등)를 활용한 검색 서비스
- 📌 개인/팀 내부용 데이터 검색 솔루션
- 📌 빠른 프로토타이핑이 필요한 프로젝트
- 📌 React + Node.js 풀스택 프로젝트 학습용
- 📌 SQLite를 활용한 소규모 데이터 저장

### 포함된 예제
- 📌 세법령 검색 API 예제
- 📌 검색 결과 캐싱 로직
- 📌 React Query를 이용한 데이터 페칭
- 📌 TypeScript로 작성된 타입 안전 코드

---

## 📁 프로젝트 구조

```
api-search-kit/
├── backend/                          # Node.js + Express 백엔드
│   ├── src/
│   │   ├── index.ts                  # 메인 서버 파일
│   │   ├── apis/                     # 외부 API 클라이언트
│   │   │   ├── lawApi.ts             # 세법령 API
│   │   │   └── localTaxApi.ts        # 지방세 API
│   │   └── routes/                   # API 라우트
│   │       ├── laws.ts               # 법령 검색 엔드포인트
│   │       └── favorites.ts          # 즐겨찾기 관리
│   ├── prisma/
│   │   ├── schema.prisma             # DB 스키마
│   │   └── migrations/               # 마이그레이션 파일
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── frontend/                         # React + Vite 프론트엔드
│   ├── src/
│   │   ├── App.tsx                   # 메인 애플리케이션
│   │   ├── main.tsx                  # 진입점
│   │   ├── components/               # React 컴포넌트
│   │   │   ├── SearchForm.tsx        # 검색 폼
│   │   │   ├── ResultList.tsx        # 검색 결과 목록
│   │   │   └── FavoritesList.tsx     # 즐겨찾기 목록
│   │   ├── hooks/                    # React Query 커스텀 훅
│   │   │   ├── useSearchLaws.ts      # 법령 검색
│   │   │   └── useFavorites.ts       # 즐겨찾기 관리
│   │   ├── types/                    # TypeScript 타입
│   │   └── index.css                 # Tailwind CSS
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── .env.example
│
├── package.json                      # 루트 package.json
├── docker-compose.yml                # Docker 설정 (선택)
├── README.md                         # 전체 문서
├── QUICKSTART.md                     # 빠른 시작 가이드
└── .gitignore
```

---

## ⚡ 빠른 시작 (5분)

### 1. 설치 (2분)
```bash
# 프로젝트 클론
git clone https://github.com/사용자명/api-search-kit.git
cd api-search-kit

# 모든 패키지 설치
npm run setup
```

### 2. 환경 설정 (1분)
```bash
cd backend
cp .env.example .env

cd ../frontend
cp .env.example .env
```

### 3. 데이터베이스 (1분)
```bash
cd ../backend
npx prisma migrate dev --name init
```

### 4. 개발 서버 실행 (1분)
```bash
cd ..
npm run dev
```

✅ 완료! 브라우저에서 http://localhost:5173 접속

---

## 🔌 새로운 API 추가 방법

### 1단계: API 클라이언트 작성
```typescript
// backend/src/apis/customApi.ts
import axios from 'axios';
import { z } from 'zod';

const ResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export async function searchCustomAPI(query: string) {
  const response = await axios.get('https://api.example.com/search', {
    params: { q: query }
  });
  return ResponseSchema.array().parse(response.data);
}
```

### 2단계: 라우트 생성
```typescript
// backend/src/routes/custom.ts
import { Router } from 'express';
import { searchCustomAPI } from '../apis/customApi.js';

const router = Router();

router.get('/search', async (req, res) => {
  const { query } = req.query;
  const result = await searchCustomAPI(query as string);
  res.json(result);
});

export default router;
```

### 3단계: 프론트엔드 훅 작성
```typescript
// frontend/src/hooks/useCustomSearch.ts
import { useQuery } from '@tanstack/react-query';

export function useCustomSearch(query: string) {
  return useQuery({
    queryKey: ['custom', query],
    queryFn: () => 
      fetch(`/api/custom?q=${query}`)
        .then(r => r.json()),
    enabled: !!query,
  });
}
```

### 4단계: UI 컴포넌트에서 사용
```typescript
import { useCustomSearch } from '@/hooks/useCustomSearch';

export function MyComponent() {
  const { data, isLoading } = useCustomSearch(query);
  
  return (
    <div>
      {isLoading && <p>로딩 중...</p>}
      {data && <div>{/* 결과 표시 */}</div>}
    </div>
  );
}
```

---

## 📊 데이터베이스 스키마

### SearchHistory (검색 이력)
```
id: 정수 (PK)
keyword: 문자열 (검색어)
result: 문자열 (JSON)
type: 문자열 (law, local_tax 등)
createdAt: 타임스탬프
updatedAt: 타임스탬프
```

### Favorite (즐겨찾기)
```
id: 정수 (PK)
externalId: 문자열 (외부 API ID)
title: 문자열 (제목)
description: 문자열 (설명)
type: 문자열 (law, local_tax 등)
url: 문자열 (외부 링크)
createdAt: 타임스탬프
updatedAt: 타임스탬프
```

---

## 🚀 배포

### 프론트엔드 (Vercel)
```bash
# GitHub 푸시
git push origin main

# Vercel.com에서 저장소 연동
# → 자동 배포 시작
```

### 백엔드 (Railway)
```bash
# Railway.app 가입 후
railway up

# 환경 변수 설정
# DATABASE_URL, PORT 등
```

---

## 🛠️ 개발 팁

### 환경 변수 관리
```bash
# 절대 .env 파일을 Git에 올리지 마세요!
# .gitignore에 이미 포함됨

# .env.example로 템플릿 공유
cp .env .env.example
git add .env.example
git commit -m "Add env example"
```

### 디버깅
```typescript
// React Query 디버깅 (프론트엔드)
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>

// Prisma Studio (백엔드)
npx prisma studio
```

### 성능 최적화
```typescript
// React Query 캐시 시간 설정
staleTime: 1000 * 60 * 5,    // 5분
cacheTime: 1000 * 60 * 10,   // 10분

// API 응답 캐싱 (백엔드)
const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
if (cached && cached.createdAt > oneHourAgo) {
  return cached.result;
}
```

---

## 📚 주요 라이브러리 문서

| 라이브러리 | 용도 | 문서 |
|-----------|------|------|
| React Query | 서버 상태 관리 | https://tanstack.com/query/latest |
| Prisma | ORM | https://www.prisma.io/docs |
| Express | API 서버 | https://expressjs.com |
| Tailwind CSS | 스타일링 | https://tailwindcss.com |
| TypeScript | 타입 안전성 | https://www.typescriptlang.org |

---

## ❓ FAQ

**Q: 실제 API를 어떻게 연결하나요?**
A: `backend/src/apis/lawApi.ts`의 `LAW_API_URL` 환경 변수를 실제 API URL로 변경하고, 응답 스키마를 맞게 수정하세요.

**Q: SQLite로 충분한가요?**
A: 개인/팀 프로젝트(사용자 <100)에는 충분합니다. 스케일이 커지면 PostgreSQL로 마이그레이션 가능합니다.

**Q: 데이터베이스를 초기화하려면?**
A: `cd backend && npx prisma migrate reset`을 실행합니다. ⚠️ 모든 데이터가 삭제됩니다.

**Q: 배포 시 비용이 들나요?**
A: Vercel은 무료, Railway는 월 $5부터 시작합니다.

---

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

## 🎯 다음 단계

1. ✅ 프로젝트 클론 및 실행
2. ✅ 실제 API 연결
3. ✅ UI 커스터마이징
4. ✅ 배포 (Vercel + Railway)
5. ✅ 팀과 공유

**질문이나 피드백이 있으신가요?**  
GitHub Issues에서 문제를 보고하거나 Discussion에서 아이디어를 제시해주세요! 🚀
