var button = document.getElementById('add');

button.addEventListener('click', function() {
    var userInput = document.getElementById('todo').value;
    
    if(userInput == '') {
        alert('type something')
    }
    else {
    var lists = document.createElement('li');
    var text = document.createTextNode(userInput);
    var orderList = document.getElementById('orderedlist');
    orderList.append(lists);
    lists.append(text);
    }

    lists.setAttribute('id',Math.floor(Math.random() * 10));

lists.addEventListener('dblclick', function() {
    var id = lists.getAttribute('id');

    var removed = document.getElementById(id)

    removed.remove();


    var done = document.getElementById('notdone');
    
    done.appendChild(removed);



})

})