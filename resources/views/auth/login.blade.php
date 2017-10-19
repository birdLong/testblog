
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
     <meta name="csrf-token" content="{{ csrf_token() }}">
     <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <title>帐号注册 - 蚂蜂窝</title>
    <link href="css/reg.css" rel="stylesheet" type="text/css"/>
    <script language="javascript" src="js/jquery.min.js" type="text/javascript"></script>

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
                <div class="login-box" id="_j_login_box">
                    <div class="inner">
                        <form action="{{ route('register') }}" method="post" id="_j_signup_form">
                                                                        {{ csrf_field() }} 
                                                                       
                            <input type="hidden" name="token" value="60a7c80e1515102a4a0dee45f9bf85ad" />
                            <div class="form-field{{ $errors->has('name') ? ' has-error' : '' }}">
                                <input name="name" type="text" placeholder="您的用户名" 
                                       value="{{ old('name') }}" required />
                                                              
                                                                  @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                            
                            
                             <div class="form-field{{ $errors->has('email') ? ' has-error' : '' }}">
                                <input id="email" name="email"  placeholder="您的邮箱" 
                                       type="email" class="form-control" name="email" value="{{ old('email') }}" required/>
                                                               
                                                               @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            
                              <div class="form-field{{ $errors->has('password') ? ' has-error' : '' }}">
                          

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" placeholder="输入密码"  name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                            
                            
                              <div class="form-field">
                          

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control"  placeholder="再次输入密码" name="password_confirmation" required>
                            </div>
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
                <!-- 
                  <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </form>
                 -->
                <div class="signup-box" id="_j_signup_box"> 
                    <div class="inner">
                                                                        <form action="{{ route('login') }}" method="post" id="_j_login_form">
                                                                            {{ csrf_field() }} 
                            <div class="form-field{{ $errors->has('email') ? ' has-error' : '' }}">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="请输入邮箱" required autofocus />
                                 @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                                <div class="err-tip"></div>
                            </div>
                            <div class="form-field{{ $errors->has('password') ? ' has-error' : '' }}">
                                <input id="password" type="password" class="form-control" name="password" placeholder="请输入密码" required/>
                                   @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
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
<script language="javascript" src="js/reg.jquery.js" type="text/javascript"></script>


    <script language="javascript" src="js/reg.from.js" type="text/javascript"></script>


</body>
</html>
