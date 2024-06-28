# 카카오 테크 캠퍼스 Step2 과제(1주차)
###  사용한 기술 스택
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
</br>

### 프로젝트 설명
**[카카오 선물하기 사이트](https://gift.kakao.com/home)** 를 만들려한다.

이번 주차에는 Storybook을 사용하여 재사용 가능한 **공통** 컴포넌트를 구현하는 것이 목표이며, 이렇게 구현된 컴포넌트들은 6주 간의 여정 동안 지겹도록 사용될 것이다.

### 프로젝트 요구사항
- [X] CRA 기반으로 프로젝트 생성
- [X] TypeScript로 세팅 절대경로 설정
- [X] ESLint, Prettier 설치 및 설정
- [X] emotion 스타일 라이브러리 추가
- [X] gitignore 추가
- [X] storybook 추가
- [X] Button 컴포넌트 구현
- [X] Input 컴포넌트 구현
- [X] GoodItem 컴포넌트 구현
- [X] Layout 컴포넌트 구현(Container, Grid)

### 1주차 질문 답변
1. webpack은 무엇이고 어떤 역할을 하고 있나요?

   #### A: Webpack은 오픈소스 자바스크립트 모듈 번듈러이다. 여기서 모듈 번들러라는 것은 여러 개로 나뉘어져 있는 파일들을 하나의 파일로 만들어주는 개념이다. 결국 웹 어플리케이션을 구성하는 자원들을 모두 각각의 모듈로 보고, 이를 번들로 묶어주는 친구인 것인데, 일반적으로 생각하는 Bundle의 개념과 일치한다고 보면 될 것이다.

   #### 그렇다면 웹팩은 무슨 일을 하길래 필요할까? 웹팩은 웹 개발자들이 웹 어플리케이션 개발을 하는 과정에서 모듈 방식의 접근을 할 수 있도록 도와준다. 이렇게 개발자들은 더욱 빠르고 안전한 번들링을 할 수 있게 되는 것이다.

    [웹팩 공식문서](https://webpack.js.org)

2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

    #### A: JSX는 자바스크립트 구문 확장자로인데, 이는 유효한 자바스크립트는 아니다. 따라서, 브라우저가 JSX 파일을 읽기 위해서는 자바스크립트로 변환을 하는 과정을 거쳐야 한다. 이 과정에서 우리가 만나게 되는 것이 트랜스파일러인 Babel이다. 아마 대부분의 리액트 사용 경험이 있는 사람들이라면 저 Babel이 뭐지? 하고 궁금증을 가진 적이 있을 것이라 생각한다. 

    #### 이렇게 처음으로 트랜스파일링 과정이 진행된 후에는 애플리케이션 빌드가 일어나게 된다. 앞선 1번에 답변한 Webpack이 바로 이 빌드를 위한 도구이다. JS파일을 번들로 묶고 코드 최적화 등을 통해 처리한 뒤 빌드를 수행하게 된다.
    이렇게 빌드된 애플리케이션은 Apache나 Nginx와 같은 웹 서버를 통해 HTMl의 형태로 날아간다. 이렇게 브라우저가 React 컴포넌트에 대한 참조를 만나면 이 컴포넌트 코드가 실행되게 된다. 이러한 과정을 거쳐 마지막으로 가상 DOM과 실제 DOM 업데이트로 브라우저까지 향하는 긴 여정이 끝나게 된다.

    [참고 아티클](https://medium.com/@ashish.jadhav/how-to-understand-how-browsers-read-react-files-279f48d9c6c0)

3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

    #### A: 한 단어로 요약할 수 있다. **"HOOK"**.
    우리가 지금까지 한 프로젝트에서 많이 사용한 uesEffect와 Custom Hook을 사용하여 감지하게 된다. React의 주요 특징 중 하나는 상태 변화가 발생하면 자동으로 컴포넌트를 다시 렌더링해 UI를 업데이트 하는 것인데, 이를 통해 사용자 인터페이스가 항상 최신 상태를 반영할 수 있다는 것인 만큼 이 상태 변화 감지와 반응은 리액트의 핵심 기능이다.



### Storybook
[리액트를 위한 스토리북 튜토리얼](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)에 따르면, 스토리북은 비즈니스 로직과 context로부터 분리된 UI 컴포넌트를 만들 수 있도록 도와준다고 한다.

우선 Storybook의 설치를 위해 명령어 
```
npx -p @storybook/cli sb init
```
을 사용하여 설치하였다. 설치가 끝나면 2개의 폴더가 생성되는데, `npm run storybook` 명령어를 통해 실행하면 된다.