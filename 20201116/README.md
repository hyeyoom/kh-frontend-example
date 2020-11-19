# 1. 배열 filter, map, reduce

## 1.1. filter

```javascript
filter(callbackfn [, ?thisArg])
```

callbackfn: 참, 거짓을 평가할 수 있는 함수가 넘어가면 됨

## 1.2. map

```javascript
filter(callbackfn)
```

callbackfn: 원소를 변환할 함수

```javascript
l = ['apple', 'grape', 'orange']
l.map(x => x.length)
```

## 1.3. reduce

```javascript
reduce(callbackfn)
```

callbackfn
1. acc: 누산할 값
2. cur: 현재 값

# 2. DOM API

## 2.1. 요소(HTML element) 찾기

- id
- class
- 태그

### 2.1.1. id로 찾기

```javascript
document.getElementById('아이디')

```

### 2.1.2. class로 찾기

```javascript
document.getElementsByClassName('클래스이름')   // 클래스 이름만, HTMLCollection(live)
document.querySelectorAll('클래스이름')     // css랑 동일하게, NodeList(non-live)
```

### 2.1.3. 태그 이름으로 찾기

```javascript
document.getElementsByTagName('태그이름')
document.querySelectorAll('태그이름')
```

## 2.2. 노드 순회

- childNodes
- children
- firstChild
- lastChild
- firstElementChild
- lastElementChild
- parentNode
- previousSibling
- previousElementSibling
- nextSibling
- nextElementSibling

## 2.3. DOM 조작

- innerHTML
- DOMPurify.sanitize
  - XSS(Cross Site Scripting) 공격 방어
- createElement
- appendChild
- createTextNode

```javascript
const newBox = document.createElement('div')    // 새로운 노드 생성 (아직은 메모리 상에만 존재)
newBox.classList.add('box') // 새로 생성한 박스의 클래스 추가
newBox.innerText = '._.'    // 새로 생성한 박스의 텍스트 노드 변경
document.body.appendChild(newBox)   // body 노드에 새 박스 추가
```


# 3. 이벤트

브라우저에서 발생하는 키 입력, 마우스 입력 등을 가할 때 발생하는 것을 `이벤트`라고 한다.  
그리고 발생한 `이벤트`에 대한 처리를 하는 함수를 `이벤트 핸들러`라고 부른다.   

## 3.1. 이벤트 종류

### 3.1.1. 마우스 이벤트

- click: 클릭
- dblclick: 더블클릭
- mouseup/mousedown: 마우스 눌러질때, 마우스에서 손 떼는 경우
- mousemove: 마우스 이동
- mouseenter(nb): 
- mouseover(b)
- mouseleave(nb)
- mouseout(b)

### 3.1.2. 키보드 이벤트

- keydown: 모든 키에 대해서
- keyup: 키에서 손 떼는 경우
- keypress: 문자, 숫자, 특수 문자

## 3.2. 이벤트 핸들러 등록 방법

- 속성: `on` + 이벤트이름
- 프로퍼티
- addEventListener(fn, [?capture])

### 3.2.1. 속성에 등록하기

```html
<script>
    function handleClick() {
        alert('triggered')
    }
</script>
<div onmouseover="handleClick()" class="box">._.</div>
```

### 3.2.2. 프로퍼티에 지정

```html
<div id="boxbox" class="box">._.</div>
<script>
    const box = document.querySelector('#boxbox')
    box.onclick = () => {
        alert('triggered')
    }
</script>
```

### 3.2.3. addEventListener

```javascript
addEventListener('이벤트이름', '이벤트핸들러')
```

```javascript
<div id="boxbox" class="box">._.</div>
<script>
    const box = document.querySelector('#boxbox')
    box.addEventListener('click', () => {
        alert('hi')
    })
</script>
```

## 3.3. 이벤트 전파

- event capturing phase (위 -> 아래)
- Event Target
- event bubbling phase (하위 -> 상위)
  - 이 때 등록된 핸들러들 호출됨
  - 상위에 있는 요소들에 등록된 핸들러가 호출 될 수 있으므로 의도하지 않은 동작을 막으려면 stopPropagation 호출해서 이벤트 전파 막아야함.

