
    window.addEventListener('load', () => {
        M.AutoInit();
        //init sliders text si es obligatorio
        let elems = document.querySelectorAll('.slider');
        let  instances = M.Slider.init(elems);

        let sidenav = document.querySelectorAll('.sidenav');
        let instances_side = M.Sidenav.init(elems);

        var parrallax = document.querySelectorAll('.parallax');
        var instances_parrallax = M.Parallax.init(elems);
    });
    document.addEventListener('DOMContentLoaded',function () {



    });
