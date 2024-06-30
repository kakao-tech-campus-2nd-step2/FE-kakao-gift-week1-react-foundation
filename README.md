# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 1주차 1단계

<details>
<summary>1주차 1단계</summary>

### 요구사항

- [x] Create React App을 기반으로 프로젝트를 생성해요.
- [x] Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게 alias를 설정해주세요.
- [x] tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 설정해주세요.
- [x] ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅해주세요. (가장 대표적인 룰은 eslint-config-airbnb에요. 다만, 꼭 Airbnb룰을 적용할 필요는 없어요.)
- [x] emotion 스타일 라이브러리를 추가하고, reset css를 적용해주세요.
- [x] gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리해주세요. (ex. 사용하지 않는 icon 등)
- [x] 본인만의 폴더 구조 기준을 세우고 반영해주세요.
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.

### 폴더 구조 전략

- 웹에 관련된, 작성된 코드는 모두 src 디렉토리 안에 둔다.
- root요소로 렌더링 하는 코드는 index로.tsx로 두며, 이는 App.tsx를 렌더링해주는 역할을 하는 코드가 담길 것이다.
- 실질적으로 코딩은 App.tsx를 통해서 이루어 진다.
- src 안에는 위의 언급된 기본적인 파일들을 제외하고, 역할에 따른 분류를 한 디렉토리에 위치한다.
- 디렉토리의 구조와 역할은 아래와 같다.

```
src 디렉토리 구조

src/
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── styles/
├── assets/
├── context/
└── App.js
```

```
components 디렉토리 구조
 : 재사용 가능한 ui컴포넌트 지정

components/
├── common/
│   ├── Button/
│   ├── Input/
│   └── Modal/
├── layout/
│   ├── Header/
│   └── Footer/
└── feature/
    ├── UserProfile/
    └── ProductList/
```

```
pages 디렉토리 구조
  : 라우트에 해당하는 페이지 컴포넌트 저장

pages/
├── Home/
├── About/
├── Products/
└── Contact/
```

```
hooks 디렉토리 구조
  : 커스텀 React 훅 저장
Copyhooks/
├── useAuth.js
├── useFetch.js
└── useForm.js
```

```
services 디렉토리 구조
  : API 호출이나 외부 서비스와의 상호작용 담당 모듈 저장

Copyservices/
├── api.js
├── auth.js
└── storage.js
```

```
utils 디렉토리 구조
  : 유틸리티 함수 저장

Copyutils/
├── formatDate.js
├── validation.js
└── helpers.js
```

```
context 디렉토리 구조
  : React Context 관련 파일 저장

Copycontext/
├── AuthContext.js
└── ThemeContext.js
```

</details>

## 1주차 2단계

<details>
<summary>1주차 2단계</summary>

### 요구사항

- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.
- [x] Stroybook을 추가해요.
- [x] 공통 컴포넌트에 아래와 같은 컴포넌트를 구현하고, Storybook에서 확인 할 수 있게 해요. (자세한 내용은 스토리북 링크 참고)
  - Button 컴포넌트를 구현해요.
  - [x] Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여져요.
  - [x] Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
  - [x] Button Element의 기본 속성들을 모두 사용할 수 있게 해요.
  - Input 컴포넌트를 구현해요.
  - [x] disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 해요.
  - [x] invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게 해요.
  - [x] Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
  - [x] Input Element의 기본 속성들을 모두 사용할 수 있게 해요.
  - Image 컴포넌트를 구현해요.
  - [x] ratio Props에 따라 이미지 비율을 설정할 수 있게 해요. (value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
  - [x] radius Props에 따라 모서리가 둥글게 해요. (value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
  - [x] Img Element의 기본 속성들을 모두 사용할 수 있게 해요.
  - GoodsItem 컴포넌트를 구현해요.
  - [x] Default 형태와 Ranking 형태의 컴포넌트를 각각 구현해요. (자세한 디자인은 스토리북 참고)
  - [x] 공통으로 imageSrc, subtitle, title, amount Props를 넘겨받아요.
  - [x] Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받아요. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여져요
  - [x] Grid, Container 컴포넌트를 구현해요.

</details>

## 1주차 3단계

<details>
<summary>1주차 3단계</summary>

### 요구사항

1주차 질문

- 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

> (공식문서 중..) webpack은 모던 JavaScript 애플리케이션을 위한 정적 모듈 번들러 입니다.

이를 통해서 웹팩은 정적 모듈 번들러라는 것을 알 수 있다.
여러 js, css 이미지 등을 하나 또는 여러개의 파일로 묶어주고, 의존성 관리를 자동화 하여 모듈간 관계를 처리한다.
또한 사용하지 않는 코드를 제거하고 코드를 압축하여 파일 크기를 줄이고 성능을 최적화 해준다.

- 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
  브라우저는 직접적으로 JSX 파일을 읽을 수 없다. 브라우저가 이해할 수 있는 것은 js이며, JSX는 JavaScript의 확장 문법이기 때문에 브라우저가 이해할 수 있는 js로 변환되어야 한다. 이는 babel을 통해서 변환된다.

- 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
  React는 실제 DOM의 복사본인 Virtual DOM을 사용한다. React는 이전 Virtual DOM과 새로운 Virtual DOM을 비교하며, 차이가 발견된 부분만 실제 DOM에 업데이트 하게 된다.

</details>
