### 로또 미션 요구 사항
- [ ] 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [ ] 로또 번호는 오름차순으로 정렬하여 보여준다.
- [ ] 로또 1장의 가격은 1,000원이다.
- [ ] 당첨 번호와 보너스 번호를 입력받는다.
- [ ] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력한다.
- [ ] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    ```
    1등: 6개 번호 일치 / 2,000,000,000원
    2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    3등: 5개 번호 일치 / 1,500,000원
    4등: 4개 번호 일치 / 50,000원
    5등: 3개 번호 일치 / 5,000원
    ```
- [ ] 당첨 통계를 출력한 뒤에는 재시작/종료 여부를 입력받는다.
- [ ] 재시작할 경우 구입 금액 입력부터 게임을 다시 시작하고, 종료하는 경우 그대로 프로그램을 종료시킨다.
- [ ] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

---
# 로또 미션 기능 목록
## Domain
## model
1. Lotto
    - field
        - 로또 번호 6개를 가진다. (lottoNumbers)

2. Winning
    - field
        - 당첨 번호 6개를 가진다. (winningNumbers)
        - 보너스 번호를 가진다. (bonusNumber)
    - method 
        - 당첨 번호 6개를 반환한다. (getWinningNumbers())
        - 보너스 번호를 반환한다. (getBonusNumber())
        - 중복된 당첨번호가 있는지, 로또 숫자 범위의 값인지, 양수인 정수인지 확인한다. (validateWinningNumbers()) //throw들

3. Yield
    - field
        - 수익률을 가진다. (rate)
    - method
        - 수익률을 반환한다. getRate()
        - 수익률을 계산한다. calculateRate()

4. Money
    - field
        - 구매 금액을 가진다. (amount)
    - method
        - 구매금액을 반환한다. (getAmount())
        - 양수인 정수인지, 구매금액이 1000원 단위인지, 10만원을 넘지 않는지 확인한다. (validateAmount())

## controller
1. lottoMachine
    - field
        - lottos
        - info { money , yield }

    - method
        - 로또 구입 금액 입력을 받는다. (readMoney())
        - 구입 금액만큼 로또들을 생성한다. (generateLottos())
        - 랜덤으로 6개의 숫자를 생성한다. (makeLottoNumbers())
        - 로또 당첨 번호를 입력 받는다. (readWinningNumbers())
        - 로또 보너스 번호를 입력 받는다. (readBonusNumber())
        - 구매한 로또 장수를 보여준다. (showLottoCount())
        - 로또 번호들을 보여준다. (showLottos())
        - 로또 번호는 오름차순으로 정렬한다. (sortLottoNumbers)
        - 사용자에게 게임을 더 진행할 지 입력을 받는다. (readRetryOption())
        - 재시작하였을 경우 구입 금액부터 다시 입력을 받는다. (retry())
        - 게임 종료의 경우 프로그램을 종료한다. (quit())
        - 

## View

1. InputView
    - 필요한 값을 입력받는다. (readInput(),inputHandler())

2. OutputView
    - 구입한 로또의 장수를 출력한다. (printLottoCount())
    - 로또의 번호를 출력한다. (printLotto())
    - 로또 당첨 결과를 출력한다. (printResult())
    - 재시작 문구를 출력한다. (printRetryOption())

## utils

1. Console
    - 입력 메서드 (readLine())
    - 출력 메서드 (print())
    - 종료 메서드 (close())

2. index.js

    - 범위 내의 무작위 숫자를 생성한다. (pickRandomNumberInRange())
    - 정수인지. (isInteger())
    - 숫자인지. (isNumber())
    - 범위 내의 숫자인지. (isNumberInRange()) 
    - 배열에 중복된 숫자가 없는지. (isUniqueArray()) 
    - 사용자가 잘못된 입력을 했을 때, 에러문을 출력하고 입력을 다시 받는다. (errorHandler())


## constant

1. index.js
    - 정규식 (REG_EXP)
    - 에러문구 (ERROR_MESSAGE)
    - 매직넘버 (MAGIC_NUMBER)
    - 매직리터럴 (MAGIC_LITERAL)

