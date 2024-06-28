# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 1주차 과제 : 3단계 - 질문의 답변을 README에 작성

**Storybook을 프로젝트에 추가**하고 프로젝트에 사용할 **컴포넌트**들을 Storybook으로 볼 수 있게 해요.

✔️ **참고 URL: https://kakao-tech-week1-storybook.pages.dev/**

### Requirement

---

### ✔️ 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

#### 알고 있는 지식

webpack은 모듈 번들러로, 작성한 JavaScript 파일들을 하나로 묶어주는 역할을 하는 도구로 알고 있습니다.

#### 참고 레퍼런스

https://velog.io/@gusdh2/Webpack%EC%9D%B4%EB%9E%80-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%A0%EA%B9%8C%EC%9A%94

### ✔️ 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

#### 알고 있는 지식

- React에서 사용되는 JavaScript의 확장 문법입니다. 하지만 브라우저는 JSX 코드를 직접 이해할 수 없습니다. 따라서 JSX 코드는 다음과 같은 과정을 거쳐 브라우저가 이해할 수 있는 JavaScript 코드로 변환됩니다.

- Babel 변환: JSX 코드는 <span style="color: red">**Babel**</span>과 같은 JavaScript 컴파일러를 사용하여 일반 JavaScript 코드로 변환됨. 이 과정에서 JSX에서 사용되는 React의 createElement 함수 호출로 변환됨.

```javascript
// JSX 코드
const element = <h1>Hello, world!</h1>;

// Babel 변환 후 JavaScript 코드
const element = React.createElement('h1', null, 'Hello, world!');
```

#### 참고 레퍼런스

https://m.blog.naver.com/wjdrudtn0225/221239750635

### ✔️ 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

#### 알고 있는 지식

- React에서 **상태 변화**가 발생하면, 컴포넌트는 자동으로 **리렌더링**되어 화면에 반영됩니다. 이 과정에서 상태 변화를 알아차리고 처리하기 위해
  <span style="color: red">**setState**</span> 또는 **React Hook 인
  <span style="color: red">useState**</span>를 사용할 수 있습니다.

#### 참고 레퍼런스

https://velog.io/@badahertz52/react-rendering-%EA%B3%BC-state-%EB%B3%80%EA%B2%BD%EA%B0%90%EC%A7%80
