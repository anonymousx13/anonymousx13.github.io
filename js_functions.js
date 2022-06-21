BOT_TOKEN = '5552326282:AAHDk4hNElVZI4QAoxa9RlZICvZo_QwWZww'
BOT_NAME = 'inzera_bot'
GROUP_ID = '-685273008'

function minus_problem_btn_handler(e) {
    var counter_div = document.getElementById("problems_counter");
    var txt = counter_div.textContent || counter_div.innerText;

    if (txt == 0)
    {
        alert('стыдно уже не будет!.');
        return
    }

    if (txt == 1) {
        msg = 'позорных проблем не осталось. дип!!'
    } else {
        msg = `были ${txt} позорные проблемы! Только ${txt - 1} позорные проблемы остались и всё!!`
    }

    alert(msg);
    counter_div.textContent = txt - 1

}

function send_msg(text) {
    var message = text
    var url = `https:/` + `/api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${GROUP_ID}&text=${message}`
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
}

document.addEventListener("DOMContentLoaded", function() {
    //send_msg()
   btn = document.getElementById("minus_problem_btn");

   if (btn === null) {
        return;
   }

   btn.addEventListener("click", minus_problem_btn_handler);
});
