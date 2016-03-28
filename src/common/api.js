export default {
    order: {
        /*list: 'api/proPur/order/list',
        insert: 'api/proPur/order/insert',
        update: 'api/proPur/order/update',*/
        //list: 'api/orders',
        insert: 'proPur/order/insert',
        update: 'proPur/order/update',
        remove: 'proPur/order/remove',
        list: 'proPur/order/list'
    },
    product: {
        list: 'proPur/product/list',
        update: 'proPur/product/update',
        remove: 'proPur/product/delete',
        insert: 'proPur/product/insert',
    },
    employee: {
        list: 'proPur/order/listEmployee'
    }
};