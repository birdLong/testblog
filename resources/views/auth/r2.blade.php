
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
     <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>帐号注册 - 蚂蜂窝</title>
    <link href="https://css.mafengwo.net/css/login/login_v2.css?1493111576" rel="stylesheet" type="text/css"/>
<script language="javascript" src="https://js.mafengwo.net/js/cv/js+global+json2:js+m.statistics^YFQ^1494815726.js" type="text/javascript"></script>

      <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>

    <div class="wrapper">
        <div class="container">
            <a href="" title="返回首页" class="logo">蚂蜂窝</a>
            <div class="signup-forms">
                <div class="signup-box" id="_j_signup_box">
                    <div class="inner">
                                                                        <form action=action="{{ route('register') }}" method="post" id="_j_signup_form">
                                                                        {{ csrf_field() }} 
                                                                       
                            <input type="hidden" name="token" value="60a7c80e1515102a4a0dee45f9bf85ad" />
                            <div class="form-field">
                                <input name="passport" type="text" placeholder="您的手机号码" autocomplete="off" data-type="mobile"
                                       data-verification-name="手机号码" class="verification[required,maxSize[50],custom[mobile]]" value="" />
                                                                <div class="err-tip"></div>
                            </div>
                            
                            <div class="submit-btn">
                                <button type="submit">立即注册</button>
                            </div>
                        </form>
                        <div class="agreement">
                            注册视为同意<a target="_blank" href="http://www.mafengwo.cn/s/agreement.html">《蚂蜂窝用户使用协议》</a>
                        </div>
                        <div class="connect">
    <p class="hd">用合作网站账户直接登录</p>
    <div class="bd">
        <a href="/weibo" class="weibo"><i></i>新浪微博</a>
        <a href="/qq" class="qq"><i></i>QQ</a>
        <a href="/wechat" class="weixin"><i></i>微信</a>
        <div class="clear"></div>
    </div>
</div>                    </div>
                    <div class="bottom-link">
                        已经注册?<a href="#">马上登录</a>
                    </div>
                </div>
                <div class="login-box" id="_j_login_box">
                    <div class="inner">
                                                                        <form action="/login/" method="post" id="_j_login_form">
                            <div class="form-field">
                                <input name="passport" type="text" placeholder="您的邮箱/手机号" autocomplete="off"
                                       data-verification-name="帐号" class="verification[required,maxSize[50],funcCall[checkShowCode]]" value="" />
                                <div class="err-tip"></div>
                            </div>
                            <div class="form-field">
                                <input name="password" type="password" placeholder="您的密码" autocomplete="off"
                                       data-verification-name="密码" class="verification[required,minSize[4],maxSize[50]]" />
                                <div class="err-tip"></div>
                            </div>
                            <div class="form-field hide">
                                <div class="clearfix">
                                    <a href="#" class="vcode-send verify-code-send"><img data-src="/api.php/verifyCode" src="/api.php/verifyCode" /></a>
                                    <input name="code" type="text" placeholder="验证码" autocomplete="off"
                                           data-verification-name="验证码" class="vcode-input verification[funcCall[checkCode]]">
                                </div>
                                <div class="err-tip clearfix"></div>
                            </div>
                            <div class="form-link"><a href="/forget">忘记密码</a></div>
                            <div class="submit-btn">
                                <button>登 录</button>
                            </div>
                        </form>
                        <div class="connect">
    <p class="hd">用合作网站账户直接登录</p>
    <div class="bd">
        <a href="/weibo" class="weibo"><i></i>新浪微博</a>
        <a href="/qq" class="qq"><i></i>QQ</a>
        <a href="/wechat" class="weixin"><i></i>微信</a>
        <div class="clear"></div>
    </div>
</div>                    </div>
                    <div class="bottom-link">
                        还没有帐号?<a href="#">马上注册</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script type="text/javascript">
    window['PARTNER_AUTH_PLAT'] = '';
</script>
<script language="javascript" src="https://js.mafengwo.net/js/cv/js+jquery-1.8.1.min:js+plugins+jquery.placeholder:passport+js+app:passport+js+partner^a1A^1493111579.js" type="text/javascript"></script>


    <script language="javascript" src="https://js.mafengwo.net/js/cv/js+mfw.verification:passport+js+form^YFM^1493111579.js" type="text/javascript"></script>


</body>
</html>
