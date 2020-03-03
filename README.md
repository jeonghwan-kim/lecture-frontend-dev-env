# 프론트엔드 개발 환경의 이해 

"[프론트엔드 개발 환경의 이해와 실습](https://www.inflearn.com/course/프론트엔드-개발환경)" 강의 자료입니다.

- 강의노트: 
  - [프론트엔드 개발 환경의 이해: NPM](http://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
  - [프론트엔드 개발 환경의 이해: 웹팩(기본)](http://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
  - [프론트엔드 개발 환경의 이해: Babel](http://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html)
  - [프론트엔드 개발 환경의 이해: 린트](http://jeonghwan-kim.github.io/series/2019/12/30/frontend-dev-env-lint.html)
  - [프론트엔드 개발 환경의 이해: 웹팩(심화)](http://jeonghwan-kim.github.io/series/2020/01/02/frontend-dev-env-webpack-intermediate.html)

- 실습: [jeonghwan-kim/lecture-frontend-dev-env](https://github.com/jeonghwan-kim/lecture-frontend-dev-env)


## 내용 

프론트엔드 개발 환경을 구성하는데 필요한 기술을 이해하고 실습을 통해 익힙니다. 
프로젝트 전반에 사용되는 **노드js**, 모듈로 분리하여 코딩할 수 있게 도와주는 **웹팩**, 최신 자바스크립트 문법을 
사용할 때 필요한 **바벨**이 개발 환경을 구성하는데 필요한 도구들 입니다. 
뿐만 아니라 코딩 컨벤션을 유지할 수 있는 **린트** 도구는 개발자 간의 협업을 도와주는 요긴한 툴입니다.

수업에서 다루는 도구의 버전은 다음과 같습니다. 웬만하면 이 버전과 같은 환경으로 만들어 주세요.

- Node.js 13과 NPM 6 ([이 이슈](https://github.com/babel/babel/pull/11006)로 인해 Node.js v13.2 이상을 설치해야 합니다.)
- 웹팩 4
- 바벨 7

어플리케이션 개발에 사용되는 라이브러리나 프레임웍, 언어 문법은 다루지 않습니다. 


## 폴더 구성

강의 실습을 위한 폴더는 다음과 같이 구성되어 있습니다.

- src: 검색 어플리케이션 프론트엔드 소스
- server: 검색 어플리케이션 API 서버 코드 
- resource: 강의 진행에 필요한 자료. 이미지나 이론 실습용 코드가 있습니다.
- react-sample: 마지막에 순서인 리액트 개발환경 구성을 위한 실습 코드입니다.


## 브랜치

강의 중 실습은 아래 브랜치 중 하나로 이동하여 진행합니다.
브랜치를 이용하면 각 실습에서 풀어야하는 문제가 TODO 주석으로 기록되어 있습니다. 

- `1-webpack/1-entry`: 웹팩 엔트리/아웃풋 실습
- `1-webpack/2-loader`: 웹팩 로더 실습
- `1-webpack/3-plugin`: 웹팩 플러그인 실습
- `2-babel/1-babel`: 바벨 실습
- `2-babel/2-sass`: 사스 실습
- `3-lint/1-eslint`: 린트 실습
- `3-lint/2-prettier`: 프리티어 실습
- `4-webpack/1-dev-server`: 웹팩 개발 서버 실습
- `4-webpack/2-hot`: 웹팩 핫로딩 실습
- `4-webpack/3-optimazation`: 웹팩 최적화 실습
- `5-sample/1-react`: 리액트 샘플 실습
- `master`: 최종 결과물 
