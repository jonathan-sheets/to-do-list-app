function newItem() {
    // add new items to list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("This field is required!");
    } else {
        $('#list').append(li);
    };

    // enabling item crossout with double click
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    // create delete list item button
    let deleteButton = $('<deleteButton></deleteButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    // adding delete class to list item so item can be hidden with css
    deleteButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass('delete');
    };

    // enable items to be reordered by dragging
    $('#list').sortable();
};

// clears form field after add button is clicked
function clearField() {
    document.getElementById('input').value = "";
};
