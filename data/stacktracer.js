$(document).ready(function () {
    var spanDecorator = function (match) {
        return '<span class="stack-tracer">' + match + '</span>';
    };
    var javaFileRegex = "[a-z0-9_]+[.]java[:][0-9]+";

    $("*").decorateText(javaFileRegex, spanDecorator);
    $("span.stack-tracer").click(function (e) {
        self.port.emit("clicked", $(this).text());
    });
});
