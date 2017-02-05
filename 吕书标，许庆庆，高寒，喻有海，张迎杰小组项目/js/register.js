$(function() {

    var register = {
        init: function() {
            this.checkPhone();
            this.checkPwd();
            this.dealverifCode();
            this.dealBtnClick();
        },
        checkPhone: function() {
            var re = /^1[34578]\d{9}$/;
            $('#mobileNum').blur(function() {
                var phone = $('#mobileNum').val();
                if (!re.test(phone)) {
                    $('#telline').find('.invalid_message').show();
                }
                if (re.test(phone)) {
                    $('#telline').find('.invalid_message').hide();
                }
            });
        },
        checkPwd: function() {
            $('#pwdOnce').blur(function() {
                var re = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,18}$/;
                var pwdOnceVal = $('#pwdOnce').val();
                if (!re.test(pwdOnceVal)) {
                    $('#pwdO').find('.invalid_message').show();
                }
                if (re.test(pwdOnceVal)) {
                    $('#pwdO').find('.invalid_message').hide();
                }
            });
            $('#pwdTwice').blur(function() {
                var pwd1 = $('#pwdOnce').val();
                var pwd2 = $('#pwdTwice').val();
                if (pwd1 == pwd2) {
                    $('#pwdT').find('.invalid_message').hide();
                } else {
                    $('#pwdT').find('.invalid_message').show();
                }
            })
        },
        dealverifCode: function() {
            $('#verifCode').blur(function() {
                var verifCodeVal = $('#verifCode').val();
                if (verifCodeVal == 'wvog') {
                    $('#vCode').find('.invalid_message').hide();
                } else {
                    $('#vCode').find('.invalid_message').show();
                }
            })

        },
        dealBtnClick: function() {
            $('.register_submit_btn').click(function() {
                var phoneRe = /^1[34578]\d{9}$/;
                var pwdRe = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,18}$/;
                var phoneVal = $('#mobileNum').val(),
                    pwd1 = $('#pwdOnce').val(),
                    pwd2 = $('#pwdTwice').val(),
                    verifCodeVal = $('#verifCode').val();
                if (phoneRe.test(phoneVal) && pwdRe.test(pwd1) && pwd1 == pwd2 && verifCodeVal == 'wvog') {
                    alert('注册成功');
                } else {
                    alert('服务器异常!!');
                }
            })

        }
    }
    register.init();
})
