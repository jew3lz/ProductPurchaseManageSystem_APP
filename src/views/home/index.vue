<script>
import api from 'common/api';

export default {
    data () {
        return {
            name: '',
            pwd: '',
            error: ''
        }
    },
    methods: {
        ok () {
            let params = {
                userName: this.name,
                userPassword: this.pwd
            };

            return $.get(api.user.query, params).then((result) => {
                if (result.value === 'ok') {
                    this.$dispatch('login', this.name);
                }
                else {
                    this.error = '* 用户名或密码错误';
                }
            })
        }
    }
};
</script>

<template>
    <div class="container">
        <div class="page-lock">
            <div class="page-body">
                <div class="lock-head"> Product Purchase System </div>
                <div class="lock-body">
                    <div class="lock-avatar-block">
                    <div class="lock-form">
                        <h4>{{error}}</h4>
                        <div class="form-group">
                            <input class="form-control placeholder-no-fix" type="text" placeholder="UserName" v-model="name">
                        </div>
                        <div class="form-group">
                            <input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" v-model="pwd">
                        </div>
                        <div class="form-actions">
                            <button class="btn green uppercase" @click="ok">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-footer-custom"> 2016 &copy; Product Purchase System. </div>
        </div>
    </div>
</template>

<style scoped>
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
    }

    .page-lock {
        margin: 50px auto 30px;
        width: 450px
    }

    .page-lock .page-logo {
        text-align: center;
        margin-bottom: 15px
    }

    .page-lock .page-body {
        width: 100%;
        margin-top: 50px;
        background-color: #3a4554;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        -ms-border-radius: 7px;
        -o-border-radius: 7px;
        border-radius: 7px
    }

    .lock-head {
        display: block;
        background-color: #323d4b;
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 22px;
        font-weight: 400;
        color: #61B6F1;
        -webkit-border-radius: 7px 7px 0 0;
        -moz-border-radius: 7px 7px 0 0;
        -ms-border-radius: 7px 7px 0 0;
        -o-border-radius: 7px 7px 0 0;
        border-radius: 7px 7px 0 0
    }

    .lock-body {
        display: block;
        margin: 35px;
        overflow: hidden
    }

    .lock-avatar {
        margin-top: 15px;
        height: 110px;
        -webkit-border-radius: 50%!important;
        -moz-border-radius: 50%!important;
        border-radius: 50%!important
    }

    .lock-form h4 {
        margin-top: 0;
        color: #dbe2ea;
        font-size: 14px;
        font-weight: 400
    }

    .lock-form .form-actions,.lock-form .form-group {
        margin-top: 20px
    }

    .lock-form .form-group .form-control {
        background-color: #303a48;
        border: none;
        width: 100%;
        height: 40px;
        color: #697687
    }

    .lock-form .form-group .form-control::-moz-placeholder {
        color: #556376;
        opacity: 1
    }

    .lock-form .form-group .form-control:-ms-input-placeholder {
        color: #556376
    }

    .lock-form .form-group .form-control::-webkit-input-placeholder {
        color: #556376
    }

    .lock-form .form-group .form-control:focus {
        background-color: #2b3542
    }

    .lock-form .form-actions .btn {
        width: 100%;
        font-weight: 600;
        padding: 10px
    }

    .lock-bottom {
        display: block;
        background-color: #323d4b;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        -webkit-border-radius: 0 0 7px 7px;
        -moz-border-radius: 0 0 7px 7px;
        -ms-border-radius: 0 0 7px 7px;
        -o-border-radius: 0 0 7px 7px;
        border-radius: 0 0 7px 7px
    }

    .lock-bottom a {
        font-size: 14px;
        font-weight: 400;
        color: #638cac
    }

    .lock-bottom a:hover {
        color: #7ba2c0
    }

    .page-footer-custom {
        text-align: center;
        padding: 20px 0;
        color: #5f6e83
    }

    @media (max-width: 768px) {
        .page-lock {
            margin:100px auto
        }
    }

    @media (max-width: 560px) {
        .page-lock {
            margin:50px auto;
            width: 400px
        }

        .lock-body {
            margin: 30px
        }
    }

    @media (max-width: 420px) {
        .page-lock {
            margin:30px auto;
            width: 280px
        }
    }
</style>