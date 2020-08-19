var 배열 = [
    '사과',
    '오렌지',
    '포도',
    '딸기',
]
console.log(배열)
console.log(배열[0])
console.log(배열.length)
console.log('안녕하세요'[3])

var 배열같은객체 = {
    0: '코끼리',
    1: '고양이',
    2: '강아지',
    3: '고라니',
    length: 4,
}
console.log(배열같은객체[0])
console.log(배열같은객체.length)

// 실제 배열과 배열같은객체를 구분하는 법

console.log(Array.isArray(배열))
console.log(Array.isArray(배열같은객체))