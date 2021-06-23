
function addCard() 
{//add next card to textarea filecontent with | separator
    populator.q.value = populator.q.value.trim().replace(/[\n\r]/g, '~~').replace(/[\|]/g, ':');
    populator.a.value = populator.a.value.trim().replace(/[\n\r]/g, '~~').replace(/[\|]/g, ':');

    //document.getElementById("file").innerHTML = populator.q.value + "|" + populator.a.value + "\r\n" + document.getElementById("file").innerHTML  ;
    document.getElementById("filecontent").value = populator.q.value + "|" + populator.a.value + "\r\n" + document.getElementById("filecontent").value;
    populator.q.value = "";
    populator.a.value = "";
}
function addProperties() 
{//add one line with quiz properties
    var quizname = populator_prop.quizname.value.trim().replace(/[\|]/g, ':');
    var qfont = populator_prop.qfont.value.trim();
    var afont = populator_prop.afont.value.trim();
    var qlang = populator_prop.qlang.value.trim().replace(/[\|]/g, ':');
    var alang = populator_prop.alang.value.trim().replace(/[\|]/g, ':');
    var line = "quiz.properties|name=" + quizname + "~~q_lang=" + qlang + "~~a_lang=" + alang + "~~fontsize_q=" + qfont + "~~fontsize_a=" + afont;
    //document.getElementById("file").innerHTML = line + "\r\n" + document.getElementById("file").innerHTML  ;
    document.getElementById("filecontent").value = line + "\r\n" + document.getElementById("filecontent").value;
    document.getElementById("props").disabled = true;
}
// var clip = function (el) 
// {
//     var range = document.createRange();
//     range.selectNodeContents(el);
//     var sel = window.getSelection();
//     sel.removeAllRanges();
//     sel.addRange(range);
// };
function copyFileToClipboard() 
{//copy texteare content to clipboard
    //var contentPre = document.getElementById("file");
    //clip(document.getElementById("file"));
    document.getElementById("filecontent").select();
    document.execCommand("copy");
}