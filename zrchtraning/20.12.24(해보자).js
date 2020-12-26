function travelview() {
        var view = document.createElement('div');
        view.className = 'view';
        var viewCat = document.createElement('div');
        viewCat.className = 'cat';
        var viewNight = document.createElement('div');
        viewNight.className = 'night';
        var viewFront = document.createElement('div');
        viewFront.className = 'front';
        var viewBack = document.createElement('div');
        viewBack.className = 'back';
        (function (c) {
            c.addEventListener('click', function() {
                // c.classList.toggle('change');
                if (c.classList.contains('night')) {
                    c.classList.remove('night');
                    c.classList.add('cat');
                } else if (c.classList.contains('cat')) {
                    c.classList.remove('cat');
                    // c.classList.add('front');
                } else {
                    // c.classList.remove('front');
                    c.classList.add('night');
                }
            }, 1000);
        })(view);
        document.body.appendChild(view);
    // document.querySelector('#night').style.background = ' url(veneziaNight.jpeg) ' + imageaddress + ' 0';
}
travelview();
