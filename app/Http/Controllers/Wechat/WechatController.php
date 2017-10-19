<?php

namespace App\Http\Controllers\Wechat;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WechatController extends Controller
{
    public function serve(){
        $wechat = app('wechat');
        $wechat->server->setMessageHandler(function($message){
            return "https://www.laravist.com/";
        });
        return $wechat->server->serve();
    }
}
