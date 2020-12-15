<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';

    protected $primaryKey = 'post_id';

    protected $fillable = ['body', 'fk_profile_id'];

    public function profile()
    {
        return $this->belongsTo('App\Models\Profiles', 'fk_profile_id');
    }

    public function attachment()
    {
        return $this->hasMany('App\Models\Attachment', 'fk_post_id');
    }
}
