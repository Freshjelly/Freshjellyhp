import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // コンポーネントマウント時にアニメーションを実行
    if (titleRef.current) {
      // テキストを一文字ずつspan要素で囲む
      const text = titleRef.current.textContent;
      titleRef.current.innerHTML = '';
      
      // 各文字をspan要素で囲んで追加
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char; // スペースを非破壊スペースに変換
        span.className = 'char';
        titleRef.current.appendChild(span);
      });

      // GSAPアニメーションを実行
      gsap.from('.char', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.05,
        delay: 0.5
      });
    }
  }, []);

  return (
    <section className="bg-white pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className="text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight"
          >
            アイデアを、コードで形に。
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Digital Craftsmanship with a Human Touch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              プロジェクトを見る
            </button>
            <button className="border border-gray-300 text-text-primary hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;