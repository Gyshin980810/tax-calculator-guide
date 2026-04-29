# 세금 계산 가이드 포탈

Notion을 CMS로 활용한 세금 계산 방법, 사례, 체크리스트 등을 제공하는 종합 정보 포탈입니다.

## 🎯 프로젝트 목표

비개발자(회계사, 세무 전문가)도 Notion API를 통해 콘텐츠를 쉽게 관리하고, 사용자는 웹에서 체계적으로 세금 정보에 접근할 수 있는 플랫폼을 제공합니다.

## ✨ 주요 기능

- **세금 유형별 계산 가이드**: 소득세, 부가가치세, 양도소득세, 법인세 등의 계산 방법 제공
- **실제 사례 및 시뮬레이션**: 소득 규모별, 상황별 구체적인 세금 계산 사례
- **체크리스트 및 필수 서류 안내**: 신고 전 필요한 서류와 확인 항목 제시

## 🛠️ 기술 스택

| 구분 | 기술 |
|------|------|
| **Frontend** | Next.js 15, TypeScript |
| **CMS** | Notion API |
| **Styling** | Tailwind CSS, shadcn/ui |
| **Icons** | Lucide React |
| **배포** | Vercel |

## 📋 Notion 데이터베이스 구조

### Tax Guides (세금 가이드 DB)

| 필드명 | 타입 | 설명 |
|--------|------|------|
| Title | Text | 가이드 제목 |
| Category | Select | 세금 유형 |
| Description | Rich Text | 가이드 요약 |
| Content | Rich Text | 상세 계산 방법 |
| Example | Rich Text | 구체적인 사례 |
| Checklist | Rich Text | 필수 확인 항목 |
| LastUpdated | Date | 마지막 수정 날짜 |
| Status | Select | Published / Draft |
| Order | Number | 정렬 순서 |

## 🖼️ 화면 구성

1. **홈 화면**: 카테고리 카드, 최신 업데이트, 검색
2. **카테고리 목록**: 선택한 세금 유형의 모든 가이드
3. **상세 가이드**: 전체 콘텐츠, 계산 방법, 사례, 체크리스트
4. **검색 결과**: 키워드 검색 결과 표시

## 🚀 시작하기

### 사전 요구사항
- Node.js 18+
- npm 또는 yarn
- Notion 계정 및 API 토큰

### 설치 방법

```bash
# 저장소 클론
git clone https://github.com/yourusername/tax-calculator-guide.git
cd tax-calculator-guide

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local에 Notion API 토큰 추가

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 📦 프로젝트 구조

```
.
├── app/                    # Next.js 앱 디렉토리
│   ├── page.tsx           # 홈 화면
│   ├── guides/
│   │   └── [id]/          # 가이드 상세 페이지
│   └── search/            # 검색 페이지
├── components/            # React 컴포넌트
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── GuideCard.tsx
│   └── ...
├── lib/
│   ├── notion.ts          # Notion API 클라이언트
│   └── utils.ts
├── docs/
│   └── PRD.md            # 프로젝트 정의서
├── .env.example           # 환경 변수 예제
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 📝 개발 가이드

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

## 🔄 업데이트 워크플로우

1. Notion에서 가이드 작성/수정
2. 웹사이트에서 자동으로 반영 (1분 이내)
3. 변경 사항 확인 및 배포

## 📄 라이센스

MIT

## 🤝 기여하기

버그 보고, 기능 제안, 풀 리퀘스트 환영합니다!

## 📧 연락처

- 이메일: gyuhosin165@gmail.com

---

**프로젝트 시작일**: 2026-04-29
