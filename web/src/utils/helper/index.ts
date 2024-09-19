interface IOpeningHours {
  start?: string;
  end?: string;
}

const formatTime = (time: string): string => {
  // Remove any extra "AM" or "PM" substrings
  const cleanTime = time.replace(/(AM|PM)\s*/g, "").trim();
  const [hourStr, minute] = cleanTime.split(":");
  let hour = parseInt(hourStr);
  const period = hour >= 12 ? "PM" : "AM";

  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12; // Midnight case

  return `${hour}:${minute} ${period}`;
};

export const verifyAndFormatOpeningHours = (openingHours: {
  [key: string]: IOpeningHours;
}): { [key: string]: IOpeningHours } => {
  const formattedOpeningHours: { [key: string]: IOpeningHours } = {};

  for (const [day, hours] of Object.entries(openingHours)) {
    const formattedHours: IOpeningHours = {};

    if (hours.start) {
      formattedHours.start = formatTime(hours.start);
    }

    if (hours.end) {
      formattedHours.end = formatTime(hours.end);
    }

    formattedOpeningHours[day] = formattedHours;
  }

  return formattedOpeningHours;
};

export const truncateText = (text: string, wordLimit: number) => {
  // Split the text into words and slice to the limit
  const words = text.split(" ");
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
};

export const commonMetaData = ({
  title,
  description,
  image,
  url,
  keywords,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  keywords: string[];
}) => {
  return {
    metadataBase: new URL("https://crystalpathshala.com"),
    title: title
      ? `${title} | New`
      : "Crystal Pathshala | English Spoken Classes Noida Sector 15",
    description: description,
    authors: [
      {
        name: "Crystal Pathshala",
        url: "https://crystalpathshala.com/",
      },
    ],
    twitter: {
      card: "summary_large_image",
      creator: "@crystalpathshala",
      images: image,
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://crystalpathshala.com${url}`,
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      url: `https://crystalpathshala.com${url}`,
      title: title,
      description: description,
      siteName: "Crystal Pathshala",
      images: [
        {
          url: image,
        },
      ],
    },
    assets: image,
    keywords: [
      "English Spoken Classes Noida Sector 15",
      "Personality Development Courses",
      "Communication Skills Training",
      "Leadership Skills Coaching",
      "Body Language Workshops Noida",
      "Image Consulting Services",
      "Public Speaking Courses Sector 15",
      "Client Handling Skills Training",
      "Etiquettes and Protocol Classes",
      "Fine Dining Etiquette Noida",
      "High Tea Etiquette Training",
      "Smart Work-Life Balance Tips",
      "Effective Home Management Courses",
      "Career Planning Workshops",
      "Role Play Training Sector 15",
      "English Fluency Classes Noida",
      "Personal Development Programs",
      "Soft Skills Training Noida",
      "Confidence Building Workshops",
      "Effective Communication Skills",
      "Best Coaching Institute in Noida Sector 15",
      "Top Educational Institutes Noida Sector 15",
      "Professional Development Courses",
      "Interview Preparation Classes",
      "Corporate Training Programs",
      "Leadership Development Workshops",
      "Effective Presentation Skills",
      "Team Building Activities Noida",
      "Skill Enhancement Programs",
      "Job Readiness Training",
      "Executive Coaching Services",
      "Study Abroad Consultation",
      "Online Learning Platforms",
      "Language Training Courses",
      "Technical Skills Workshops",
      "Academic Support Programs",
      "Personal Growth Seminars",
      "Industry Certification Courses",
      ...keywords,
    ],
  };
};
