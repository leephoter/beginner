document.querySelector('#exec').addEventListener('click', function() {
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    console.log(hor, ver, mine);
    
    var dataset = [];
    var tbody = document.querySelector('#table tbody');
    for (var i = 0; i < ver; i+=1){
        var arr = [];
        var tr = document.createElement("tr");
        dataset.push(arr);
        for (var j = 0; j < hor; j+=1) {
            arr.push(1);
            var td = document.createElement("td");
            tr.appendChild(td);
            td.textContent = 1;
        }
        tbody.appendChild(tr);
    }
    console.log(dataset);
});