<script>
import mixinChart from 'mixins/chart';

export default {
    mixins: [ mixinChart ],
    methods: {
        getOptions (data) {
            let options = {
                color: ['#2ec7c9'],
                tooltip : {
                    trigger: 'axis'
                },
                xAxis : [{
                    type : 'category',
                    data : data.map(item => item.name)
                }],
                yAxis : [{
                    type : 'value'
                }],
                grid: {
                    x: 40,
                    y: 25,
                    x2: 20,
                    y2: 30
                },
                series : [{
                    name:'库存',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            opacity: 0.8
                        }
                    },
                    data: data.map(item => item.count)
                }]
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
                    <span class="caption-subject font-blue bold">产品概览 PRODUCT OVERVIEW</span>
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