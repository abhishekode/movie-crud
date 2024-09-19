import React from "react";
import { ImOffice } from "react-icons/im";
import { FaGraduationCap, FaLanguage } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import Image from "next/image";

export const basicIntro = [
  {
    id: 1,
    icons: <ImOffice className="fill-blue-600" />,
    title: " Delhi, Noida",
  },
  {
    id: 2,
    icons: <FaGraduationCap className="fill-blue-600" />,
    title: "5+ years of experience",
  },
  {
    id: 3,
    icons: <FaLanguage className="fill-blue-600" />,
    title: " multilingual team",
  },
  {
    id: 4,
    icons: <FaUsersLine className="fill-blue-600" />,
    title: "small class sizes",
  },
];

export const ourCoursedData = [
  {
    id: 1,
    title: "Spoken English",
    text: "Speak with confidence, captivate with clarity! Our Spoken Course is your ticket to fluent, expressive communication.",
    link: "/courses/spoken-english",
    icon: (
      <Image
        src="/course/spoken-english.jpg"
        alt="General English"
        className="object-cover h-full"
        width={400}
        height={500}
      />
    ),
  },
  {
    id: 2,
    title: "Personality Development",
    text: "Refine, shine, and stand out! Elevate your presence with our Personality Development program.",
    link: "/courses/personality-development",
    icon: (
      <Image
        src="/course/personality-development.jpg"
        alt="University Foundation"
        className="object-cover h-full"
        width={400}
        height={500}
      />
    ),
  },
  {
    id: 3,
    title: "Interview Skills",
    text: "Ace interviews, boost confidence, and land your dream job with our expert course.",
    link: "/courses/crack-interview",
    icon: (
      <Image
        src="/course/interview-skills.jpg"
        className="object-cover h-full"
        alt="IELTS"
        width={400}
        height={500}
      />
    ),
  },
  {
    id: 4,
    title: "Business English",
    text: "Business English essentials for success - communicate confidently and climb the corporate ladder.",
    link: "/course/business-english",
    icon: (
      <Image
        src="/course/business-english.jpg"
        alt="Business English"
        className="object-cover h-full"
        width={400}
        height={500}
      />
    ),
  },
  {
    id: 5,
    title: "Public Speaking",
    text: "Master the stage with our Public Speaking course - unleash your speaking potential.",
    link: "/young-learners",
    icon: (
      <Image
        src="/course/public-speaking.jpg"
        alt="English Evening Courses"
        className="object-cover h-full"
        width={400}
        height={500}
      />
    ),
  },
  {
    id: 6,
    title: "Image Management",
    text: "Master the art of self presentation - Our course ensures confidence and refines image for long lasting impression ",
    link: "/courses/professional-english",
    icon: (
      <Image
        src="/course/image-management.jpg"
        alt="Online English Courses"
        className="object-cover h-full"
        width={400}
        height={500}
      />
    ),
  },
];

export const chooseYourGoal = [
  {
    id: 1,
    title: "Improve my Spoken English ",
    link: "/courses/spoken-english",
  },
  {
    id: 2,
    title: "Personality Development",
    link: "/courses/personality-development",
  },
  {
    id: 3,
    title: "Crack Interview",
    link: "/courses/crack-interview",
  },
  {
    id: 4,
    title: "Improve my Business English",
    link: "/courses/business-english",
  },
  {
    id: 5,
    title: "Improve my Professional English ( legal, HR, spoken trainer, etc)",
    link: "/courses/professional-english",
  },
  {
    id: 6,
    title: "Public Speaking",
    link: "/courses/professional-english",
  },
  {
    id: 7,
    title: "Image Management",
    link: "/courses/professional-english",
  },
];

export const userComments = [
  {
    id: 1,
    name: "Nandini Gupta",
    comment:
      "this th comment of the text that you the the guy the help Crystal pathshala is a very good institute for the students. The teachers gives you high motivational speech and I studying from 11th Class and now I am in graduation. The teachers taught economics, business studies, spoken english, personality development.  Now I am doing  spoken english from this coaching and this is so amazing.  My confidence level and English is improved now. I am very glad to study here from the great teachers ever 😊😊",
  },
  {
    id: 2,
    name: "Anika tomar",
    comment:
      "Very amazing classes and there are lots of activities .I'm persuing personality development course from them and literally i'm changed a lot . Thanks to Rahul sir and kajal mam 🤗",
  },
  {
    id: 3,
    name: "Jyoti kumari",
    comment:
      "Crystalpathshala means it is a way of improving your spoken English and confidence and how you interact with other people. Earlier i was not confident and stage fear was also there in me but now i can face anything very confidentaly because of rahul sir and kajal mam i'm very thankful to them🤗",
  },
  {
    id: 4,
    name: "Rohit Pal",
    comment:
      "Crystal pathshala gives you best service in Economics, business studies and spoken English. Their teaching way is different from others very easy and understandable.I can feel that i'm totally changed personality now because of them. Rahul sir gives you the right direction ,motivates you and shows you the right direction towards your future &amp; dreams. As per my perspective you should also join them for a good future😊👍🏻",
  },
  {
    id: 5,
    name: "Bhumi Chaudhary",
    comment:
      "Crystal pathshala is a good place for spoken English, business studies, economics and accountancy because their way of teaching is good. I have lot of changes after joining this institute and now i'm able to speak English. I would like to thank Rahul sir and kajal mam for their guidance",
  },
  {
    id: 6,
    name: "Anika tomar",
    comment:
      "Very amazing classes and there are lots of activities .I'm persuing personality development course from them and literally i'm changed a lot . Thanks to Rahul sir and kajal mam 🤗",
  },
  {
    id: 7,
    name: "Harshita tomar",
    comment:
      "So i'm in crystal pathshala which is very amazing institute and i really enjoy all classes of mine.There are lot of teachers but two of them are my favorites Rahul sir and kajal mam.When i came overhere i was totally different but now i'm also shocked to see myself in mirror' kya thi or kya ho gyi ab '😅.Now i can talk to anyone confidentaly and  without any hesitation and that too in English. Thanks for changing me this much",
  },
  {
    id: 8,
    name: "Jyoti kumari",
    comment:
      "Crystalpathshala means it is a way of improving your spoken English and confidence and how you interact with other people. Earlier i was not confident and stage fear was also there in me but now i can face anything very confidentaly because of rahul sir and kajal mam i'm very thankful to them🤗",
  },
  {
    id: 9,
    name: "Rohit Pal",
    comment:
      "Crystal pathshala gives you best service in Economics, business studies and spoken English. Their teaching way is different from others very easy and understandable.I can feel that i'm totally changed personality now because of them. Rahul sir gives you the right direction ,motivates you and shows you the right direction towards your future &amp; dreams. As per my perspective you should also join them for a good future😊👍🏻",
  },
  {
    id: 10,
    name: "Bhumi Chaudhary",
    comment:
      "Crystal pathshala is a good place for spoken English, business studies, economics and accountancy because their way of teaching is good. I have lot of changes after joining this institute and now i'm able to speak English. I would like to thank Rahul sir and kajal mam for their guidance -- Bhumi Chaudhary",
  },
  {
    id: 11,
    name: "Nandini Gupta",
    comment:
      "this th comment of the tesxt tge you the the guy the hepl3Crystal pathshala is a very good institute for the students. The teachers gives you high motivational speech and I studying from 11th Class and now I am in graduation. The teachers taught economics, business studies, spoken english, personality development.  Now I am doing  spoken english from this coaching and this is so amazing.  My confidence level and English is improved now. I am very glad to study here from the great teachers ever 😊😊 (Nandini Gupta)",
  },
  {
    id: 12,
    name: "Harshita tomar",
    comment:
      "So i'm in crystal pathshala which is very amazing institute and i really enjoy all classes of mine.There are lot of teachers but two of them are my favorites Rahul sir and kajal mam.When i came overhere i was totally different but now i'm also shocked to see myself in mirror' kya thi or kya ho gyi ab '😅.Now i can talk to anyone confidentaly and  without any hesitation and that too in English. Thanks for changing me this much",
  },
  {
    id: 13,
    name: "Akshita Tyagi",
    comment:"My experience in crystal pathsala is really very good because I learnt a lot from there like vocab as well as  grammar structure. Kajal mam is very humble nd teaches very gently...all things are great about this institute...mam helps students in all ways like she boosts the confidence of students nd motivate them .....they also teach students about body language nd make ready them for interviews...... They prefer more in speaking practicing  speaking than in writing that's why students learn more from there .... If u want to learn  English even from basic they will help u but u also have to give ur 100 %....it is really very good institute for English learning as well as personality development..."
  },
  {

    id: 14,
    name: "Monika Hudda",
    comment:"This is my dream that ... one day I  would speak in English  in front of others... Now I am able to speak English. Now I'm so happy for it.. The crystal paathshala made My dream come true.. Thank you❤ kajal mam"
  },
  {

    id: 15,
    name: "Nirmal Singh",
    comment:"I have been learning here for 3 months now . To be very honest I was not confident when I enrolled myself but now  I am a totally different individual in terms of confidence, body language, language skills. Crystal pathshala is the best institute for spoken English and personality development. I am having my gala time here☺️😊😊"
  },
  {
    id: 16,
    name: "savita kumari",
    comment:"Crystal pathsala is very good institute and teachers are also good even unique and when I came here that time i didn't know how to speak English but now I'am able to speak in English..and they teach us very unique way help of activities we learn English and so many things . And we get all facilities.Thank you 😊"
  },
  {
    id: 17,
    name: "Soniya Kumari",
    comment:"This Institute is best in noida for the spoken because here you will get all facilities.Kajal mam always help the student to reduce any kinds of phobia if any student has, because I have also been a student of crystal pathsala. Before joining the class i was not able to speak even a single english sentance but now after the class i am confident ; I can speak, Thanks to crystal pathsala and kajal mam also"
  },
  {
    id: 18,
    name: "Gaurav Baisla",
    comment:"I heard about this institute from one of my friend so i came here and enrolled myself. I really learnt a lot from here .I used to be shy but now I’m able to present myself confidently . Best institute in sector 15 for spoken English ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ Thankyou Crystal"
  },
  {
    id: 19,
    name: "Anjali Sharma",
    comment:"A heartful thank both of u.... literally I have no words in this world to explain your beautiful teaching style both of you! Literally u are another form of God to spread a lot of knowledge...... hats off both of u😊i am glad to be a part of crystal pathshala..... thankyou so much crystal pathshala 🤞❣️"
  }
];


export const upComingBatches = [
  {
    id: 1,
    title: "Spoken English",
    icon: (
      <Image
        src="/course/spoken-english.jpg"
        alt="General English"
        className="object-cover h-full"
        width={400}
        height={500}
      />
    ),
  },
  {
    id: 2,
    title: "Personality Development",
    icon: (
      <Image
        src="/course/personality-development.jpg"
        alt="University Foundation"
        className="object-cover h-full"
        width={400}
        height={500}
      />
    ),
  },
  {
    id: 3,
    title: "Interview Skills & Image Management",
    icon: (
      <Image
        src="/course/interview-skills.jpg"
        className="object-cover h-full"
        alt="IELTS"
        width={400}
        height={500}
      />
    ),
  },
];