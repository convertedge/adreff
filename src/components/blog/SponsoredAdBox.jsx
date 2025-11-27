
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Loader2, ChevronLeft, ChevronRight, Shield, Lock, Truck, RefreshCw, Award, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle } from
"@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ugcImages = [
"https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f517d751eca851cd39b0d2/b6502c634_image2.png",
"https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f517d751eca851cd39b0d2/b6502c634_image2.png",
"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"];

const productImages = [
"https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f517d751eca851cd39b0d2/400c765fb_image1.png",
"https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f517d751eca851cd39b0d2/b6502c634_image2.png",
"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=400&fit=crop",
"https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop",
"https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=600&h=400&fit=crop",
"https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop"];


export default function SponsoredAdBox({ index, isLoading, showAd }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const [checkoutData, setCheckoutData] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  });

  const handleAdClick = () => {
    if (showAd) {
      if (index === 1) {
        setIsDialogOpen(true);
      } else if (index === 2) {
        setIsCheckoutOpen(true);
        setCurrentImageIndex(0);
      }
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? productImages.length - 1 : prev - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => prev === productImages.length - 1 ? 0 : prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      setIsDialogOpen(false);
      setShowSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: ""
      });
    }, 2000);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setShowCheckoutSuccess(true);

    setTimeout(() => {
      setIsCheckoutOpen(false);
      setShowCheckoutSuccess(false);
      setCheckoutData({
        fullName: "",
        email: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: ""
      });
    }, 2000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckoutChange = (field, value) => {
    setCheckoutData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <Card
        className={`overflow-hidden ${showAd ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}
        onClick={handleAdClick}>

        <div className="p-3 border-b bg-gray-50">
          <p className="text-xs font-medium text-gray-600">AdReff Sponsored Links</p>
        </div>
        
        <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
          {isLoading ?
          <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
              <p className="text-xs text-gray-500">Loading ad...</p>
            </div> :
          showAd ?
          <img
            src={ugcImages[index - 1]}
            alt={`Sponsored content ${index}`} className="w-full h-full object-fill" /> :

          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f517d751eca851cd39b0d2/400c765fb_image1.png"
            alt="Ad placeholder" className="w-full h-full object-fill p-2" />

          }
        </div>
        
        <div className="p-3 space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-4/5" />
        </div>
      </Card>

      {/* Lead Collection Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
              <img
                src={ugcImages[0]}
                alt="Sponsored content"
                className="w-full h-full object-cover" />

            </div>
            <DialogTitle>Get More Information</DialogTitle>
          </DialogHeader>
          
          {showSuccess ?
          <Alert className="bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                Thank you! We'll be in touch soon.
              </AlertDescription>
            </Alert> :

          <form onSubmit={handleSubmit} className="space-y-4">
              <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required />

              <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required />

              <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required />

              <Input
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)} />

              
              <div className="flex justify-end gap-3">
                <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}>

                  Cancel
                </Button>
                <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700">

                  Submit
                </Button>
              </div>
            </form>
          }
        </DialogContent>
      </Dialog>

      {/* Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="bg-background pt-12 pr-6 pb-1 pl-6 fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg group">
              <img
                src={productImages[currentImageIndex]}
                alt="Product"
                className="w-full h-full object-contain bg-gray-100" />

              
              {/* Image Navigation Buttons */}
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">

                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">

                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {currentImageIndex + 1} / {productImages.length}
              </div>
            </div>
            
            <DialogTitle className="text-2xl">Professional Power Drill Kit</DialogTitle>
            <p className="text-lg font-semibold text-green-600 mt-1">$99.99</p>
            
            {/* Product Description */}
            <div className="text-sm text-gray-600 mt-3 space-y-2">
              <p>Professional-grade cordless power drill perfect for any construction or DIY project. Features include:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>20V lithium-ion battery with fast charging</li>
                <li>Variable speed trigger (0-1,500 RPM)</li>
                <li>24-position clutch for precision drilling</li>
                <li>LED work light for dark spaces</li>
                <li>Ergonomic grip with anti-slip rubber</li>
                <li>Includes carrying case and drill bits</li>
              </ul>
            </div>
          </DialogHeader>
          
          {showCheckoutSuccess ?
          <Alert className="bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                Order placed successfully! You'll receive a confirmation email shortly.
              </AlertDescription>
            </Alert> :

          <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-6 mt-4">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Personal Information</h3>
                <Input
                placeholder="Full Name"
                value={checkoutData.fullName}
                onChange={(e) => handleCheckoutChange("fullName", e.target.value)}
                required />

                <Input
                type="email"
                placeholder="Email Address"
                value={checkoutData.email}
                onChange={(e) => handleCheckoutChange("email", e.target.value)}
                required />

              </div>

              {/* Payment Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Payment Information</h3>
                <Input
                placeholder="Card Number"
                value={checkoutData.cardNumber}
                onChange={(e) => handleCheckoutChange("cardNumber", e.target.value)}
                maxLength={16}
                required />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                  placeholder="MM/YY"
                  value={checkoutData.expiry}
                  onChange={(e) => handleCheckoutChange("expiry", e.target.value)}
                  maxLength={5}
                  required />

                  <Input
                  placeholder="CVV"
                  value={checkoutData.cvv}
                  onChange={(e) => handleCheckoutChange("cvv", e.target.value)}
                  maxLength={4}
                  required />

                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Shipping Address</h3>
                <Input
                placeholder="Street Address"
                value={checkoutData.address}
                onChange={(e) => handleCheckoutChange("address", e.target.value)}
                required />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                  placeholder="City"
                  value={checkoutData.city}
                  onChange={(e) => handleCheckoutChange("city", e.target.value)}
                  required />

                  <Input
                  placeholder="State"
                  value={checkoutData.state}
                  onChange={(e) => handleCheckoutChange("state", e.target.value)}
                  required />

                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                  placeholder="ZIP Code"
                  value={checkoutData.zipCode}
                  onChange={(e) => handleCheckoutChange("zipCode", e.target.value)}
                  required />

                  <Input
                  placeholder="Country"
                  value={checkoutData.country}
                  onChange={(e) => handleCheckoutChange("country", e.target.value)}
                  required />

                </div>
              </div>
              
              {/* Why Choose Us Section */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Why Choose PowerTech Tools?
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>For over 25 years, PowerTech has been the trusted choice of professional contractors and DIY enthusiasts worldwide. We're committed to delivering the highest quality power tools that combine durability, performance, and innovation.</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Industry-Leading Warranty:</strong> 5-year comprehensive coverage on all power tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Award-Winning Customer Service:</strong> 24/7 support from certified tool experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Certified Quality:</strong> ISO 9001 certified manufacturing processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Trusted by Professionals:</strong> Used on construction sites in over 50 countries</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Customer Reviews Section */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-lg">What Our Customers Say</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) =>
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    )}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"Best drill I've ever owned! The battery lasts all day on the job site and the power is incredible. Worth every penny."</p>
                    <p className="text-xs text-gray-500">- Mike R., Professional Contractor</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) =>
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    )}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"Perfect for home projects. Easy to use and incredibly reliable. The LED light is a game changer!"</p>
                    <p className="text-xs text-gray-500">- Sarah T., DIY Enthusiast</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-lg">Frequently Asked Questions</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">How long does shipping take?</p>
                    <p className="text-gray-600">We offer free 2-day shipping on all orders over $50. Most orders are processed within 24 hours and delivered within 2-3 business days.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">What's included in the box?</p>
                    <p className="text-gray-600">Your kit includes the power drill, two 20V batteries, fast charger, 15-piece drill bit set, belt clip, and heavy-duty carrying case.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Is there a warranty?</p>
                    <p className="text-gray-600">Yes! All PowerTech tools come with a 5-year limited warranty covering defects in materials and workmanship. Plus, we offer a 30-day money-back guarantee.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Can I return it if I'm not satisfied?</p>
                    <p className="text-gray-600">Absolutely! We offer hassle-free returns within 30 days of purchase. If you're not 100% satisfied, just contact our support team for a full refund.</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gray-50 p-4 rounded-lg border-t">
                <div className="grid grid-cols-2 gap-4 text-center text-sm">
                  <div>
                    <p className="font-bold text-2xl text-gray-900">500K+</p>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-900">4.9/5</p>
                    <p className="text-gray-600">Average Rating</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-900">25+</p>
                    <p className="text-gray-600">Years in Business</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-900">50+</p>
                    <p className="text-gray-600">Countries Worldwide</p>
                  </div>
                </div>
              </div>
              </form>
          }
          {/* Sticky Bottom Bar - Moved outside the form */}
          <div className="sticky bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 flex items-center justify-between gap-4 z-10 -mx-6 -mb-6">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Lock className="w-4 h-4 text-green-600" />
                <span>Encrypted</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Truck className="w-4 h-4 text-green-600" />
                <span>Free Ship</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <RefreshCw className="w-4 h-4 text-green-600" />
                <span>30-Day Returns</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCheckoutOpen(false)}>
                Cancel
              </Button>
              <Button
                type="submit"
                form="checkout-form" // Link button to the form using its ID
                className="bg-red-600 hover:bg-red-700">
                Buy Now - $99.99
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>);
}