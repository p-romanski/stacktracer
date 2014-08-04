$(document).ready(function () {
    jQuery.fn.decorateText = function (regex, decorator) {
        return this.each(function () {
            $(this).contents().filter(function () {
                return this.nodeType == 3 && regex.test(this.nodeValue);
            }).replaceWith(function () {
                return (this.nodeValue || "").replace(regex, function (match) {
                    return decorator(match);
                });
            });
        });
    };
});