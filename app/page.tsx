"use client";

import {
  ArrowRight,
  Award,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Star,
  Zap,
  Copy,
  X,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 9325595711");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const featuredProducts = [
    {
      id: 1,
      name: "LED Smart Bulb 9W",
      category: "Smart Lighting",
      image: "/light_bulb.jpg",
      features: [
        "WiFi Enabled",
        "16M Colors",
        "Voice Control",
        "Energy Efficient",
      ],
      description:
        "Transform your space with our smart LED bulb featuring millions of colors and voice control compatibility.",
    },
    {
      id: 2,
      name: "LED Panel Light 36W",
      category: "Commercial Lighting",
      image: "/panel_light.jpg",
      features: ["Ultra Slim", "High Brightness", "Long Lasting", "Cool White"],
      description:
        "Perfect for offices and commercial spaces with uniform light distribution and modern design.",
    },
    {
      id: 3,
      name: "LED Strip Light 5M",
      category: "Decorative Lighting",
      image: "/led.jpg",
      features: ["Flexible", "Cuttable", "Waterproof", "Multiple Colors"],
      description:
        "Create stunning ambient lighting with our flexible LED strips, perfect for any creative project.",
    },
    {
      id: 4,
      name: "LED Flood Light 50W",
      category: "Outdoor Lighting",
      image: "/flood_light.jpg",
      features: ["Weather Resistant", "High Lumen", "Wide Beam", "Durable"],
      description:
        "Illuminate large outdoor areas with our powerful and weather-resistant LED flood lights.",
    },
  ];

  const categories = [
    {
      name: "Smart Lighting",
      description: "WiFi enabled bulbs with app control",
      image: "/smart.jpg",
      productCount: "12+ Products",
    },
    {
      name: "Commercial Lighting",
      description: "Professional lighting solutions",
      image: "/commercial.jpg",
      productCount: "25+ Products",
    },
    {
      name: "Decorative Lighting",
      description: "Ambient and accent lighting",
      image: "/decorative.png",
      productCount: "18+ Products",
    },
    {
      name: "Outdoor Lighting",
      description: "Weather-resistant outdoor solutions",
      image: "/outdoor.jpg",
      productCount: "15+ Products",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
              src="/logo.png"
              alt="Bright India Logo"
              height={100}
              width={40}
              className="mb-2"
              />

              <span className="text-2xl font-bold text-gray-900"></span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-gray-600 hover:text-[#006D77] transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="#products"
                className="text-gray-600 hover:text-[#006D77] transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-[#006D77] transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-[#006D77] transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                className="bg-white border-[#006D77] text-[#006D77] hover:bg-[#006D77] hover:text-white"
                onClick={() => setShowPhoneModal(true)}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button
                className="bg-[#FBB034] hover:bg-[#FFD700] text-white shadow-lg"
                onClick={() => {
                  window.open(
                    "https://wa.me/919325595711?text=Hi%20Bright%20India,%20I%20would%20like%20to%20get%20a%20quote%20for%20LED%20lighting%20products.",
                    "_blank"
                  );
                }}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-[#006D77] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link
                  href="#home"
                  className="text-gray-600 hover:text-[#006D77] transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#products"
                  className="text-gray-600 hover:text-[#006D77] transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-[#006D77] transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-[#006D77] transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 mt-6">
                <Button
                  variant="outline"
                  className="w-full bg-white border-[#006D77] text-[#006D77] hover:bg-[#006D77] hover:text-white"
                  onClick={() => {
                    setShowPhoneModal(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  className="w-full bg-[#FBB034] hover:bg-[#FFD700] text-white shadow-lg"
                  onClick={() => {
                    window.open(
                      "https://wa.me/919325595711?text=Hi%20Bright%20India,%20I%20would%20like%20to%20get%20a%20quote%20for%20LED%20lighting%20products.",
                      "_blank"
                    );
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Phone Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
              <button
                onClick={() => setShowPhoneModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#006D77]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#006D77]" />
              </div>
              <p className="text-[#666666] mb-4">
                Call us directly for immediate assistance
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  +91 9325595711
                </div>
                <div className="text-lg text-gray-700"> Ganesh Nimbalkar</div>
              </div>

              <Button
                onClick={handleCopyPhone}
                className={`w-full ${
                  copied
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-[#006D77] hover:bg-[#006D77]/90"
                } text-white transition-colors`}
              >
                {copied ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Phone Number
                  </>
                )}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500">
              Available Mon-Sat, 9 AM - 7 PM
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Illuminating India with
              <span className="text-[#FBB034] block">
                Premium LED Solutions
              </span>
            </h1>
            <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">
              Leading manufacturer and supplier of energy-efficient LED lighting
              products. From smart bulbs to commercial solutions, we light up
              your world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#006D77] hover:bg-[#006D77]/90 text-white"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-[#666666]">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-[#666666]">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-[#666666]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-[#666666]">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Discover our most popular LED lighting solutions designed for
              modern living and working spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#FBB034] font-medium mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-[#666666] text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-[#666666]"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 group-hover:bg-[#006D77] group-hover:text-white group-hover:border-[#006D77] transition-colors bg-transparent"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Explore our comprehensive range of LED lighting solutions for
              every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-[#666666] mb-2">{category.description}</p>
                <div className="text-sm text-[#FBB034] font-medium">
                  {category.productCount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Work Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Previous Work
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Trusted by major infrastructure projects across India. See how
              we've illuminated critical transportation networks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Central Railways Project */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src="/railways.png"
                  alt="Central Railways Lighting Project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Image
                      src="/logo.png"
                      alt="Bright India Logo"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Central Railways
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Lighting Systems Contract
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  We successfully completed a comprehensive LED lighting upgrade
                  for Central Railways at Pune Station. Our energy-efficient
                  solutions significantly reduced power consumption while
                  dramatically improving visibility and safety for commuters and
                  staff.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">PUNE</div>
                    <div className="text-sm text-[#666666]">
                      Railway Station
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">60%</div>
                    <div className="text-sm text-[#666666]">Energy Savings</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-[#666666]">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Platform and concourse lighting
                  </div>
                  <div className="flex items-center text-sm text-[#666666]">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency and safety lighting systems
                  </div>
                  <div className="flex items-center text-sm text-[#666666]">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Smart control and monitoring systems
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Highways Lighting Project */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src="/highways.png"
                  alt="Highway Lighting Project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Image
                      src="/logo.png"
                      alt="Bright India Logo"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      National Highways
                    </h3>
                    <p className="text-orange-600 font-medium">
                      Street Lighting Project
                    </p>
                  </div>
                </div>
                <p className="text-[#666666] mb-6">
                  Illuminated 200+ kilometers of national highways with our
                  high-performance LED street lights. The project enhanced road
                  safety during night hours while maintaining optimal energy
                  efficiency and minimal maintenance requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-sm text-[#666666]">Kilometers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">70%</div>
                    <div className="text-sm text-[#666666]">
                      Accident Reduction
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-[#666666]">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High-mast LED street lighting
                  </div>
                  <div className="flex items-center text-sm text-[#666666]">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Weather-resistant design
                  </div>
                  <div className="flex items-center text-sm text-[#666666]">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automated dusk-to-dawn operation
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-[#FBB034]/5 rounded-full">
              <Award className="h-5 w-5 text-[#FBB034] mr-2" />
              <span className="text-[#006D77] font-medium">
                Trusted by Government Infrastructure Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Bright India
              </h2>
              <p className="text-lg text-[#666666] mb-6">
                We are a leading manufacturer and supplier of premium LED
                lighting solutions in India. With over 5 years of experience,
                we've been at the forefront of the LED revolution, providing
                energy-efficient and innovative lighting products.
              </p>
              <p className="text-lg text-[#666666] mb-8">
                Our commitment to quality, innovation, and customer satisfaction
                has made us a trusted name in the lighting industry. We serve
                both residential and commercial markets with a wide range of
                products designed to meet diverse lighting needs.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-[#FBB034] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality Assured
                    </h4>
                    <p className="text-[#666666] text-sm">
                      ISO certified manufacturing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-[#FBB034] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Energy Efficient
                    </h4>
                    <p className="text-[#666666] text-sm">
                      Up to 80% energy savings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="about_us.png"
                alt="About Bright India"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Ready to illuminate your space? Contact us for quotes, product
              information, or any inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FBB034]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#FBB034]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">+91 9325595711</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FBB034]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-[#FBB034]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">info@brightindia.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FBB034]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#FBB034]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600">164 Somwar Peth</p>
              <p className="text-gray-600">Pune</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Floating Action Buttons */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="flex space-x-3">
          <Button
            className="flex-1 bg-[#006D77] hover:bg-[#006D77]/90 text-white shadow-lg"
            onClick={() => setShowPhoneModal(true)}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
          <Button
            className="flex-1 bg-[#FBB034] hover:bg-[#FFD700] text-white shadow-lg"
            onClick={() => {
              window.open(
                "https://wa.me/919325595711?text=Hi%20Bright%20India,%20I%20would%20like%20to%20get%20a%20quote%20for%20LED%20lighting%20products.",
                "_blank"
              );
            }}
          >
            Get Quote
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Bright India Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-bold">Bright India</span>
              </div>
              <p className="text-[#CCCCCC] mb-4">
                Leading the LED revolution with premium lighting solutions for
                modern India.
              </p>
              <div className="flex space-x-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-[#FBB034] fill-current" />
                  <Star className="h-4 w-4 text-[#FBB034] fill-current" />
                  <Star className="h-4 w-4 text-[#FBB034] fill-current" />
                  <Star className="h-4 w-4 text-[#FBB034] fill-current" />
                  <Star className="h-4 w-4 text-[#FBB034] fill-current" />
                </div>
                <span className="text-sm text-[#CCCCCC]">4.9/5 Rating</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-[#CCCCCC]">
                <li>
                  <Link
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Smart Lighting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Commercial Lighting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Decorative Lighting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Outdoor Lighting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[#CCCCCC]">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@brightindia.com"
                    className="hover:text-white transition-colors"
                  >
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+919325595711"
                    className="hover:text-white transition-colors"
                  >
                    Quality
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:careers@brightindia.com"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-[#CCCCCC]">
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:support@brightindia.com"
                    className="hover:text-white transition-colors"
                  >
                    Installation Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+919876543210"
                    className="hover:text-white transition-colors"
                  >
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:support@brightindia.com"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-[#CCCCCC]">
            <p>
              &copy; 2024 Bright India. All rights reserved. | Illuminating
              India with Premium LED Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
