<script>
// components
import Breadcrumb from 'components/Breadcrumb';
import DataTable from 'vue-bootstrap-table';
import Paginator from 'vue-component-paginator';
import Modal from 'vue-bootstrap-modal';
import Datepicker from 'vue-component-date';
import Edit from './Edit';

// directives
import loading from 'vue-loading';

// util
import api from 'common/api';

export default {
    components: { Breadcrumb, Paginator, DataTable, Datepicker, Modal, Edit },
    directives: { loading },
    name: 'Order',
    data () {
        let date = new Date();
        date = new Date(date.getFullYear() + '-' + (date.getMonth() - 0 + 1) + '-' + date.getDate() + ' 00:00:00');

        return {
            breadcrumbs: [{
                title: '订单管理'
            }],

            order: {
                list: [],
                count: 1,
                current: {},
                loading: false,
                pageNum: 1,
                pageSize: 10,
                date: date,
                statusMap: {
                    '0': '创建',
                    '1': '审核中',
                    '2': '审核通过',
                    '3': '已采购',
                    '4': '已关闭(成功)'
                }
            },

            product: {
                list: [],
                count: 1
            },

            employeeList: [],

            modal: {
                add: false,
                edit: false,
                remove: false
            }
        }
    },
    created () {
        this.fetchProductList();
        this.fetchEmployeeList();
        this.fetchOrderList();
    },
    methods: {
        openOrderEdit (order) {
            this.order.current = order;
            this.modal.edit = true;
        },
        openOrderAdd () {
            this.modal.add = true;
        },
        changeOrderPage (num) {
            this.order.pageNum = num;
            this.fetchOrderList();
        },
        changeOrderDate (date) {
            this.order.date = date;
            this.fetchOrderList();
        },
        addOrder (order) {
            return $.get(api.order.insert, order).then(() => {
                this.order.list.unshift(order);
                this.order.count += 1;
                //this.fetchOrderList();

                this.modal.add = false;
                Toastr.success('新增成功', 'Success');
            });
        },
        updateOrder (order) {
            return $.get(api.order.update, order).then(() => {
                let index = this.order.list.indexOf(this.order.current);
                this.order.list.$set(index, order);

                this.modal.edit = false;
                Toastr.success('编辑成功', 'Success');
            });
        },
        fetchOrderList () {
            this.order.loading = true;

            let params = {
                time: this.order.date.getTime()
            };

            return $.get(api.order.list, params).then((result) => {
                this.order.list = result.value;
                this.order.count = result.value.length;

                this.order.loading = false;
            });
        },
        fetchEmployeeList () {
            return $.get(api.employee.list).then((result) => {
                this.employeeList = result.value;
            });
        },
        fetchProductList () {
            return $.get(api.product.list).then((result) => {
                this.product.list = result.value;
                this.product.count = result.value.length;
            });
        }
    }
}
</script>

<template>
<div>
    <!--面包屑-->
    <breadcrumb :list="breadcrumbs"></breadcrumb>

    <h3 class="page-title">
        订单管理 <small>Order Manage</small>
    </h3>

    <div class="row">
        <div class="col-md-12">
            <div class="portlet light bordered">

                <div class="portlet-title">
                    <div class="caption">
                        <i class="icon-social-dribbble font-blue"></i>
                        <span class="caption-subject font-blue bold">订单列表 ORDER LIST</span>
                    </div>
                    <div class="actions">
                        <button class="btn btn-outline blue" @click="openOrderAdd">创建订单</button>
                    </div>
                </div>

                <div class="portlet-body">
                    <form class="form-inline" style="margin-bottom: 10px">
                        <div class="form-group">
                            <datepicker :model="order.date" @change="changeOrderDate"></datepicker>
                            <!-- <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email"> -->
                        </div>
                    </form>

                    <data-table v-loading="loading">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>员工Id</th>
                                    <th>产品Id</th>
                                    <th>状态</th>
                                    <th>修改日期</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in order.list">
                                    <td>{{item.id}}</td>
                                    <td>{{item.staffId}}</td>
                                    <td>{{item.proList}}</td>
                                    <td>{{order.statusMap[item.status]}}</td>
                                    <td class="nowrap">
                                        <button class="btn btn-sm btn-outline green" @click="openOrderEdit(item)">编辑</button>
                                    </td>
                                </tr>
                                <tr v-if="!order.list.length" style="text-align: center">
                                    <td colspan="5">没有查询到相关数据！</td>
                                </tr>
                            </tbody>
                        </table>
                    </data-table>

                    <!-- <paginator :page-size="8" :count="order.count" @change="changeOrderPage"></paginator> -->
                </div>

            </div>
        </div>
    </div>

    <!--编辑订单-->
    <edit
        :edit="true"
        :order="order.current"
        :product-list="product.list"
        :employee-list="employeeList"
        :status-map="order.statusMap"
        :show.sync="modal.edit"
        v-if="modal.edit"
        @ok="updateOrder">
    </edit>

    <!--创建订单-->
    <edit
        :edit="false"
        :product-list="product.list"
        :employee-list="employeeList"
        :status-map="order.statusMap"
        :show.sync="modal.add"
        v-if="modal.add"
        @ok="addOrder">
    </edit>
</div>
</template>