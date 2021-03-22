# RESTful API

## RESTful API 특징

### REST 아키텍처의 제약 사항

- 클라이언트-서버
- 무상태성
- 캐시
- 유니폼 인터페이스
- 계층형 시스템
- 주문형 코드(Code-On-Demand)

### RESTful 인터페이스 제약 사항

- 리소스 식별
- 표현을 통한 리소스 조작
- 자기 서술 메시지
- 애플리케이션 상태 엔진으로서의 하이퍼미디어

### 독선적인 RESTful API

- 리처드슨 성숙도 모델
- HATEOAS

### 고집스러운 RESTful API 특징

- 리소스 중심적
- URI를 통한 식별 가능
- HTTP 메소드를 통한 작업 정의
- HTTP 상태 코드 사용
- 버전 관리
- 무상태성
- 페이징 처리
- 검색과 정렬
- 보안

## RESTful API 설계 절차

- 요구 사항 찾기
- 리소스 식별하기
- API 세부 사항 구체화하기

## 스프링 MVC에서 RESTful API 구현

### MVC 어노테이션

- @RestController
- @RequestMapping (@GetMapping, @PostMapping, @PatchMapping, @PutMapping, @DeleteMapping)
- @ResponseEntity
- @RequestParam
- @PathVariable
- @RequestBody

### 스프링 HATEOAS

### 스프링 REST Docs
