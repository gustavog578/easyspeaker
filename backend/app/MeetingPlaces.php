<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MeetingPlaces extends Model
{
       protected $table = 'meeting_places';

       protected $fillable = [
        'name','lat','lon','open_hour','close_hour','is_notable','active',
   		 ];
}
