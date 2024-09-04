<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reflection extends Node
{
    use HasFactory;

    protected $fillable = [
        'owner_id',
        'inquiry_id',
    ];

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function inquiry()
    {
        return $this->hasOne(Inquiry::class);
    }
}
