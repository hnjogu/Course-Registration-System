<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\course;
use Log;
use Exception;
use Illuminate\Support\Facades\Validator;

class Coursecontroller extends Controller
{
    //
    public function index()
    {
        $coursedata = course::orderBy('course_id','DESC')
        ->get();
        return Inertia::render('course/index')
        ->with('coursedata', $coursedata);
    }

    public function create()
    {
        return Inertia::render('course/create');
    }
  
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'course_name' => ['required'],
            'course_code' => ['required'],
            'faculty' => ['required'],
        ])->validate();
  
        course::create($request->all());
  
        return redirect()->route('courses.index');
    }
    public function edit(course $course)
    {
        return Inertia::render('course/edit', [
            'course' => $course
        ]);
    }
  
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($course_id, Request $request)
    {
        Validator::make($request->all(), [
            'course_name' => ['required'],
            'course_code' => ['required'],
            'faculty' => ['required'],
        ])->validate();
  
        course::find($course_id)->update($request->all());
        return redirect()->route('courses.index');
    }


    public function destroy($course_id)
    {
        $course_delete = course::find($course_id);
        if($course_delete)
        {
            $course_delete->delete();
            return response()->json([
                'status'=> 200,
                'message'=>'data Deleted Successfully',
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'No data ID Found',
            ]);
        }
    }
}
