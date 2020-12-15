<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('post_id');
            $table->string('body');
            $table->integer('likes_count')->nullable();
            $table->integer('comments_count')->nullable();
            $table->integer('shares_count')->nullable();
            $table->foreignId('fk_profile_id');
            $table->timestamps();
            $table->foreign('fk_profile_id')->references('profile_id')->on('profiles');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
