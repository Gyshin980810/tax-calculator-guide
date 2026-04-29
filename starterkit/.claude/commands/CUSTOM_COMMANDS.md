# Starterkit Custom Commands

## 📋 개요
이 문서는 starterkit 프로젝트에 추가된 npm 커스텀 커맨드를 정리합니다.

---

## 🔧 커맨드 목록

### 1. **lint:fix** - ESLint 자동 수정
```bash
npm run lint:fix
```
**목적**: 코드 스타일 자동 정정  
**메모리**: 100-150 MB  
**실행 시간**: 1-2초  
**사용 시기**: 커밋 전 코드 정리

---

### 2. **type-check** - TypeScript 타입 검사
```bash
npm run type-check
```
**목적**: 빌드 없이 타입 에러 조기 발견  
**메모리**: 200-300 MB  
**실행 시간**: 2-5초  
**사용 시기**: 개발 중 타입 안정성 확인

---

### 3. **type-check:watch** - TypeScript 타입 검사 (감시 모드)
```bash
npm run type-check:watch
```
**목적**: 파일 변경 시마다 자동으로 타입 검사  
**메모리**: 200-300 MB (지속)  
**실행 시간**: 계속 실행  
**사용 시기**: 개발 중 실시간 모니터링

---

### 4. **validate** - 전체 검증 (타입 + 린트 + 빌드)
```bash
npm run validate
```
**목적**: 배포 전 모든 검증 수행  
**메모리**: 500-800 MB  
**실행 시간**: 10-20초  
**사용 시기**: 배포 전 최종 확인

**순서**:
1. TypeScript 타입 검사
2. ESLint 린트
3. Next.js 빌드

---

### 5. **validate:fast** - 빠른 검증 (타입 + 린트)
```bash
npm run validate:fast
```
**목적**: 커밋 전 빠른 검증  
**메모리**: 300 MB  
**실행 시간**: 3-7초  
**사용 시기**: 커밋 전 품질 확인 (빌드 생략)

**순서**:
1. TypeScript 타입 검사
2. ESLint 린트

---

## 📊 메모리 효율 비교

```
lint:fix       ████░░░░░░  100-150 MB  (가벼움 ✅)
type-check     ██████░░░░  200-300 MB  (중간)
validate:fast  ███████░░░  300 MB      (중간-가벼움)
validate       ████████░░  500-800 MB  (무거움 ⚠️)
```

---

## 🎯 사용 시나리오

### **개발 중**
```bash
npm run lint:fix
npm run type-check:watch
```
→ 린트 수정 + 실시간 타입 체크

### **커밋 전**
```bash
npm run validate:fast
```
→ 빠른 검증 (타입 + 린트)

### **PR 생성 전**
```bash
npm run validate:fast
```
→ 코드 품질 확인

### **배포 전 (최종 확인)**
```bash
npm run validate
```
→ 타입 + 린트 + 빌드 (모든 것 확인)

---

## 📝 package.json 설정

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
    "type-check": "tsc --noEmit",
    "type-check:watch": "tsc --noEmit --watch",
    "validate": "npm run type-check && npm run lint && npm run build",
    "validate:fast": "npm run type-check && npm run lint"
  }
}
```

---

## 🔍 명령어 설명

| 명령어 | 기능 | 확장자 | 메모리 |
|--------|------|--------|--------|
| `eslint` | 코드 린트 | .ts, .tsx, .js, .jsx | 100 MB |
| `tsc --noEmit` | 타입 검사 (빌드 X) | .ts, .tsx | 200 MB |
| `next build` | Next.js 빌드 | 모든 파일 | 600 MB |

---

**마지막 업데이트**: 2026-04-23  
**브랜치**: main (CUSTOM-COMMAND1 병합)
