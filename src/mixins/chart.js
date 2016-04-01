// 图表 mixins

export default {
    props: ['data', 'loading'],
    data () {
        return {
            // 主题
            theme: 'default',
            // chart dom
            selector: '.chart-container'
        };
    },
    computed: {
        hasData () {
            if (!this.data) {
                return false;
            }

            // 空数组
            if (this.data instanceof Array && !this.data.length) {
                return false;
            }

            // 空对象
            if (typeof this.data === 'object' && !Object.keys(this.data).length) {
                return false;
            }

            return true;
        }
    },
    ready () {
        this.initChart();
        this.toggleLoading(true);

        window.addEventListener('resize', this.resize);
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.resize);
    },
    methods: {
        // 初始化echart
        initChart () {
            let dom = this.$el.querySelector(this.selector);
            this.echart = window.echarts.init(dom, this.theme);
        },
        // 渲染图表
        render (options = this.options) {
            if (options == null) {
                return;
            }

            this.initChart();
            this.echart.setOption(options);
        },
        // window.resize
        resize () {
            window.clearTimeout(this.resizeTimer);
            this.resizeTimer = window.setTimeout(() => {
                this.echart.resize();
            }, 200);
        },
        // 显示或隐藏loading
        toggleLoading (value) {
            this.echart[value ? 'showLoading' : 'hideLoading']({
                effect: 'whirling'
            });
        },
        // 获取echart图表配置
        getOptions () {
            console.log('chart mixins: 组件需要重写getOptions()方法');
        },
        /**
         * 获取y轴范围
         * @param  {[type]} data     数据
         * @param  {Number} diff     上下差值
         * @param  {Number} interval 分隔段数
         */
        getYaxisRange (data/*, diff = 30, intervalCount = 5*/) {
            let min = Math.min.apply(null, data) - 30,
                max = Math.max.apply(null, data) + 30;

            min = +min.toFixed(0);
            max = +max.toFixed(0);

            // 将上限加到可以被5整除
            let remainder = max % 5;
            max = max + (5 - remainder);

            // 将下线减到可以被5整除
            if (min < 0) {
                min = 0;
            } else {
                remainder = min % 5;
                min = min - remainder;
            }

            let interval = (max - min) / 5;

            return { min, max, interval };
        }
    },
    watch: {
        // 数据变动时重新渲染图表
        data: {
            deep: true,
            handler (value) {
                this.options = this.getOptions(value);
                this.render(this.options);
            }
        },
        loading (value) {
            this.toggleLoading(value);
        }
    }
};