# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 1단계

- [x] CRA로 리액트 앱 생성 + 템플릿 사용하여 TS 세팅
- [x] tsconfig.json 설정
  - [x] 절대 경로 설정, tsconfig.paths.json 파일 생성하여 tsconfig.json에서 include하는 것으로 설정
- [x] 폴더 구조 잡기
- [x] gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리해주세요. (ex. 사용하지 않는 icon 등)
- [x] 일관된 코드 스타일, 룰 적용을 위한 ESLint, Prettier 설치 및 세팅
- [x] emotion 라이브러리 설치, CSS 리셋 (modern-normalize 라이브러리 설치하여 디폴트 css 적용)

## 3단계

질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

> CRA로 생성한 리액트 앱의 번들러로, 번들러란 여러 js, css, 이미지 등 파일들을 묶어주고 파일 크기를 줄여주는 툴이다. 이로써 로드 속도를 줄이고 브라우저 렌더링 비용을 절감할 수 있다.

질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

> JSX는 html와 js가 혼합된 형태로, 리액트에서 사용하는 확장자다. 따라서 JSX를 JS로 변환하는 단계가 필요하다.  
> JSX는 Babel에 의해 순수 JS로 변환된다.  
> 변환된 JS 파일들은 웹팩을 통해 번들되어 브라우저에서 로드된다.

질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

> 리액트는 가상 DOM을 사용하여 상태 변화를 캐치하고 기억한다.  
> view가 모델을 스케치하면 리액트가 스캔하여 가상 DOM을 생성한다. 그리고 이전 가상 DOM과 비교하여 변경 사항을 찾는다. 이렇게 가상 DOM에 기억된 변경 사항만 리얼 DOM에 업데이트한다.  
> 리액트는 가상 DOM을 사용해 즉각적인 (reactive) 프로그래밍을 가능케 한다. 이 방식은 전체 DOM을 재렌더링하는 것보다 빠르고 효율적이다.
