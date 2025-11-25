import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStepCompletion = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber) 
        ? prev.filter(n => n !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const steps = [
    {
      number: 1,
      title: 'Подготовка материалов',
      icon: 'Package',
      description: 'Соберите всё необходимое для создания шара',
      details: [
        'Пенопластовая основа (шар диаметром 8-10 см)',
        'Нитки или пряжа (цветные, можно разных оттенков)',
        'Клей ПВА или горячий клей',
        'Декоративные элементы: бусины, пайетки, ленты',
        'Ножницы',
        'Кисточка для клея'
      ],
      tips: 'Выбирайте контрастные цвета ниток для более яркого результата!'
    },
    {
      number: 2,
      title: 'Обмотка основы',
      icon: 'Wind',
      description: 'Создание базового покрытия шара',
      details: [
        'Нанесите клей на небольшой участок шара',
        'Начните обматывать нитками от верхушки',
        'Наматывайте нитки плотно, без просветов',
        'Меняйте направление намотки для прочности',
        'Периодически добавляйте клей',
        'Покройте всю поверхность шара'
      ],
      tips: 'Работайте аккуратно, не спешите! Равномерная намотка — залог красивого результата.'
    },
    {
      number: 3,
      title: 'Декорирование',
      icon: 'Sparkles',
      description: 'Украшение шара декоративными элементами',
      details: [
        'Дайте клею полностью высохнуть (1-2 часа)',
        'Приклейте бусины или пайетки',
        'Добавьте ленточки или кружево',
        'Можно использовать блёстки',
        'Создайте узор или абстрактную композицию',
        'Закрепите петельку для подвешивания'
      ],
      tips: 'Используйте горячий клей для надёжной фиксации декора!'
    },
    {
      number: 4,
      title: 'Финальная отделка',
      icon: 'Star',
      description: 'Завершающие штрихи',
      details: [
        'Проверьте прочность всех элементов',
        'Добавьте лак или спрей-блеск (по желанию)',
        'Закрепите атласную ленту для подвешивания',
        'Можно добавить искусственный снег',
        'Проверьте баланс шара при подвешивании'
      ],
      tips: 'Дайте всем элементам полностью высохнуть перед использованием!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4 animate-float">
            <div className="text-6xl">🎄</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Новогодний шар своими руками
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Пошаговая инструкция по созданию праздничного украшения для урока технологии в 8 классе
          </p>
          <Badge variant="secondary" className="mt-4 text-base px-4 py-2">
            Время работы: 2-3 часа
          </Badge>
        </div>

        <div className="grid gap-6 mb-8">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className={`overflow-hidden transition-all duration-300 hover:shadow-xl animate-scale-in border-2 ${
                completedSteps.includes(step.number) 
                  ? 'border-green-400 bg-green-50/50' 
                  : 'border-transparent hover:border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full transition-all ${
                    completedSteps.includes(step.number)
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-br from-primary to-secondary text-white'
                  }`}>
                    <Icon name={step.icon} size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-sm">
                        Этап {step.number}
                      </Badge>
                      <button
                        onClick={() => toggleStepCompletion(step.number)}
                        className={`ml-auto transition-transform hover:scale-110 ${
                          completedSteps.includes(step.number) ? 'text-green-600' : 'text-gray-400'
                        }`}
                      >
                        <Icon 
                          name={completedSteps.includes(step.number) ? 'CheckCircle2' : 'Circle'} 
                          size={24} 
                        />
                      </button>
                    </div>
                    <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details" className="border-none">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline hover:text-primary">
                      <div className="flex items-center gap-2">
                        <Icon name="ListChecks" size={20} />
                        Подробная инструкция
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-semibold mt-1">•</span>
                            <span className="text-base">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r">
                        <div className="flex items-start gap-3">
                          <Icon name="Lightbulb" size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-amber-900 mb-1">Совет:</p>
                            <p className="text-amber-800">{step.tips}</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Icon name="Award" size={28} className="text-primary" />
              Техника безопасности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="AlertCircle" size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Работайте с горячим клеем под присмотром учителя</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="AlertCircle" size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Используйте ножницы аккуратно, передавайте кольцами вперёд</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="AlertCircle" size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Проветривайте помещение при работе с лаком</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="AlertCircle" size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Убирайте рабочее место после завершения работы</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Завершено этапов: {completedSteps.length} из {steps.length}
          </p>
          {completedSteps.length === steps.length && (
            <div className="mt-4 p-6 bg-green-50 border-2 border-green-400 rounded-lg animate-scale-in">
              <div className="text-4xl mb-2">🎉</div>
              <p className="text-xl font-semibold text-green-700">
                Поздравляем! Вы завершили все этапы!
              </p>
              <p className="text-green-600 mt-2">
                Ваш новогодний шар готов украсить праздник!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
