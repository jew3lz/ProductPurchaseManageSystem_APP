const [ get, post ] = [$.get, $.post];

$.get = function (...arg) {
    let defer = $.Deferred();
    let request = get(...arg);

    request.done((result) => {
        if (result.code !== 200) {
            defer.reject(result.code, result.message);
            Toastr.error(result.message, 'Error');
            return;
        }

        defer.resolve(result);
    });

    request.fail((xhr, message) => {
        defer.reject(xhr.code, message);
    });

    return defer.promise();
};

$.postJSON = function (url, params) {
    return $.ajax({
        url: url,
        data: JSON.stringify(params),
        type: 'POST',
        contentType: 'application/json;charset=utf-8'
    });
};