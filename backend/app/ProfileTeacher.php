<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfileTeacher extends Model
{
    protected $table = 'profile_teacher';

    protected $fillable = ['image','bio','link_presentation','native_language_id','country_id','likes','dislikes','presencial_mode','online_mode','contact_online','phone', 'public_email','latitud','longitud'];

    
}
