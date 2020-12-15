<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Profiles extends Model
{
    protected $table = 'profiles';
    protected $primaryKey = 'profile_id';
    protected $fillable = ['fk_user_id','firstname', 'lastname', 'middlename', 'lastname', 'extensionname', 'artist_type','birthdate', 'fk_gender_type', 'mobile_no', 'email', 'table_status_id'];

    public function setEmailAttribute($value)
    {
        $this->attributes['email']  = $value;
        $this->attributes['slug'] = Str::slug($value.'-'.$this->lastname.'-'.$this->firstname);
    }
    /* public function setSlugAttribute()
    {
        $this->attributes['slug'] = Str::slug($this->first_name.'.'.$this->last_name);
    } */
    public function post()
    {
        return $this->hasMany('App\Models\Post');
    }
    public function profile_follower()
    {
        return $this->hasMany('App\Models\ProfileFollower');
    }
    public function tag()
    {
        return $this->hasMany('App\Models\Tagprofile');
    }
}
