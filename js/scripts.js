function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("This field is required!");
    } else {
        $('#list').append(li);
    };

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    let deleteButton = $('<deleteButton></deleteButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    deleteButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass('delete');
    };

    $('#list').sortable();
};
