<script>
import Modal from 'vue-bootstrap-modal';
import Select2 from 'vue-component-select';

export default {
    components: { Modal, Select2 },
    props: {
        show: Boolean,
        edit: Boolean,
        productList: null,
        employeeList: null,
        statusMap: null,
        order: {
            default () {
                return {
                    proList: '',
                    staffId: 1,
                    status: 0
                };
            },
            coerce (value) {
                if (value == null) {
                    return value;
                }

                let obj = Vue.plain(value);
                obj.proList = obj.proList.split(',');

                return obj;
            }
        }
    },
    methods: {
        ok () {
            if (!this.check()) {
                return;
            }

            let order = Object.assign({}, this.order);
            order.proList = order.proList.join(',');
            delete order.modified;

            if (!this.edit) {
                order.id = Math.floor(Math.random() * 90000) + 1;
            }

            this.$emit('ok', order);
        },
        check () {
            if (!this.order.proList || !this.order.proList.length || this.order.staffId == null) {
                Toastr.error('Error', '产品和员工不能为空');
                return false;
            }

            return true;
        }
    },
    filters: {
        productOptions (value) {
            return value.map((item) => ({
                id: item.id,
                text: item.name
            }));
        },
        employeeOptions (value) {
            return value.map((item) => ({
                id: item.id,
                text: item.name
            }));
        },
        statusOptions (value) {
            return Object.keys(value).map((item) => ({
                id: item,
                text: value[item]
            }));
        }
    }
};
</script>

<template>
<modal :show.sync="show" :title="edit? '编辑订单' : '创建订单'" @ok="ok">

    <form class="form-horizontal" role="form">
        <div class="form-body">
            <div class="form-group">
                <label class="col-md-3 control-label">* 员工</label>
                <div class="col-md-9">
                    <select2 :data="employeeList | employeeOptions" :model.sync="order.staffId" placeholder="选择员工"></select2>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">* 产品列表</label>
                <div class="col-md-9">
                    <select2 :data="productList | productOptions" :multiple="true" :model.sync="order.proList" placeholder="选择产品"></select2>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">* 状态</label>
                <div class="col-md-9">
                    <select2 :data="statusMap | statusOptions" :search="false" :model.sync="order.status"></select2>
                </div>
            </div>
        </div>
    </form>

</modal>
</template>