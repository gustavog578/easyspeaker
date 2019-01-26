<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class TeacherController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
        $users = DB::table('users')
                    ->leftjoin('profile_teacher', 'users.id', '=' , 'profile_teacher.teacher_id')
                    ->leftjoin('languages', 'profile_teacher.native_language_id', '=', 'languages.id')
                    ->where('user_type', '1')
                    ->get(['users.*', 'profile_teacher.*', 'languages.name as native_name']);
        /*
        $shares = DB::table('shares')
    ->join('users', 'users.id', '=', 'shares.user_id')
    ->join('followers', 'followers.user_id', '=', 'users.id')
    ->where('followers.follower_id', '=', 3)
    ->get();
        */
        return response()->json(['data' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
    * @param  int $id
    * @return \Illuminate\Http\Response
    */
    public function getTeacherById($id){



    }

      /**
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function getAllTeachers($request){


    }
}
