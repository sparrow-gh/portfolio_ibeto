export const placeholderImages = {
  // صور وهمية لأغراض العرض التوضيحي
  techLogo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center',
  fitnessApp: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
  fashionWebsite: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center',
  skincarePackaging: 'https://images.unsplash.com/photo-1570194065650-d99c79fa11f4?w=800&h=600&fit=crop&crop=center',
  socialMediaCampaign: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center',
  magazineLayout: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center',
  
  // صور مصغرة
  thumbnails: {
    techLogo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
    fitnessApp: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    fashionWebsite: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center',
    skincarePackaging: 'https://images.unsplash.com/photo-1570194065650-d99c79fa11f4?w=400&h=300&fit=crop&crop=center',
    socialMediaCampaign: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
    magazineLayout: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  }
};

// مكون محسن لعرض الصور مع التحميل التدريجي
export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy' 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  loading?: 'lazy' | 'eager'; 
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={src}
        alt={alt}
        loading={loading}
        className=\"w-full h-full object-cover transition-transform duration-500 hover:scale-110\"
        onLoad={(e) => {
          const img = e.target as HTMLImageElement;
          img.classList.add('loaded');
        }}
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.src = 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&crop=center';
        }}
      />
      <div className=\"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300\" />
    </div>
  );
}

// البيانات المحدثة للمشاريع مع الصور
export const projectsData = [
  {
    id: 1,
    title: 'شعار تقني ناجح',
    category: 'العلامة التجارية',
    categoryKey: 'branding',
    description: 'تصميم شعار احترافي لشركة تقنية ناشئة مع لوحة ألوان حديثة ودليل هوية بصرية كامل يتضمن قواعد الاستخدام والتطبيقات المختلفة.',
    image: placeholderImages.techLogo,
    thumbnail: placeholderImages.thumbnails.techLogo,
    fullImage: placeholderImages.techLogo,
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    year: '2024',
    client: 'شركة تقنية ناشئة'
  },
  {
    id: 2,
    title: 'تطبيق لياقة بدنية',
    category: 'تصميم واجهة المستخدم',
    categoryKey: 'ui',
    description: 'تصميم واجهة مستخدم متكاملة لتطبيق تتبع اللياقة البدنية مع واجهة حديثة وبديهية تركز على تجربة المستخدم وسهولة الاستخدام.',
    image: placeholderImages.fitnessApp,
    thumbnail: placeholderImages.thumbnails.fitnessApp,
    fullImage: placeholderImages.fitnessApp,
    tools: ['Figma', 'Adobe XD', 'Principle'],
    year: '2024',
    client: 'شركة تطبيقات صحية'
  },
  {
    id: 3,
    title: 'موقع أزياء أنيق',
    category: 'تصميم المواقع',
    categoryKey: 'web',
    description: 'تصميم كامل لموقع تجارة إلكترونية للأزياء مع التركيز على تجربة المستخدم وتحسين معدلات التحويل وسهولة التنقل.',
    image: placeholderImages.fashionWebsite,
    thumbnail: placeholderImages.thumbnails.fashionWebsite,
    fullImage: placeholderImages.fashionWebsite,
    tools: ['Figma', 'Adobe Photoshop', 'Webflow'],
    year: '2024',
    client: 'علامة تجارية للأزياء'
  },
  {
    id: 4,
    title: 'تغليف منتجات العناية بالبشرة',
    category: 'التغليف',
    categoryKey: 'packaging',
    description: 'تصميم تغليف إبداعي ومستدام لمنتجات العناية بالبشرة العضوية باستخدام مواد صديقة للبيئة مع هوية بصرية متسقة.',
    image: placeholderImages.skincarePackaging,
    thumbnail: placeholderImages.thumbnails.skincarePackaging,
    fullImage: placeholderImages.skincarePackaging,
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    year: '2024',
    client: 'شركة منتجات طبيعية'
  },
  {
    id: 5,
    title: 'حملة تسويقية على وسائل التواصل',
    category: 'التسويق الرقمي',
    categoryKey: 'marketing',
    description: 'تصميم مرئي شامل لحملة تسويقية متكاملة على جميع منصات التواصل الاجتماعي لعلامة أزياء عصرية مع محتوى متنوع وجذاب.',
    image: placeholderImages.socialMediaCampaign,
    thumbnail: placeholderImages.thumbnails.socialMediaCampaign,
    fullImage: placeholderImages.socialMediaCampaign,
    tools: ['Adobe Photoshop', 'Adobe After Effects', 'Canva'],
    year: '2024',
    client: 'وكالة تسويق رقمي'
  },
  {
    id: 6,
    title: 'تصميم مجلة',
    category: 'الطباعة',
    categoryKey: 'print',
    description: 'تخطيط مجلة احترافي وتصميم تحريري لمنشور نمط حياة عصري يتميز بالطباعة الحديثة والتخطيط المتقن.',
    image: placeholderImages.magazineLayout,
    thumbnail: placeholderImages.thumbnails.magazineLayout,
    fullImage: placeholderImages.magazineLayout,
    tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    year: '2024',
    client: 'دار نشر'
  }
];