/**
 * Created with JetBrains RubyMine.
 * User: natalie
 * Date: 12/18/14
 * Time: 11:31 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){
    $(".hidden_form").hide();

    $(".reply_button").click(function(){
        $(this).next().toggle();
    });
});