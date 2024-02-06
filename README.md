# 개요

그룹아티스트를 정해 로컬 환경에서 팬레터를 작성하고 볼 수 있는 웹페이지입니다.
pros-drilling, context, redux branch로 구성되어 있으며 지역상태, 전역상태에 대하여 고민해 보는 과제입니다.

## 실행방법

vercel로 배포한 DEMO 링크입니다. [DEMO](https://nbc-quiz.vercel.app)

    yarn install
    yarn start

## 폴더구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜czxdg.png
 ┃ ┗ 📜fakeData.json
 ┣ 📂components
 ┃ ┣ 📂commons
 ┃ ┃ ┣ 📂articles
 ┃ ┃ ┃ ┗ 📜CustomArticle.jsx
 ┃ ┃ ┣ 📂buttons
 ┃ ┃ ┃ ┗ 📜MemberButton.jsx
 ┃ ┃ ┣ 📂forms
 ┃ ┃ ┃ ┣ 📜AddForm.jsx
 ┃ ┃ ┃ ┗ 📜EditDetailForm.jsx
 ┃ ┃ ┗ 📂layouts
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Layout.jsx
 ┃ ┗ 📂units
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┗ 📜DetailContainer.jsx
 ┃ ┃ ┣ 📂editDetail
 ┃ ┃ ┃ ┗ 📜EditDetailContainer.jsx
 ┃ ┃ ┗ 📂lists
 ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┃ ┗ 📜List.jsx
 ┃ ┃ ┃ ┗ 📜Lists.jsx
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜EditDetail.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂shared
 ┃ ┣ 📂library
 ┃ ┃ ┗ 📜utils.js
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📜fanLetter.js
 ┃ ┃ ┃ ┗ 📜selector.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜GlobalStyle.jsx
 ┃ ┗ 📜Router.jsx
 ┣ 📜App.jsx
 ┗ 📜index.js
```

# 미리보기

HOME
<img width="1437" alt="스크린샷 2024-02-06 오후 2 56 20" src="https://github.com/heechul94/nbc-quiz/assets/100992153/cf6b91f8-44de-4acf-aae2-d0d1cb75ae93">

Detail
<img width="1439" alt="스크린샷 2024-02-06 오후 3 02 01" src="https://github.com/heechul94/nbc-quiz/assets/100992153/33cfc703-d206-4200-867d-1d2bb1b3785d">

# asset 출처

이세계아이돌 로고 : [왁물원 우왁굳 팬아트 게시판](https://cafe.naver.com/steamindiegame/3417808)

프로필이미지 : [왁물원 OGQ 고멤티콘 공모전 게시판](https://cafe.naver.com/steamindiegame/9876783)
