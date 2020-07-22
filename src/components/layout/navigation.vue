<template>

    <nav class="nav" ref="nav" :class="{'nav--fixed':isFixed}">
        <ul class="nav_list">
            <li class="nav_item">
                <a href="#anchor-1" class="nav_link">Где купить билет</a>
            </li>
            <li class="nav_item">
                <a href="#anchor-2" class="nav_link">Как играть</a>
            </li>
            <li class="nav_item">
                <a href="#anchor-3" class="nav_link">Туры лотереи</a>
            </li>
            <li class="nav_item">
                <a href="#anchor-4" class="nav_link">Где узнать результаты</a>
            </li>
            <li class="nav_item">
                <a href="#anchor-5" class="nav_link">Как получить выигрыш</a>
            </li>
        </ul>
    </nav>

</template>

<script>
    import {gsap} from "gsap"
    import {ScrollToPlugin} from 'gsap/ScrollToPlugin'

    export default {
        data: ()=>({
            isFixed: false
        }),
        methods:{
            setPos(y){

                let vm = this;

                let parent = vm.$refs.nav.parentNode;

                let top = window.innerWidth<767?0:36;

                let diff = parent.offsetTop + top - y;

                this.$refs.nav.style.top = `${diff>=vm.$refs.nav.clientHeight?diff:vm.$refs.nav.clientHeight}px`;

                vm.isFixed = diff<=vm.$refs.nav.clientHeight;

            },
        },
        mounted() {
            let vm = this;

            vm.setPos(0)

            window.addEventListener('scroll', ()=>{
                vm.setPos(window.scrollY);
            });


            gsap.registerPlugin(ScrollToPlugin);

            const anchors = document.querySelectorAll('.nav_link');

            for(let i=0; i<anchors.length; i++){
                anchors[i].addEventListener('click', e=>{

                    e.preventDefault();

                    let point = document.querySelector(anchors[i].getAttribute('href')).getBoundingClientRect().top - 150 + window.scrollY;

                    gsap.to(window, {duration: 1.0, scrollTo: point, autoKill: true});

                });
            }

        }
    }

</script>
