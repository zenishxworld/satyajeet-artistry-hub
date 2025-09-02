import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.1';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? '';
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Store the contact submission in the database
    const { error: dbError } = await supabase
      .from('contacts')
      .insert({
        name,
        email,
        inquiry_type: inquiryType,
        message
      });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send email notification to Satyajeet
    const emailResponse = await resend.emails.send({
      from: 'SS Portfolio Contact Form <onboarding@resend.dev>',
      to: ['satyajeetshinde178@gmail.com'],
      subject: `New Contact Form Submission - ${inquiryType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h1 style="color: #333; border-bottom: 3px solid #7c3aed; padding-bottom: 10px; margin-bottom: 25px;">
              🎬 New Contact Form Submission
            </h1>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #7c3aed; margin-bottom: 8px;">👤 Contact Information</h3>
              <p style="margin: 5px 0; color: #555;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #555;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #7c3aed; margin-bottom: 8px;">📝 Inquiry Details</h3>
              <p style="margin: 5px 0; color: #555;"><strong>Type:</strong> ${inquiryType}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #7c3aed; margin-bottom: 8px;">💬 Message</h3>
              <div style="background-color: #f1f5f9; padding: 15px; border-left: 4px solid #7c3aed; border-radius: 4px;">
                <p style="margin: 0; color: #334155; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                This message was sent via your portfolio contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Contact form submitted successfully! Thank you for your message.",
        emailId: emailResponse.data?.id
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
      JSON.stringify({ 
        success: false,
        error: error.message || "An error occurred while processing your request"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);