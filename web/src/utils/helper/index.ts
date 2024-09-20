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
    metadataBase: new URL("https://website.com"),
    title: title
      ? `${title} | Movie Details`
      : "Movie Details",
    description: description,
    authors: [
      {
        name: "movie",
        url: "https://website.com/",
      },
    ],
    twitter: {
      card: "summary_large_image",
      creator: "@website",
      images: image,
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://website.com${url}`,
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      url: `https://website.com${url}`,
      title: title,
      description: description,
      siteName: "movie",
      images: [
        {
          url: image,
        },
      ],
    },
    assets: image,
    keywords: [
      "movie",
      ...keywords,
    ],
  };
};
