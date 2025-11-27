
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, User, ThumbsUp, MessageCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

import Header from "../components/blog/Header";
import ArticleContent from "../components/blog/ArticleContent";
import SponsoredAdBox from "../components/blog/SponsoredAdBox";
import CommentsList from "../components/blog/CommentsList";

export default function BlogArticle() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    comment: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAds, setShowAds] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Start loading state for ads
    setIsLoading(true);
    
    // After 3 seconds, show the ads
    setTimeout(() => {
      setIsLoading(false);
      setShowAds(true);
    }, 3000);
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      title: "",
      comment: ""
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <ArticleContent />
            
            {/* Comments Section */}
            <div className="border-t pt-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Comments</h2>
              </div>
              
              {/* Add New Comment Form */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Add new comment</h3>
                
                {showSuccess && (
                  <Alert className="mb-4 bg-green-50 border-green-200">
                    <AlertDescription className="text-green-800">
                      Comment submitted successfully!
                    </AlertDescription>
                  </Alert>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="bg-gray-50 border-gray-200"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>
                  
                  <Input
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                  
                  <Textarea
                    placeholder="Comment"
                    value={formData.comment}
                    onChange={(e) => handleChange("comment", e.target.value)}
                    required
                    className="bg-gray-50 border-gray-200 min-h-32"
                  />
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white px-8"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
              
              <CommentsList />
            </div>
          </div>
          
          {/* Sidebar with Sponsored Ads - Fixed Position */}
          <div className="hidden lg:block">
            <div className="fixed top-20 w-80 space-y-6">
              <SponsoredAdBox 
                index={1} 
                isLoading={isLoading} 
                showAd={showAds}
              />
              <SponsoredAdBox 
                index={2} 
                isLoading={isLoading} 
                showAd={showAds}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
