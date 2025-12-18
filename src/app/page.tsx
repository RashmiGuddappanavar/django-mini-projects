"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Rocket,
  Code2,
  GitBranch,
  FileText,
  CheckCircle2,
  Copy,
  ExternalLink,
  Zap,
  Database,
  Shield,
  Layout,
  Server,
  Users,
  BookOpen,
} from "lucide-react";

interface Project {
  day: number;
  original: string;
  unique: string;
  appName: string;
  description: string;
  features: string[];
  models: string[];
  techStack: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  status: "pending" | "in-progress" | "completed";
  repoName: string;
  structure: string[];
}

const projects: Project[] = [
  {
    day: 1,
    original: "Hello World Django App",
    unique: "DevPulse - Developer Status Dashboard",
    appName: "devpulse",
    description: "A developer status page showing system info, Python version, Django version, and environment details with a modern terminal-style UI.",
    features: [
      "Real-time system information display",
      "Environment variable viewer",
      "Django configuration checker",
      "Interactive terminal-style output",
      "Dark/Light theme toggle",
    ],
    models: [],
    techStack: ["Django 4.2", "Python 3.11", "HTML5", "CSS3"],
    difficulty: "Beginner",
    status: "pending",
    repoName: "devpulse-django",
    structure: [
      "devpulse/",
      "├── manage.py",
      "├── devpulse/",
      "│   ├── settings.py",
      "│   ├── urls.py",
      "│   └── wsgi.py",
      "├── dashboard/",
      "│   ├── views.py",
      "│   ├── urls.py",
      "│   └── templates/",
      "└── README.md",
    ],
  },
  {
    day: 2,
    original: "URL Routing & Views Project",
    unique: "RouteForge - API Endpoint Simulator",
    appName: "routeforge",
    description: "An interactive API endpoint simulator demonstrating dynamic URL routing, path converters, query parameters, and HTTP method handling.",
    features: [
      "Dynamic route generation",
      "Path parameter extraction",
      "Query string parsing demo",
      "HTTP method testing interface",
      "Request/Response inspector",
    ],
    models: [],
    techStack: ["Django 4.2", "Django REST Framework", "Bootstrap 5"],
    difficulty: "Beginner",
    status: "pending",
    repoName: "routeforge-django",
    structure: [
      "routeforge/",
      "├── manage.py",
      "├── routeforge/",
      "│   ├── settings.py",
      "│   └── urls.py",
      "├── simulator/",
      "│   ├── views.py",
      "│   ├── urls.py",
      "│   └── utils.py",
      "└── README.md",
    ],
  },
  {
    day: 3,
    original: "Templates & Static Files Project",
    unique: "PortfolioKit - Developer Portfolio Generator",
    appName: "portfoliokit",
    description: "A portfolio template engine with Jinja2 templating, static file management, template inheritance, and reusable components.",
    features: [
      "Template inheritance demo",
      "Custom template tags & filters",
      "Static file optimization",
      "Component-based layouts",
      "Responsive design system",
    ],
    models: [],
    techStack: ["Django 4.2", "Jinja2", "Tailwind CSS", "Alpine.js"],
    difficulty: "Beginner",
    status: "pending",
    repoName: "portfoliokit-django",
    structure: [
      "portfoliokit/",
      "├── manage.py",
      "├── portfoliokit/",
      "├── portfolio/",
      "│   ├── templatetags/",
      "│   └── templates/",
      "│       ├── base.html",
      "│       ├── components/",
      "│       └── pages/",
      "├── static/",
      "└── README.md",
    ],
  },
  {
    day: 4,
    original: "User Registration & Login System",
    unique: "AuthVault - Secure Identity Manager",
    appName: "authvault",
    description: "A complete authentication system with registration, login, password reset, email verification, and profile management.",
    features: [
      "Email-based registration",
      "Password strength validator",
      "Email verification flow",
      "Forgot password workflow",
      "User profile dashboard",
      "Session management",
    ],
    models: ["CustomUser", "UserProfile", "VerificationToken"],
    techStack: ["Django 4.2", "Django Allauth", "Crispy Forms", "PostgreSQL"],
    difficulty: "Intermediate",
    status: "pending",
    repoName: "authvault-django",
    structure: [
      "authvault/",
      "├── manage.py",
      "├── authvault/",
      "├── accounts/",
      "│   ├── models.py",
      "│   ├── forms.py",
      "│   ├── views.py",
      "│   └── templates/accounts/",
      "├── profiles/",
      "└── README.md",
    ],
  },
  {
    day: 5,
    original: "CRUD Application",
    unique: "TalentHub - Team Member Directory",
    appName: "talenthub",
    description: "A comprehensive team management system with CRUD operations, search, filtering, pagination, and bulk actions.",
    features: [
      "Full CRUD operations",
      "Advanced search & filters",
      "Pagination & sorting",
      "Bulk delete/update",
      "CSV export/import",
      "Activity logging",
    ],
    models: ["TeamMember", "Department", "Skill", "ActivityLog"],
    techStack: ["Django 4.2", "Django Tables2", "Django Filter", "SQLite"],
    difficulty: "Intermediate",
    status: "pending",
    repoName: "talenthub-django",
    structure: [
      "talenthub/",
      "├── manage.py",
      "├── talenthub/",
      "├── members/",
      "│   ├── models.py",
      "│   ├── views.py",
      "│   ├── filters.py",
      "│   └── tables.py",
      "├── departments/",
      "└── README.md",
    ],
  },
  {
    day: 6,
    original: "Forms & ModelForms Project",
    unique: "FormCraft - Dynamic Survey Builder",
    appName: "formcraft",
    description: "A dynamic form builder demonstrating Django forms, ModelForms, formsets, validation, and file uploads.",
    features: [
      "Dynamic form generation",
      "Custom field validators",
      "Inline formsets",
      "File upload handling",
      "Form wizard multi-step",
      "AJAX form submission",
    ],
    models: ["Survey", "Question", "Choice", "Response", "FileUpload"],
    techStack: ["Django 4.2", "Django Crispy Forms", "HTMX", "Bootstrap 5"],
    difficulty: "Intermediate",
    status: "pending",
    repoName: "formcraft-django",
    structure: [
      "formcraft/",
      "├── manage.py",
      "├── formcraft/",
      "├── surveys/",
      "│   ├── models.py",
      "│   ├── forms.py",
      "│   ├── views.py",
      "│   └── validators.py",
      "├── responses/",
      "└── README.md",
    ],
  },
  {
    day: 7,
    original: "Authentication & Authorization",
    unique: "AccessGuard - Role-Based Permission System",
    appName: "accessguard",
    description: "Advanced auth system with role-based access control, permission groups, decorators, and audit trails.",
    features: [
      "Role-based access control",
      "Custom permission decorators",
      "Group management",
      "Permission audit logs",
      "Two-factor authentication",
      "API token management",
    ],
    models: ["Role", "Permission", "AuditLog", "APIToken"],
    techStack: ["Django 4.2", "Django Guardian", "PyOTP", "JWT"],
    difficulty: "Advanced",
    status: "pending",
    repoName: "accessguard-django",
    structure: [
      "accessguard/",
      "├── manage.py",
      "├── accessguard/",
      "├── authorization/",
      "│   ├── models.py",
      "│   ├── decorators.py",
      "│   ├── middleware.py",
      "│   └── mixins.py",
      "├── audit/",
      "└── README.md",
    ],
  },
  {
    day: 8,
    original: "Mini Blog Application",
    unique: "InkFlow - Modern Publishing Platform",
    appName: "inkflow",
    description: "A feature-rich blogging platform with rich text editing, categories, tags, comments, and social sharing.",
    features: [
      "Rich text editor (CKEditor)",
      "Category & tag system",
      "Nested comments",
      "Social sharing",
      "Reading time estimation",
      "Related posts",
      "RSS feed",
    ],
    models: ["Post", "Category", "Tag", "Comment", "Like"],
    techStack: ["Django 4.2", "CKEditor", "Django Taggit", "Pillow"],
    difficulty: "Intermediate",
    status: "pending",
    repoName: "inkflow-django",
    structure: [
      "inkflow/",
      "├── manage.py",
      "├── inkflow/",
      "├── blog/",
      "│   ├── models.py",
      "│   ├── views.py",
      "│   └── feeds.py",
      "├── comments/",
      "├── media/",
      "└── README.md",
    ],
  },
  {
    day: 9,
    original: "REST API using DRF",
    unique: "DataBridge - RESTful API Service",
    appName: "databridge",
    description: "A comprehensive REST API demonstrating serializers, viewsets, authentication, pagination, and API documentation.",
    features: [
      "ModelSerializer & ViewSets",
      "Token & JWT authentication",
      "Custom permissions",
      "Filtering & ordering",
      "Rate limiting",
      "Swagger/OpenAPI docs",
      "API versioning",
    ],
    models: ["Resource", "APIKey", "RateLimit"],
    techStack: ["Django 4.2", "DRF", "drf-spectacular", "django-filter"],
    difficulty: "Advanced",
    status: "pending",
    repoName: "databridge-django",
    structure: [
      "databridge/",
      "├── manage.py",
      "├── databridge/",
      "├── api/",
      "│   ├── v1/",
      "│   │   ├── serializers.py",
      "│   │   ├── views.py",
      "│   │   └── urls.py",
      "│   ├── permissions.py",
      "│   └── throttling.py",
      "└── README.md",
    ],
  },
  {
    day: 10,
    original: "Full Mini Project",
    unique: "TaskForge - Project Task Management System",
    appName: "taskforge",
    description: "A complete project management application with tasks, deadlines, assignments, notifications, and dashboard analytics.",
    features: [
      "Project & task management",
      "Kanban board view",
      "Deadline tracking",
      "Team assignments",
      "Email notifications",
      "Dashboard analytics",
      "Activity timeline",
      "File attachments",
    ],
    models: ["Project", "Task", "Comment", "Attachment", "Notification"],
    techStack: ["Django 4.2", "DRF", "Celery", "Redis", "PostgreSQL", "Chart.js"],
    difficulty: "Advanced",
    status: "pending",
    repoName: "taskforge-django",
    structure: [
      "taskforge/",
      "├── manage.py",
      "├── taskforge/",
      "├── projects/",
      "├── tasks/",
      "├── notifications/",
      "├── analytics/",
      "├── static/",
      "├── templates/",
      "└── README.md",
    ],
  },
];

const difficultyColors = {
  Beginner: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Advanced: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

const iconMap: Record<string, React.ReactNode> = {
  devpulse: <Rocket className="w-5 h-5" />,
  routeforge: <GitBranch className="w-5 h-5" />,
  portfoliokit: <Layout className="w-5 h-5" />,
  authvault: <Shield className="w-5 h-5" />,
  talenthub: <Users className="w-5 h-5" />,
  formcraft: <FileText className="w-5 h-5" />,
  accessguard: <Shield className="w-5 h-5" />,
  inkflow: <BookOpen className="w-5 h-5" />,
  databridge: <Server className="w-5 h-5" />,
  taskforge: <Database className="w-5 h-5" />,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [copied, setCopied] = useState(false);

  const copyStructure = () => {
    navigator.clipboard.writeText(project.structure.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {iconMap[project.appName]}
            </div>
            <div>
              <Badge variant="outline" className="mb-1 text-xs font-mono">
                Day {project.day}
              </Badge>
              <CardTitle className="text-lg font-bold text-foreground">
                {project.unique}
              </CardTitle>
            </div>
          </div>
          <Badge className={`${difficultyColors[project.difficulty]} border`}>
            {project.difficulty}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="w-full bg-secondary/50 p-1">
            <TabsTrigger value="features" className="flex-1 text-xs">
              Features
            </TabsTrigger>
            <TabsTrigger value="models" className="flex-1 text-xs">
              Models
            </TabsTrigger>
            <TabsTrigger value="structure" className="flex-1 text-xs">
              Structure
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-3">
            <ul className="space-y-1.5">
              {project.features.slice(0, 5).map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="models" className="mt-3">
            {project.models.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {project.models.map((model, i) => (
                  <Badge key={i} variant="secondary" className="font-mono text-xs">
                    {model}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No custom models required</p>
            )}
          </TabsContent>

          <TabsContent value="structure" className="mt-3">
            <div className="relative">
              <pre className="bg-secondary/50 rounded-lg p-3 text-xs font-mono text-muted-foreground overflow-x-auto">
                {project.structure.join("\n")}
              </pre>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 h-7 w-7 p-0"
                onClick={copyStructure}
              >
                {copied ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs font-mono bg-secondary/30">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <code className="text-xs text-muted-foreground font-mono">
              {project.repoName}
            </code>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              <ExternalLink className="w-3.5 h-3.5" />
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="relative">
        <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center animate-pulse-glow">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Django Training Portfolio</h1>
                  <p className="text-sm text-muted-foreground">10-Day Learning Journey</p>
                </div>
              </div>
              <Badge variant="outline" className="gap-2 py-1.5 px-3">
                <Zap className="w-3.5 h-3.5 text-primary" />
                10 Projects
              </Badge>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Unique Django Projects for{" "}
                <span className="text-primary">GitHub Portfolio</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Each project has been redesigned with unique names, enhanced features, 
                and professional-grade architecture. Ready for interviews and portfolio showcasing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1">
                  4 Beginner
                </Badge>
                <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1">
                  4 Intermediate
                </Badge>
                <Badge className="bg-rose-500/20 text-rose-400 border border-rose-500/30 px-3 py-1">
                  2 Advanced
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.day} project={project} index={index} />
            ))}
          </div>

          <div className="mt-16 bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Getting Started</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground">1. Upload Your Files</h4>
                <p className="text-sm text-muted-foreground">
                  Share your PDF documentation and ZIP project files for each day's work.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Code2 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground">2. Review & Redesign</h4>
                <p className="text-sm text-muted-foreground">
                  I'll analyze each project and create unique versions with enhanced features.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground">3. GitHub Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Get complete projects with README files, ready to push to your GitHub.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-border mt-12 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground">
              Ready to start? Upload your Day 1 PDF and ZIP files to begin the transformation.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
