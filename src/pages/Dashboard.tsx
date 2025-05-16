
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Egg, LogOut, ChevronDown, ArrowUpDown, Bell, User, BarChart4, Thermometer, Droplet, Cloud, AlertTriangle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { toast } from '@/components/ui/sonner';

// Sample data for charts
const tempData = [
  { hour: '00:00', value: 22.1 },
  { hour: '04:00', value: 21.8 },
  { hour: '08:00', value: 22.5 },
  { hour: '12:00', value: 23.7 },
  { hour: '16:00', value: 24.1 },
  { hour: '20:00', value: 23.2 },
  { hour: '24:00', value: 22.6 },
];

const humidityData = [
  { hour: '00:00', value: 62 },
  { hour: '04:00', value: 65 },
  { hour: '08:00', value: 68 },
  { hour: '12:00', value: 67 },
  { hour: '16:00', value: 64 },
  { hour: '20:00', value: 63 },
  { hour: '24:00', value: 62 },
];

const co2Data = [
  { hour: '00:00', value: 750 },
  { hour: '04:00', value: 780 },
  { hour: '08:00', value: 810 },
  { hour: '12:00', value: 850 },
  { hour: '16:00', value: 820 },
  { hour: '20:00', value: 790 },
  { hour: '24:00', value: 760 },
];

const ammoniaData = [
  { hour: '00:00', value: 12 },
  { hour: '04:00', value: 14 },
  { hour: '08:00', value: 15 },
  { hour: '12:00', value: 16 },
  { hour: '16:00', value: 15 },
  { hour: '20:00', value: 13 },
  { hour: '24:00', value: 12 },
];

const Dashboard = () => {
  const [farmName, setFarmName] = useState('Sunshine Poultry Farm');
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Successfully signed out');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'An error signing out');
    }
  };

  useEffect(() => {
    // Check if user is authenticated
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      
      // Fetch user profile if authenticated
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (error) throw error;
        
        setUserData(data);
        if (data?.farm_name) {
          setFarmName(data.farm_name);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    
    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-highlight/30 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Egg className="h-6 w-6 text-highlight mr-2" />
            <span className="font-space font-bold text-xl">Smart Poultry Dashboard</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Return Home</span>
              </Link>
            </Button>
            
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-gray-300 mr-2" />
              <div className="h-2 w-2 bg-highlight rounded-full absolute ml-3 mt-[-12px]"></div>
            </div>
            
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-highlight/20 flex items-center justify-center">
                <User className="h-4 w-4 text-highlight" />
              </div>
              <span className="ml-2 mr-1 hidden sm:inline">{userData?.full_name || 'User'}</span>
              <ChevronDown className="h-4 w-4 text-gray-300" />
            </div>
            
            <Button 
              variant="outline" 
              className="border-highlight/30 text-highlight hover:bg-highlight/10"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Farm overview */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-space font-bold">{farmName}</h1>
            <p className="text-gray-400">Real-time monitoring dashboard</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <Button variant="outline" className="border-highlight/30 text-white hover:bg-highlight/10 mr-3">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Filter Data
            </Button>
            
            <Button className="bg-highlight text-black hover:bg-highlight-muted">
              <BarChart4 className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
        
        {/* Overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-morphism rounded-lg p-6 border border-highlight/30">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Thermometer className="h-6 w-6 text-orange-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-gray-300 text-sm">Temperature</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">23.5</span>
                  <span className="text-gray-400 ml-1">°C</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={tempData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#f97316" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-morphism rounded-lg p-6 border border-highlight/30">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Droplet className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-gray-300 text-sm">Humidity</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">65.2</span>
                  <span className="text-gray-400 ml-1">%</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={humidityData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0ea5e9" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-morphism rounded-lg p-6 border border-highlight/30">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Cloud className="h-6 w-6 text-purple-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-gray-300 text-sm">CO₂ Level</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">820</span>
                  <span className="text-gray-400 ml-1">ppm</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={co2Data}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8b5cf6" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-morphism rounded-lg p-6 border border-highlight/30">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-gray-300 text-sm">Ammonia</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">15.8</span>
                  <span className="text-gray-400 ml-1">ppm</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={ammoniaData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#ef4444" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Main chart */}
        <div className="glass-morphism rounded-lg p-6 mb-8 border border-highlight/30">
          <h2 className="text-xl font-space font-bold mb-6">Environmental Trend Analysis</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart 
              data={[...Array(24)].map((_, i) => {
                return {
                  hour: `${i}:00`,
                  temperature: 21 + Math.sin(i/3) * 3 + Math.random(),
                  humidity: 60 + Math.cos(i/6) * 8 + Math.random() * 2,
                  co2: 750 + Math.sin(i/4) * 100 + Math.random() * 20,
                  ammonia: 12 + Math.cos(i/8) * 4 + Math.random()
                };
              })}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="hour" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', borderColor: '#facc15', borderRadius: '0.5rem' }} 
              />
              <Line type="monotone" dataKey="temperature" stroke="#f97316" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="humidity" stroke="#0ea5e9" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="co2" stroke="#8b5cf6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="ammonia" stroke="#ef4444" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Farm Status Summary */}
        <div className="glass-morphism rounded-lg p-6 border border-highlight/30">
          <h2 className="text-xl font-space font-bold mb-6">Farm Status Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 rounded-lg p-4">
              <h3 className="text-gray-300 mb-2">Current Status</h3>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-white font-medium">All Systems Optimal</span>
              </div>
              <p className="text-gray-400 mt-2 text-sm">All monitored parameters are within acceptable ranges</p>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4">
              <h3 className="text-gray-300 mb-2">Feed Status</h3>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Current Level:</span>
                <span className="text-white">78%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-highlight h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <p className="text-gray-400 mt-2 text-sm">Estimated to last: 3.5 days</p>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4">
              <h3 className="text-gray-300 mb-2">Egg Production</h3>
              <div className="text-3xl font-bold text-highlight mb-1">92%</div>
              <p className="text-green-500 text-sm flex items-center">
                <span className="mr-1">↑</span> +3.8% from previous week
              </p>
              <p className="text-gray-400 mt-2 text-sm">Daily average: 0.86 eggs per hen</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
