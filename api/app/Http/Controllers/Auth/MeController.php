<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Profiles;

class MeController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api']);
    }
    public function __invoke(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'email' => $user->email,
            'name'  => $user->name,
            'user_id'  => $user->user_id,
        ]);
    }

    public function getprofile($user_id)
    {
        $profile = Profiles::where('fk_user_id', $user_id)->get();

        return response()->json([
            'data' => $profile
        ]);
    }
}
