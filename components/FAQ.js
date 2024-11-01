import { useChatContext } from '../context/ChatContext';

export default function FAQ() {
  const { askQuestion } = useChatContext();

  const faqs = [
    {
      question: "What services do you specialize in?",
      answer: "We specialize in web development, mobile app development, UI/UX design, cybersecurity, and blockchain solutions. Each service is customized to meet our clients' specific needs.",
      chatQuestion: "Can you provide more detailed information about your specialized services?"
    },
    {
      question: "How long does a typical web development project take?",
      answer: "Project timelines vary based on complexity, but typically range from 4-12 weeks. We provide detailed timelines during our initial consultation.",
      chatQuestion: "What factors affect the timeline of a web development project?"
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we offer various maintenance packages and ongoing support to ensure your digital solutions remain up-to-date and perform optimally.",
      chatQuestion: "What does your maintenance and support package include?"
    },
    {
      question: "What is your approach to cybersecurity?",
      answer: "We implement comprehensive security measures including regular audits, penetration testing, and industry-standard security protocols.",
      chatQuestion: "Can you elaborate on your cybersecurity measures and protocols?"
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain regular communication through scheduled meetings, progress reports, and dedicated project management tools.",
      chatQuestion: "What tools and methods do you use for project communication?"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-100 relative">
      

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 mb-4">{faq.answer}</p>
                </div>
                <button 
                  onClick={() => askQuestion(faq.chatQuestion)}
                  className="ml-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors flex-shrink-0"
                  title="Ask for more details"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}