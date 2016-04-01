<script>
import mixinChart from 'mixins/chart';

export default {
    mixins: [ mixinChart ],
    methods: {
        getOptions (data) {
            let options = {
                color: ['#2ec7c9'],
                grid: {
                    x: 60,
                    y: 25,
                    x2: 40,
                    y2: 30
                },
                tooltip : {
                    trigger: 'axis'
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : data.map(item => {
                            let date = new Date(item.date);
                            return date.getFullYear() + '-' + (date.getMonth() - 0 + 1) + '-' + date.getDate();
                        })
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'订单数量',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: data.map(item => item.count)
                    }
                ]
            };

            return options;
        }
    }
};
</script>

<template>
<div class="row">
    <div class="col-md-12">
        <div class="portlet light bordered">

            <div class="portlet-title">
                <div class="caption">
                    <i class="icon-social-dribbble font-blue"></i>
                    <span class="caption-subject font-blue bold">30天内订单数量趋势 ORDER TREND</span>
                </div>
            </div>

            <div class="portlet-body">
                <div class="chart-container"></div>
            </div>

        </div>
    </div>
</div>
</template>

<style scoped>
    .chart-container {
        width: 100%;
        height: 220px;
    }
</style>