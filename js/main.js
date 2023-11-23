(function(){
    const listElements = document.querySelectorAll('.nav__item--show');
    const list = document.querySelector('.nav__links');
    const menu = document.querySelector('.nav__icono');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subnav = element.children[1];
                let height = 0;
                element.classList.toggle('nav__item--active');


                if(subnav.clientHeight === 0){
                    height = subnav.scrollHeight;
                }

                subnav.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('nav__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('nav__links--show'))
                list.classList.remove('nav__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('nav__links--show'));



})();