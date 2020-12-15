<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $table = 'attachment';

    protected $primaryKey = 'attachment_id';

    protected $fillable = ['fk_post_id', 'attachment_name', 'attachment_originname'];

    public function post()
    {
        return $this->belongsTo('App\Models\Post');
    }

}
