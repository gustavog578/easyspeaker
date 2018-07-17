<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfileUser extends Model
{
    protected $table = 'profile';

    protected $fillable = ['day_of_birth','gender','image','image_header','bio','experience','likes','dislikes','address','phone','public_email',]

    

    
}
