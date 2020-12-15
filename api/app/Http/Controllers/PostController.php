<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Attachment;
use App\Models\Users;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{

    public function getAllPosts()
    {
        try{
            $posts = Post::with('attachment')->with('profile')->orderBy('created_at', 'desc')->get();
            return response()->json([
                'IsSuccess' => true,
                'data'      => $posts
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['data' => $th->getMessage(), 'IsSuccess' => false]);
        }


    }
    public function saveimages(Request $request)
    {
        try {
            //code...
            $post = Post::create([
                'body' => $request->body,
                'fk_profile_id' => $request->user_id
            ]);
            $images = [];
            foreach ($request->items as $file) {
                $imagepath = Storage::disk('uploads')->put($request->email .'/posts', $file);
                $originname = $file->getClientOriginalName();
                $baseUrl = URL::to('/')."/uploads/";
                $images[] = $baseUrl . $imagepath;
            }
            $array_images = implode(",", $images);
            $attachment  = Attachment::create([
                'fk_post_id' => $post->post_id,
                'attachment_name' => $array_images,
                'attachment_originname' => $originname
            ]);
            return response()->json([
                'data'    => $post,
                'attachment' => $attachment,
                'IsSuccess' => true
            ]);

        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['data' => $th->getMessage(), 'IsSuccess' => false]);

        }

    }

}
