interface DataType {
   id: number;
   page: string;
   title: string;
   desc: string;
   showAnswer: boolean;
}[];

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      showAnswer: false,
      title: "What is NFT MarketEdge?",
      desc: "NFT MarketEdge is an AI-powered platform that predicts NFT success rates, provides data-driven marketing strategies, and helps creators optimize their NFT launches.",
   },
   {
      id: 2,
      page: "home_1",
      showAnswer: false,
      title: "How does NFT MarketEdge predict NFT success?",
      desc: "Our AI models analyze historical sales data, social sentiment, market trends, and engagement metrics to estimate the probability of an NFT project's success.",
   },
   {
      id: 3,
      page: "home_1",
      showAnswer: false,
      title: "What factors affect NFT success probability?",
      desc: "Key factors include trading volume, number of owners, price fluctuation, social media engagement, roadmap strength, and marketing reach.",
   },
   {
      id: 4,
      page: "home_1",
      showAnswer: false,
      title: "Can NFT MarketEdge help with marketing?",
      desc: "Yes! Our AI-powered platform recommends personalized marketing strategies to maximize reach, increase engagement, and optimize your NFT campaign for success.",
   },
   {
      id: 5,
      page: "home_1",
      showAnswer: false,
      title: "How accurate are the AI predictions?",
      desc: "Our models achieve over 90% accuracy by leveraging real-time data, machine learning algorithms, and deep market insights.",
   },
   {
      id: 6,
      page: "home_1",
      showAnswer: false,
      title: "Do I need coding knowledge to use NFT MarketEdge?",
      desc: "No, NFT MarketEdge is designed for all NFT creators, whether technical or non-technical. Simply input your NFT data, and our AI provides insights instantly.",
   },
   {
      id: 7,
      page: "home_1",
      showAnswer: false,
      title: "Can I predict the success of an existing NFT collection?",
      desc: "Yes! Our AI model analyzes existing NFT collections based on historical performance, ownership distribution, and trading volume to predict future success.",
   },
   {
      id: 8,
      page: "home_1",
      showAnswer: false,
      title: "How does the platform recommend the best locations for marketing?",
      desc: "We analyze regional NFT adoption trends and success rates to suggest the best geographical areas for promoting your NFT collection.",
   },
   {
      id: 9,
      page: "home_2",
      showAnswer: false,
      title: "What is AI-driven sentiment analysis?",
      desc: "Sentiment analysis measures public perception of your NFT by analyzing discussions on Twitter, Discord, and Reddit to predict market demand.",
   },
   {
      id: 10,
      page: "home_2",
      showAnswer: false,
      title: "How does AI determine the best marketing strategies?",
      desc: "AI analyzes past successful NFT launches, audience engagement trends, and promotional effectiveness to recommend tailored marketing strategies.",
   },
   {
      id: 11,
      page: "home_2",
      showAnswer: false,
      title: "What are the main challenges NFT MarketEdge helps solve?",
      desc: "It helps creators avoid failed launches, optimize marketing spend, increase NFT visibility, and predict success using AI insights.",
   },
   {
      id: 12,
      page: "home_2",
      showAnswer: false,
      title: "Is NFT MarketEdge useful for investors?",
      desc: "Yes! Investors can use our AI predictions to assess NFT collection potential before making investment decisions.",
   },
   {
      id: 13,
      page: "home_2",
      showAnswer: false,
      title: "Can I integrate NFT MarketEdge into my project?",
      desc: "Yes, our platform offers API access for developers who want to integrate AI-powered NFT insights into their projects.",
   },
];

export default faq_data;
