import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, Calendar, MessageCircle, User, RefreshCw } from "lucide-react";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  inquiry_type: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setContacts(data || []);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const getInquiryTypeColor = (type: string) => {
    switch (type) {
      case 'Film Collaboration':
        return 'bg-blue-100 text-blue-800';
      case 'Music Inquiry':
        return 'bg-purple-100 text-purple-800';
      case 'IELTS Training':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center">
            <RefreshCw className="h-8 w-8 animate-spin" />
            <span className="ml-2">Loading contacts...</span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold mb-4">Contact Submissions</h1>
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                View and manage contact form submissions
              </p>
              <Button onClick={fetchContacts} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="p-4">
                <p className="text-red-800">Error: {error}</p>
                <p className="text-red-600 text-sm mt-1">
                  Make sure you have the proper permissions to view contact submissions.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MessageCircle className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Submissions</p>
                    <p className="text-2xl font-bold">{contacts.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">This Week</p>
                    <p className="text-2xl font-bold">
                      {contacts.filter(contact => {
                        const weekAgo = new Date();
                        weekAgo.setDate(weekAgo.getDate() - 7);
                        return new Date(contact.created_at) > weekAgo;
                      }).length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">IELTS Inquiries</p>
                    <p className="text-2xl font-bold">
                      {contacts.filter(contact => contact.inquiry_type === 'IELTS Training').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contacts List */}
          {contacts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No contact submissions yet</h3>
                <p className="text-muted-foreground">
                  Contact form submissions will appear here once people start using your contact form.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <Card key={contact.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <User className="text-primary" size={20} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{contact.name}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <a 
                              href={`mailto:${contact.email}`}
                              className="text-primary hover:underline text-sm"
                            >
                              {contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getInquiryTypeColor(contact.inquiry_type)}>
                          {contact.inquiry_type}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatDate(contact.created_at)}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {contact.message}
                      </p>
                    </div>
                    <div className="flex items-center justify-end space-x-2 mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href={`mailto:${contact.email}?subject=Re: ${contact.inquiry_type} Inquiry`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Reply
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Admin;
