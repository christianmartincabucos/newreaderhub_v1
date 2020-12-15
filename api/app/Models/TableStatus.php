<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TableStatus extends Model
{
    protected $primaryKey = 'table_status_id';
    protected $fillable = ['status_groupname', 'status_shortacodename', 'status_longcodename', 'created_by'];

    public function user()
    {
        return $this->belongsToMany('App\Models\Users', 'fk_table_status_id');
    }
}
