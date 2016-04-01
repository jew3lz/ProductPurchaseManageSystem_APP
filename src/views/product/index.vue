<script>
// components
import Breadcrumb from 'components/Breadcrumb';
import DataTable from 'vue-bootstrap-table';
import Modal from 'vue-bootstrap-modal';
import Edit from './Edit';
import Bar from './Bar';

// directives
import loading from 'vue-loading';

// util
import api from 'common/api';

export default {
    components: { Breadcrumb, Bar, DataTable, Modal, Edit },
    directives: { loading },
    name: 'Product',
    data () {
        return {
            breadcrumbs: [{
                title: '产品管理'
            }],

            product: {
                list: [],
                count: 1,
                current: {},
                loading: false,
                pageNum: 1,
                pageSize: 10
            },

            modal: {
                add: false,
                edit: false,
                remove: false
            }
        }
    },
    created () {
        this.fetchProductList();
    },
    methods: {
        openProductEdit (product) {
            this.product.current = product;
            this.modal.edit = true;
        },
        openProductAdd () {
            this.modal.add = true;
        },
        openProductRemove (product) {
            this.product.current = product;
            this.modal.remove = true;
        },
        changeProductPage (num) {
            this.product.pageNum = num;
            this.fetchProductList();
        },
        addProduct (product) {
            return $.get(api.product.insert, product).then(() => {
                this.product.list.unshift(product);
                this.product.count += 1;
                //this.fetchOrderList();

                this.modal.add = false;
                Toastr.success('新增成功', 'Success');
            });
        },
        updateProduct (product) {
            return $.get(api.product.update, product).then(() => {
                let index = this.product.list.indexOf(this.product.current);
                this.product.list.$set(index, product);

                this.modal.edit = false;
                Toastr.success('编辑成功', 'Success');
            });
        },
        removeProduct () {
            let params = {
                id: this.product.current.id
            };

            return $.get(api.product.remove, params).then(() => {
                let index = this.product.list.indexOf(this.product.current);
                this.product.list.splice(index, 1);

                this.modal.remove = false;
                Toastr.success('删除成功', 'Success');
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
        产品管理 <small>Product Manage</small>
    </h3>

    <bar :data="product.list" :loading="loading"></bar>

    <div class="row">
        <div class="col-md-12">
            <div class="portlet light bordered">

                <div class="portlet-title">
                    <div class="caption">
                        <i class="icon-social-dribbble font-blue"></i>
                        <span class="caption-subject font-blue bold">产品列表 PRODUCT LIST</span>
                    </div>
                    <div class="actions">
                        <button class="btn btn-outline blue" @click="openProductAdd">创建产品</button>
                    </div>
                </div>

                <div class="portlet-body">
                    <data-table v-loading="loading">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>名称</th>
                                    <th>价格</th>
                                    <th>数量</th>
                                    <th>用户</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in product.list">
                                    <td>{{item.id}}</td>
                                    <td>{{item.name}}</td>
                                    <td>{{item.price}}</td>
                                    <td>{{item.count}}</td>
                                    <td>{{item.usage}}</td>
                                    <td class="nowrap">
                                        <button class="btn btn-sm btn-outline green" @click="openProductEdit(item)">编辑</button>
                                        <button class="btn btn-sm btn-outline red" @click="openProductRemove(item)">删除</button>
                                    </td>
                                </tr>
                                <tr v-if="!product.list.length" style="text-align: center">
                                    <td colspan="6">没有查询到相关数据！</td>
                                </tr>
                            </tbody>
                        </table>
                    </data-table>

                    <!-- <paginator :page-size="8" :count="product.count" @change="changeProductPage"></paginator> -->
                </div>

            </div>
        </div>
    </div>

    <!--编辑产品-->
    <edit
        :edit="true"
        :product="product.current"
        :show.sync="modal.edit"
        v-if="modal.edit"
        @ok="updateProduct">
    </edit>

    <!--创建产品-->
    <edit
        :edit="false"
        :show.sync="modal.add"
        v-if="modal.add"
        @ok="addProduct">
    </edit>

    <modal title="删除产品" text="是否删除该产品？" :show.sync="modal.remove" v-if="modal.remove" @ok="removeProduct"></modal>
</div>
</template>