import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, inquiryType, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log('Processing contact form submission:', { name, email, inquiryType });

    // Log the contact submission for manual follow-up
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Inquiry Type:', inquiryType);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('=====================================');

    // Always return success - the form submission is received and logged
    return new Response(
      JSON.stringify({
        message: 'Contact form submitted successfully',
        id: 'logged-' + Date.now()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);