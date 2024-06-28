# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## Step1

1. Requirements

-  `Create React App`을 기반으로 프로젝트 생성하기
-  Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게 alias 설정하기
-  tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 설정하기
-  ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅하기
-  emotion 스타일 라이브러리를 추가하기
-  reset css 적용하기
-  gitignore를 추가하기
-  프로젝트에 불필요한 코드들은 정리하기(ex. 사용하지 않는 icon 등)

2. 폴더 구조

```
   src
   ┣ assets
   ┃ ┗ .gitkeep
   ┣ components
   ┃ ┣ Button
   ┃ ┣ GoodsItem
   ┃ ┣ Image
   ┃ ┣ Input
   ┃ ┗ Layout
   ┣ pages
   ┃ ┗ .gitkeep
   ┣ styles
   ┃ ┗ reset.css
   ┣ utils
   ┃ ┗ .gitkeep
   ┣ App.css
   ┣ App.tsx
   ┣ index.tsx
   ┣ react-app-env.d.ts
   ┗ styles.d.ts
```

-  `assets`: 이미지, 폰트 관리
-  `components`: 재사용 가능한 컴포넌트들 관리
-  `pages`: 페이지 컴포넌트들 관리, 페이지 단위의 컴포넌트 폴더로 구성 (ex) Login, MyPage
-  `styles`: css 파일들 관리
-  `utils`: 공통 함수 등 공통으로 사용하는 util 파일들 관리

## Step2

1. Requirements

-  Stroybook을 추가해요.
-  Button 컴포넌트를 구현해요.
   -  Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여져요.
   -  Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
   -  Button Element의 기본 속성들을 모두 사용할 수 있게 해요.
-  Input 컴포넌트를 구현해요.
   -  disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 해요.
   -  invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게 해요.
   -  Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
   -  Input Element의 기본 속성들을 모두 사용할 수 있게 해요.
-  Image 컴포넌트를 구현해요.
   -  ratio Props에 따라 이미지 비율을 설정할 수 있게 해요. (value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
   -  radius Props에 따라 모서리가 둥글게 해요. (value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
   -  Img Element의 기본 속성들을 모두 사용할 수 있게 해요.
-  GoodsItem 컴포넌트를 구현해요.
   -  Default 형태와 Ranking 형태의 컴포넌트를 각각 구현해요.
   -  공통으로 imageSrc, subtitle, title, amount Props를 넘겨받아요.
   -  Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받아요. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여져요
-  Grid, Container 컴포넌트를 구현해요.

2. 참고
   https://kakao-tech-week1-storybook.pages.dev/?path=/docs/common-button--docs

## Step3

### 1주차 질문

1. webpack은 무엇이고 어떤 역할을 하고 있나요?
   Webpack은 모듈 번들러로, 여러 파일을 하나의 파일로 묶어주는 역할을 한다. Code Splitting, Tree shaking 등을 지원한다.
2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
   브라우저는 JSX를 직접 이해할 수 없기 때문에 Babel 같은 transpiler를 사용하여 JSX 코드를 브라우저가 이해할 수 있는 순수 자바스크립트로 변환한다.
3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
   React 컴포넌트는 `useState` 또는 `this.setState`를 통해 상태를 관리한다. 상태가 변경되면 React는 해당 컴포넌트를 리렌더링하여 UI를 업데이트하는데, 이때 Virtual DOM을 사용하여 변경된 부분만 효율적으로 업데이트한다.
