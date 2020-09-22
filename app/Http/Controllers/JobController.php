<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\JobApplication;
use Validator;
use Mail;

class JobController extends Controller
{
    public function receiveApplication(Request $request) {

        $v = Validator::make($request->all(), ['document' => 'mimes:png,gif,jpeg,jpg,pdf']);
        if ($v->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => "Document format must be one of image or pdf."
            ]);
        }

        if (isset($request->document)) {
            $fileName =  md5(time()).'.'.$request->document->extension();  
            $request->document->move(public_path('document'), $fileName);
        } 
        
        $app = new JobApplication; 
        $app->first_name = $request->post('first_name');
        $app->last_name = $request->post('last_name');
        $app->address = $request->post('address');
        $app->post_code = $request->post('post_code');
        $app->email = $request->post('email');
        $app->phone = $request->post('phone');
        $app->dob = $request->post('dob');
        $app->ins_number = $request->post('ins_number');
        $app->start_date = $request->post('start_date');
        
        $app->position = $request->post('position');
        $app->employee_type = $request->post('employee_type');
        $app->full_days = $request->post('full_days');
        $app->full_time = $request->post('full_time');
        $app->drive_licence = $request->post('drive_licence');
        $app->access_car = $request->post('access_car');
        $app->own_car = $request->post('own_car');
        $app->team_work = $request->post('team_work');
        $app->week_days = $request->post('week_days');
        $app->document = $fileName;
        
        $data = array();
        $data['app'] = $app;

        /* Mail::send('application.mail', $data, function ($message) use($app) {
            $message->from(env('MAIL_USERNAME'), 'Storm Flyer Support Team');
            $message->to('JackFord273@gmail.com', 'Jack ford');
            $message->cc('goodhelper21@gmail.com', 'Boris Egorov');
            $message->subject("New Application received from '".$app->first_name.' '.$app->last_name."'");
        }); */

        $app->save();
        return response()->json(['status' => 'ok']);
    }

    public function mailBladeTest(Request $request) {
        $data = array();
        $data['app'] = JobApplication::find(1);
        return view('application_mail', $data);
    }
}
