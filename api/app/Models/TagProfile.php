<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TagProfile extends Model
{
    protected $table = 'tag_profiles';
    protected $primaryKey = 'tag_id';
    protected $fillable = ['fk_post_id', 'fk_profiles_id'];

    public function post()
    {
        return $this->belongsTo('App\Models\Post', 'fk_post_id');
    }

    public function profile()
    {
        return $this->belongsTo('App\Models\Post', 'fk_profiles_id');
    }

}
