<?php

Route::group([

    'middleware' => 'api',

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    // Route::get('me', 'AuthController@me'); // no esta autorizado si esta aqui adentro
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');

});

  Route::get('me', 'AuthController@me');
  Route::get('teachers', 'TeacherController@index');