import type { Playlist, Song } from '../../interfaces/types';

import { getAlbumPath, getEducationPath } from '../../utils/getPublicPath';

enum EducationTypesEnum {
  COURSE = 'COURSE',
  EDU = 'EDU',
  DEGREE = 'DEGREE',
}

// const SD = {
//   name: 'SD_NAME',
//   artist: 'SD_ARTIST',
//   length: 'SD_LENGTH',
//   description: 'SD_DESCRIPTION',
//   type: EducationTypesEnum.EDU,
//   link: 'https://www.info.unlp.edu.ar/analista-programador-universitario/',
//   certificate:
//     'https://media.licdn.com/dms/image/C4E2DAQHa6nSBaAljJw/profile-treasury-document-images_1280/1/1635901593694?e=1714003200&v=beta&t=xAenJC3dNl5fY2K7tXhSNU9r0cp3jsSYdT847GaoCVw',
//   imageUrl: getEducationPath('unlp/logo.jpg'),
//   skills: [],
//   youtube: 'https://youtu.be/1K9kQka8wCw?si=Y3igrp8prZ54u3Hg&t=1602',
// } as Song;

// const SMP = {
//   name: 'SMP_NAME',
//   artist: 'SMP_ARTIST',
//   length: 'SMP_LENGTH',
//   type: EducationTypesEnum.EDU,
//   description: 'SMP_DESCRIPTION',
//   certificate:
//     'https://media.licdn.com/dms/image/C562DAQGoK0otbQBOFA/profile-treasury-document-images_1280/1/1638312707731?e=1714003200&v=beta&t=aSVjxWuddbRJkURndnWW5U4pO4B-jpInkczMh5RTxI0',
//   link: 'https://www.info.unlp.edu.ar/SMP-en-sistemas/',
//   imageUrl: getEducationPath('unlp/logo.jpg'),
//   skills: [],
// } as Song;

const SMK = {
  name: 'SMK_NAME',
  artist: 'SMK_ARTIST',
  length: 'SMK_LENGTH',
  type: EducationTypesEnum.EDU,
  description: 'SMK_DESCRIPTION',
  link: 'https://smkwikrama.sch.id/',
  imageUrl: getEducationPath('cambridge/logo.png'),
  skills: [],
} as Song;

// const MIKROWAYS_KUBERNETES = {
//   type: EducationTypesEnum.COURSE,
//   name: 'MIKROWAYS_KUBERNETES_NAME',
//   artist: 'MIKROWAYS_KUBERNETES_ARTIST',
//   length: 'MIKROWAYS_KUBERNETES_LENGTH',
//   description: 'MIKROWAYS_KUBERNETES_DESCRIPTION',
//   link: 'https://www.mikroways.net/es/training/kubernetes/',
//   imageUrl: getEducationPath('mikroways/logo.png'),
//   certificate: 'https://drive.google.com/file/d/1sQktJh7oXisfT6P99jjqGgEV9F9nObqV/view',
//   skills: [],
// } as Song;

// const REACT_UDEMY = {
//   name: 'REACT_UDEMY_NAME',
//   artist: 'REACT_UDEMY_ARTIST',
//   length: 'REACT_UDEMY_LENGTH',
//   type: EducationTypesEnum.COURSE,
//   description: 'REACT_UDEMY_DESCRIPTION',
//   link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
//   imageUrl: getEducationPath('udemy/logo.png'),
//   skills: [],
// } as Song;

// const FISCALIA = {
//   name: 'FISCALIA_NAME',
//   artist: 'FISCALIA_ARTIST',
//   length: 'FISCALIA_LENGTH',
//   type: EducationTypesEnum.COURSE,
//   description: 'FISCALIA_DESCRIPTION',
//   link: 'https://www2.fepba.gov.ar/',
//   imageUrl: getEducationPath('fiscalia/logo.jpg'),
//   skills: [],
//   certificate: 'https://drive.google.com/file/d/1CrfhE12BtlsjXW1-Z-2RjRecDXlgBo09/view',
// } as Song;

// const ANGULAR_UDEMY = {
//   name: 'ANGULAR_UDEMY_NAME',
//   artist: 'ANGULAR_UDEMY_ARTIST',
//   type: EducationTypesEnum.COURSE,
//   length: 'ANGULAR_UDEMY_LENGTH',
//   description: 'ANGULAR_UDEMY_DESCRIPTION',
//   link: 'https://www.udemy.com/course/angular-fernando-herrera/',
//   imageUrl: getEducationPath('udemy/logo.png'),
//   skills: [],
// } as Song;

// const MAGISTER_DATA_ANALYSIS = {
//   type: EducationTypesEnum.DEGREE,
//   name: 'MAGISTER_DATA_ANALYSIS_NAME',
//   artist: 'MAGISTER_DATA_ANALYSIS_ARTIST',
//   length: 'MAGISTER_DATA_ANALYSIS_LENGTH',
//   description: 'MAGISTER_DATA_ANALYSIS_DESCRIPTION',
//   link: 'https://postgrado.info.unlp.edu.ar/inteligencia-de-datos-orientada-a-big-data/',
//   imageUrl: getEducationPath('unlp/logo.jpg'),
//   skills: [],
// } as Song;

export const Education = {
  name: 'EDUCATION',
  description: 'Description 3',
  songs: [
    // MAGISTER_DATA_ANALYSIS,
    // SMP,
    // MIKROWAYS_KUBERNETES,
    // SD,
    // ANGULAR_UDEMY,
    // FISCALIA,
    // REACT_UDEMY,
    SMK,
  ],
  color: '#74725f',
  getImage(lang) {
    return getAlbumPath('Education-cover', lang, 'png');
  },
  filters: [EducationTypesEnum.DEGREE, EducationTypesEnum.COURSE, EducationTypesEnum.EDU],
} as Playlist;
