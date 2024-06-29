# FE 카카오 선물하기 1주차 과제: React 기초

<h1>⚙️1단계 과제 - setting</h1>
<p>Vite 기반으로 프로젝트를 생성 (typescript로 프로젝트가 동작되게 세팅)</p>
<p>절대 경로로 Import 할 수 있게 alias를 설정</p>
<p>tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 설정</p>
<p>ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅</p>
<p>emotion 스타일 라이브러리를 추가하고, reset css를 적용</p>
<p>gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리</p>
<br>
<h1>📚2단계 과제 - Storybook</h1>
<p> - Storybook 설치</p>

<ul>- 버튼 컴포넌트 구현
<li>Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여진다.</li>
<li>Size Props에 따라 버튼의 Size가 다르게 보여진다.</li>
<li>Button Element의 기본 속성들을 모두 사용할 수 있게 한다.</li>
</ul>

<ul>- Input 컴포넌트를 구현
<li>disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 한다.</li>
<li>invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게 한다.</li>
<li>Size Props에 따라 버튼의 Size가 다르게 보여진다.</li>
<li>Input Element의 기본 속성들을 모두 사용할 수 있게 한다.</li>
</ul>

<ul>- Image 컴포넌트를 구현
<li>ratio Props에 따라 이미지 비율을 설정할 수 있게 한다.</li>
<li>radius Props에 따라 모서리가 둥글게 한다.</li>
<li>img Element의 기본 속성들을 모두 사용할 수 있게 한다.</li>
</ul>

<ul>- GoodsItem 컴포넌트를 구현
<li>Default 형태와 Ranking 형태의 컴포넌트를 각각 구현.</li>
<li>공통으로 imageSrc, subtitle, title, amount Props를 넘겨받는다.</li>
<li>Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받는다. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여진다</li>
</ul>
<p>- Grid, Container 컴포넌트 구현</p><br>

<h1>🤗3단계 과제 - 질문에 대한 답변</h1>

<p><b>Q: webpack은 무엇이고 어떤 역할을 하고 있나요?</b></p>
<p>A: 웹팩은 자바스크립트 모듈 번들러로, HTML,CSS,JavaScript 등의 파일을 모아서 하나 또는 여러개의 파일로 결합하고 최적화하는 도구입니다.  웹팩은 프로젝트의 규모가 커짐에 따라 발생할 수 있는 파일 관리 문제를 해결하고, 여러 자원들을 브라우저가 이해할 수 있는 형태로 변환하여 로딩시간을 줄이는 역할을 합니다.</p>

<br>

<p><b>Q: 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?</b></p>
<p>A: 브라우저는 기본적으로 JSX 코드를 실행할 수 없습니다. JSX는 리액트에서 사용되는 자바스크립트 확장문법으로, 브라우저에서 실행되기전에 Babel같은 자바스크립트 컴파일러를 통해 변환하는 과정을 거쳐야 합니다. 이때 Babel은 React.createElement과 같은 함수 호출로 JSX를 변환하며, 이렇게 변환된 이후에서야 브라우저가 코드를 이해하고 실행할 수 있습니다. </p>

<br>
<p><b>Q: React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?</b></p>
<p>A: 리액트에서 상태 변화 감지는 setState 함수를 통해 이루어집니다. 컴포넌트에서 setState를 호출하면 리액트는 새 상태 값을 설정하고 렌더링을 다시 시작합니다. 이 과정에서 리액트는 이전 상태와 새로운 상태를 비교하여 변경된 부분만 식별하고, 실제 DOM에 필요한 최소한의 변경만을 적용하여 성능을 최적화합니다. 이런 성능 최적화는 가상 DOM을 이용해서 구현됩니다. </p>
