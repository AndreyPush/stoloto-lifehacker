<template>

    <section class="preview">

        <div class="preview_layer">
            <img src="@img/preview-pic.svg" alt="" class="preview_pic" :class="{'animate__animated animate__shakeX': animating}" @mouseenter="doShake">
        </div>

    </section>

</template>

<script>

    export default {
        data: ()=>({
            animating: false,
        }),
        methods: {
            doShake(){
                let vm = this;

                if(!vm.animating){
                    vm.animating = true;
                    setTimeout(()=>{
                        vm.animating = false;
                    }, 1000)
                }
                else{
                    event.preventDefault()
                }

            }
        }
    }

</script>
