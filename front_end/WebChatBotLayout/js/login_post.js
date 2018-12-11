$('#LogIn').click((event) => {
    var username = document.getElementById('username_log').value;
    var password = document.getElementById('password_log').value;
    event.preventDefault()
    $.ajax(/* need modify*/  'certainCode.js', {
        method: "post",
        data: { 'option': 'login', 'username': username, 'password': password },
        success: function (data) {
            $(".ui.error.message").html(data);
        }
    })
})