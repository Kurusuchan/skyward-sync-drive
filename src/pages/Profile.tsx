import { ArrowLeft, User, Mail, Calendar, Shield, HardDrive, Settings, Camera, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Mock user data - in a real app this would come from authentication
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    joinDate: "March 15, 2023",
    plan: "Premium",
    avatar: "", // Empty for demo - will show initials
    storageUsed: 15.2,
    storageTotal: 100,
    filesCount: 247,
    foldersCount: 18
  };

  const storagePercentage = (user.storageUsed / user.storageTotal) * 100;

  const profileSections = [
    {
      title: "Account Information",
      items: [
        { icon: User, label: "Full Name", value: user.name },
        { icon: Mail, label: "Email Address", value: user.email },
        { icon: Calendar, label: "Member Since", value: user.joinDate },
        { icon: Shield, label: "Plan", value: user.plan, badge: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Profile Header Card */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full shadow-lg"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <Badge variant="secondary" className="w-fit">
                    {user.plan}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{user.email}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-lg">{user.filesCount}</div>
                    <div className="text-muted-foreground">Files</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-lg">{user.foldersCount}</div>
                    <div className="text-muted-foreground">Folders</div>
                  </div>
                </div>
              </div>

              <Button className="shrink-0">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Storage Usage Card */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-5 w-5 text-primary" />
              Storage Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Used Storage</span>
                <span className="font-medium">{user.storageUsed} GB of {user.storageTotal} GB</span>
              </div>
              <Progress value={storagePercentage} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{storagePercentage.toFixed(1)}% used</span>
                <span>{(user.storageTotal - user.storageUsed).toFixed(1)} GB available</span>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Documents: 4.2 GB</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Images: 8.1 GB</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span>Videos: 2.9 GB</span>
              </div>
            </div>

            <Button variant="outline" className="w-full sm:w-auto">
              Upgrade Storage
            </Button>
          </CardContent>
        </Card>

        {/* Account Information */}
        {profileSections.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="shadow-card">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div key={itemIndex} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge ? (
                        <Badge variant="default">{item.value}</Badge>
                      ) : (
                        <span className="text-muted-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}

        {/* Settings Card */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              <Shield className="h-4 w-4 mr-3" />
              Privacy & Security
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Mail className="h-4 w-4 mr-3" />
              Notification Preferences
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HardDrive className="h-4 w-4 mr-3" />
              Storage Management
            </Button>
            
            <Separator />
            
            <Button variant="destructive" className="w-full">
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;