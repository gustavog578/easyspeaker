<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('profile', function (Blueprint $table) {
            $table->increments('id');
            $table->string('day_of_birth');
            $table->string('gender');
            $table->string('image');
            $table->string('image_header');
            $table->string('bio');
            $table->string('likes');
            $table->string('dislikes');
            $table->string('address');
            $table->string('phone');
            $table->string('public_email');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::drop('profile');
    }
}
