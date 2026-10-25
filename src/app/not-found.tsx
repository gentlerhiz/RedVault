import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-md">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vault-red/10 mb-6">
            <Lock className="h-8 w-8 text-vault-red" />
          </div>

          {/* Heading */}
          <p className="text-sm font-semibold text-vault-red mb-2">404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            This page is locked away or doesn&apos;t exist. Check the URL, or head back to safety.
          </p>

          <Button asChild size="lg" className="bg-vault-red hover:bg-vault-red-dark text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
