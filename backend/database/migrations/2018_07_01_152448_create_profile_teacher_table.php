<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfileTeacherTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profile_teacher', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image');
            $table->string('bio');
            $table->string('link_presentation');
            $table->integer('native_language_id')->unsigned();
            $table->foreign('native_language_id')->references('id')->on('languages');
            $table->integer('country_id')->unsigned();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->string('likes');
            $table->string('dislikes');
            $table->string('presencial_mode');
            $table->string('online_mode');
            $table->string('contact_online');
            $table->string('phone');
            $table->string('public_email');
            $table->string('latitud');
            $table->string('longitud');
            $table->integer('teacher_id')->unsigned();
            $table->foreign('teacher_id')->references('id')->on('users');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profile_teacher');
    }
}
