export default function (Vue) {
    Vue.plain = function (data) {
        if (data === null || typeof data === 'undefined') {
            return data;
        }

        try {
            data = JSON.parse(JSON.stringify(data));
            return data;
        } catch (e) {
            throw 'vue-plain: Parse failed, make sure your parameter can be JSON.stringify';
        }
    };
}