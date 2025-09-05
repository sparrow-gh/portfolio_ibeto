'use client';

import { useEffect, useState } from 'react';

export function useScrollEffects() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // تحديث شريط التقدم
      const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.transform = `scaleX(${progress / 100})`;
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    // مراقبة التمرير
    window.addEventListener('scroll', updateScrollProgress);

    // مراقبة ظهور العناصر
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // إضافة المراقبة للعناصر
    const elementsToObserve = document.querySelectorAll('.section-transition');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      observer.disconnect();
    };
  }, []);

  return { scrollProgress };
}

// خطاف للتأثيرات الحركية المتقدمة
export function useAdvancedAnimations() {
  useEffect(() => {
    // إضافة تأثيرات الماوس للبطاقات ثلاثية الأبعاد
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        (card as HTMLElement).style.transform = 
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      });
    };

    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = 
          'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    };

    // إضافة مستمعي الأحداث
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
}

// خطاف لتأثيرات النص المتحركة
export function useTextAnimations() {
  useEffect(() => {
    const animateText = () => {
      const textElements = document.querySelectorAll('.animate-text-shimmer');
      textElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-text-shimmer');
        }, index * 200);
      });
    };

    // تشغيل الرسوم المتحركة بعد تحميل الصفحة
    setTimeout(animateText, 1000);
  }, []);
}