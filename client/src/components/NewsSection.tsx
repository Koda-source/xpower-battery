// X-Power News Section Component
// Design: Modern news cards with exhibition information

import { useLanguage } from '@/contexts/LanguageContext';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: { zh: string; en: string; ar: string; de: string; es: string };
  date: string;
  category: { zh: string; en: string; ar: string; de: string; es: string };
  summary: { zh: string; en: string; ar: string; de: string; es: string };
  image: string;
  location?: { zh: string; en: string; ar: string; de: string; es: string };
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: {
      zh: 'X-Power 将亮相 2026 非洲汽车展',
      en: 'X-Power to Exhibit at Africa Autoexpo 2026',
      ar: 'إكس-باور تشارك في معرض أفريقيا أوتو إكسبو 2026',
      de: 'X-Power stellt auf der Africa Autoexpo 2026 aus',
      es: 'X-Power participará en Africa Autoexpo 2026'
    },
    date: '2026-06-03',
    location: {
      zh: '肯尼亚·内罗毕',
      en: 'Nairobi, Kenya',
      ar: 'نيروبي، كينيا',
      de: 'Nairobi, Kenia',
      es: 'Nairobi, Kenia'
    },
    category: {
      zh: '展会新闻',
      en: 'Exhibition News',
      ar: 'أخبار المعارض',
      de: 'Messeneuigkeiten',
      es: 'Noticias de Exposición'
    },
    summary: {
      zh: '东莞市 X-Power 智能科技有限公司将于 2026 年 6 月 3 日至 5 日参加在肯尼亚内罗毕举办的第 27 届非洲国际汽车及零部件贸易展览会，现场展示适用于电动摩托车与三轮车的锂电池解决方案。',
      en: 'Dongguan X-Power Intelligent Technology Co., Ltd. will participate in the 27th Africa Autoexpo International Automotive & Spare Parts Trade Exhibition from June 3 to 5, 2026 in Nairobi, Kenya, showcasing lithium battery solutions for electric motorcycles and tricycles.',
      ar: 'ستشارك شركة دونغقوان إكس-باور للتكنولوجيا الذكية في الدورة السابعة والعشرين من معرض أفريقيا أوتو إكسبو الدولي في نيروبي، كينيا في الفترة من 3 إلى 5 يونيو 2026، مع عرض حلول بطاريات الليثيوم للدراجات الكهربائية والدراجات ثلاثية العجلات.',
      de: 'Dongguan X-Power Intelligent Technology Co., Ltd. wird vom 3. bis 5. Juni 2026 an der 27. Africa Autoexpo International Automotive & Spare Parts Trade Exhibition in Nairobi, Kenia teilnehmen und Lithiumbatterie-Lösungen für Elektromotorräder und Dreirad-Fahrzeuge präsentieren.',
      es: 'Dongguan X-Power Intelligent Technology Co., Ltd. participará del 3 al 5 de junio de 2026 en la 27.ª Africa Autoexpo International Automotive & Spare Parts Trade Exhibition en Nairobi, Kenia, presentando soluciones de baterías de litio para motocicletas y triciclos eléctricos.'
    },
    image: '/news-africa-autoexpo.jpg'
  }
];

export default function NewsSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-4">
            <Newspaper className="w-5 h-5" />
            <span className="font-semibold">{t('news.title')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('news.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Date Badge */}
                <div className="absolute top-6 left-6 inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full shadow-md">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">{item.date}</span>
                </div>
                {/* Location Badge */}
                {item.location && (
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full shadow-md text-sm font-medium">
                    {item.location[lang]}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {item.category[lang]}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {item.title[lang]}
                </h3>
                
                {/* Summary */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.summary[lang]}
                </p>
                
                {/* Read More Link */}
                <div className="inline-flex items-center space-x-2 text-green-700 font-semibold">
                  <span>{t('news.readMore')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
