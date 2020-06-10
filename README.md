# Vue JS

## Ⅰ. 핵심

### 1. SPA

Single Page Application

- 페이지 전환 없이 (새로운 요청/응답 없이) UI 변화
- 왜?
  1. 사용자 편의
  2. 서버 리소스

### 2. MVVM

- Model-View-ViewModel : 기존 MVC 패턴의 Control이 ViewModel로 대체 (View와 Model이 연결됨. Model이 바뀌면 자동으로 View를 변환)
- MVC (Model-View-Control) : Controller에서 데이터를 담을 패턴을 사용자가 지정해줘야 한다.

### 3. Declarative Programming

- 선언적 프로그래밍 <-> 명령형 프로그래밍(Imperative Programming)
- 명령형(절차적) : 변화를 단계적으로 명령
  - Vanilla Javascript DOM 조작
- 선언형 : 변화를 선언(그림 그리기)
  - 프레임워크를 통한 DOM 조작

## Ⅱ. Vue JS의 요소

### 1. Directive (지시자)

- 'v-for' : 배열과 같은 데이터를 순회
- 'v-if' : 조건부 렌더링
- 'v-else' : 조건부 렌더링
- 'v-model' : 양방향 데이터 바인딩
- 'v-on' : 이벤트 바인딩(`addEventListener()`) (`@`)
- 'v-bind': 속성값 설정 (`:`)
- 'v-text': 데이터 렌더(innerText) == `{{}}`
- 'v-html': 데이터 렌더(innerHTML)

### 2. Vue Instance (객체)

- `new Vue({})`
- `el: '#app'`: 마운트 포인트
- `data: {}`: 관리할 데이터
- `methods: {}`: 함수
- `computed: {}`: 함수화된 데이터
