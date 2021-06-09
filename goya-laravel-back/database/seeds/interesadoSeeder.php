<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class interesadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('donador')->insert([
            [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'nombre' => 'Oscar Alejandro',
            'telefono' => '449-143-23-73',
            'email' => 'test@gmail.com',
            'mensaje' => 'No quiero reprobar :c',
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ],
            [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'nombre' => Str::random(10),
                'telefono' => '449-555-55-55',
                'email' => Str::random(10).'@gmail.com',
                'mensaje' => Str::random(10),
            ]

        ]
    );
    }
}
