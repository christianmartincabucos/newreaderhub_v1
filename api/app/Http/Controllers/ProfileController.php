<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profiles;

class ProfileController extends Controller
{
    public function showProfile(Profiles $profiles, $slug)
    {
        $datas = $profiles->where('slug', $slug)->get();
        return response()->json([
            'data' => $datas,
            'IsSuccess' => true
        ]);
    }
}
