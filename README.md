# React Generic Select

TypeScript 제네릭을 활용하여 string, number, union 타입을 안전하게 처리할 수 있는 공용 Select 컴포넌트입니다.  
React + MUI 환경에서 재사용 가능한 형태로 설계되었습니다.

---

## 🚀 프로젝트 소개

이 프로젝트는 다양한 타입의 값을 사용하는 Select 컴포넌트를  
**하나의 제네릭 컴포넌트로 통합하고, 타입 안전성을 보장하는 방법**을 보여줍니다.

`value`, `options`, `onChange` 간의 타입 불일치를 컴파일 단계에서 방지하는 것을 목표로 합니다.

---

## ❗ 문제 상황

실제 프로젝트에서 Select 컴포넌트를 사용할 때 다음과 같은 문제가 자주 발생합니다.

- `string`, `number` 타입이 섞이면서 일관성 깨짐
- 타입마다 별도의 Select 컴포넌트를 만들어야 함
- `value`, `options`, `onChange` 타입이 서로 맞지 않아 런타임 에러 발생
- MUI Select의 `unknown` 타입 이벤트로 인해 타입 추론이 깨짐

---

## ✅ 해결 방법

제네릭 타입을 활용하여 하나의 타입으로 모든 props를 묶어 해결했습니다.

```ts
T extends string | number
```

## 핵심 설계

```ts
interface CustomSelectProps<T extends string | number> {
  value: T;
  options: { label: string; value: T }[];
  onChange: (event: SelectChangeEvent<T>) => void;
}
```

## 해결된 점

- `value`, `options`, `onChange`가 항상 동일한 타입을 유지
- 타입 불일치가 컴파일 단계에서 차단됨
- 재사용 가능한 공용 컴포넌트로 통합

---

## ✨ 주요 기능

- string, number, union 타입 모두 지원
- 강력한 타입 안전성 보장
- 잘못된 사용을 컴파일 단계에서 차단
- MUI Select 기반으로 실무 적용 가능
- 다양한 도메인에서 재사용 가능

---

## 🧪 사용 예시

### 1. 문자열 리터럴 타입
```ts
type ReportType = 'DAILY' | 'WEEKLY' | 'MONTHLY';
```

### 2. 숫자 타입
```ts
const [value, setValue] = useState<number>(10);
```

### 3. 유니온 타입
```ts
type Status = 'ACTIVE' | 'INACTIVE' | 'PENDING';
```

## 🛠 사용 기술

- React
- TypeScript
- MUI (Material UI)

---

## 📦 실행 방법

```ts
npm install
npm run dev
```

---

## 🔗 관련 블로그

해당 프로젝트는 아래 글을 기반으로 구현되었습니다.

👉 https://velog.io/@saemmmm/Typescript-다양한-타입의-값으로-공용-Select-사용하기