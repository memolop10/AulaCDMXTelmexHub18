function submitlogin (e) {
    e.preventDefault()
    let formData = $("#register-form").serialize()
    console.log(formData)
    $.post('/register', formData, function (res) {
        alert(res)
    })
    return false
}