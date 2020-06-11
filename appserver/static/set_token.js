require([
    "splunkjs/mvc",
    "splunkjs/mvc/simplexml/ready!"
], function(mvc) {

    // Get your div
    var my_div = $("#mydivId");

    // Respond to clicks
    my_div.on("click", function(e) {
        var tokens = mvc.Components.get("default");
        tokens.set("mytoken", "cheese");
    });

});