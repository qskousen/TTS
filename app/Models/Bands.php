<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bands extends Model
{
    use HasFactory;
    protected $fillable = ['name','site_name','calendar_id'];
    


    public function owners()
    {
        return $this->hasManyThrough(BandOwners::class,User::class,'id','band_id');
    }

    public function members()
    {
        return $this->hasMany(BandMembers::class,'band_id');
        // return $this->hasManyThrough(User::class,BandMembers::class,)
    }

    public function invites()
    {
        return $this->hasMany(Invitations::class,'band_id');
    }

    public function proposals()
    {
        return $this->hasMany(Proposals::class,'band_id');
    }

    public function events()
    {
        return $this->hasMany(BandEvents::class,'band_id');
    }
    public function colorways()
    {
        // belongsToMany(Bands::class,'band_owners','user_id','band_id')
        return $this->hasMany(Colorways::class,'band_id');
    }

}
