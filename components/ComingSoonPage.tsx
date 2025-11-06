'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Home, 
  Camera, 
  Sparkles,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  DollarSign,
  Map,
  Shield,
  Calendar,
  Globe,
  Building2,
  Calculator,
  CreditCard,
  CheckCircle,
  Bell,
  CheckCircle2
} from 'lucide-react'

// TikTok icon component (lucide-react doesn't have TikTok, so we create a custom one)
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)
import { INPUT_BASE } from '@/lib/theme/constants'

// Countdown timer component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, labelNepali: 'दिन' },
    { label: 'Hours', value: timeLeft.hours, labelNepali: 'घण्टा' },
    { label: 'Minutes', value: timeLeft.minutes, labelNepali: 'मिनेट' },
    { label: 'Seconds', value: timeLeft.seconds, labelNepali: 'सेकेन्ड' }
  ]

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="bg-card border border-primary/20 rounded-xl p-4 min-w-[80px] shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">
              {unit.label}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {unit.labelNepali}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [userType, setUserType] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Launch date: January 1, 2026
  const launchDate = new Date('2026-01-01T00:00:00')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/coming-soon/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, phone, userType })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSuccess(true)
      setEmail('')
      setName('')
      setPhone('')
      setUserType('')
      
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err: any) {
      setError(err.message || 'Failed to sign up. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const keyFeatures = [
    {
      icon: Home,
      title: '3D Virtual Tours',
      description: 'Explore every room online before visiting in person',
      nepali: 'घर हेर्न जानु अघि नै, मोबाइल वा कम्प्युटरबाट सबै कोठा ३डीमा हेर्न सक्नुहुन्छ।'
    },
    {
      icon: DollarSign,
      title: 'Smart Price Estimation (MyGharValue™)',
      description: 'Get AI-based property value instantly',
      nepali: 'AI सिस्टमले तुरुन्तै तपाईंको घर वा जग्गाको अनुमानित मूल्य देखाउँछ।'
    },
    {
      icon: Shield,
      title: 'Verified Agents & Builders',
      description: 'Work only with trusted professionals',
      nepali: 'अब केवल भेरिफाइड र विश्वासिला एजेन्ट तथा बिल्डरसँग मात्रै काम गर्नुहोस्।'
    },
    {
      icon: Map,
      title: 'Interactive Maps & Site Plans',
      description: 'View neighborhoods and project layouts visually',
      nepali: 'तपाईंको घर वरपरको इलाका र प्रोजेक्टको पुरा लेआउट म्यापमा हेर्न सकिन्छ।'
    },
    {
      icon: Camera,
      title: 'Professional Photography & Drone Shots',
      description: 'See properties in their best light',
      nepali: 'प्रोफेसनल फोटो र ड्रोन भिडियोले सम्पत्तिलाई अझ राम्रो रूपमा हेर्न सकिन्छ।'
    },
    {
      icon: Calculator,
      title: 'Construction & Loan Tools',
      description: 'Estimate RCC cost, EMI, and plan your project easily',
      nepali: 'घर बनाउन लाग्ने खर्च, ईएमआई वा लोनको हिसाब तुरुन्तै निकाल्न सकिन्छ।'
    },
    {
      icon: Calendar,
      title: 'Visit Scheduling & Reminders',
      description: 'Book tours and receive instant confirmations',
      nepali: 'घर हेर्नको लागि समय बुक गर्नुहोस्, हामी तुरुन्तै कन्फर्मेसन पठाउँछौं।'
    },
    {
      icon: Globe,
      title: 'Bilingual Experience',
      description: 'English and Nepali support for all users',
      nepali: 'साइट अंग्रेजी र नेपाली दुवै भाषामा चलाउन सकिन्छ।'
    },
    {
      icon: CheckCircle,
      title: 'Featured & Verified Listings',
      description: 'Highlighted properties get higher visibility',
      nepali: 'फिचर गरिएको सम्पत्तिले सबैभन्दा बढी ध्यान र भ्यू पाउँछ।'
    },
    {
      icon: CreditCard,
      title: 'Secure Login & Role-based Dashboards',
      description: 'For buyers, agents, photographers, and builders',
      nepali: 'खरिदकर्ता, एजेन्ट, फोटोग्राफर र बिल्डर सबैको लागि अलग सुरक्षित ड्यासबोर्ड उपलब्ध हुन्छ।'
    },
    {
      icon: Bell,
      title: 'Property Alerts & Saved Searches',
      description: 'Get notified when new properties match your criteria',
      nepali: 'तपाईंको मनपर्ने प्रकारको घर फेला परेमा तुरुन्तै सूचना पाउनुहोस्।'
    },
    {
      icon: Building2,
      title: 'Analytics & Performance Insights',
      description: 'Track views, engagement, and property performance metrics',
      nepali: 'आफ्नो घर वा लिस्टिङ कति पटक हेर्ने भयो, कसले चासो देखायो, र कस्तो प्रदर्शन भइरहेको छ — सबै कुरा सजिलै हेर्न सकिन्छ।'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt="Modern real estate interior"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          {/* Additional gradient overlay for brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>

        {/* Image Credit */}
        <div className="absolute bottom-2 right-2 z-10">
          <a
            href="https://unsplash.com/@frameforyourheart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-white/60 hover:text-white/80 transition-colors"
          >
            Photo by Frames For Your Heart on Unsplash
          </a>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/logo/3dghar-logo.svg?v=3"
                alt="3DGhar Logo"
                className="h-32 md:h-40 w-auto mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl font-semibold text-white mb-3 drop-shadow-md">
              Nepal's First 3D Smart Real Estate Platform
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              नेपालको पहिलो ३डी स्मार्ट रियल इस्टेट प्लेटफर्म
            </p>

            {/* Launch Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 mb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-base font-semibold text-primary">Launching January 2026</span>
              <span className="text-sm text-muted-foreground">| जनवरी २०२६</span>
            </motion.div>

            {/* Hero Description */}
            <motion.div
              className="max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 drop-shadow-md">
                Experience Properties Like Never Before — in <span className="text-primary font-bold">3D</span>
              </p>
              <p className="text-lg text-white/90 drop-shadow-md">
                3DGhar.com brings transparency, trust, and technology to Nepal's real estate market. 
                Connect buyers, agents, and builders through immersive 3D tours and smart tools.
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-lg text-white/90 mb-6 font-medium drop-shadow-md">Launching in:</p>
              <CountdownTimer targetDate={launchDate} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                variant="primary"
                className="text-lg px-10 py-7 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                onClick={() => {
                  document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Early Access
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-10 py-7"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore Features
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5 },
            y: { duration: 1.5, repeat: Infinity }
          }}
        >
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-sm drop-shadow-md">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Mission/Vision Quote */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4 italic">
                  "Our mission is to make Nepal's real estate transparent, modern, and connected through 3D technology."
                </p>
                <p className="text-lg text-muted-foreground">
                  "हाम्रो मिशन ३डी प्रविधिको माध्यमबाट नेपालको रियल इस्टेटलाई पारदर्शी, आधुनिक, र जोडिएको बनाउनु हो।"
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Features Section */}
          <motion.div id="features" variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Features
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                मुख्य विशेषताहरू
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {feature.description}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.nepali}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Email Signup Form */}
          <motion.div id="signup-form" variants={itemVariants} className="mb-16">
            <Card className="max-w-2xl mx-auto border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Thank You! 🎉
                    </h3>
                    <p className="text-muted-foreground">
                      We'll notify you as soon as we launch. Get ready for something amazing!
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      हामी लान्च भएको बित्तिकै तपाईंलाई सूचना दिनेछौं। अद्भुत कुराको लागि तयार हुनुहोस्!
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
                      Be the First to Explore Nepal's Smartest Property Marketplace
                    </h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Get early access and exclusive updates when we launch
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={INPUT_BASE}
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className={INPUT_BASE}
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number (Optional)"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={INPUT_BASE}
                        />
                      </div>
                      <div>
                        <Select value={userType} onValueChange={setUserType}>
                          <SelectTrigger className={INPUT_BASE}>
                            <SelectValue placeholder="I am a... (Optional)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buyer">Buyer / Home Seeker</SelectItem>
                            <SelectItem value="agent">Real Estate Agent</SelectItem>
                            <SelectItem value="builder">Builder / Developer</SelectItem>
                            <SelectItem value="photographer">Photographer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {error && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-red-600 text-center"
                        >
                          {error}
                        </motion.p>
                      )}
                      
                      <Button
                        type="submit"
                        size="lg"
                        variant="primary"
                        disabled={isSubmitting || !email}
                        className="w-full text-lg py-6"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div
                              className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            Get Early Access
                          </span>
                        )}
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy. No spam, unsubscribe anytime.
                      </p>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Social & Community */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Follow us for sneak peeks and updates
            </h3>
            <p className="text-muted-foreground mb-6">@3DGharOfficial</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: TikTok, href: '#', label: 'TikTok' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Instagram, href: '#', label: 'Instagram' }
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="border-t border-border pt-12">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                3D Ghar Technology Pvt. Ltd.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Kathmandu, Nepal
              </p>
              <p className="text-sm text-muted-foreground">
                © 2024 3D Ghar Technology Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                नेपालीले नेपालीको लागि बनाएको | Built by Nepali, for Nepali
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


