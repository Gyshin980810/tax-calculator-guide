# 세법 통합 검색 시스템 - Next.js 스타터 키트

📦 Starter Kit 설명:
- 기술스택: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui (Radix 기반)
- 주요 기능: 기본 레이아웃(Header/Footer), 다크모드 토글, shadcn 폼 컴포넌트 예제 (react-hook-form + zod 유효성 검사), 세금 종류 Select, Textarea, Card UI
- 용도: 국세·지방세 API를 연동하는 세법 통합 검색 시스템의 기반 템플릿. 포트폴리오 및 실무 프로젝트의 빠른 시작에 사용

---

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (ThemeProvider, Header, Footer)
│   ├── page.tsx            # 홈 페이지 (기능 소개 카드)
│   ├── globals.css         # 전역 스타일 (shadcn 테마 변수)
│   └── search/
│       └── page.tsx        # 검색 폼 예제 페이지
├── components/
│   ├── header.tsx          # 네비게이션 헤더
│   ├── footer.tsx          # 푸터
│   ├── theme-provider.tsx  # next-themes 래퍼
│   ├── theme-toggle.tsx    # 라이트/다크/시스템 토글
│   └── ui/                 # shadcn/ui 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── textarea.tsx
│       └── dropdown-menu.tsx
```

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Turbopack)
npm run dev

# 빌드
npm run build
```

개발 서버 실행 후 http://localhost:3000 에서 확인

## 다음 단계 (API 연동)

1. **국세법령시스템 API 키 발급** → https://txsi.hometax.go.kr
2. **지방세법령센터 API 키 발급** → https://www.olta.re.kr
3. `.env.local` 파일에 API 키 추가
4. `src/app/api/search/route.ts` 에서 API 호출 구현
5. 검색 폼(`/search`)과 API 라우트 연결

## 기술 스택 상세

| 항목 | 버전/내용 |
|------|-----------|
| Next.js | 15 (App Router, Turbopack) |
| TypeScript | 5.x |
| Tailwind CSS | v4 |
| shadcn/ui | Nova 프리셋 (Radix 기반) |
| next-themes | 다크모드 지원 |
| react-hook-form | 폼 상태 관리 |
| zod | 유효성 검사 스키마 |
| lucide-react | 아이콘 라이브러리 |
