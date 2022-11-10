<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class course extends Model
{
    use HasFactory, Notifiable;


    public $table = "course";
    protected $primaryKey = 'course_id';
    public $timestamps = true;

    protected $fillable = [
        'course_id','course_name','course_code','faculty','course_status'
    ];

}
