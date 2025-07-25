import Button from "@/components/button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl relative "
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(72,34,138)] rounded-xl bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter mx-auto">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-white/70 text-lg md:text-xl tracking-tight text-center mt-5 max-w-2xl mx-auto">
              Achieve clear, impactful results without the complexitys
            </p>
            <div className="flex items-center justify-center mt-12">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
