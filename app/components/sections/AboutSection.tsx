








"use client";
import React from 'react';
import { CosmicSection } from '../ui/CosmicSection';
import { SpaceSectionHeader } from '../SpaceSectionHeader';
import { CosmicCard, CosmicCardHeader, CosmicCardTitle, CosmicCardContent } from '../ui/CosmicCard';
import { CosmicButton } from '../ui/CosmicButton';
import { CosmicText, AnimatedCounter } from '../ui/CosmicText';

export function AboutSection() {
  const features = [
    {
      icon: "🚀",
      title: "Innovation Hub",
      description: "Connect with brilliant minds and transform groundbreaking ideas into reality through 48 hours of intense coding and creativity."
    },
    {
      icon: "🌌",
      title: "Cosmic Challenges",
      description: "Tackle real-world problems with a futuristic twist. From AI to blockchain, explore technologies that will shape tomorrow."
    },
    {
      icon: "🛸",
      title: "Stellar Network",
      description: "Build lasting connections with fellow developers, mentors, and industry leaders from across the galaxy."
    },
    {
      icon: "⭐",
      title: "Epic Rewards",
      description: "Compete for incredible prizes, internships, and recognition that will propel your career to new heights."
    }
  ];

  return (
    <CosmicSection id="about" className="relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-blue-900/10 pointer-events-none" />

      <div className="relative z-10">
        <SpaceSectionHeader
          title="About"
          subtitle="Embark on a journey beyond the stars where innovation meets imagination"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 -mt-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <CosmicText variant="h3" className="text-cyan-300">
                The Ultimate Hackathon Experience
              </CosmicText>
              <CosmicText variant="body" className="text-gray-300 leading-relaxed">
                <span className="font-transformers text-cyan-300 font-semibold tracking-wide">PEC HACKS 3.0</span> is not just another hackathon—it's a cosmic adventure that brings together 
                the brightest minds to solve tomorrow's challenges today. Over 48 hours, participants 
                will dive deep into cutting-edge technologies, collaborate with industry experts, and 
                create solutions that could change the world.
              </CosmicText>
              <CosmicText variant="body" className="text-gray-300 leading-relaxed">
                Whether you're a seasoned developer or just starting your journey, our event provides 
                the perfect launchpad for your ideas to reach the stars.
              </CosmicText>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CosmicButton variant="primary" size="lg" glow>
                Register Now
              </CosmicButton>
              <CosmicButton variant="outline" size="lg">
                View Schedule
              </CosmicButton>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CosmicCard variant="feature" hover glow>
                <div className="text-center">
                  <div className="text-3xl font-major-mono text-cyan-400 mb-2">
                    <AnimatedCounter end={48} />
                  </div>
                  <CosmicText variant="caption" className="text-gray-300">Hours of Innovation</CosmicText>
                </div>
              </CosmicCard>
              
              <CosmicCard variant="feature" hover glow>
                <div className="text-center">
                  <div className="text-3xl font-major-mono text-cyan-400 mb-2">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <CosmicText variant="caption" className="text-gray-300">Participants</CosmicText>
                </div>
              </CosmicCard>
              
              <CosmicCard variant="highlight" hover glow>
                <div className="text-center">
                  <div className="text-3xl font-major-mono text-green-400 mb-2">
                    <AnimatedCounter end={5} prefix="₹" suffix="L+" />
                  </div>
                  <CosmicText variant="caption" className="text-gray-300">Total Prizes</CosmicText>
                </div>
              </CosmicCard>
              
              <CosmicCard variant="highlight" hover glow>
                <div className="text-center">
                  <div className="text-3xl font-major-mono text-yellow-400 mb-2">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <CosmicText variant="caption" className="text-gray-300">Problem Tracks</CosmicText>
                </div>
              </CosmicCard>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <CosmicCard key={index} variant="default" hover className="text-center">
              <CosmicCardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CosmicCardTitle className="text-lg">{feature.title}</CosmicCardTitle>
              </CosmicCardHeader>
              <CosmicCardContent>
                <p className="text-sm leading-relaxed">{feature.description}</p>
              </CosmicCardContent>
            </CosmicCard>
          ))}
        </div>
      </div>
    </CosmicSection>
  );
}
