# 🧷 간단한 날씨 데이터로 리액트 다지기 🧷

### 프로젝트 생성

`npx create-react-app weather-app`

### 필요한 패키지 생성

`npm install axios`

### api 생성

OpenWeatherMap 사이트에서 API키를 얻는다.

### 컴포넌트 설명

useState로 상태를 관리한다.
FetchWeather를 사용해서 Api를 불러오는 비동기 함수.  
handleSubmit을 사용해서 폼 제출하며 Api를 호출한다.  
조건문사용 입력된 도시가 없는경우 에러 메세지를 표시하고, 데이터를 가져오는지를 확인단다.

### 이 예제는 함수 생성 및 호출, 변수 생성, 조건문 사용, API 호출 및 데이터 구조의 기본적인 사용법을 포함하는 예제입니다.

## 공부한 내용

api호출 및 변수 생성 조건문 사용을 배울수 있었으며
css의 초기설정을 다시한번 확인 하고 확실히 알수가 있었다.

```
- {
  margin: 0;
  padding: 0;
  }
.App {
  width: 100wh;
  height: 100vh;
  padding: 0;
}
.container {
  margin: 0 auto;
  width: calc(100% - 200px);
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

이처럼 부모 박스에서는 해당 화면의 전체값을 100vw, 100vh로 지정하고
자식 박스에서 margin: 0 auto; 를 설정하고
width: px 고정값을 지정해 주면 된다.
```

# pr-weather-app

# pr_weather-app
