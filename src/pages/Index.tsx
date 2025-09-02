import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import { 
  FolderKanban, 
  GraduationCap, 
  Calendar, 
  TrendingUp,
  Users,
  MessageSquare,
  Plus,
  ArrowRight
} from "lucide-react";

const Index = () => {
  // Mock data - replace with real data from Supabase
  const userStats = {
    projects: 3,
    trainings: 5,
    events: 8
  };

  const announcements = [
    {
      id: 1,
      title: "New AI Workshop Series Starting Next Week",
      content: "Join our comprehensive AI workshop series covering machine learning fundamentals and practical applications.",
      date: "2 hours ago"
    },
    {
      id: 2,
      title: "Hackathon Registration Now Open",
      content: "Annual tech hackathon is here! Form your teams and register before the deadline.",
      date: "1 day ago"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      title: "New discussion in Web Development Project",
      user: "Sarah Chen",
      time: "5 min ago"
    },
    {
      id: 2,
      title: "Mobile App prototype ready for review",
      user: "Alex Kumar",
      time: "1 hour ago"
    },
    {
      id: 3,
      title: "Database schema updated",
      user: "Maria Garcia",
      time: "3 hours ago"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, <span className="bg-gradient-primary bg-clip-text text-transparent">John</span>!
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening in your club today
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="animate-float">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="My Projects"
          value={userStats.projects}
          icon={FolderKanban}
          trend={{ value: 12, label: "this month" }}
        />
        <StatCard
          title="Trainings Enrolled"
          value={userStats.trainings}
          icon={GraduationCap}
          trend={{ value: 8, label: "this month" }}
        />
        <StatCard
          title="Events Joined"
          value={userStats.events}
          icon={Calendar}
          trend={{ value: 15, label: "this month" }}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="btn-gradient h-16 text-left justify-start space-x-3 hover:scale-105 transition-transform">
          <Plus className="w-5 h-5" />
          <div>
            <div className="font-medium">Join a Project</div>
            <div className="text-xs opacity-90">Find exciting projects to contribute</div>
          </div>
        </Button>
        
        <Button className="btn-accent h-16 text-left justify-start space-x-3 hover:scale-105 transition-transform">
          <GraduationCap className="w-5 h-5" />
          <div>
            <div className="font-medium">Register for Training</div>
            <div className="text-xs opacity-90">Enhance your skills</div>
          </div>
        </Button>
        
        <Button variant="outline" className="h-16 text-left justify-start space-x-3 border-2 hover:bg-muted/50 hover:scale-105 transition-all">
          <Calendar className="w-5 h-5" />
          <div>
            <div className="font-medium">View Event Calendar</div>
            <div className="text-xs text-muted-foreground">See upcoming events</div>
          </div>
        </Button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Announcements */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Latest Announcements</h2>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
              View all <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="card-elevated p-4 rounded-lg border border-border/50">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium text-foreground line-clamp-1">
                      {announcement.title}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                      {announcement.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {announcement.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
              View all <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="card-elevated p-4 rounded-lg border border-border/50 hover:border-primary/20 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground line-clamp-1">
                      {activity.title}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>by {activity.user}</span>
                      <span>•</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
