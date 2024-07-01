# 1주차 질문

## 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

웹팩(webpack)은 모듈 번들러로, 웹 애플리케이션을 구성하는 자원(JavaScript, CSS, 이미지 등)을 모두 모듈로 보고 이를 하나의 파일로 변환하는 도구입니다. 주요 역할로는 다음과 같습니다:

- **번들링**: 웹팩은 애플리케이션을 구성하는 모든 모듈을 하나 또는 여러 개의 번들로 묶어서 최적화된 형태로 생성합니다. 이로 인해 여러 개의 파일을 하나의 파일로 관리할 수 있으며, HTTP 요청 수를 줄여 로딩 속도를 향상시킵니다.

- **로더(Loader)**: 웹팩은 다양한 파일 유형(JavaScript, TypeScript, CSS, 이미지 등)을 처리하기 위해 로더를 제공합니다. 로더는 각 파일을 변환하고 로드하는 역할을 합니다. 예를 들어, TypeScript 파일을 JavaScript로 변환하거나 CSS 파일을 JavaScript 코드로 변환하여 번들에 포함시킬 수 있습니다.

- **플러그인(Plugin)**: 웹팩은 플러그인을 사용하여 번들 최적화, 자원 관리, 환경 변수 주입 등의 작업을 수행합니다. 예를 들어, 코드 최적화를 위한 UglifyJsPlugin, 번들 사이즈 분석을 위한 BundleAnalyzerPlugin 등의 플러그인을 사용할 수 있습니다.

- **개발 서버 제공**: 웹팩은 개발 시 실시간 리로드, 모듈 핫 리플레이스먼트(Hot Module Replacement) 기능을 지원하는 개발 서버를 제공하여 개발 효율성을 높이고 빠른 피드백을 제공합니다.

- **모듈 시스템 지원**: 웹팩은 ES6 모듈 문법과 CommonJS, AMD 등의 다양한 모듈 시스템을 지원하여 자유롭게 모듈을 가져오고 내보낼 수 있습니다. 이를 통해 코드의 구조화와 재사용성을 증가시킵니다.

## 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

JSX(JavaScript XML)는 React에서 컴포넌트를 작성하기 위한 문법입니다. 하지만 브라우저는 JSX 코드를 직접 이해하거나 해석할 수는 없습니다. 대신, JSX 코드는 Babel과 같은 도구를 사용하여 일반 JavaScript 코드로 변환되어 브라우저가 이해할 수 있는 형태로 변환됩니다. 이 과정을 통해 JSX를 사용한 React 컴포넌트가 브라우저에서 실행될 수 있습니다.

- **Babel 변환**: JSX 코드는 Babel과 같은 트랜스파일러를 사용하여 JavaScript로 변환됩니다. Babel은 JSX의 문법을 이해하고, React.createElement와 같은 함수 호출로 변환하여 일반적인 JavaScript 코드로 만들어 줍니다.

- **웹팩(Webpack) 번들링**: 변환된 JavaScript 코드는 웹팩과 같은 모듈 번들러를 사용하여 번들로 묶입니다. 이 과정에서 CSS 파일, 이미지 등과 함께 하나의 번들 파일로 생성됩니다.

- **브라우저에서 실행**: 최종적으로 브라우저는 번들 파일을 로드하고 실행합니다. 번들 파일에는 모든 JSX 코드가 일반 JavaScript 함수 호출로 변환되어 있으며, React 라이브러리는 이를 통해 컴포넌트를 렌더링하고 상호작용할 수 있습니다.

## 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

React에서 상태(state)가 변경되면 컴포넌트가 리렌더링되어 UI가 업데이트됩니다. 상태 변화를 감지하고 알아내는 과정은 다음과 같습니다:

- **setState 메서드**: React 컴포넌트에서 상태를 변경할 때는 setState 메서드를 사용합니다. 이 메서드를 호출하면 React는 상태의 변경을 인지하고, 변경된 상태를 가지고 컴포넌트의 다시 렌더링을 스케줄링합니다.

- **가상 DOM 비교**: React는 가상 DOM을 사용하여 실제 DOM과 비교합니다. setState가 호출되면 React는 변경된 상태를 새로운 가상 DOM에 반영하고, 이전 가상 DOM과 비교하여 실제 DOM에 필요한 변경 사항만을 적용합니다.

- **shouldComponentUpdate 또는 PureComponent**: 컴포넌트가 불필요하게 다시 렌더링되지 않도록 최적화할 수 있습니다. shouldComponentUpdate 메서드를 구현하여 렌더링 조건을 추가하거나, PureComponent를 사용하여 얕은 비교(shallow comparison)를 통해 자동으로 최적화할 수 있습니다.

- **상태 변화 감지**: React는 상태(state)가 변경되면 해당 컴포넌트와 그 자식 컴포넌트들에 대해 다시 렌더링을 수행합니다. 이 때 상태 변화가 발생한 컴포넌트의 render 메서드가 호출되고, 변경된 상태에 맞게 UI가 업데이트됩니다.

- **라이프사이클 메서드**: 컴포넌트의 라이프사이클 메서드를 사용하여 상태 변화를 감지하고, 이에 따른 작업을 수행할 수 있습니다. 예를 들어, componentDidUpdate 메서드를 사용하여 상태 변화 후의 추가적인 작업을 처리할 수 있습니다.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
