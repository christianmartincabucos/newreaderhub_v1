<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfileFollowersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profile_followers', function (Blueprint $table) {
            $table->bigIncrements('profile_follower_id');
            $table->foreignId('fk_profile_id');
            $table->foreignId('fk_connection_status');
            $table->foreignId('followedby_profile_id');
            $table->timestamps();
            $table->foreign('fk_connection_status')->references('table_status_id')->on('table_status');
            $table->foreign('fk_profile_id')->references('profile_id')->on('profiles');
            $table->foreign('followedby_profile_id')->references('profile_id')->on('profiles');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profile_followers');
    }
}
