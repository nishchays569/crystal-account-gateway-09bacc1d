import FloatingCoins from "@/components/FloatingCoins";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crypto-dark via-crypto-darker to-crypto-dark flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingCoins />
      
      <div className="crypto-card w-full max-w-md p-8 relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-crypto-gold" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Success !
        </h1>
        
        <p className="text-muted-foreground mb-6">
          A email has been send to your email@domain.com. Please check for an email from company and click on the included link to reset your password.
        </p>
        
        <Link to="/" className="crypto-button inline-block w-full text-center">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Success;
