// import React, { useState, useEffect } from "react";
// import { Heart, Users, Leaf, ArrowRight, Mail, Phone, MapPin, Calendar, Clock, Bell } from "lucide-react";

// // Countdown Timer Component
// const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate.getTime() - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000)
//         });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   const TimeUnit = ({ value, label }: { value: number, label: string }) => (
//     <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//       <div className="text-4xl md:text-5xl font-black text-white mb-2">{value.toString().padStart(2, '0')}</div>
//       <div className="text-blue-200 font-semibold uppercase tracking-wide">{label}</div>
//     </div>
//   );

//   return (
//     <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
//       <TimeUnit value={timeLeft.days} label="Days" />
//       <TimeUnit value={timeLeft.hours} label="Hours" />
//       <TimeUnit value={timeLeft.minutes} label="Minutes" />
//       <TimeUnit value={timeLeft.seconds} label="Seconds" />
//     </div>
//   );
// };

// // Email Signup Component
// const EmailSignup = () => {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubmit = () => {
//     if (email) {
//       setSubscribed(true);
//       setEmail('');
//       setTimeout(() => setSubscribed(false), 3000);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       {!subscribed ? (
//         <div className="flex gap-3">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
//             onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
//           />
//           <button
//             onClick={handleSubmit}
//             className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
//           >
//             <Bell className="w-5 h-5" />
//             Notify Me
//           </button>
//         </div>
//       ) : (
//         <div className="bg-green-500/20 border border-green-400/30 rounded-full px-6 py-4 text-center">
//           <span className="text-green-200 font-semibold">✓ Thank you! We'll notify you when we launch.</span>
//         </div>
//       )}
//     </div>
//   );
// };

// // Preview Feature Card
// const PreviewCard = ({ icon: Icon, title, description, comingSoon = false }: { 
//   icon: React.ComponentType<any>, 
//   title: string, 
//   description: string,
//   comingSoon?: boolean
// }) => (
//   <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
//     {comingSoon && (
//       <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-gray-900 px-3 py-1 rounded-full">
//         SOON
//       </div>
//     )}
//     <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10">
//       <Icon className="w-8 h-8 text-blue-300" />
//     </div>
//     <h3 className="font-bold text-xl text-white mb-3 text-center">{title}</h3>
//     <p className="text-blue-200 leading-relaxed text-center opacity-80">{description}</p>
//   </div>
// );

// // Hero Section with Launch Countdown
// const HeroSection = () => {
//   // Set launch date to 30 days from now
//   const launchDate = new Date();
//   launchDate.setDate(launchDate.getDate() + 30);

//   return (
//     <section className="w-full relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
//       {/* Background with parallax effect */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//           alt=""
//           className="w-full h-full object-cover scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 4}s`,
//               animationDuration: `${2 + Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* Launch Badge */}
//         <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8">
//           <Clock className="w-5 h-5 text-yellow-400" />
//           <span className="text-yellow-200 font-semibold">Launching Soon</span>
//         </div>

//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
//           <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
//             Gurukrupa
//           </span>
//           <br />
//           <span className="text-4xl md:text-5xl lg:text-6xl font-light">Foundation</span>
//         </h1>
        
//         <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-12 leading-relaxed">
//           We're building something amazing to transform communities through education, healthcare, and sustainable development.
//           <span className="block mt-3 text-lg text-blue-200">Get ready for positive change!</span>
//         </p>

//         {/* Countdown Timer */}
//         <div className="mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Launch Countdown</h2>
//           <CountdownTimer targetDate={launchDate} />
//         </div>

//         {/* Email Signup */}
//         <div className="mb-8">
//           <h3 className="text-xl text-blue-200 mb-6">Be the first to know when we launch!</h3>
//           <EmailSignup />
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex gap-6 flex-wrap justify-center">
//           <a
//             href="#preview"
//             className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
//           >
//             Preview Our Work
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </a>
//           <a
//             href="mailto:info@gurukrupafoundation.org"
//             className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-3"
//           >
//             <Mail className="w-5 h-5" />
//             Contact Us
//           </a>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Preview Section
// const PreviewSection = () => (
//   <section id="preview" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
//     <div className="absolute inset-0">
//       <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
//       <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
//     </div>

//     <div className="max-w-7xl mx-auto px-6 relative z-10">
//       {/* Section Header */}
//       <div className="text-center mb-20">
//         <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
//           What's Coming
//         </h2>
//         <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
//         <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
//           We're preparing comprehensive programs to make a lasting impact in communities that need it most.
//         </p>
//       </div>

//       {/* Preview Cards Grid */}
//       <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
//         <PreviewCard
//           icon={Heart}
//           title="Community Outreach"
//           description="Essential services including food security programs, disaster relief, and healthcare camps reaching 15+ villages monthly."
//         />
//         <PreviewCard
//           icon={Users}
//           title="Education & Skills"
//           description="8 learning centers with digital literacy programs, vocational training, and scholarship support for 200+ students."
//         />
//         <PreviewCard
//           icon={Leaf}
//           title="Environmental Action"
//           description="Water conservation projects, organic farming initiatives, and renewable energy solutions across 25 communities."
//         />
//       </div>

//       {/* Planned Impact Stats */}
//       <div className="text-center">
//         <h3 className="text-3xl font-bold text-white mb-12">Our Planned Impact</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { number: "2,500+", label: "Lives to Impact" },
//             { number: "35", label: "Villages to Serve" },
//             { number: "12", label: "Programs to Launch" },
//             { number: "100+", label: "Volunteers Needed" },
//           ].map((stat, index) => (
//             <div key={index} className="p-6">
//               <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-blue-200 font-semibold">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // Get Involved Section
// const GetInvolvedSection = () => (
//   <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-purple-900 text-white text-center relative overflow-hidden">
//     <div className="absolute inset-0">
//       <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
//       <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
//     </div>

//     <div className="relative z-10 max-w-4xl mx-auto px-6">
//       <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
//         Join Our 
//         <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//           Mission
//         </span>
//       </h2>
      
//       <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-blue-100 leading-relaxed">
//         Even before our official launch, you can be part of our journey and help us prepare for maximum impact.
//       </p>
      
//       <div className="grid md:grid-cols-3 gap-8 mb-12">
//         <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//           <Bell className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
//           <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
//           <p className="text-blue-200">Get launch notifications and progress updates</p>
//         </div>
//         <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//           <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
//           <h3 className="text-xl font-bold mb-3">Pre-Register</h3>
//           <p className="text-blue-200">Join our volunteer network before launch</p>
//         </div>
//         <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//           <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
//           <h3 className="text-xl font-bold mb-3">Early Support</h3>
//           <p className="text-blue-200">Help us prepare with early donations</p>
//         </div>
//       </div>
      
//       <div className="flex gap-6 flex-wrap justify-center">
//         <a
//           href="mailto:volunteer@gurukrupafoundation.org"
//           className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
//         >
//           <Users className="w-6 h-6" />
//           Pre-Register as Volunteer
//           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//         </a>
//         <a
//           href="mailto:donate@gurukrupafoundation.org"
//           className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg flex items-center gap-3"
//         >
//           <Heart className="w-6 h-6 text-red-400" />
//           Early Support
//         </a>
//       </div>
//     </div>
//   </section>
// );

// // Footer
// const Footer = () => (
//   <footer className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//     <div className="max-w-6xl mx-auto px-6">
//       <div className="grid md:grid-cols-2 gap-12 mb-12">
//         {/* Foundation Info */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Gurukrupa Foundation
//           </h3>
//           <p className="text-gray-400 leading-relaxed mb-6">
//             Preparing to create lasting change through compassion, education, and sustainable community development.
//           </p>
//           <div className="inline-flex items-center gap-3 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2">
//             <Calendar className="w-4 h-4 text-yellow-400" />
//             <span className="text-yellow-200 text-sm font-semibold">Launching Soon - 2024</span>
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
//           <div className="space-y-3">
//             <div className="flex items-center gap-3 text-gray-400">
//               <Mail className="w-5 h-5 text-blue-400" />
//               <a href="mailto:info@gurukrupafoundation.org" className="hover:text-white transition-colors">
//                 info@gurukrupafoundation.org
//               </a>
//             </div>
//             <div className="flex items-center gap-3 text-gray-400">
//               <Phone className="w-5 h-5 text-blue-400" />
//               <a href="tel:+911234567890" className="hover:text-white transition-colors">
//                 +91 12345 67890
//               </a>
//             </div>
//             <div className="flex items-center gap-3 text-gray-400">
//               <MapPin className="w-5 h-5 text-blue-400" />
//               <span>Rural Development Center, India</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="border-t border-gray-700 pt-8 text-center">
//         <p className="text-gray-500 mb-2">
//           &copy; {new Date().getFullYear()} Gurukrupa Foundation. All Rights Reserved.
//         </p>
//         <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
//           Preparing with <Heart className="w-4 h-4 text-red-400" /> for a better world
//         </p>
//       </div>
//     </div>
//   </footer>
// );

// // Main App Component
// const App = () => {
//   return (
//     <div className="font-sans text-gray-800 overflow-x-hidden" lang="en">
//       <HeroSection />
//       <PreviewSection />
//       <GetInvolvedSection />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { Heart, Users, Leaf, ArrowRight, Mail,Phone, MapPin, Calendar, Clock, Bell } from "lucide-react";


const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 flex-1 text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">{value.toString().padStart(2, '0')}</div>
      <div className="text-blue-200 font-semibold uppercase tracking-wide text-sm md:text-base">{label}</div>
    </div>
  );

  return (
    <div className="flex gap-3 md:gap-6 lg:gap-8 w-full max-w-4xl mx-auto">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

// Email Signup Component
const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {!subscribed ? (
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Bell className="w-5 h-5" />
            Notify Me
          </button>
        </div>
      ) : (
        <div className="bg-green-500/20 border border-green-400/30 rounded-full px-6 py-4 text-center">
          <span className="text-green-200 font-semibold">✓ Thank you! We'll notify you when we launch.</span>
        </div>
      )}
    </div>
  );
};

// Preview Feature Card
const PreviewCard = ({ icon: Icon, title, description, comingSoon = false }) => (
  <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
    {comingSoon && (
      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-gray-900 px-3 py-1 rounded-full">
        SOON
      </div>
    )}
    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10">
      <Icon className="w-8 h-8 text-blue-300" />
    </div>
    <h3 className="font-bold text-xl text-white mb-3 text-center">{title}</h3>
    <p className="text-blue-200 leading-relaxed text-center opacity-80">{description}</p>
  </div>
);

// Hero Section with Launch Countdown
const HeroSection = () => {
  // Set launch date to tomorrow at 6:59 AM
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 1);
  launchDate.setHours(6);
  launchDate.setMinutes(59);
  launchDate.setSeconds(0);
  launchDate.setMilliseconds(0);

  return (
    <section className="w-full relative flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8">
          <Clock className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-200 font-semibold">Launching Tomorrow 6:59:59 AM</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Gurukrupa
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-6xl font-light">Foundation</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-blue-100 mb-12 leading-relaxed px-4">
          We're building something amazing to transform communities through education, healthcare, and sustainable development.
          <span className="block mt-3 text-base md:text-lg text-blue-200">Get ready for positive change!</span>
        </p>

       
        <div className="mb-8 px-4">
          <h3 className="text-lg md:text-xl text-blue-200 mb-6">Be the first to know when we launch!</h3>
          <EmailSignup />
        </div>

        <div className="flex gap-4 md:gap-6 flex-wrap justify-center px-4">
          <a
            href="#preview"
            className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            Preview Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:info@gurukrupafoundation.org"
            className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

// Preview Section
const PreviewSection = () => (
  <section id="preview" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
          What's Coming
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg md:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
          We're preparing comprehensive programs to make a lasting impact in communities that need it most.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16">
        <PreviewCard
          icon={Heart}
          title="Community Outreach"
          description="Essential services including food security programs, disaster relief, and healthcare camps reaching 15+ villages monthly."
        />
        <PreviewCard
          icon={Users}
          title="Education & Skills"
          description="8 learning centers with digital literacy programs, vocational training, and scholarship support for 200+ students."
        />
        <PreviewCard
          icon={Leaf}
          title="Environmental Action"
          description="Water conservation projects, organic farming initiatives, and renewable energy solutions across 25 communities."
        />
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Gurukrupa Foundation
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Preparing to create lasting change through compassion, education, and sustainable community development.
          </p>
          <div className="inline-flex items-center gap-3 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2">
            <Calendar className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-200 text-sm font-semibold">Launching Tomorrow 6:59:59 AM</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">Ready to make a difference?</p>
            <p className="text-white font-semibold">Tomorrow we begin our journey together.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center">
        <p className="text-gray-500 text-sm">© 2025 Gurukrupa Foundation. Building communities, changing lives.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden w-full" lang="en">
      <HeroSection />
      <PreviewSection />
      <Footer />
    </div>
  );
};

export default App;
