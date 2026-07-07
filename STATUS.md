# STATUS.md — 현재 상태 스냅샷

**갱신: 2026-07-07** (노트북을 옮겨도 이어서 작업할 수 있게 유지하는 스냅샷. 작업을 마치면 갱신할 것.)

## 무엇인가

무료 온라인 도구 모음 — React + TypeScript + Vite + Tailwind, react-router 기반 CSR SPA.

- **Repo**: https://github.com/kimbj07/online-tools (계정 **kimbj07**), 기본 브랜치 `main`.
- **Live (프로덕션 alias)**: https://online-tools-lac.vercel.app
  - ⚠️ **`online-tools.vercel.app` 은 프로덕션 alias 가 아님** — 배포 검증은 반드시 `online-tools-lac.vercel.app` 로.
- 배포: `main` push 시 Vercel 자동 배포.
- 스크립트: `npm run dev | build | lint | preview`.

## 배포 상태

- **LIVE**: `main` 최신(`a1ec352`)까지 프로덕션 배포·검증 완료.
- 검증 방법(중요): **CSR SPA 라 raw HTML 에는 카드 텍스트가 없음.** 빌드 번들
  (`/assets/index-*.js`) 을 받아서 grep 해야 함. `a1ec352` 배포 후 번들에서
  `행운로또 / 궁합 / 테크 블로그 / lotto-two-delta / gunghap-three / tech-blog-sigma`
  전부 확인됨.

## 완료된 것

- 내부 도구 3개: 글자수 세기(`/character-counter`), JSON 포매터(`/json-formatter`), QR 코드 생성기(`/qr-generator`).
- 홈(`src/pages/Home.tsx`) 외부 링크 카드 5개 (`external: true` → 새 탭 `<a>`):
  멍사주 🐶, 금전 운세 💰, **행운로또 🎱**, **이름 궁합 💕**, **테크 블로그 📝**
  (뒤 3개가 `a1ec352` 에서 추가됨).
- SEO: Google Search Console 인증 파일, 네이버 서치어드바이저 메타, sitemap/robots.
- Vercel Analytics.

## 미완료 / 아이디어

- 하드 블로커 없음. 신규 유틸(예: base64, 타임스탬프 변환, diff 등) 추가 여지.
- 로컬 `npm install` 시 `@vercel/analytics/react` 미설치면 `tsc` 가 그 파일만 에러 — Vercel 은 fresh install 이라 무관하지만, 로컬 타입체크 전 `npm ci` 권장.

## 자매 사이트 (참고)

같은 소유자의 개인 사이트들 — 홈 카드로 상호 링크:
- 멍사주 https://mengsaju.vercel.app (`~/workspace/mengsaju`)
- 금전 운세 https://financefortune.vercel.app
- 행운로또 https://lotto-two-delta.vercel.app (`~/workspace/lotto`)
- 이름 궁합 https://gunghap-three.vercel.app (`~/workspace/gunghap`)
- 테크 블로그 https://tech-blog-sigma-bay.vercel.app (`~/workspace/tech_blog`)
