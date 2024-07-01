# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

### 📝 step 1

- [x] Create React App을 기반으로 프로젝트를 생성해요.
- [x] Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게 alias를 설정해주세요.
- [x] tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 설정해주세요.
- [x] ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅해주세요. (가장 대표적인 룰은 eslint-config-airbnb에요. 다만, 꼭 Airbnb룰을 적용할 필요는 없어요.)
- [x] emotion 스타일 라이브러리를 추가하고, reset css를 적용해주세요.
- [x] gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리해주세요.

### 📝 step 2
- [x]  Stroybook 추가
- [x]  Button 컴포넌트 구현
- [x]  Input 컴포넌트 구현
- [x]  Image 컴포넌트 구현
- [x]  GoodsItem 컴포넌트 구현
- [x]  Grid, Container 컴포넌트 구현

### 📝 step 3
##### 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

Webpack은 모듈 번들러(Module Bundler)입니다. 주로 웹 애플리케이션에서 JavaScript 파일 외에도 CSS, 이미지 등과 같은 다양한 리소스들을 모듈로 취급하여 번들링(묶음화)하는 역할을 합니다. 

번들링: 여러 모듈들을 하나로 묶어서 브라우저에서 사용할 수 있는 번들 파일(bundle)을 생성합니다.
모듈 로딩: JavaScript, CSS, 이미지 등 여러 타입의 파일을 모듈로 로딩하고 관리합니다.
번들 최적화: 코드 압축, 트리 쉐이킹(Tree Shaking), 파일 경로 해석 등을 통해 최적화된 번들을 생성합니다.
개발 서버 제공: 개발 중인 애플리케이션을 실시간으로 변경 사항을 반영하여 빠르게 테스트할 수 있는 개발 서버를 제공합니다.


##### 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

JSX는 React 컴포넌트에서 UI를 선언적으로 작성할 수 있게 해주는 문법입니다. 하지만 브라우저는 기본적으로 JSX를 이해할 수 없습니다. 따라서 JSX 파일을 브라우저에서 실행하기 위해서는 JSX를 자바스크립트 객체로 변환해야하며 이를 위하여 **바벨(Babel)**과 같은 컴파일러를 사용합니다.


##### 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

useState Hook: 함수형 컴포넌트에서 상태를 관리할 수 있도록 제공하는 Hook인 useState를 사용하여 상태를 선언하고, 이 상태를 업데이트하는 함수를 호출할 때 React는 해당 컴포넌트를 다시 렌더링합니다.

Class Components: 클래스 기반 컴포넌트에서는 setState 메서드를 사용하여 상태를 업데이트합니다. setState가 호출되면 React는 해당 컴포넌트의 상태가 변경됐음을 인지하고, 필요한 경우 컴포넌트를 다시 렌더링합니다.