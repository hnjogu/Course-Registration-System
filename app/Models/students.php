<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class students extends Model
{
    use HasFactory, Notifiable;


    public $table = "students";
    protected $primaryKey = 'student_id';
    public $timestamps = true;


    protected $fillable = [
        'student_id','user_id','name','course','email','phone','dob','gender','status','start_year','end_year'
    ];
}

