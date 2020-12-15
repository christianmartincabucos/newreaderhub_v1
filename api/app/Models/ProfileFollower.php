<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProfileFollower extends Model
{
    protected $table = 'profile_followers';
    protected $primaryKey = 'profile_follower_id';
    protected $fillable = ['fk_profiles_id', 'fk_connection_status', 'followedby_profile_id'];

    public function profile_followed()
    {
        return $this->belongsTo('App\Models\Profiles', 'fk_profiles_id');
    }

    public function follower()
    {
        return $this->belongsTo('App\Models\Profiles', 'followedby_profile_id');
    }

}
