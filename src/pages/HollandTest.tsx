
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle, RotateCcw, Download } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import jsPDF from 'jspdf';

const HollandTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      text: "أستمتع بالعمل مع يدي لإصلاح أو بناء الأشياء",
      category: "Realistic"
    },
    {
      id: 2,
      text: "أحب دراسة المشكلات العلمية وإجراء التجارب",
      category: "Investigative"
    },
    {
      id: 3,
      text: "أستمتع بالرسم والتصوير والكتابة الإبداعية",
      category: "Artistic"
    },
    {
      id: 4,
      text: "أحب مساعدة الآخرين وتقديم المشورة لهم",
      category: "Social"
    },
    {
      id: 5,
      text: "أستمتع بقيادة الفرق وإدارة المشاريع",
      category: "Enterprising"
    },
    {
      id: 6,
      text: "أفضل العمل مع البيانات والأرقام والتفاصيل",
      category: "Conventional"
    },
    {
      id: 7,
      text: "أحب العمل في الهواء الطلق والأنشطة البدنية",
      category: "Realistic"
    },
    {
      id: 8,
      text: "أستمتع بحل الألغاز والمسائل المعقدة",
      category: "Investigative"
    },
    {
      id: 9,
      text: "أحب التعبير عن نفسي من خلال الفن والموسيقى",
      category: "Artistic"
    },
    {
      id: 10,
      text: "أشعر بالسعادة عندما أساعد شخصاً في حل مشكلة",
      category: "Social"
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const calculateResults = () => {
    const categories = {
      Realistic: 0,
      Investigative: 0,
      Artistic: 0,
      Social: 0,
      Enterprising: 0,
      Conventional: 0
    };

    questions.forEach((question, index) => {
      if (answers[index]) {
        categories[question.category as keyof typeof categories] += answers[index];
      }
    });

    return Object.entries(categories)
      .map(([name, score]) => ({ name, score }))
      .sort((a, b) => b.score - a.score);
  };

  const getPersonalityDescription = (type: string) => {
    const descriptions = {
      Realistic: {
        title: "الشخصية العملية (Realistic)",
        titleEn: "Realistic Personality",
        description: "تفضل العمل بالأيدي والأنشطة العملية. مناسب للمهن التقنية والهندسية.",
        descriptionEn: "Prefers hands-on work and practical activities. Suitable for technical and engineering careers.",
        careers: ["مهندس", "تقني", "ميكانيكي", "مزارع", "طيار"],
        careersEn: ["Engineer", "Technician", "Mechanic", "Farmer", "Pilot"]
      },
      Investigative: {
        title: "الشخصية البحثية (Investigative)",
        titleEn: "Investigative Personality",
        description: "تحب البحث والاستقصاء وحل المشكلات المعقدة. مناسب للمهن العلمية.",
        descriptionEn: "Enjoys research, investigation, and solving complex problems. Suitable for scientific careers.",
        careers: ["طبيب", "عالم", "باحث", "محلل", "صيدلي"],
        careersEn: ["Doctor", "Scientist", "Researcher", "Analyst", "Pharmacist"]
      },
      Artistic: {
        title: "الشخصية الفنية (Artistic)",
        titleEn: "Artistic Personality",
        description: "تستمتع بالتعبير الإبداعي والفنون. مناسب للمهن الإبداعية.",
        descriptionEn: "Enjoys creative expression and arts. Suitable for creative careers.",
        careers: ["فنان", "مصمم", "كاتب", "موسيقي", "ممثل"],
        careersEn: ["Artist", "Designer", "Writer", "Musician", "Actor"]
      },
      Social: {
        title: "الشخصية الاجتماعية (Social)",
        titleEn: "Social Personality",
        description: "تحب مساعدة الآخرين والعمل معهم. مناسب للمهن الخدمية.",
        descriptionEn: "Enjoys helping others and working with people. Suitable for service careers.",
        careers: ["مدرس", "مرشد", "طبيب نفسي", "أخصائي اجتماعي", "ممرض"],
        careersEn: ["Teacher", "Counselor", "Psychologist", "Social Worker", "Nurse"]
      },
      Enterprising: {
        title: "الشخصية المبادرة (Enterprising)",
        titleEn: "Enterprising Personality",
        description: "تستمتع بالقيادة وإدارة الأعمال. مناسب للمهن الإدارية والتجارية.",
        descriptionEn: "Enjoys leadership and business management. Suitable for administrative and commercial careers.",
        careers: ["مدير", "رائد أعمال", "مسوق", "محامي", "سياسي"],
        careersEn: ["Manager", "Entrepreneur", "Marketer", "Lawyer", "Politician"]
      },
      Conventional: {
        title: "الشخصية التنظيمية (Conventional)",
        titleEn: "Conventional Personality",
        description: "تفضل العمل المنظم والمنطقي مع البيانات. مناسب للمهن الإدارية.",
        descriptionEn: "Prefers organized and logical work with data. Suitable for administrative careers.",
        careers: ["محاسب", "سكرتير", "موظف بنك", "أرشيفي", "كاتب"],
        careersEn: ["Accountant", "Secretary", "Bank Employee", "Archivist", "Clerk"]
      }
    };

    return descriptions[type as keyof typeof descriptions];
  };

  const generatePDF = () => {
    const results = calculateResults();
    const topResult = results[0];
    const personalityInfo = getPersonalityDescription(topResult.name);
    
    const doc = new jsPDF();
    
    // Set font
    doc.setFont("helvetica");
    
    // Title
    doc.setFontSize(20);
    doc.text("Holland Test Results - TrackWise", 20, 30);
    
    // Main personality type
    doc.setFontSize(16);
    doc.text(`Main Personality Type: ${personalityInfo?.titleEn}`, 20, 50);
    
    // Score
    doc.setFontSize(12);
    doc.text(`Score: ${topResult.score}/50 points`, 20, 65);
    
    // Description
    doc.text("Description:", 20, 80);
    const splitDescription = doc.splitTextToSize(personalityInfo?.descriptionEn || "", 170);
    doc.text(splitDescription, 20, 90);
    
    // Career suggestions
    doc.text("Suggested Careers:", 20, 120);
    personalityInfo?.careersEn.forEach((career, index) => {
      doc.text(`• ${career}`, 25, 135 + (index * 10));
    });
    
    // All results
    doc.text("All Results:", 20, 190);
    results.forEach((result, index) => {
      const personalityDesc = getPersonalityDescription(result.name);
      doc.text(`${personalityDesc?.titleEn}: ${result.score} points`, 25, 205 + (index * 10));
    });
    
    // Footer
    doc.setFontSize(8);
    doc.text("Generated by TrackWise - Professional Career Guidance Platform", 20, 280);
    doc.text(`Date: ${new Date().toLocaleDateString('en-US')}`, 20, 285);
    
    // Save the PDF
    doc.save("holland-test-results.pdf");
  };

  if (showResults) {
    const results = calculateResults();
    const topResult = results[0];
    const personalityInfo = getPersonalityDescription(topResult.name);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50" dir="rtl">
        <Header />
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
                <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                  نتائج امتحان هولاند
                </span>
              </h1>
              <div className="flex items-center justify-center mb-8">
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mr-2 md:mr-4" />
                <span className="text-lg md:text-2xl font-bold text-gray-800">تم إكمال الاختبار بنجاح!</span>
              </div>
            </div>

            {/* Main Result */}
            <Card className="mb-8 bg-gradient-to-r from-blue-600 to-amber-600 text-white">
              <CardContent className="p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{personalityInfo?.title}</h2>
                <p className="text-lg md:text-xl mb-6 leading-relaxed">{personalityInfo?.description}</p>
                <div className="text-xl md:text-2xl font-bold">
                  النتيجة: {topResult.score} نقطة
                </div>
              </CardContent>
            </Card>

            {/* Career Suggestions */}
            <Card className="mb-8 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-800">
                  المهن المقترحة لك
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {personalityInfo?.careers.map((career, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-amber-100 p-3 md:p-4 rounded-lg text-center font-semibold text-gray-800 hover:scale-105 transition-transform duration-300 text-sm md:text-base"
                    >
                      {career}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All Results */}
            <Card className="mb-8 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-800">
                  جميع النتائج
                </h3>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-3">
                      <span className="font-semibold text-gray-800 text-sm md:text-base">
                        {getPersonalityDescription(result.name)?.title}
                      </span>
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="w-24 sm:w-32">
                          <Progress value={(result.score / 50) * 100} className="h-3" />
                        </div>
                        <span className="font-bold text-blue-600 min-w-[3rem] text-sm md:text-base">
                          {result.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="text-center space-y-4 px-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={generatePDF}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold"
                >
                  <Download className="w-5 h-5 ml-2" />
                  تحميل النتائج PDF
                </Button>
                <Button 
                  onClick={resetTest}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold"
                >
                  <RotateCcw className="w-5 h-5 ml-2" />
                  إعادة الاختبار
                </Button>
              </div>
              <Button 
                variant="outline"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold"
              >
                طلب استشارة مهنية
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50" dir="rtl">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
              <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                امتحان هولاند للميول المهنية
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 px-4">
              اكتشف نمط شخصيتك المهنية والمجالات المناسبة لك
            </p>
            
            {/* Progress */}
            <div className="mb-8 px-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  السؤال {currentQuestion + 1} من {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-3" />
            </div>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-8 text-center text-gray-800 leading-relaxed">
                {questions[currentQuestion].text}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { score: 1, label: "لا أوافق بشدة", color: "from-red-500 to-red-600" },
                  { score: 2, label: "لا أوافق", color: "from-orange-500 to-orange-600" },
                  { score: 3, label: "محايد", color: "from-yellow-500 to-yellow-600" },
                  { score: 4, label: "أوافق", color: "from-blue-500 to-blue-600" },
                  { score: 5, label: "أوافق بشدة", color: "from-green-500 to-green-600" }
                ].map((option) => (
                  <Button
                    key={option.score}
                    onClick={() => handleAnswer(option.score)}
                    className={`bg-gradient-to-r ${option.color} hover:scale-105 text-white py-4 md:py-6 px-4 rounded-xl text-center transition-all duration-300 shadow-lg`}
                    variant="outline"
                  >
                    <div>
                      <div className="text-xl md:text-2xl font-bold mb-2">{option.score}</div>
                      <div className="text-xs md:text-sm leading-tight">{option.label}</div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Button
                  onClick={goBack}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="w-full sm:w-auto border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                  السؤال السابق
                </Button>

                <span className="text-gray-500 font-medium text-center text-sm md:text-base">
                  اختر الإجابة التي تناسبك أكثر
                </span>

                <div className="w-full sm:w-32"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HollandTest;
