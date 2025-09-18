import Layout from "./Layout";
import { CheckCircle } from "lucide-react"; // success icon
import { Link } from "@inertiajs/react";   // use Link for navigation

export default function ContactResponse() {
    return (
        <Layout>
            <div className="min-h-[100vh] flex flex-col items-center justify-center px-6 text-center bg-gray-50">
                
                {/* Success Icon */}
                <CheckCircle className="w-20 h-20 text-green-600 mb-6" />

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Message Sent Successfully!
                </h2>

                {/* Illustration / image */}
                {/* <img 
                    src="/img/mail_success.png" 
                    alt="Mail Sent Illustration" 
                    className="w-64 max-w-full mb-6"
                /> */}

                {/* Confirmation Text */}
                <p className="text-gray-600 max-w-lg mb-8">
                    Thank you for reaching out to <span className="font-semibold">Cidelah Realty</span>.  
                    Our team has received your message and will get back to you as soon as possible.  
                    We look forward to assisting you with your inquiry.
                </p>

                {/* Back Button */}
                <Link 
                    href="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white font-medium shadow hover:bg-secondary transition"
                >
                    ← Back to Home Page
                </Link>
            </div>
        </Layout>
    );
}
