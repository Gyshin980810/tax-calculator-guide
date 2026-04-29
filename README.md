# 세금 계산 가이드 포탈

Notion을 CMS로 활용한 세금 계산 방법, 사례, 체크리스트 등을 제공하는 종합 정보 포탈입니다.

## 📝 프로젝트 개요

**GitHub 저장소 URL**: https://github.com/Gyshin980810/tax-calculator-guide

### 프로젝트명
**Tax Calculator Guide Portal** (세금 계산 가이드 포탈)

### 주요 기능
1. **세금 유형별 계산 가이드** - 소득세, 부가가치세, 양도소득세, 법인세 등의 계산 방법 제공
2. **실제 사례 및 시뮬레이션** - 소득 규모별, 상황별 구체적인 세금 계산 사례 제시
3. **체크리스트 및 필수 서류 안내** - 신고 시 필요한 서류 목록 및 확인 항목 제공

### CMS
**Notion API** - 비개발자도 콘텐츠 관리 가능한 데이터베이스 기반 CMS

### 사용 기술
- **Frontend**: Next.js 15, TypeScript
- **CMS**: Notion API
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **배포**: Vercel

## 🛠️ 기술 스택

| 항목 | 버전/내용 |
|------|-----------|
| Next.js | 15 (App Router, Turbopack) |
| TypeScript | 5.x |
| Tailwind CSS | v4 |
| shadcn/ui | Nova 프리셋 (Radix 기반) |
| Notion API | @notionhq/client |
| next-themes | 다크모드 지원 |
| react-hook-form | 폼 상태 관리 |
| zod | 유효성 검사 스키마 |
| lucide-react | 아이콘 라이브러리 |

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃 (ThemeProvider, Header, Footer)
│   ├── page.tsx                # 홈 페이지
│   ├── globals.css             # 전역 스타일
│   ├── guides/
│   │   └── [id]/
│   │       └── page.tsx        # 가이드 상세 페이지
│   ├── search/
│   │   └── page.tsx            # 검색 페이지
│   └── api/
│       └── guides/
│           └── route.ts        # Notion API 라우트
├── components/
│   ├── header.tsx              # 네비게이션 헤더
│   ├── footer.tsx              # 푸터
│   ├── theme-provider.tsx      # next-themes 래퍼
│   ├── theme-toggle.tsx        # 다크모드 토글
│   ├── guide-card.tsx          # 가이드 카드 컴포넌트
│   └── ui/                     # shadcn/ui 컴포넌트
├── lib/
│   ├── notion.ts               # Notion API 클라이언트
│   └── utils.ts
└── types/
    └── guide.ts                # 타입 정의

docs/
└── PRD.md                       # 프로젝트 정의서

public/                          # 정적 자산
```

## 🚀 시작하기

### 사전 요구사항
- Node.js 18+
- npm 또는 yarn
- Notion 계정 및 API 토큰

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local에 다음 항목 추가:
# NOTION_API_KEY=your_notion_api_key
# NOTION_DATABASE_ID=your_database_id

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:3000 확인
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📋 Notion 데이터베이스 설정

### Tax Guides 데이터베이스 필드

| 필드명 | 타입 | 설명 |
|--------|------|------|
| Title | Text | 가이드 제목 |
| Category | Select | 세금 유형 (소득세, 부가가치세, 양도소득세, 법인세) |
| Description | Rich Text | 가이드 요약 |
| Content | Rich Text | 상세 계산 방법 |
| Example | Rich Text | 구체적인 계산 사례 |
| Checklist | Rich Text | 필수 확인 항목 |
| LastUpdated | Date | 마지막 수정 날짜 |
| Status | Select | Published / Draft |
| Order | Number | 정렬 순서 |

## 🔍 주요 기능 구현 계획

### 1단계: 기본 페이지 및 레이아웃
- [x] Next.js 프로젝트 초기화
- [ ] Header/Footer 컴포넌트 구성
- [ ] 홈 페이지 디자인

### 2단계: Notion API 연동
- [ ] Notion API 클라이언트 구성
- [ ] 가이드 데이터 조회 함수 구현
- [ ] API 라우트 작성

### 3단계: 페이지 개발
- [ ] 카테고리별 가이드 목록 페이지
- [ ] 가이드 상세 페이지
- [ ] 검색 기능 구현

### 4단계: UI/UX 개선 및 배포
- [ ] 반응형 디자인 적용
- [ ] 성능 최적화
- [ ] Vercel 배포

## 🤝 개발 가이드

### 커밋 메시지 규칙

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 변경
style: 코드 스타일 변경
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드, 의존성 등의 변경
```

### 코딩 스타일
- **들여쓰기**: 2칸 (스페이스)
- **변수명**: camelCase
- **타입**: TypeScript로 명시적 타입 지정
- **컴포넌트**: 함수형 컴포넌트 사용

## 📧 연락처

- 이메일: gyuhosin165@gmail.com

---

**프로젝트 시작일**: 2026-04-29  
**마지막 업데이트**: 2026-04-29
