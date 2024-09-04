<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Inquiry extends Node
{
    use HasFactory;

    protected $fillable = [
        'owner_id',
        'type',
    ];

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function reflections()
    {
        return $this->hasMany(Reflection::class);
    }
}
