import React from "react";
import TutorCard from "./Modules/TutorCard";

function Tutor() {
  return (
    <div className="tutor">
      <TutorCard
        tutorData={{
          src: "/assets/person.png",
          name: "Không",
          star: 4.7,
          hour: 212,
          student: 31,
          review:
            "Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor.",
        }}
      />
      <TutorCard
        tutorData={{
          src: "/assets/person.png",
          name: "Không",
          star: 4.9,
          hour: 312,
          student: 11,
          review:
            "Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor.",
        }}
      />
      <TutorCard
        tutorData={{
          src: "/assets/person.png",
          name: "Không",
          star: 2.1,
          hour: 21,
          student: 1,
          review:
            "Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor.",
        }}
      />
      <TutorCard
        tutorData={{
          src: "/assets/person.png",
          name: "Không",
          star: 5.0,
          hour: 21,
          student: 2,
          review:
            "Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor.",
        }}
      />
      <TutorCard
        tutorData={{
          src: "/assets/person.png",
          name: "Không",
          star: 4.7,
          hour: 212,
          student: 31,
          review:
            "Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sitamet luctus venenatis lectus magna fringilla urna porttitor.",
        }}
      />
    </div>
  );
}

export default Tutor;
