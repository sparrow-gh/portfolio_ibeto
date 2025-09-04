'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const skills = [
    'التصميم الجرافيكي', 'تصميم واجهة المستخدم', 'العلامة التجارية', 'الرسوم التوضيحية', 
    'الطباعة', 'أدوبي كريتيف سويت', 'فيجما', 'سكتش'
  ];

  const projects = [
    {
      id: 1,
      title: 'شعار تقني ناجح',
      category: 'العلامة التجارية',
      categoryKey: 'branding',
      description: 'تصميم شعار احترافي لشركة تقنية ناشئة مع لوحة ألوان حديثة ودليل هوية بصرية كامل.',
      image: '/my-designs/tech-logo.jpg',
      thumbnail: '/my-designs/thumbnails/tech-logo-thumb.jpg',
      fullImage: '/my-designs/tech-logo.jpg'
    },
    {
      id: 2,
      title: 'تطبيق لياقة بدنية',
      category: 'تصميم واجهة المستخدم',
      categoryKey: 'ui',
      description: 'تصميم واجهة مستخدم لتطبيق تتبع اللياقة البدنية مع واجهة حديثة وبديهية.',
      image: '/my-designs/fitness-app.jpg',
      thumbnail: '/my-designs/thumbnails/fitness-app-thumb.jpg',
      fullImage: '/my-designs/fitness-app.jpg'
    },
    {
      id: 3,
      title: 'موقع أزياء أنيق',
      category: 'تصميم المواقع',
      categoryKey: 'web',
      description: 'تصميم كامل لموقع تجارة إلكترونية للأزياء مع التركيز على تجربة المستخدم وتحسين التحويلات.',
      image: '/my-designs/fashion-website.jpg',
      thumbnail: '/my-designs/thumbnails/fashion-website-thumb.jpg',
      fullImage: '/my-designs/fashion-website.jpg'
    },
    {
      id: 4,
      title: 'تغليف منتجات العناية بالبشرة',
      category: 'التغليف',
      categoryKey: 'packaging',
      description: 'تصميم تغليف إبداعي لمنتجات العناية بالبشرة العضوية باستخدام مواد صديقة للبيئة.',
      image: '/my-designs/skincare-packaging.jpg',
      thumbnail: '/my-designs/thumbnails/skincare-packaging-thumb.jpg',
      fullImage: '/my-designs/skincare-packaging.jpg'
    },
    {
      id: 5,
      title: 'حملة تسويقية على وسائل التواصل',
      category: 'التسويق الرقمي',
      categoryKey: 'marketing',
      description: 'تصميم مرئي لحملة تسويقية شاملة على وسائل التواصل الاجتماعي لعلامة أزياء.',
      image: '/my-designs/social-media-campaign.jpg',
      thumbnail: '/my-designs/thumbnails/social-media-campaign-thumb.jpg',
      fullImage: '/my-designs/social-media-campaign.jpg'
    },
    {
      id: 6,
      title: 'تصميم مجلة',
      category: 'الطباعة',
      categoryKey: 'print',
      description: 'تخطيط مجلة وتصميم تحريري لمنشور نمط حياة يتميز بالطباعة الحديثة.',
      image: '/my-designs/magazine-layout.jpg',
      thumbnail: '/my-designs/thumbnails/magazine-layout-thumb.jpg',
      fullImage: '/my-designs/magazine-layout.jpg'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: 'in' },
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Dribbble', url: '#', icon: '🏀' },
    { name: 'Behance', url: '#', icon: '🎨' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('شكراً لرسالتك! سأعود إليك قريباً.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-foreground">موقع تصاميمي</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {item === 'home' && 'الرئيسية'}
                      {item === 'about' && 'نبذة عني'}
                      {item === 'portfolio' && 'معرض الأعمال'}
                      {item === 'contact' && 'تواصل معي'}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {['home', 'about', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item === 'home' && 'الرئيسية'}
                      {item === 'about' && 'نبذة عني'}
                      {item === 'portfolio' && 'معرض الأعمال'}
                      {item === 'contact' && 'تواصل معي'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              مرحباً، أنا <span className="text-primary"> ايبيتو </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              مصمم جرافيك مبدع متخصص في الهوية البصرية والتجارب الرقمية والسرد المرئي
            </p>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full transition-all duration-200 transform hover:scale-105"
            >
              شاهد أعمالي
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">نبذة عني</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مصمم شغوف بخبرة 5+ سنوات في إنشاء تجارب بصرية ذات معنى
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                أنا مصمم جرافيك مبدع بشغف لتحويل الأفكار إلى قصص بصرية مؤثرة. 
                بخبرة تزيد عن 5 سنوات في المجال، تمكنت من العمل مع عملاء متنوعين 
                في مختلف القطاعات، من الشركات الناشئة إلى العلامات التجارية الراسخة.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                تتمثل فلسفة التصميم الخاصة بي في إنشاء روابط ذات معنى بين العلامات التجارية وجمهورها 
                من خلال تصميم مركز على المستخدم. أؤمن بأن التصميم الجيد لا يبدو جميلاً فحسب، 
                بل يخدم أيضاً غرضاً ويحل مشاكل حقيقية.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">المهارات والخبرات</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-accent/30 dark:from-primary/10 dark:to-accent/20 rounded-full flex items-center justify-center border border-border">
                <div className="text-6xl">🎨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-accent/20 dark:bg-gradient-to-br dark:from-background dark:via-accent/5 dark:to-background relative overflow-hidden">
        {/* Subtle pattern overlay for dark mode */}
        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_50%,oklch(0.15_0.02_270/0.3)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_20%,oklch(0.12_0.015_260/0.2)_0%,transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">معرض أعمالي</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مجموعة من أعمالي ومشاريعي الإبداعية الحديثة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="portfolio-card group overflow-hidden bg-card border-0 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-primary/10">
                <div className="relative overflow-hidden">
                  {/* Thumbnail Image */}
                  <div className="w-full h-64 relative">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Overlay with gradient */}
                    <div className="portfolio-overlay absolute inset-0"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`portfolio-badge text-card-foreground bg-card/90 category-${project.categoryKey}`}>
                        {project.category}
                      </Badge>
                    </div>
                    
                    {/* View Project Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="secondary" 
                            size="lg"
                            className="portfolio-button opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-card-foreground dark:text-foreground hover:text-card-foreground"
                            onClick={() => setSelectedProject(project.id)}
                          >
                            <span className="flex items-center gap-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              عرض المشروع
                            </span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogTitle className="sr-only">{project.title} - تفاصيل المشروع</DialogTitle>
                          <div className="space-y-6">
                            {/* Full Size Image */}
                            <div className="relative">
                              <img 
                                src={project.fullImage} 
                                alt={project.title}
                                className="w-full h-96 object-cover rounded-lg"
                              />
                              <div className="absolute top-4 right-4">
                                <Badge className={`bg-primary text-primary-foreground category-${project.categoryKey}`}>
                                  {project.category}
                                </Badge>
                              </div>
                            </div>
                            
                            {/* Project Details */}
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                    {project.category}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    2024
                                  </span>
                                </div>
                              </div>
                              
                              <div className="prose prose-gray max-w-none dark:prose-invert">
                                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                              </div>
                              
                              {/* Additional Project Info */}
                              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-primary">100%</div>
                                  <div className="text-sm text-muted-foreground">رضا العميل</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-primary">2 أسابيع</div>
                                  <div className="text-sm text-muted-foreground">مدة التنفيذ</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-primary">5+</div>
                                  <div className="text-sm text-muted-foreground">مراجعات التصميم</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-card border-t border-border">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>مشروع {project.id}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors">
                      <span>عرض التفاصيل</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">تواصل معي</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              لديك مشروع في ذهنك؟ أود أن أسمع منك!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">لنتواصل</h3>
                <p className="text-muted-foreground mb-6">
                  دائماً ما أكون مهتماً بسماع المشاريع والفرص الجديدة. 
                  سواء كان لديك سؤال أو تريد فقط أن تقول مرحباً، لا تتردد في التواصل!
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">تابعني</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <span className="text-sm">{link.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">معلومات التواصل</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>البريد الإلكتروني: ----------</p>
                  <p>الهاتف: --------- </p>
                  <p>الموقع: العراق، بغداد </p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">الاسم</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4"> E A </h3>
              <p className="text-gray-400">
                إنشاء تصاميم جميلة ووظيفية تحدث فرقاً.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                {['home', 'about', 'portfolio', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item === 'home' && 'الرئيسية'}
                      {item === 'about' && 'نبذة عني'}
                      {item === 'portfolio' && 'معرض الأعمال'}
                      {item === 'contact' && 'تواصل معي'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-xs">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EA. جميع الحقوق محفوضة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}