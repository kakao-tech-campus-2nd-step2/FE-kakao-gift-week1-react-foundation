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
- [ ] storybook 추가
- [ ] Button 컴포넌트 구현
- [ ] Input 컴포넌트 구현
- [ ] GoodItem 컴포넌트 구현
- [ ] Layout 컴포넌트 구현(Container, Grid)

### 1주차 질문 답변
1. webpack은 무엇이고 어떤 역할을 하고 있나요?

    **A:** 


2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

    **A:**

3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

    **A:**


### Storybook
[리액트를 위한 스토리북 튜토리얼](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)에 따르면, 스토리북은 비즈니스 로직과 context로부터 분리된 UI 컴포넌트를 만들 수 있도록 도와준다고 한다.

우선 Storybook의 설치를 위해 명령어 
```
npx -p @storybook/cli sb init
```
을 사용하여 설치하였다. 설치가 끝나면 2개의 폴더가 생성되는데, `npm run storybook` 명령어를 통해 실행하면 된다.