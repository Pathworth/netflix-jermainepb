export type SkillLine = {
  skill: string;
  experience: string;
};

export type SkillPillar = {
  id: string;                 // stable slug, used as key
  title: string;              // pillar title
  microHeadline?: string;     // shows only in expanded view
  iconKey: string;            // maps to icon(s)
  items: SkillLine[];         // 4-5 skill lines
};

