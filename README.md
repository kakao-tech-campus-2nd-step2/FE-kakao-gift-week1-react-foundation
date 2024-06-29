# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

## Requirements
- Create React App을 기반으로 프로젝트를 생성
- Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게 alias를 설정
- tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 작성
- ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅하기 ( 가장 대표적인 룰은 eslint-config-airbnb이지만 꼭 적용할 필요는 없다)
- emotion 스타일 라이브러리를 추가하고, reset css를 적용
- gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리 (ex. 사용하지 않는 icon 등)
- 본인만의 폴더 구조 기준을 세우고 반영하기
- 본인만의 기준으로 일관된 코드를 작성
- 기능 단위로 나누어 커밋

### 폴더구조
 src/  
├── assets/			   //로컬 환경의 이미지들  
├── components/		//공용으로 쓰이는 react 컴포넌트  
├── hooks/			   //React hooks  
├── interfaces/		//typescript 의  type  
├── pages/			   //각 페이지별 컴포넌트들  
├── services/			//api관련, 통신관련  
├── stores/			   //상태관리  
├── styles/			   //공용으로 쓰이는 스타일  
├── utils/				//유틸리티 함수들  
├── App.tsx  
└── index.tsx  

## 1주차 질문
1. webpack은 무엇이고 어떤 역할을 하고 있나요?
JavaScript 애플리케이션을 위한 정정 모듈 번들러 입니다.
-> 정적 모듈 번들러 : HTML, CSS, Javascript 등 웹 애플리케이션을 지원하는 각각의 모듈을 병합된 하나의 결과물로 만드는 도구

2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
JSX는 자바스크립트의 JS와 XML의 X를 합친 말이며 자바스크립트 코드 안에서 바로 태그 기반의 구문을 써서 리액트 엘리먼트를 정의할 수 있게 해주는 자바스크립트 확장입니다.
브라우저는 JSX를 해석하지 못하기 때문에 바벨이라는 도구를 사용하여 JSX를 변환 컴파일링 해주어야 합니다.

3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
useState, useEffect 등을 이용해서 State를 관리합니다.
- 컴포넌트에서 상태는 useState를 사용하여 관리하고, 상태를 여러 형태로 변경해서 사용해야하면 useReducer를 사용하여 관리합니다.
이처럼 여러방법을 이용해서 상태변화를 체크해줍니다.