<div class="wrapper">
    <div class="flex red-bg items-center justify-center">
        <img src="http://100.25.201.96/images/pages/logo.jpeg" class="logo"/>
    </div>
    <div class="w-full">
        <div class="flex items-center justify-center">
            <div class="app-form">
                <div class="text-center font-bold" style="font-size: 2rem">Leaflet Distributor Job Application Form</div>
                <div class="font-bold my-4 text-green">PERSONAL DETAILS</div>    
                <div class="form-content">
                    <div>Name: <b>{{$app->first_name}} {{$app->last_name}}</b></div>
                    <div>Address: <b>{{$app->address}}</b></div>
                    <div>Postcode: <b>{{$app->post_code}}</b></div>
                    <div>Email: <b>{{$app->email}}</b></div>
                    <div>Mobile: <b>{{$app->mobile}}</b></div>
                    <div>D. O. B: <b>{{$app->dob}}</b></div>
                    <div>National Insurance Number: <b>{{ $app->ins_number }}</b></div>
                </div>
                <div class="font-bold my-4 text-green">DISTRIBUTOR APPLICATION DETAILS</div>
                <div class="form-content detail-form">    
                    <div>
                        What position is he applying for? <br>
                        <b>{{$app->position}}</b>
                    </div>
                    <div>
                        Which Date are you Available to Start?<br> 
                        <b>{{$app->start_date}}</b>
                    </div>
                        
                    <div>
                        What is your current employment status?<br>
                        <b>{{$app->employed_type}}</b>
                    </div>                     
                    <div>Does he hold a full UK driving licence?<br>
                        <b>{{$app->drive_licence}}</b>
                    </div>    
                    
                    <div>
                        Does he have access to a car to get to destinations?<br>
                        <b>{{$app->access_car}}</b>
                    </div>
                    
                    <div>
                        Is he prepared to travel in your own car to reach destinations in order to  carry out distributution work?<br>
                        <b>{{$app->own_car}}</b>
                    </div>
                    
                    <div>
                        Availability: <br>
                        <b>{{$app->full_time}}</b>
                    </div>    
                    
                    <div>
                        Which days is available for work?<br>
                        <b>{{$app->week_days}}</b>
                    </div>
                        
                    <div>
                        Happy to work with someone else in a team?<br>
                        <b>{{$app->team_work}}</b>
                    </div>
                        
                    <div>
                        Work full day's or part day's? <br>
                        <b>{{$app->full_days}}</b>
                    </div>
                </div>  

                <div class="font-bold my-4 text-green">    
                    <div class="mt-8">
                        <b>Application Document: {{$app->document}}</b>
                    </div>
                    <div class="text-center my-4">
                        <a class="vs-button font-bold" href="http://100.25.201.96/document/{{$app->document}}">Download Document</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
     .wrapper {
        background: #d8d8d8;
        color: #151515;
    }

    .app-form {
        margin: 2rem 0;
        padding: 2.5rem;
        background: white;
        width: 80%;
    }

    
    .form-content div {
        margin-left: 1rem;
        margin-top: 1rem;
    }

    .detail-form div {
        line-height: 1.4rem;
    }

    .logo {
        width: 33%;
        height: auto;
    }

    .text-center {
        text-align: center !important;
    }
    .font-bold {
        font-weight: 700 !important;
    }

    .w-full {
        width: 100% !important;
    }

    .red-bg {
        background: #da2f1b;
    }

    .text-green {
        color: green;
    }

    .justify-center {
        justify-content: center !important;
    }

    .items-center {
        align-items: center !important;
    }

    .flex {
        display: flex !important;
    }

    .my-4 {
        margin: 1.5rem 0;
    }
    
    .vs-button:focus {
        outline: none;
    }
    
    .vs-button {
        transition: all .2s ease;
        padding: 10px;
        border: 0;
        border-radius: 0;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        color: #fff;
        box-sizing: border-box;
        background: red;
        padding: 0.75rem 2rem;
    }

    .vs-button:hover {
        box-shadow: red 0 8px 25px -8px;
    }
</style>