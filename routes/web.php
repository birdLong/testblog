<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
//Route::get('/', function () {
//    return view('welcome');
//});
Route::group(['namespace'=>'Wechat','prefix'=>'wechat'],function (){
include_once 'Wechat.php';
});

Route::any('/', 'Boke\AllbokeController@welcome');
Route::any('/sky', function () {
    return view('myadmin/sky');
});

Route::any('/bokeadd', function () {
    return view('myadmin.bokeAdd');
});

//Route::any('/allboke', function () {
//    return view('myadmin/allboke');
//});

Route::get('allboke', 'Boke\AllbokeController@index');
Route::post('/tobokeadd', 'Boke\AllbokeController@store');
Route::post('/bokedelete', 'Boke\AllbokeController@destroy'); 
Route::post('/bokeupdate', 'Boke\AllbokeController@update');
Route::any('/tobokeupdate/{id}', 'Boke\AllbokeController@toupdate');
Route::any('/bokesdelete', 'Boke\AllbokeController@deletes');
Route::any('/r2', 'Boke\AllbokeController@reg');
//Route::post('bokedelete/{id}', function ($id) {
//    return 'User '.$id;
//});
//Auth::routes();tobokeadd

//Route::any('/home', 'HomeController@index');

//Auth::routes();

Route::any('cao', 'UploadController@upload');


//Route::resource('tobokeadd', 'Boke\AllbokeController');



Auth::routes();

Route::get('/home', 'HomeController@index');
