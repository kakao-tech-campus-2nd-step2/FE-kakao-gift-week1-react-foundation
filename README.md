# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

***

## ⚙️ 기능 목록 정리 

## 📂 폴더 구조
-  .eslintignore : lint 적용 제외 파일 명시 <br/>
-  .gitignore : git 제외 파일 명시 <br/>
-  .prettierrc : prettier 설정 파일 <br/>
-  .eslint.config.mjs : lint 설정 파일 <br/>
-  tsconfig.json : TS 프로젝트 설정 및 관리 <br/>
-  **public** <br/>
-  **src** <br/>
    -  **asset** : 이미지 혹은 폰트 저장, kebab-case <br/>
    -  **components** : 재사용 컴포넌트, PascalCase <br/>
    -  **page** : react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트를 이 폴더에 위치, PascalCase <br/>
    -  react-app-env.d.ts : CRA에서 제공하는 기능 및 API에 대한 타입 검사, 개발 도구 자동 완성 기능 <br/>
    -  reportWebVitals.ts : 프로젝트 성능 측정 도구 <br/>
    -  setupTests.ts : 컴포넌트 테스트 파일 <br/>

## ✏️ 요구사항

### Week 1

📝 1단계

- **CRA** 기반 프로젝트 생성 후 **Typescript** 및 **alias(절대경로)** 세팅
- **tsconfig** 설정
- **ESLint, Prettier** 추가 및 **Lint 룰** 설정
- **Emoticon 스타일 라이브러리** 추가, **reset css** 적용
- **gitignore** 추가, 불필요한 코드와 파일 정리
- **폴더 구조 기준** 설정
- 일관된 코드 작성
- 기능 단위로 나누어 커밋

📝 2단계

- **Storybook** 추가
- **Button** 컴포넌트 구현
    - [x] Props:Theme - 버튼 컬러 지정
    - [x] Props:Size - 버튼 크기 지정
- **Input** 컴포넌트 구현
    - [x] Props:Size - 인풋 크기 지정
    - [x] Props:disabled - 인풋 비활성화 유무 지정
    - [x] Props:isvalid - 인풋 유효 값 확인
- **Image** 컴포넌트 구현
    - [x] Props:src - 이미지 소스 지정
    - [x] Props:ratio - 이미지 비율 지정
    - [x] Props:radius - 이미지 모서리 지정
- **GoodsItem** 컴포넌트 구현
    - [x] Props:imageSrc - 이미지 소스 지정
    - [x] Props:subtitle - 아이템 부제목 지정
    - [x] Props:title - 아이템 제목 지정
    - [x] Props:amount - 아이템 가격 지정
    - [x] Ranking -> Props:rankingIndex - 아이템 랭킹 지정
- **Grid, Container** 컴포넌트 구현

📝 3단계

> 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

`webpack` : 모던 JavaScript 애플리케이션을 위한 정적 모듈 번들러. 웹에서 사용되는 모든 자원(assets)을 번들링 해주는 도구.

번들링이란? : 여러개의 파일 중에 종속성이 존재하는 파일을 하나의 파일로 묶어 패키징을 시키는 과정

webpack의 역할

- 성능 최적화, 자동화
    - 코드 축소
    - tree shaking : 사용하지 않는 코드 제거

    ⇒ HTTP 요청 수 감소
    
- 파일 단위의 자바스크립트 모듈 관리
    - HTTP, CSS, JS, Images, Font 등 모든 파일을 하나씩 나눠서 모듈화
- 번들러가 제공하는 편의성
    - Sass, TS 등을 사용하는 경우 번들러가 컴파일 과정에서 필요한 플러그인을 설치
- Dependency Issue(종속성 문제) 해결
    - 서버와 브라우저 모두에서 최대한 원활하게 작동할 수 있는 코드의 상당부분을 빌드 시 모든 종속성과 함께 번들하는데 도움

> 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

`JSX` : 리액트에서 UI를 구성할 때 사용하는 문법으로 JavaScript를 확장한 문법

JSX는 JavaScript가 확장된 문법이지만 브라우저가 바로 실행할 수 있는 JavaScript 코드가 아니므로 브라우저가 이해할 수 있는 JavaScript 코드로 변환하는 과정이 필요

1) **트랜스파일링** : Babel과 같은 도구를 사용하여 JSX 코드를 순수 JavaScript 코드로 변환

- 이 과정에서 Babel은 JSX 문법을 `React.createElement` 호출로 변환

2) **번들링** : ****Webpack과 같은 모듈 번들러를 사용하여 변환된 JavaScript 파일을 하나의 번들로 묶음

- 이 과정에서 필요한 모든 모듈과 의존성이 하나의 파일로 결합

3) **브라우저에서 실행** : 번들된 JavaScript 파일이 브라우저에 로드되면, 브라우저는 이를 해석하고 실행

- React 라이브러리는 변환된 JavaScript 코드를 사용하여 실제 DOM 요소를 생성하고 업데이트

> 3.  React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

1) **상태 정의**: 상태는 클래스 컴포넌트의 `state` 객체나 함수 컴포넌트의 `useState` 훅을 통해 정의

2) **상태 업데이트** : 상태가 변경될 때는 클래스 컴포넌트의 경우 `setState` 메서드를, 함수 컴포넌트의 경우 `setCount`와 같은 상태 업데이트 함수를 사용. 이 함수들이 호출되면 React는 상태가 변경되었음을 감지.

3) **렌더링 트리거** : 상태가 업데이트되면 React는 해당 컴포넌트를 다시 렌더링. React는 변경된 상태를 반영하여 컴포넌트의 UI를 업데이트.

왜 setState로만 상태를 변경해야 할까?

리액트는 값 변경 유무 판단을 위해 객체로 저장된 state를 비교 연산하기 때문에 객체 비교 시 객체의 메모리 주소를 기반으로 판단. 그러나 직접 값을 수정하면 메모리 주소가 동일하여 리액트가 변화를 감지하지 못함. 따라서 setState를 사용해야 하고, map, filter, spread 문법을 사용해야 하는 이유도 이와 동일.