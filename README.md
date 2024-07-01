# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초
## 1단계 요구사항
- [X] Create React App을 기반으로 프로젝트 생성
- [X] TypeScript로 동작 가능하게 환경 세팅
- [X] 절대 경로로 import 가능하도록 alias 설정
- [X] tsconfig 살펴보고 필요한 것 설정
- [X] ESLint, 나만의 Lint 룰 설정
- [X] Prettier 추가
- [X] emotion 스타일 라이브러리 추가
- [X] reset css 적용
- [X] gitignore 추가
- [X] 프로젝트에 불필요한 파일 정리
## 2단계 요구사항
- [X] Storybook 추가
- [ ] 공통 컴포넌트에 아래와 같은 컴포넌트 구현하고, Storybook에서 확인 가능
  - Button 컴포넌트 구현
    - [X] Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보이도록 구현
    - [X] Size Props에 따라 버튼의 Size가 다르게 보이도록 구현
      (value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 달라지도록 구현)
    - [X] Button Element의 기본 속성들을 모두 사용 가능하도록 구현
  - Input 컴포넌트 구현
    - [X] disabled Props에 따라 Input이 비활성화되고, UI에서도 비활성화 됨을 인지 가능하도록 구현
    - [X] invaid Props에 따라 Input의 값이 잘못되었음을 UI에서 인지 가능하도록 구현
    - [X] Size Props에 따라 버튼의 Size가 다르게 보이도록 구현
      (value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 달라지도록 구현)
  - Image 컴포넌트 구현
    - [X] ratio Props에 따라 이미지 비율 설정 가능하도록 구현
      (value가 number로 16/9로 넘겨진 경우 16:9 비율로 보여지고, square를 설정한 경우 정사각형으로 보여지도록 구현)
    - [X] radius Props에 따라 모서리가 둥글어지도록 구현
      (value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여지도록 구현)
    - [X] Img Element의 기본 속성들을 모두 사용 가능하도록 구현
  - GoodsItem 컴포넌트 구현
    - [X] Default 형태와 Ranking 형태의 컴포넌트를 각각 구현
    - [X] 공통으로 imageSrc, subtitle, title, amount Props를 넘겨받음
    - [X] Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받음. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여지도록 구현
  - [X] Grid, Container 컴포넌트 구현

  ### 폴더 구조
  - src 폴더 하위를 components, stories, styles 폴더로 나누었습니다.
    - components : 독립적인 UI 컴포넌트 모음
    - stories : Storybook에서 사용하는 스토리 파일 모음
    - styles : 글로벌 스타일 또는 공통 스타일 파일 모음

  ## 3단계 질문 답변
  - 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?
    - webpack은 웹 애플리케이션의 모듈과 자원을 하나의 파일 또는 여러 파일로 번들링하는 도구입니다. 다양한 자원을 모듈화하여 하나의 파일로 번들링하여 자원 관리도 하고, 다양한 플러그인을 통해 코드 최적화, 환경 변수 설정 등의 기능을 추가하는 역할을 합니다.
  - 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
    - 브라우저는 기본적으로 JSX를 직접 읽을 수 없습니다. 따라서 Babel과 같은 도구를 통해 브라우저가 이해할 수 있는 순수 Javascript 코드로 변환해주어야 합니다.
  - 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
    - React 컴포넌트는 useState나 클래스 컴포넌트의 setState를 통해 상태를 관리하여 상태가 변경되면 자동으로 상태 변경을 감지합니다.