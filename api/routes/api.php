<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {
    Route::post('signin', 'SignInController');
    Route::post('signout', 'SignOutController');

    Route::get('me', 'MeController');
    Route::get('profile/{user_id}', 'MeController@getprofile');
    Route::post('signup', 'ProfileController@store');
    Route::get('check/{email}', 'ProfileController@isemailexist');
});

Route::group(['prefix' => 'post'], function(){
    Route::post('upload', 'PostController@saveimages');
});
Route::get('get_all', 'PostController@getAllPosts');
Route::get('profile/{slug}', 'ProfileController@showProfile');
// Route::put('upload', 'PostController@store');
