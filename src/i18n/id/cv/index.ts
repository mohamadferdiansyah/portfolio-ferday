import { SKILLS } from './skills';
import { PROJECTS } from './projects';
import { EDUCATION } from './education';
import { EXPERIENCE } from './experience';
import { PUBLICATIONS } from './publications';

export const cv = {
  // Titles
  EXPERIENCE: 'Pengalaman',
  EDUCATION: 'Pendidikan',
  PROJECTS: 'Proyek',
  PUBLICATIONS: 'Publikasi',
  SKILLS: 'Keterampilan',

  WEB_SITE: 'Situs Web',
  Certificate: 'Sertifikat',

  Skill: 'Keterampilan',

  // Experience
  ...SKILLS,
  ...PROJECTS,
  ...EDUCATION,
  ...EXPERIENCE,
  ...PUBLICATIONS,
} as const;
