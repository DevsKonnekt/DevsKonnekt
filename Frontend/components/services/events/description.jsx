import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col px-0 sm:px-2 md:px-4">
      <h1 className="text-3xl text-primary md:text-5xl text-start font-bold mb-6">
        Discover Your City&#39;s Tech Scene
      </h1>
      <p className="text-primary max-w-5xl">
        Plunge into a thriving environment filled with technology aficionados,
        aspiring entrepreneurs, and cutting-edge businesses. Experience the
        magic of attending local developer events! Raise your coding skills to
        the next level, mingle with like-minded people, and make new friends.
        You never know when bumping into another coding wizard might spark
        genius collaborations. Being an active part of your local tech scene is
        one of the best ways to sharpen your skills and expand your network.
        Whether you want to learn the latest tools hands-on, collaborate on
        projects, or explore new opportunities, connecting with other developers
        at local events can really help you level up.
      </p>

      <p className="text-primary max-w-5xl mt-4">
        Seize opportunities at gatherings large and small to meet entrepreneurs,
        recruiters, and career coaches face to face. You never know who you
        might meet or what doors might open up.
      </p>

      <p className="text-primary max-w-5xl mt-4">
        If you're feeling more experienced, spread your knowledge by running
        your own talks or sprints. Or get involved with an organizer role - it's
        rewarding to give back and help others starting out.
      </p>

      <p className="text-primary max-w-5xl mt-4">
        Growing your skills and connections takes committed effort. But tapping
        into your local community through in-person events is an engaging,
        inspiring way to level up without feeling like a grind. We aim to shine
        a light on all the great opportunities out there.
      </p>

      <p className="text-primary max-w-5xl mt-4">
        Join our ever-growing list of events ranging from hackathons and
        workshops, to conferences and cozy meetups. Stay ahead of the curve in
        this majestic world of development by soaking in the latest industry
        knowledge and sharing your own wisdom.
      </p>

      <p className="text-primary max-w-5xl mt-4">
        Join the vibrant force that unites your city's expertise and draws the
        focus of leading industry figures.
      </p>
      <Link href="/signup">
        <Button className="primary-btn !bg-primary hover:!bg-primary/70 font-semibold mt-6 sm:min-w-[309px]">Join The Community</Button>
      </Link>
    </div>
  );
};

export default Description;
