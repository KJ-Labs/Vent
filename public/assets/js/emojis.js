function displayEmojiValue() {
    var ele = document.getElementsByName('smiley');

    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = ele[i].value;

                console.log(result)
    }
}

