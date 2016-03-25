<script>
export default {
    data () {
        return {
            show: false
        }
    },
    ready () {
        window.setTimeout(() => {
            this.show = true;
        }, 300);
    }
};
</script>

<template>
    <div class="container">
        <div class="main" transition="logo" v-show="show">
            <p class="logo">Product - Purchase - System</p>
            <button class="btn btn-primary" v-link="{ name: 'Order' }">Enter</button>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .container {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #364150;
        z-index: 10000000;

        .main {
            text-align: center;
        }

        .logo {
            color: #fff;
            font-size: 60px;
        }
        .btn {
            width: 200px;
        }

        .logo-enter, .logo-leave {
            opacity: 0.7;
            transform: translateY(-40%);
        }
        .logo-transition {
            transition: all 1.2s;
        }
    }
</style>