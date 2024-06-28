# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 1단계 기능 목록

- [x] TS 프로젝트 생성 (CRA 이용)
- [x] alias 설정
- [x] tsconfig 설정
- [x] Prettier 설정
- [x] ESLint 설정
- [x] emotion 스타일 라이브러리 설치
- [x] reset css 적용
- [x] .gitignore 추가
- [x] 불필요한 코드/파일 정리
- [x] 폴더 구조 생성

## 1단계 설명

- Craco 라이브러리를 사용해 절대 경로를 설정하였습니다.
- 절대 경로 관련 설정을 tsconfig.paths.json으로 별도로 분리하였습니다.
- 절대 경로 및 reset CSS 적용을 확인하기 위해 Header 컴포넌트를 만들었습니다.
- ESLint와 Prettier의 충돌을 방지하였습니다.
- 폴더 구조는 평소에 기능별로 나누어서 썼던 것 중에 어떤 프로젝트든 기본적으로 사용할 것 같은 것들만 우선 추가해보았습니다. components는 리액트의 UI 컴포넌트를 담는 폴더이고, styles는 reset CSS 같이 스타일링을 담당하는 파일을 담는 폴더, utils는 API 호출 함수 등 재사용 가능한 유틸리티 함수를 담는 폴더입니다.

## 2단계 기능 목록

- [x] Storybook를 설치한다.

### Button 컴포넌트 구현

- [x] Theme Props에 따라 버튼 컬러 및 디자인이 다르게 보인다.
- [x] Size Props에 따라 버튼의 크기가 다르게 보인다. (responsive라면 미디어 쿼리에 따라 사이즈가 다르다)
- [x] Button Element의 기본 속성을 모두 사용한다.

### Input 컴포넌트 구현

- [x] disabled Props에 따라 Input이 비활성화되고, 이를 UI에서 인지한다.
- [x] invalid Props에 따라 Input 값이 잘못됨을 UI에서 인지한다.
- [x] Input Element의 기본 속성을 모두 사용한다.

### Image 컴포넌트 구현

- [x] ratio Props에 따라 이미지 비율을 설정한다. (number가 16/9라면 16:9 비율, circle이라면 원형)
- [x] radius Props에 따라 모서리 둥글게 한다. (number만큼 모서리 둥글게, circle이라면 원형)
- [x] Img Element의 기본 속성을 모두 사용한다.

### GoodsItem 컴포넌트 구현

- [x] Default 형태와 Ranking 형태를 각각 구현한다.
- [x] 공통으로 imageSrc, subtitle, title, amount Props를 넘겨받는다.
- [x] Ranking 컴포넌트의 경우, rankingIndex Props를 추가로 넘겨받는다. (1~3까지는 분홍색, 나머지는 회색의 랭킹 뱃지)

### Grid 컴포넌트 구현

- [x] Grid 컴포넌트를 구현한다.

### Container 컴포넌트 구현

- [x] Container 컴포넌트를 구현한다.

## 3단계

### Q1. webpack은 무엇이고, 어떤 역학을 하고 있나요?

webpack은 오픈 소스 JS 모듈 번들러로, 여러 개로 나누어진 파일을 하나의 JS 코드로 압축하고 최적화하는 라이브러리입니다. JS 모듈과 그 의존성 파일들을 하나의 파일로 묶어서 배포할 수 있게끔 해줍니다. 또한, 코드 분할을 통해서 앱의 특정 부분을 필요할 때만 로드할 수 있게 합니다.

### Q2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

브라우저 단독으로는 JSX 문법을 읽을 수 없기 때문에 Babel 같은 라이브러리를 사용해 JSX를 일반적인 JS 문법으로 변환해야 합니다. 개발자가 JSX 문법을 사용해서 React 컴포넌트를 작성하면, Babel이 JSX 코드를 일반 JS 코드로 변환하고, webpack 같은 번들러가 변환된 JS 코드를 번들링하여 브라우저에서 실행합니다. 이때, Babel은 최신 JS 문법을 지원하지 않는 구형 브라우저에서도 코드가 작동하게끔 변환해주는 라이브러리이기도 합니다.

### Q3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

React에서 상태 변화는 컴포넌트의 상태(state)나 속성(props)가 변경될 때 발생합니다. React는 `setState` 혹은 `useState`를 통해 상태 변화를 감지하여 업데이트하고, 상태가 업데이트 되면 해당 컴포넌트를 다시 렌더링합니다. 이때, 렌더링하는 것은 가상 DOM으로, 이전 가상 DOM과 렌더링한 현재 DOM을 비교하여 변화한 부분만 실제 DOM에 적용합니다. (Reconciliation)
