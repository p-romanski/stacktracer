var runTracer = function (javaFilePattern) {
    var spanDecorator = function (match) {
        return '<span class="stack-tracer">' + match + '</span>';
    };

    $("*").decorateText(javaFilePattern, spanDecorator);
    $("span.stack-tracer").click(function (e) {
        self.port.emit("clicked", $(this).text());
    });
};

self.port.on('filePatternSet', function (filePattern) {
    runTracer(filePattern);
});

