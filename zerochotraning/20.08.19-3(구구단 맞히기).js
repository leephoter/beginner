var 조건 = true
while (조건) {
    var num1 = Math.floor(Math.random() * 9) + 1
    var num2 = Math.floor(Math.random() * 9) + 1
    var result1 = num1 * num2
    var 조건 = true
    while (조건) {
        var answer = prompt(String(num1) + 'cross' + String(num2) + '= ?')
        if (result1 !== Number(answer)) {
            alert('retry !!')
        } else {
            alert('nice !!')
            조건 = false
        } 
    }
}