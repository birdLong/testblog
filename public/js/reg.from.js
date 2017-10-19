
$(function() {
    var d = function() {
        $('[type="text"],[type="password"]', ".signup-forms").val("");
        $(".err-tip", ".signup-forms").html("").hide()
    };
    var c = function() {
        $(".alert").remove()
    };
    var e = function() {
        d();
        c();
        $(".signup-forms").toggleClass("flip")
    };
    var a = function() {
        d();
        c();
        $(".signup-forms").toggleClass("flip")
    };
    var f = function() {
        d();
        c();
        $(".signup-forms").toggleClass("flip")
    };
    var g = function() {
        d();
        c();
        $(".signup-forms").toggleClass("flip")
    };
    $("#_j_bind_box").delegate(".bottom-link a", "click",
    function(h) {
        h.preventDefault();
        a()
    });
    $("#_j_complete_box").delegate(".bottom-link a", "click",
    function(h) {
        h.preventDefault();
        e()
    });
    $("#_j_login_box").delegate(".bottom-link a", "click",
    function(h) {
        h.preventDefault();
        f()
    });
    $("#_j_signup_box").delegate(".bottom-link a", "click",
    function(h) {
        h.preventDefault();
        g()
    });
   

});