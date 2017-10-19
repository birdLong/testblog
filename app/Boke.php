<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Boke extends Model
{
    protected $fillable = ['name', 'content','bywho'];
    
    
    public  $timestamps=true;
    
    protected function getDateFormat()
    {
    
     return time();
    }
}
