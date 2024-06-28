# FE 카카오 선물하기 1주차 과제: React 기초

---

## 구현 컴포넌트

### Button.tsx

### Input.tsx

### GoodsItem.tsx

Default와 Ranking컴포넌트가 구현되어있습니다.

### Grid.tsx

### Container.tsx

### Image.tsx

코드에 사용자가 number값을 입력하여 storybook에서 선택할 수 있습니다.

---

### 질문 1: webpack은 무엇이고 어떤 역할을 하고 있나요?

webpack은 모듈 번들러(Module Bundler)로, 여러 개의 파일(HTML, CSS, JavaScript, 이미지 등)을 하나의 번들 파일로 결합하여 웹 애플리케이션의 로딩 속도를 향상시키는 도구입니다. 웹팩은 다양한 플러그인과 로더를 사용하여 여러 가지 기능을 수행할 수 있습니다.

### 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

브라우저는 기본적으로 JSX(JavaScript XML)를 직접 이해하거나 실행할 수 없습니다. JSX는 React에서 사용되는 JavaScript 확장 문법으로, JavaScript 코드 안에 HTML 같은 구조를 작성할 수 있게 합니다. 브라우저에서 JSX 파일을 읽고 실행하기 위해서는 Babel과 같은 트랜스파일러를 사용한 사전 처리가 필요합니다.

### 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

userState같은 훅을 사용하여 상태를 정의하고 이것의 상태 업데이트 함수가 호출되면 리액트는 해당 컴포넌트의 상태가 변경되었음을 인식 및 재 렌더링 합니다. 그에 따라 변경된 상태를 사용하여 UI를 업데이트합니다.
