import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MarqueImg } from "@/components/marquee-img";

export const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <div className="mb-2">
              <span className=" text-outline font-extrabold md:text-8xl font">
                AI Superpower
              </span>
              <span className="text-gray-500 font-extrabold">
                - A better way to
              </span>
              <br />
            </div>

            improve your interview chances and skills
          </h2>

          <p className="mt-5 text-muted-foreground text-sm">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            250k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Recieved
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div>

        {/* image sectiomn */}

        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Inteviews Copilot&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              distinctio natus, quos voluptatibus magni sapiente.
            </p>
            <Link to={"/generate"}>
              <Button className="mt-3">
                Generate <Sparkles />
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 ">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">How It Works</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Get started with AI Mock Interview in just a few simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Select Your Interview Type</h3>
                <p className="text-muted-foreground">
                  Choose from various interview types based on your target role and industry.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Practice with AI</h3>
                <p className="text-muted-foreground">
                  Engage in a realistic interview conversation with our advanced AI interviewer.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Review and Improve</h3>
                <p className="text-muted-foreground">
                  Get instant feedback and actionable tips to improve your interview performance.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* marquee section */}

      <div className="w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="assets/img/logo/firebase.png" />
          <MarqueImg img="assets/img/logo/meet.png" />
          <MarqueImg img="assets/img/logo/zoom.png" />
          <MarqueImg img="assets/img/logo/firebase.png" />
          <MarqueImg img="assets/img/logo/microsoft.png" />
          <MarqueImg img="assets/img/logo/meet.png" />
          <MarqueImg img="assets/img/logo/tailwindcss.png" />
          <MarqueImg img="assets/img/logo/microsoft.png" />
        </Marquee>
      </div>


      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};