# Kwak.dev

이 웹사이트는 제가 실험하고 배우며 성장하는 공간입니다.<br/>
새로운 기술을 시도하고, 아이디어를 코드로 구현하며, 도전과 실수를 기록합니다.<br/>
개발자로서의 여정을 자유롭고 솔직하게 공유하는 플랫폼입니다.

- TypeScript 기반 React 프로젝트로 Firebase를 활용했습니다.

## 📂 목차

1. [소개](#)
2. [기술 스택](#)
3. [설치 및 실행 방법](#)
4. [주요 기능](#)
5. [스크린샷](#)
6. [문제 해결](#)
7. [기여 방법](#)
8. [라이센스](#)

## 🔍 소개

이 프로젝트는 제가 배운 것을 정리하고 실무에 적용하며 기술적 숙련도를 높이기 위해 시작했습니다. <br/>
하드 코딩의 한계를 극복하기 위해 Firebase를 백엔드로 활용하여 개발했습니다.

## 🛠️ 기술 스택

- 프론트엔드

  - <b>주요 도구</b>
    - React: 사용자 인터페이스 구축
    - TypeScript: 정적 타입 검사로 안정성과 강화
    - React Router: 라우팅 관리
  - <b>스타일링 및 UI 관련 라이브러리</b>
    - TailwindCSS: 스타일링 프레임워크
    - MUI: 구글 UI 컴포넌트
    - Framer Motion: 애니메이션 및 인터랙션
    - react-toastify: 알림/토스트 메시지 구현
  - <b>폼 및 데이터 처리</b>
    - react-hook-form: 폼 상태 관리
    - zod: 스키마 기반 데이터 검증 라이브러리
  - <b>기타 유틸리티</b>
    - fuse.js: 빠르고 간단한 검색 기능 구현
    - classnames: 동적 클래스 이름 관리
    - zustand: 전역 상태 관리 라이브러리
    - fast-xml-parser: XML 데이터를 JSON으로 변환 (캘린더)

- 백엔드: Firebase (Authentication, Firestore)
- 분석 도구: Google Analytics
- 기타 도구: Vite, Git, Chrome, Visual Studio Code

## 🚀 실행 방법

브라우저에서 `https://portfolio-another.vercel.app/`로 접속합니다.

## ✨ 주요 기능 (도메인)

- 홈(/home)
- 소개(/about)
  - 2D 물리엔진을 사용한 캔버스를 사용했습니다.
- 프로젝트(/project) : 관리자 권한 필요
  - 프로젝트 CRUD
- 인터뷰(/interview)
  - 인터뷰 신청 (준비중)
  - 미답변/답변 (준비중)
- 게시판(/board) : 유저 권한 필요

  - 게시물 CRUD
  - 댓글 CRUD : 답글이 있는 경우, 댓글이 삭제되지 않고 비공개 처리됩니다.
  - 답글 CRUD : 답글의 depth는 1회입니다.
  - 추천/비추천 : 게시물당 1번만 가능합니다.
  - 신고&블라인드 (준비중)

- 마이페이지(/mypage)

  - 유저 프로필 : 유저 정보를 확인할 수 있습니다.
  - 유저 프로필 편집 (준비중)

- 캘린더(/schedule) : [오픈API](https://www.data.go.kr/data/15012690/openapi.do)를 사용해 국경일,기념일,특일 데이터를 불러와 캘린더에 적용됩니다.

  - 일정 공유 (준비중)
  - 출석부 (준비중)

- 통계(/charts)

  - 사이트 이용 정보를 집계하여 시각적으로 표시하려고 합니다. (준비중)

- 갤러리(/gallery)

  - 사이트 내의 이미지 정보를 모아 이미지 뷰어로 제공하려고 합니다. (준비중)

- 지도(/map)

  - 카카오 지도 API를 사용한 컨텐츠를 기획 중입니다. (준비중)

- 프리뷰(/preview)

  - 사이트 내 도메인 콘텐츠를 전체적으로 볼 수 있는 뷰어를 제공하려고 합니다. (준비중)

- 결제(/payment)

  - 결제 모듈을 사용해서 실제로 결제되는 컨텐츠를 기획 중입니다. (준비중)

- 타임라인(/timeline)

  - 타임라인을 사용한 컨텐츠를 기획 중입니다. (준비중)

- 문의(/contact)
  - 문의 메일 전송 : Google Apps Mail를 사용해 메일 정보없이도 메일을 보낼 수 있습니다.
- 관리자(/admin) : 관리자 권한 필요
  - 유저 관리 (준비중)
  - 프로젝트 관리 (준비중)

## 🖼️ 스크린샷 (준비중)

## 🛠️ 문제 해결

## 📄 데이터 구조 설계

visitors 컬렉션

- totalViews: 전체 방문 수

  - desktopCount: 데스크탑 방문 수
  - mobileCount: 모바일 방문 수

- dailyViews-{날짜}: 날짜별 방문 수

  - desktopCount: 데스크탑 방문 수
  - mobileCount: 모바일 방문 수

- monthlyViews-{월}: 월별 방문 수
  - desktopCount: 데스크탑 방문 수
  - mobileCount: 모바일 방문 수
