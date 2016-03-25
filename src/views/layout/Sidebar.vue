<script>
export default {}
</script>

<template>
<div class="page-sidebar-wrapper">
    <div class="page-sidebar navbar-collapse collapse">
        <ul class="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
            <li class="heading">
                <h3 class="uppercase">Product Purchase</h3>
            </li>
            <li class="start" v-link="{ name: 'Order', activeClass: 'active', exact: true }">
                <a href="javascript:;">
                    <i class="icon-home"></i>
                    <span class="title">订单管理</span>
                    <span class="arrow "></span>
                </a>
            </li>
            <li v-link="{ name: 'Product', activeClass: 'active', exact: true }">
                <a href="javascript:;">
                    <i class="icon-bulb"></i>
                    <span class="title">产品管理</span>
                    <span class="arrow "></span>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>