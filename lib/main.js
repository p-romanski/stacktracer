var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var clipboard = require("sdk/clipboard");

var worker = pageMod.PageMod({
    include: "*.google.pl",
    contentScriptFile: [
        data.url('jquery-2.1.1.min.js'),
        data.url('copy.js')
    ],
    contentStyleFile: [
        data.url('copy.css')
    ],
    onAttach: function (worker) {
        worker.port.on("clicked", function (text) {
            clipboard.set(text);
            console.log('item copied to clipboard');
        });
    }
});
