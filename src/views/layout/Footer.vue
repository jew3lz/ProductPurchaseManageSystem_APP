<script>
export default {
    methods: {
        scrollTop () {
            $('body').animate({ scrollTop: 0 }, 400);
        }
    }
};
</script>

<template>
<div class="page-footer">
    <div class="page-footer-inner">2016 &copy; Product Purchase System.</div>
    <!--滚动顶部-->
    <div class="scroll-to-top" @click="scrollTop"><i class="icon-arrow-up"></i></div>
</div>
</template>

