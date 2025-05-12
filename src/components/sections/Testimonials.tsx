
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "This calculator toolkit has been a game-changer for my small business. I use it daily to calculate margins, discounts, and GST. It's simplified my financial decisions!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Consultant",
    content: "The ROI calculator helps me showcase value to clients. I can quickly demonstrate projected returns on my services, making it easier to close deals.",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "E-commerce Entrepreneur",
    content: "I use the discount calculator constantly for my online store promotions. It's helped me plan my sales strategy much more effectively.",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 bg-finance-gray">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-finance-darkBlue">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Trusted by business owners, freelancers, and finance professionals around the world.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-finance-blue flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
