var frame = document.body;
var tabble = document.createElement('table');
var lines = []
var spaces = []

var passivecallback = function(ebent) {
    console.log(ebent.target)
}

for (var i = 1; i <= 3; i++) {
    var line = document.createElement('tr')
    lines.push(line)
    spaces.push([])
    for (var j = 1; j <= 3; j += 1) {
        var space = document.createElement('td')
        space.addEventListener('click', passivecallback)
        spaces[i - 1].push(space)
        line.appendChild(space)
    }
    tabble.appendChild(line)
}
frame.appendChild(tabble)
console.log(lines, spaces)
