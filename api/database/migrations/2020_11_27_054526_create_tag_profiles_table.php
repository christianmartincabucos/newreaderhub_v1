<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTagProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tag_profiles', function (Blueprint $table) {
            $table->bigIncrements('tag_id');
            $table->foreignId('fk_post_id');
            $table->foreignId('fk_tag_profiles_id');
            $table->timestamps();
            $table->foreign('fk_post_id')->references('post_id')->on('posts');
            $table->foreign('fk_tag_profiles_id')->references('profile_id')->on('profiles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tag_profiles');
    }
}
