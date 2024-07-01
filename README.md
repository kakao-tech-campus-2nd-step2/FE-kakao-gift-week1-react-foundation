## 1주차 질문

- 질문1. Webpack은 무엇이고 어떤 역할을 하고 있나요?
    - Webpack은 주로 JavaScript 애플리케이션을 위한 모듈 번들러
    - 애플리케이션에서 필요한 여러 파일들을 하나의 번들러로 묶어주며, 다양한 모듈을 처리할 수 있음
    - 모듈 번들링, 코드 분할, 로더, 플러그인, 핫 모듈 교체 등의 역할을 함

- 질문2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
    - JSX 변환 : JSX는 브라우저가 이해할 수 있는 일반 JavaScript 코드로 변환(Babel 등 도구 이용)
    - 번들링 : Webpack과 같은 모듈 번들러를 사용하여 변환된 JavaScript 코드와 다른 의존성들을 하나의 파일로 번들링
    - 번들 파일 로드 : 번들된 파일을 HTML 파일에 포함시키고 로드하여 실행

- 질문3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
    - 상태 관리 : 컴포넌트 내부적으로 useState 같은 React 훅을 사용하여 정의하고 setState를 통해 상태(state) 관리 가능
    - 렌더링 트리거 : 상태가 업데이트되면 React는 해당 컴포넌트를 다시 렌더링
    - 효과 처리 : 상태 변화에 따른 부수 효과를 처리하기 위해 useEffect 훅 사용 가능

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
