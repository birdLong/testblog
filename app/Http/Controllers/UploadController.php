<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class UploadController extends Controller
{
   
   
    public function upload(Request $request)
    {


          if($request->isMethod("post")){
//	dd($request);
               $file=$request->file('source');
               $f2=$request->get('source');
               var_dump($f2);
               var_dump($file);
             if($file->isValid()){

             	$originalName=$file->getClientOriginalName();
             	//后缀名EXT
             	$ext=$file->getClientOriginalExtension();
             	$type=$file->getClientMimeType();
             	$realPath=$file->getRealPath();
   
             	$filename= date('Y-m-d-H-i-s').'-'.uniqid().'.'.$ext;
             	$size=filesize($realPath);
                if($ext=='mp4'){  //20971520字节等于20MB 用这个来判断就可以了
                             if($size>20971520){
                                     
                             	echo "视频文件最大为20MB";
                             }else{

                     $bool = Storage::disk('public')->put($filename,file_get_contents($realPath));
                                 echo "上传成功";
                             }


                     
                     // $size = filesize($realPath); 
                      var_dump($size);

                    
                }else{
                      echo "请上传MP4文件视频";
                      var_dump($ext);
                }
             	

             	



             }

              
               exit;
          }
 //var_dump($_FILES);

 return view('upload');		


 
          
           
      //  exit;

     //  return 'aaaa';
    }
}
