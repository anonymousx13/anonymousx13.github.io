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