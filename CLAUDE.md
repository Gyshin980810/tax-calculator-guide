# Tax Calculator Guide Portal - 프로젝트 가이드

## 프로젝트 개요

Notion을 CMS로 활용한 세금 계산 가이드 포탈

- **저장소**: https://github.com/Gyshin980810/tax-calculator-guide
- **기술 스택**: Next.js 15, TypeScript, Tailwind CSS, Notion API

## 빠른 시작

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# NOTION_API_KEY, NOTION_DATABASE_ID 입력

# 개발 서버 실행
npm run dev
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 홈 페이지
│   ├── guides/[id]/       # 가이드 상세 페이지
│   └── search/            # 검색 페이지
├── components/            # React 컴포넌트
├── lib/
│   ├── notion.ts          # Notion API 클라이언트
│   └── utils.ts
├── types/
│   └── guide.ts           # 타입 정의
docs/
├── PRD.md                 # 프로젝트 정의서
└── ROADMAP.md             # 개발 로드맵
```

## 주요 함수

### Notion API 클라이언트 (`src/lib/notion.ts`)

- `getAllGuides()` - 모든 가이드 조회
- `getGuideById(id)` - ID로 특정 가이드 조회
- `getGuidesByCategory(category)` - 카테고리별 가이드 조회
- `searchGuides(query)` - 키워드 검색

## Notion 데이터베이스 구조

### Tax Guides 데이터베이스

| 필드 | 타입 | 설명 |
|------|------|------|
| Title | Text | 가이드 제목 |
| Category | Select | 세금 유형 (소득세, 부가가치세, 양도소득세, 법인세) |
| Description | Rich Text | 가이드 요약 |
| Content | Rich Text | 상세 계산 방법 |
| Example | Rich Text | 구체적인 사례 |
| Checklist | Rich Text | 필수 확인 항목 |
| LastUpdated | Date | 마지막 수정 날짜 |
| Status | Select | Published / Draft |
| Order | Number | 정렬 순서 |

## 개발 가이드

### 커밋 메시지 규칙

```
feat: 새로운 기능
fix: 버그 수정
docs: 문서 변경
style: 코드 스타일
refactor: 리팩토링
test: 테스트
chore: 빌드/의존성
```

### 코딩 스타일

- **들여쓰기**: 2칸
- **변수명**: camelCase
- **타입**: TypeScript 명시적 타입
- **컴포넌트**: 함수형

## 유용한 명령어

```bash
npm run dev           # 개발 서버 실행
npm run build         # 프로덕션 빌드
npm start            # 프로덕션 서버 실행
npm run lint         # ESLint 실행
npm run lint:fix     # ESLint 자동 수정
npm run type-check   # TypeScript 타입 체크
npm run validate     # 전체 검증
```

## 다음 단계

개발 로드맵은 `docs/ROADMAP.md`를 참고하세요.

---

**마지막 업데이트**: 2026-04-29
