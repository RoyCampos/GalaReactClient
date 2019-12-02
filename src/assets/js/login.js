(function(d,w){
    var user = d.getElementById('input-email');
    var password = d.getElementById('input-pass');
    //Mostrar mensaje
    var push_message = function(message,me){
        var f = d.createElement('div');
        var s = d.createElement('span');
        var toPush = message;
        console.log(toPush);
    }

    // Peticion al Server AG JAVA
    var call_java = function(){
        var http = new XMLHttpRequest();
        var url = 'localhost/'
        http.open('POST',url ,true);
        http.setRequestHeader('Content-Type', 'application/json');
        http.onreadystatechange = function(){
            if(http.readyState == 4 && http.status == 200) {
                var response =JSON.parse(http.responseText);
                //for( var k in response.output.generic){
                //    var item =response.output.generic[k];
                //    d.getElementById('writing').classList.remove('on')
                //    push_message(item.text);
                //
                console.log(response);
                }
            }
        }
    }
    
)(document, window)