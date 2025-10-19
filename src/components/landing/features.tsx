"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Cloud, FileCheck, Share2, Smartphone, Users, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Store unlimited files with enterprise-grade infrastructure",
      color: "text-blue-500",
    },
    {
      icon: FileCheck,
      title: "File Management",
      description: "Organize with folders, tags, and powerful search",
      color: "text-green-500",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share files securely with password protection and expiry",
      color: "text-purple-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Access your files anywhere, on any device",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with real-time file synchronization",
      color: "text-pink-500",
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Track storage usage and file activity in real-time",
      color: "text-cyan-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Everything you need to
            <span className="text-vault-red"> store and share</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Powerful features designed to make cloud storage simple, secure, and efficient
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-vault-red">
                <CardContent className="p-6">
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
