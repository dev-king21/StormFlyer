<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->string("first_name");
            $table->string("last_name");
            $table->string("address"); 
            $table->string("post_code");
            $table->string("email");
            $table->string("phone");
            $table->string("dob");
            $table->string("ins_number");
            $table->string("start_date");
            
            $table->string("position");
            $table->string("employee_type");
            $table->string("full_days");
            $table->string("full_time");
            $table->string("drive_licence");
            $table->string("access_car");
            $table->string("own_car");
            $table->string("team_work");
            $table->string("week_days");
            $table->string("document");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_applications');
    }
}
