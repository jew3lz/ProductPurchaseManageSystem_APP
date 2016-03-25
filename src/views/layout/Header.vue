<script>
export default {}
</script>

<template>
<div class="page-header navbar">
    <div class="page-header-inner">
        <div class="page-logo">
            <a v-link="{ name: 'Home' }">
                <span>Product</span><span>Purchase</span>
            </a>
            <div class="menu-toggler sidebar-toggler"></div>
        </div>
        <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"></a>
    </div>
</div>
</template>

<style lang="less" scoped>
.page-logo{
    a {
        line-height: 45px;
        font-size: 16px;
        color: #fcfcfc;
        text-decoration: none;

        span:first-child {
            margin-right: 5px;
            color: #DE4242;
        }
    }
}
</style>