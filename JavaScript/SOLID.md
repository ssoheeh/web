# SOLID 
객체지향 설계의 5원칙

## SRP(Single Responsibility Principle): 단일 책임 원칙

어떤 클래스를 변경해야 하는 이유는 오직 하나 뿐이어야 한다. 

한 클래스는 하나의 책임만 가져야 한다

## OCP(Open Closed Principle): 개방 폐쇄 원칙
소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다.

## LSP(Liskov Substitution Principle): 리스코프 치환 원칙
프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다. 

## ISP(Interfae Segregation Priniplt): 인터페이스 분리 원칙
특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 낫다. 

클라이언트는 자신이 사용하지 않는 메소드에 의존 관계를 맺으면 안된다. 

일반적으로 ISP보다 SRP 할 것이 권장됨


## DIP(Dependency Inversion Principle): 의존 역전 원칙
프로그래머는 "추상화에 의존해야지. 구체화에 의존하면 안된다." 의존성 주입은 이 원칙을 따르는 방법 중 하나

고차원 모듈은 저차원 모듈에 의존하면 안된다. 

구체적인 clas가 아닌, 인터페이스에 의존함으로써 DIP를 해결