<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonadorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donador', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            /*Mis cdatos*/
            $table->string('nombre', 100);
            $table->string('telefono',13);
            $table->string('email',100);
            $table->string('mensaje',120);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('donador');
    }
}
