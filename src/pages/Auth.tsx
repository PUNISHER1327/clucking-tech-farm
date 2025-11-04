
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { Egg } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [numberOfFarms, setNumberOfFarms] = useState('');
  const [totalFarmArea, setTotalFarmArea] = useState('');
  const [chickensPerFarm, setChickensPerFarm] = useState('');
  const [farmLocation, setFarmLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({ 
          email, 
          password 
        });

        if (error) throw error;
        if (data.user) {
          toast.success('Successfully signed in!');
          // Redirect directly to external dashboard with full page navigation
          window.location.href = 'https://preview--eggcellent-farmer-dashboard.lovable.app';
          return;
        }
      } else {
        const { data, error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: {
            data: {
              full_name: fullName,
              number_of_farms: numberOfFarms,
              total_farm_area: totalFarmArea,
              chickens_per_farm: chickensPerFarm,
              farm_location: farmLocation
            }
          }
        });

        if (error) throw error;
        toast.success('Registration successful! Redirecting to dashboard...');
        // Redirect to external dashboard after successful signup
        window.location.href = 'https://preview--eggcellent-farmer-dashboard.lovable.app';
      }
    } catch (error: any) {
      toast.error(error.message || 'An error occurred during authentication');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Egg className="h-12 w-12 text-highlight animate-pulse-glow mb-4" />
          <h1 className="text-3xl font-space font-bold text-white">Smart Poultry</h1>
          <p className="text-gray-400 text-center mt-2">
            {isLogin ? 'Sign in to access your dashboard' : 'Create an account to get started'}
          </p>
        </div>
        
        <div className="glass-morphism rounded-lg p-8 border border-highlight/30 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleAuth} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-black/60 border-highlight/30 text-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-black/60 border-highlight/30 text-white"
                required
              />
            </div>

            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="bg-black/60 border-highlight/30 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numberOfFarms" className="text-white">Number of Farms</Label>
                  <Input
                    id="numberOfFarms"
                    type="number"
                    min="1"
                    value={numberOfFarms}
                    onChange={(e) => setNumberOfFarms(e.target.value)}
                    placeholder="e.g., 2"
                    className="bg-black/60 border-highlight/30 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalFarmArea" className="text-white">Total Farm Area (acres)</Label>
                  <Input
                    id="totalFarmArea"
                    type="number"
                    step="0.01"
                    min="0"
                    value={totalFarmArea}
                    onChange={(e) => setTotalFarmArea(e.target.value)}
                    placeholder="e.g., 50.5"
                    className="bg-black/60 border-highlight/30 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="chickensPerFarm" className="text-white">Chickens per Farm</Label>
                  <Input
                    id="chickensPerFarm"
                    type="number"
                    min="1"
                    value={chickensPerFarm}
                    onChange={(e) => setChickensPerFarm(e.target.value)}
                    placeholder="e.g., 1000"
                    className="bg-black/60 border-highlight/30 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="farmLocation" className="text-white">Farm Location</Label>
                  <Input
                    id="farmLocation"
                    type="text"
                    value={farmLocation}
                    onChange={(e) => setFarmLocation(e.target.value)}
                    placeholder="e.g., California, USA"
                    className="bg-black/60 border-highlight/30 text-white"
                    required
                  />
                </div>
              </>
            )}

            <Button 
              type="submit" 
              className="w-full bg-highlight text-black hover:bg-highlight-muted"
              disabled={loading}
            >
              {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-highlight hover:text-highlight-muted text-sm underline"
            >
              {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Background accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-highlight/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-highlight/10 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default Auth;
