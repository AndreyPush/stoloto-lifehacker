<template>

    <footer class="footer">

        <div class="footer_wrapper">

            <p class="footer_copyright">© {{currentYear}} Лайфхакер</p>

        </div>

    </footer>

</template>

<script>

    export default {
        computed: {
            currentYear(){
                let date = new Date();
                return date.getFullYear();
            }
        }
    }

</script>
