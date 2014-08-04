$(document).ready(function () {
    var stackSpanDecorator = function (match) {
        return '<span class="stack-tracer">' + match + '</span>';
    };
    var javaFileRegex = "[a-z]+[.]java[:][0-9]+";

    $("*").decorateText(javaFileRegex, stackSpanDecorator);
    $("span.stack-tracer").click(function (e) {
        self.port.emit("clicked", $(this).text());
    });
});
