<script>
export default {
    props: {
        userName: null
    },
    methods: {
        logout () {
            this.$dispatch('logout');
        }
    }
}
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
        <div class="top-menu" v-if="userName">
            <ul class="nav navbar-nav pull-right">
                <li class="dropdown dropdown-user">
                    <a href="javascript:;" class="dropdown-toggle username">
                        <span class="username username-hide-on-mobile"> {{userName}} </span>
                    </a>
                </li>
                <li class="dropdown dropdown-quick-sidebar-toggler">
                    <a href="javascript:;" class="dropdown-toggle" @click="logout">
                        <i class="icon-logout"></i>
                    </a>
                </li>
                <!-- END QUICK SIDEBAR TOGGLER -->
            </ul>
        </div>
    </div>
</div>
</template>

<style scoped>
    .username {
        padding-right: 6px !important;
    }
</style>

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