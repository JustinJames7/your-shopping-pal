export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'shipping' | 'returns' | 'payment' | 'products' | 'account' | 'chat';
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does shipping take?',
    answer: '**Standard Delivery**: 5-7 business days (Free over $50)\n**Express Delivery**: 2-3 business days ($9.99)\n**Next Day**: Order by 2 PM for next-day delivery ($19.99)',
    category: 'shipping',
  },
  {
    id: '2',
    question: 'What is your return policy?',
    answer: 'We offer a **30-day return policy**. Items must be in original packaging with all accessories. Free returns on defective items. Refunds are processed within 24 hours of receiving the return.',
    category: 'returns',
  },
  {
    id: '3',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with SSL encryption.',
    category: 'payment',
  },
  {
    id: '4',
    question: 'Do products come with a warranty?',
    answer: 'Yes! All electronics come with a **1-year manufacturer warranty**. Premium products include a **2-year warranty**. Warranty covers manufacturing defects and hardware malfunctions.',
    category: 'products',
  },
  {
    id: '5',
    question: 'How do I track my order?',
    answer: 'You can track your order by clicking "Track Order" in the menu and entering your Order ID (e.g., ORD-12345). You\'ll receive tracking updates via email as well.',
    category: 'shipping',
  },
  {
    id: '6',
    question: 'Can I cancel or modify my order?',
    answer: 'Orders can be cancelled or modified within **1 hour** of placement. After that, the order enters processing. Contact our support team immediately for urgent changes.',
    category: 'shipping',
  },
  {
    id: '7',
    question: 'Do you offer international shipping?',
    answer: 'Yes! We ship to over 50 countries. International shipping rates and delivery times vary by destination. Customs fees may apply depending on your country.',
    category: 'shipping',
  },
  {
    id: '8',
    question: 'How do I create an account?',
    answer: 'Click the **Sign In** button in the navigation bar, then select "Sign Up". Enter your email and create a password. Your account lets you track orders and save your cart.',
    category: 'account',
  },
  {
    id: '9',
    question: 'Hello / Hi / Hey',
    answer: '👋 Hi there! I\'m your virtual shopping assistant. I can help you find products, track orders, or answer questions about our store. How can I help you today?',
    category: 'chat',
  },
  {
    id: '10',
    question: 'How are you?',
    answer: 'I\'m doing great, thanks for asking! 🤖 I\'m ready to help you find some amazing deals. What are you looking for?',
    category: 'chat',
  },
  {
    id: '11',
    question: 'Thank you / Thanks',
    answer: 'You\'re welcome! Happy to help. Is there anything else you need?',
    category: 'chat',
  },
  {
    id: '12',
    question: 'Bye / Goodbye',
    answer: 'Goodbye! 👋 Have a wonderful day and happy shopping! Come back soon!',
    category: 'chat',
  },
  {
    id: '13',
    question: 'Who are you?',
    answer: 'I\'m the ShopSmart virtual assistant. I\'m here to help you navigate our store, find products, and manage your orders.',
    category: 'chat',
  },
  {
  id: '14',
  question: 'I want to buy an iPhone / iphone / iphones',
  answer: 'Great choice! To find the best iPhone for you, select Find Products and then choose Phone to see recommendations.',
  category: 'chat',
},
{
  id: '15',
  question: 'Which phone is best?',
  answer: 'That depends on your needs and budget. Use Find Products → Phone and I’ll help you choose the best option.',
  category: 'chat',
},
{
  id: '16',
  question: 'Show phone recommendations',
  answer: 'I can help with that! Please select Find Products and choose Phone to get personalized recommendations.',
  category: 'chat',
},
  {
  id: '17',
  question: 'Do you have phones?',
  answer: 'Yes! We have a wide range of smartphones. You can use the Find Products option and select Phone to see available models.',
  category: 'chat',
},
{
  id: '18',
  question: 'Show me phones',
  answer: 'Sure! Please click on Find Products and choose Phone to explore our smartphone collection.',
  category: 'chat',
},
{
  id: '19',
  question: 'Do you sell iPhones?',
  answer: 'Yes, we offer iPhones as part of our phone collection. Use Find Products → Phone to view available iPhone models.',
  category: 'chat',
},
{
  id: '20',
  question: 'Do you have laptops? / Laptop / Laptops',
  answer: 'Yes! We offer a variety of laptops for different needs. Use Find Products and select Laptop to explore available options.',
  category: 'chat',
},
{
  id: '21',
  question: 'Show me laptops',
  answer: 'Sure! Please choose Find Products and then select Laptop to view our laptop collection.',
  category: 'chat',
},
{
  id: '22',
  question: 'I want to buy a laptop',
  answer: 'Great! To find the best laptop for you, select Find Products and choose Laptop. I’ll guide you from there.',
  category: 'chat',
},
{
  id: '23',
  question: 'Which laptop is best for students?',
  answer: 'For students, we recommend lightweight and budget-friendly laptops. Use Find Products → Laptop and select Student usage to see recommendations.',
  category: 'chat',
},
{
  id: '24',
  question: 'Which laptop is best for office work?',
  answer: 'Office laptops focus on performance and reliability. Please select Find Products → Laptop and choose Office usage for suitable options.',
  category: 'chat',
},
{
  id: '25',
  question: 'Do you have gaming laptops?',
  answer: 'Yes! We offer powerful gaming laptops. Use Find Products and choose Laptop, then select Gaming usage to explore them.',
  category: 'chat',
},
{
  id: '26',
  question: 'Show laptop recommendations',
  answer: 'I can help with that! Please select Find Products and choose Laptop to get personalized laptop recommendations.',
  category: 'chat',
},
{
  id: '27',
  question: 'Which laptop should I buy?',
  answer: 'That depends on your budget and usage. Select Find Products → Laptop and I’ll help you choose the right one.',
  category: 'chat',
},

  {
  id: '28',
  question: 'How do I log in? / Login',
  answer:
    'To access personalized features like order tracking and adding items to the cart, you need to be logged in.\n\n' +
    'If you already have an account, please use the Login option available in the application.\n' +
    'If you are new, you can create an account easily.\n\n' +
    '👆 You can log in inside the app from the top-right menu (three lines).',
  category: 'chat',
},
  
];
