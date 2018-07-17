<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use App\Mail\ResetPasswordMail;
use Mail;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request){
    	
    	if(!$this->validateEmail($request->email)){
    		return $this->failedResponse();	
    	}

    	$this->send($request->email);
    	return $this->successResponse();
    }

    public function send($email){
    	$token = $this->createToken($email);
        $token = $token->token;
        Mail::to($email)->send(new ResetPasswordMail($token));
    }

    public function createToken($email){
    	
    	$oldToken = DB::table('password_resets')->where('email', $email)->first();
    	
    	if($oldToken){
    		return $oldToken;
    	}

    	$token = str_random(60);
    	$this->saveToken($token,$email);

    	return $token;
    }

    public function saveToken($token, $email){
    	DB::table('password_resets')->insert([
    		'email' => $email,
    		'token' => $token,
    		'created_at' => Carbon::now()

    	]);
    }

    public function validateEmail($email){
    	return !!User::where('email', $email)->first();
    }

    public function failedResponse(){
    	return response()->json([
    		'error' => 'Email no encontradoen nuestra Base de datos'
    	], Response::HTTP_NOT_FOUND);
    }

    public function successResponse(){
    	return response()->json([
    		'data' => 'El blanqueo de tu clave se evvio correctemente, por favor chequea tu e-mail'
    	], Response::HTTP_OK);
    }

}
