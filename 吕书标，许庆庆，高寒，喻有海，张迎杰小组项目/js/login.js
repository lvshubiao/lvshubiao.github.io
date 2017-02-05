$(function() {
    $('#account_pop').blur(function(){
        var re = /^1[34578]\d{9}$/;
        if (!re.test($('#account_pop').val())) {
            $('#warnTip').show();
        }else{
            $('#warnTip').hide();
        }
    });
    $('#actpwd_pop').blur(function(){
        if ($('#actpwd_pop').val().length < 6) {
            alert('密码格式不正确');
            return;
        }
    });
    $('#sign_in_btn_pop').click(function(){
        var phoneVal = $('#account_pop').val(),
            pwdVal = $('#actpwd_pop').val();
        var re = /^1[34578]\d{9}$/;
        if (re.test(phoneVal) && pwdVal.length >= 6) {
            alert('登陆成功');
        }
    })
})
