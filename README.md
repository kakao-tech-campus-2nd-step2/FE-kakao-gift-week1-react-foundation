# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

## 1주차 Step1 
1. Creat React App으로 react 세팅
2. TypeScript 프로젝트 환경 만들기
3. tsconfig.json 설정
4. ESLint, Prettier 설정
5. emotion 라이브러리 설치 및 reset css 추가
6. 폴더 구조 정리

## Step2
1. Stroybook을 추가
2. Button 컴포넌트 구현
- Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보이게 구현
- Size Props에 따라 버튼의 Size가 다르게 보이게 구현
- Button Element의 기본 속성들을 모두 사용 가능하도록 구현
3. Input 컴포넌트 구현
- disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있도록 구현
- invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있도록 구현
- (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지도록 구현
- Input Element의 기본 속성들을 모두 사용 가능하도록 구현
4. Image 컴포넌트 구현
- ratio Props에 따라 이미지 비율을 설정
- radius Props에 따라 모서리가 둥글게 구현
- Img Element의 기본 속성들을 모두 사용 가능하도록 구현
5. GoodsItem 컴포넌트 구현
- Default 형태 컴포넌트 구현 
- imageSrc, subtitle, title, amount Props를 넘겨받기
6. Grid, Container 컴포넌트를 구현

## Step3
### 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?
웹팩이란?
오픈소스 자바스크립트 모듈 번들러로써 여러 개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리이다. 

웹팩의 장점
- 여러 파일의 자바스크립트 코드를 압축하여 최적화 할 수 있기 때문에 로딩에 대한 네트워크 비용을 줄일 수 있다.
- 모듈 단위로 개발 가능하여 가독성과 유지보수가 쉽다.

### 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
브라우저는 JSX 파일을 직접 읽을 수는 없다. JSX 파일을 읽기 위해서는 JSX를 자바스크립트 객체로 변환해야 하며, 그 변환 작업은 바벨과 같은 컴파일러를 통해 이루어진다.

  바벨이란?
최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 구형 브라우저에서도 둘 수 있게 변환 시켜주는 라이브러리이다.

### 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
React는 state를 immutable하게 관리한다. 따라서 state가 변경되면, state의 주소값이 변경되게 되고, 이 변화를 알아채게 된다.
