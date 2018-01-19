$(function(){
    $("#header-top-agent-authorization-form").dialog({
        autoOpen: false
    });
    $("#header-top-agent-authorization").click(function(){
        $("#header-top-agent-authorization-form").dialog("open");
    });
});

$('.header-top-agent-authorization-form-registration').bind('click', function() {
    $(this).html("Are you joking?");
});

