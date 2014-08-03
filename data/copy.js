$(document).ready(function () {
    jQuery.fn.highlight = function (str, replacer) {
        var regex = new RegExp(str, "gi");
        return this.each(function () {
            $(this).contents().filter(function () {
                return this.nodeType == 3 && regex.test(this.nodeValue);
            }).replaceWith(function () {
                return (this.nodeValue || "").replace(regex, function (match) {
                    return replacer(match);
                });
            });
        });
    };

    var linkReplacer = function (match) {
        return '<a href="#" class="stack">' + match + '</a>';
    };

    $("*").highlight("google", linkReplacer);
    $("a.stack").click(function () {
        self.port.emit("clicked", $(this).text());
    })
});