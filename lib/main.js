var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var clipboard = require("sdk/clipboard");

pageMod.PageMod({
    include: "*.jenkins-ci.org",
    contentScriptFile: [
        data.url('jquery-2.1.1.min.js'),
        data.url('jquery-text_decorator.js'),
        data.url('stacktracer.js')
    ],
    contentStyleFile: [
        data.url('stacktracer.css')
    ],
    onAttach: function (worker) {
        worker.port.on("clicked", function (text) {
            clipboard.set(text);
        });
    }
});
