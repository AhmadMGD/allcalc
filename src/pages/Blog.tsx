
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Understanding GST: A Complete Guide for Small Businesses",
    excerpt: "Learn everything you need to know about GST calculations, including when to apply GST, how to calculate inclusive and exclusive amounts, and common mistakes to avoid.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Tax"
  },
  {
    id: 2,
    title: "How to Calculate Break-Even Point for Your Business",
    excerpt: "Discover the importance of break-even analysis and learn step-by-step how to calculate when your business will become profitable.",
    date: "2025-01-12",
    readTime: "7 min read",
    category: "Business Planning"
  },
  {
    id: 3,
    title: "ROI Calculator: Measuring Investment Success",
    excerpt: "Understanding return on investment is crucial for business growth. Learn how to calculate ROI and make data-driven investment decisions.",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Investment"
  },
  {
    id: 4,
    title: "Profit Margin vs. Markup: What's the Difference?",
    excerpt: "Many business owners confuse profit margin with markup. Learn the key differences and how to calculate both for better pricing strategies.",
    date: "2025-01-08",
    readTime: "4 min read",
    category: "Pricing"
  },
  {
    id: 5,
    title: "Discount Strategies: How to Price Promotions Effectively",
    excerpt: "Learn how to calculate the right discount percentages that attract customers while maintaining profitability.",
    date: "2025-01-05",
    readTime: "5 min read",
    category: "Marketing"
  },
  {
    id: 6,
    title: "Financial Planning for Freelancers: Essential Calculations",
    excerpt: "As a freelancer, understanding key financial calculations can help you price your services correctly and plan for growth.",
    date: "2025-01-03",
    readTime: "8 min read",
    category: "Freelancing"
  }
];

const Blog = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-finance-darkBlue mb-4">Financial Education Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about business finance, calculator usage, and financial planning with our comprehensive guides and tutorials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="card-shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-finance-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl text-finance-darkBlue hover:text-finance-blue transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <button className="text-finance-blue font-medium hover:text-finance-darkBlue transition-colors">
                    Read More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to learn more about business finance?</p>
          <p className="text-sm text-gray-500">
            Our blog is regularly updated with new articles, guides, and financial tips to help your business succeed.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
