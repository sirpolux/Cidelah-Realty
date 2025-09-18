<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SupportController extends Controller
{
    //
    public function mailTest(){
        Mail::raw('This is a test email from Laravel + WhoGoHost SMTP!', function ($message) {
            $message->to('macpaul201@gmail.com')
                    ->subject('Test Email');
        });
    
        return 'Mail sent!';
    }


    public function sendMail(Request $request){
        $request->validate([
            'name'=>'required|string',
            'title'=>'required|string',
            'sender_email'=>'required|string',
            'message'=>'required|string',
        ]);

        $message_body = "$request->message\n\nSender info:\nName:$request->name\nEmail: $request->sender_email \nContact no: $request->contact_no \n";

        Mail::raw($message_body, function ($message) use ($request) {
            $message->to("cidelahreality@gmail.com")
                    ->subject($request->title)
                    ->replyTo($request->sender_email, $request->name);
        });


        return redirect()->route('mail-response');

    }
}
