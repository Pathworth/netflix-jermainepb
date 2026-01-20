// src/types.ts

export interface ProfileBanner {
  // Optional because we're not using DatoCMS right now,
  // and some fallbacks don't include it.
  backgroundImage?: { url: string };

  headline: string;
  profileSummary: string;

  resumeLink: { url: string };
  linkedinLink: string;

  // Optional because not every profile needs these yet.
  bookingLink?: string;
  bookingLabel?: string;
}

export interface WorkPermit {
  visaStatus: string;

  // Use string to avoid JSON/Date mismatch issues.
  // (Dates from APIs come in as strings.)
  expiryDate: string;

  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  timelineType: "work" | "education";
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}
