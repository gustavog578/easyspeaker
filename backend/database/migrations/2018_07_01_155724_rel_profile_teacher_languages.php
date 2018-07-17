<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RelProfileTeacherLanguages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('rel_teacher_languages', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('profile_teacher_id')->unsigned();
            $table->foreign('profile_teacher_id')->references('id')->on('profile_teacher');
            $table->integer('language_id')->unsigned();
            $table->foreign('language_id')->references('id')->on('languages');
            $table->integer('type_teacher_id')->unsigned();
            $table->foreign('type_teacher_id')->references('id')->on('type_teacher');
            $table->float('price');
           
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
        //
    }
}
