<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->bigIncrements('profile_id');
            $table->foreignId('fk_user_id');
            $table->string('firstname');
            $table->string('middlename')->nullable()->change();
            $table->string('lastname');
            $table->string('extensionname')->nullable();
            $table->date('birthdate')->nullable();
            $table->string('artist_type');
            $table->date('birthdate')->nullable()->change();
            $table->foreignId('fk_gender_type')->nullable()->change();
            $table->string('mobile_no')->nullable();
            $table->string('email')->unique();
            $table->foreignId('table_status_id')->nullable();
            $table->timestamps();
            $table->foreign('fk_user_id')->references('user_id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
