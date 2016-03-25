<script>
/**
 * 面包屑
 */

export default {
    props: ['list'],
    filters: {
        exceptLast (value) {
            return value.slice(0, -1);
        }
    }
};
</script>

<template>
<div class="page-bar">
    <ul class="page-breadcrumb">
        <li v-for="item in list | exceptLast">
            <a v-link="{ name: item.name }">{{item.title}}</a>
            <i class="fa fa-circle"></i>
        </li>
        <li>
            <span>{{ list[list.length - 1].title }}</span>
        </li>
    </ul>
</div>
</template>