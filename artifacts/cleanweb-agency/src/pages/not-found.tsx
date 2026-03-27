import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-navy-950 text-white">
      <div className="text-center flex flex-col items-center max-w-md px-4">
        <AlertCircle className="w-16 h-16 text-electric mb-6" />
        <h1 className="text-4xl font-extrabold mb-4 font-display">404 - Seite nicht gefunden</h1>
        <p className="text-lg text-white/60 mb-8">
          Die gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Link href="/" className="inline-block">
          <Button size="lg">Zurück zur Startseite</Button>
        </Link>
      </div>
    </div>
  );
}
