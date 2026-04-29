# 🚀 설치 및 실행 가이드

## 사전 요구사항
- Node.js 18+ 설치 확인
- npm 또는 yarn 설치

## 1. 저장소 클론
```bash
git clone https://github.com/사용자명/api-search-kit.git
cd api-search-kit
```

## 2. 모든 패키지 설치 (권장)
```bash
npm run setup
```

또는 수동으로:
```bash
# 루트
npm install

# 백엔드
cd backend
npm install

# 프론트엔드
cd ../frontend
npm install
```

## 3. 환경 변수 설정

### 백엔드
```bash
cd backend
cp .env.example .env
# .env 파일 확인 (기본값으로도 동작)
```

### 프론트엔드
```bash
cd ../frontend
cp .env.example .env
```

## 4. 데이터베이스 초기화

```bash
cd ../backend
npx prisma migrate dev --name init
```

## 5. 개발 서버 실행

### 옵션 A: 한 줄로 실행 (권장)
```bash
cd ..
npm run dev
```

### 옵션 B: 분리해서 실행

터미널 1:
```bash
cd backend
npm run dev
```

터미널 2:
```bash
cd frontend
npm run dev
```

## 6. 브라우저 접속

- **프론트엔드**: http://localhost:5173
- **백엔드 API**: http://localhost:3001
- **헬스 체크**: http://localhost:3001/health

## 🎯 첫 검색 해보기

1. http://localhost:5173 열기
2. 검색 상자에 "법인세" 입력
3. 검색 버튼 클릭
4. 결과 확인!

## 📊 데이터베이스 관리

### Prisma Studio 열기
```bash
cd backend
npx prisma studio
```

http://localhost:5555 에서 DB를 시각적으로 확인할 수 있습니다.

## 🐛 문제 해결

### 포트가 이미 사용 중입니다
```bash
# 포트 확인
lsof -i :3001
lsof -i :5173

# 프로세스 종료
kill -9 <PID>
```

### 데이터베이스 오류
```bash
cd backend
rm -f prisma/dev.db
npx prisma migrate dev --name init
```

### API 연결 안 됨
1. 백엔드 실행 확인: http://localhost:3001/health
2. 프론트엔드 .env 파일의 VITE_API_URL 확인
3. 브라우저 개발자 도구 (F12)에서 네트워크 탭 확인

## ✅ 설치 완료 체크리스트

- [ ] Node.js 18+ 설치됨
- [ ] `npm run setup` 실행 완료
- [ ] `.env` 파일 생성됨
- [ ] `npx prisma migrate dev --name init` 실행됨
- [ ] `npm run dev` 실행 중
- [ ] http://localhost:5173 접속 가능
- [ ] 법령 검색 테스트 완료

## 🎉 설치 완료!

이제 API 검색 프로젝트를 즐길 준비가 되었습니다!

다음 단계:
1. 실제 API URL 연결하기 (`backend/.env` 수정)
2. UI 커스터마이징 (`frontend/src/components/` 수정)
3. 배포 (Vercel + Railway)
