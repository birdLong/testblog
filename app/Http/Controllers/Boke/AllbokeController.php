<?php

namespace App\Http\Controllers;
namespace App\Http\Controllers\Boke;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Boke;

use Illuminate\Support\Facades\Storage;
//use App\Task;
//use Intervention\Image\ImageManagerStatic as Image;



class AllbokeController extends Controller
{
	
	//登录之后的主页
    public function index() {
        return view('myadmin/allboke', [
            'tasks' => Boke::all()
           // 'tasks' =>Boke::find(73)
        ]);
//echo "ca";
    }
    //注册页面
  public function reg() {
        return view('myadmin/r2');
//echo "ca";
    }
    
     //前端主页
 public function welcome() {
        return view('welcome', [
            'bokes' => Boke::all()
           // 'tasks' =>Boke::find(73)
        ]);
//echo "ca";
    }
    //注册逻辑
    public function store(Request $request) {
       $file=$request->file('source');
       if($file->isValid()){
      
       	
       	$originalName=$file->getClientOriginalName();
             	//后缀名EXT
             	$ext=$file->getClientOriginalExtension();
             	$type=$file->getClientMimeType();
             	$realPath=$file->getRealPath();

             	$filename= date('Y-m-d-H-i-s').'-'.uniqid().'.'.$ext;
             	$opath="http://H6.ten10.com.cn/app/uploads/";
             //	var_dump($filename);
             	$filepath=$opath.$filename;
             	$size=filesize($realPath);
             	 	
     
            // 	$img = Image::make($file)->resize(300, 200);
             //	var_dump($img); 
             	
             	
                     $bool = Storage::disk('uploads')->put($filename,file_get_contents($realPath));
        
       }
  

     
        $boke = new Boke();
        $boke->title = $request->get('title');
        $boke->content = $request->get('content');
         $boke->pic_path = $filepath;
        $boke->save();
        return view('myadmin/allboke', [
            'tasks' => Boke::all()
        ]);
    }
    //删除逻辑
    public function destroy(Request $request) {
    	$id=$request->get('id');
        $task = Boke::find($id);
        $task->delete();
        return response()->json(['success']);
     // return $id;
    }
//    public function show($id) {
//        $task = Task::find($id);
//        return $task;
//    }

    //更新逻辑
    public function update(Request $request) {
 $file=$request->file('source');
  $id2 = $request->get('bokeid');
           $boke = Boke::find($id2);
         $boke->title = $request->get('title');
        $boke->content = $request->get('content');

       if($file==NULL){
       	
       	
       }else{
       	 	$originalName=$file->getClientOriginalName();
             	//后缀名EXT
             	$ext=$file->getClientOriginalExtension();
             	$type=$file->getClientMimeType();
             	$realPath=$file->getRealPath();

             	$filename= date('Y-m-d-H-i-s').'-'.uniqid().'.'.$ext;
             	$opath="http://H6.ten10.com.cn/app/uploads/";
          
             	$filepath=$opath.$filename;
             	$size=filesize($realPath);
             	 	
         

                     $bool = Storage::disk('uploads')->put($filename,file_get_contents($realPath));
         
       	
         $boke->pic_path = $filepath;
       }
$boke->save();

//         $boke->pic_path = $filepath2;
//        $boke->save();
//
//          // dd($boke);
     return view('myadmin/allboke', [
           'tasks' => Boke::all()
        ]);
        
    }
     //更新逻辑前缀
   public function toupdate($id) {
   	$boke = Boke::find($id);

 return view('myadmin/bokeUpdate', [
              'boke' => $boke
 
 ]);
//return $boke;
    }
}