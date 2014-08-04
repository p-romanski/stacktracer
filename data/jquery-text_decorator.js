$(document).ready(function () {
    jQuery.fn.decorateText = function (regexString, decorator) {
        var matchRegex = new RegExp(regexString, "i");
        var replaceRegex = new RegExp(regexString, "gi");

        return this.each(function () {
            $(this).contents().filter(function () {
                return this.nodeType == 3 && matchRegex.test(this.nodeValue);
            }).replaceWith(function () {
                return (this.nodeValue || "").replace(replaceRegex, function (match) {
                    return decorator(match);
                });
            });
        });
    };
});