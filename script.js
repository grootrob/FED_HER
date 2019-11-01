/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var meerTonen_trigger = document.querySelector("#meer-tonen");
var genres_element = document.querySelector("#overzicht main section:first-of-type fieldset  fieldset:first-of-type div");
var download_knoppen = document.querySelectorAll("#overzicht main section:nth-of-type(2) article > ul li.download_knop");
if (meerTonen_trigger) {
    meerTonen_trigger.addEventListener('click', function () {

        genres_element.classList.toggle('is-open');

        if (genres_element.classList.contains('is-open')) {
            meerTonen_trigger.textContent = '- Minder tonen';
        } else {
            meerTonen_trigger.textContent = '+ Meer tonen';
        }

    });
}


for (var i = 0; i < download_knoppen.length; i++) {


    download_knoppen[i].addEventListener('click', function (event) {

        var element = event.srcElement.parentElement;

        if (element.querySelector('.download').classList.contains('is-actief')) {


            document.querySelector('nav ul li .error').classList.remove('is-actief');
            document.querySelector('nav ul li .succes').classList.remove('is-actief');


            element.querySelector('.download').classList.remove('is-actief');
            element.querySelector('.laden').classList.add('is-actief');

            document.querySelector('nav ul li .laden').classList.add('is-actief');

            window.setTimeout(function () {

                element.querySelector('.laden').classList.remove('is-actief');
                document.querySelector('nav ul li .laden').classList.remove('is-actief');

                if (Math.random() > 0.2) {
                    element.querySelector('.succes').classList.add('is-actief');
                    document.querySelector('nav ul li .succes').classList.add('is-actief');
                } else {
                    element.querySelector('.error').classList.add('is-actief');
                    document.querySelector('nav ul li .error').classList.add('is-actief');

                    element.querySelector('.error').addEventListener('click', function () {
                        document.querySelector('#errorState').style.display = "block";

                    });

                }

            }, 3000);
        }

    });

}
