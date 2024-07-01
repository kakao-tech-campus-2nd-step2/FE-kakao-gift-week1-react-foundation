# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초 Step1

## **경북대 FE\_정솔빈\_1주차 과제**

**할 일 목록:**

- [x] Create React App을 기반으로 프로젝트 생성
- [x] Typescript로 동작되게 세팅
- [x] 절대 경로로 import 가능하게 alias 설정
- [x] tsconfig 구성 항복 살펴보고 설정
- [x] ESLint, Prettier 추가 (eslint-config-airbnb 적용)
- [x] emotion 스타일 라이브러리 추가, reset css 적용
- [x] gitignore 추가하고, 프로젝트에 불필요한 코드 정리
- [x] 폴더 구조 정리

</br>

**코드 작성하면서 어려웠던 점**

> - ESLint, Ptettier을 추가하는 과정에서 `npx install-peerdeps --dev eslint-config-airbnb` 실행 후 ERR spawn EINVAL 오류가 발생하였습니다. 이를 해결하기 위해 Node.js 및 npm 버전을 확인하였지만 버전에는 문제가 없었고, npm 캐시를 정리한 후에도 같은 에러가 반복되었습니다. install-peerdeps를 전역 설치했을 때도 같은 오류가 발생하며 결국 루트 디렉토리에 직접 설치하였습니다.
>   > <pre><code>{npm install --save-dev eslint-config-airbnb
>   > npm install --save-dev eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y}</code></pre>

> - 포크해온 Repo에 개인 브랜치에서 과제 Repo의 개인 브랜치로 pull request해야하는데 포크해온 Repo의 개인 브랜치에서 과제 Repo의 main 브랜치로 Pull request해 수정하려다 rm -rf 명령어를 사용해 다시 처음부터 하게되었습니다. git을 잘못 작성했을 때 수정 및 복구하는 과정이 너무 어렵습니다.

> - 노션에 올라온 kakao-tech-campus-2nd-step2/FE-kakao-gift 과제 repo에를 클론했는데 알고보니 과제 repo 제출 repo가 아니였어서 3번째 과제 제출을 시도하고 있습니다. react 초보자지만 여러 시행 착오를 겪으며 이번 기회를 통해 좀 더 익숙해질 수 있었던 것 같습니다!

**마무리 및 질문**

> - eslint와 prettier를 다운로드 하는 과정에서 peerdeps를 사용할 수 없어 직접 다운로드 했는데 제대로 추가된 것이 맞는지 그리고 왜 peerdeps를 사용할 때 오류가 나는지 궁금합니다.

> - CRA 설치 후 git add를 하는데 Line Endding을 처리하는 방식에 대해 경고하는 내용 내용이 떴지만 무시하고 진행했습니다. core.autocrlf를 이용해서 오류를 해결하는게 맞나요? eslint와 prettier에서 LF를 지정하는 방법이 나은가요? 추천하는 오류 해결 방식이 있으시다면 조언해주시면 감사하겠습니다!

</br>

</div>
</details>

---
