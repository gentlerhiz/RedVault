"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SUBSCRIPTION_PLANS, SubscriptionPlan } from "@/types";

export function Pricing() {
  const plans = [
    {
      plan: SubscriptionPlan.BASIC,
      ...SUBSCRIPTION_PLANS[SubscriptionPlan.BASIC],
    },
    {
      plan: SubscriptionPlan.PRO,
      ...SUBSCRIPTION_PLANS[SubscriptionPlan.PRO],
    },
    {
      plan: SubscriptionPlan.BUSINESS,
      ...SUBSCRIPTION_PLANS[SubscriptionPlan.BUSINESS],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Simple, transparent
            <span className="text-vault-red"> pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the perfect plan for your needs. All plans include 3-day trial period.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.popular ? "md:scale-105" : ""}
            >
              <Card className={`relative h-full ${plan.popular ? "border-vault-red border-2 shadow-xl" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-vault-red text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.storage} GB Storage
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-vault-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-vault-red hover:bg-vault-red-dark"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/auth/signup">
                      Get Started
                    </Link>
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    3-day free trial • No credit card required
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Referral Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-vault-red/5 border-vault-red/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">🎁 Refer & Earn 5% Discount</h3>
              <p className="text-sm text-muted-foreground">
                Share your referral code with friends and get 5% off for each successful signup!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
