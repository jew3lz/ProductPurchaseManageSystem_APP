<script>
import Modal from 'vue-bootstrap-modal';
import Select2 from 'vue-component-select';

export default {
    components: { Modal, Select2 },
    props: {
        show: Boolean,
        edit: Boolean,
        product: {
            default () {
                return {
                    name: '',
                    count: 0,
                    price: 0,
                    usage: '',
                    orderId: 1
                };
            },
            coerce (value) {
                return Vue.plain(value);
            }
        }
    },
    methods: {
        ok () {
            if (!this.check()) {
                return;
            }

            let product = Object.assign({}, this.product);

            if (!this.edit) {
                product.id = Math.floor(Math.random() * 90000) + 1;
            }

            this.$emit('ok', product);
        },
        check () {
            if (!this.product.name || this.product.count == null || this.product.price == null || this.product.usage == null || this.product.orderId == null) {
                Toastr.error('Error', '所有字段都不能为空');
                return false;
            }

            return true;
        }
    }
};
</script>

<template>
<modal :show.sync="show" :title="edit? '编辑产品' : '创建产品'" @ok="ok">

    <form class="form-horizontal" role="form">
        <div class="form-body">
            <div class="form-group">
                <label class="col-md-3 control-label">* 名称</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="Enter Name" maxlength="25" v-model="product.name">
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">* 数量</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="Enter Count" maxlength="25" v-model="product.count">
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">* 价格</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="Enter Price" maxlength="25" v-model="product.price">
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">用途</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="Enter Usage" maxlength="25" v-model="product.usage">
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">* 订单Id</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="Enter OrderId" maxlength="25" v-model="product.orderId">
                </div>
            </div>
        </div>
    </form>

</modal>
</template>