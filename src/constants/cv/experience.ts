import { getAlbumPath } from '../../utils/getPublicPath';
import { tags } from '../tags';

import type { Playlist, Song } from '../../interfaces/types';
import {
  AuthoringTool,
  COOPERATIVAS,
  GO4Clic,
  GralLecturas,
  GralLecturasWeb,
  GralTasks,
  GralVehicles,
  MasEfectivo,
  PUERTOS,
  QwertyLandingPage,
  RUKIR,
  TFD,
} from './personalProjects';

const publicURL = (url: string) => process.env.PUBLIC_URL + url;

enum JobTypesEnum {
  JOB = 'JOB',
}

const NeedJob = {
  name: 'LBS_JOB_NAME',
  length: 'LBS_JOB_LENGTH',
  artist: 'Need a job TT',
  type: JobTypesEnum.JOB,
  link: 'https://www.linkedin.com/in/mohamad-ferdiansyah-888a1a2b8/',
  imageUrl: publicURL('/images/blank.png'),
  experience: 'LBS_JOB_DESCRIPTION',
  skills: [],
  relatedSongs: [],
} as Song;

// const GRAL = {
//   name: 'GRAL_JOB_NAME',
//   length: 'GRAL_JOB_LENGTH',
//   artist: 'Gral Saneamiento SA',
//   experience: 'GRAL_JOB_DESCRIPTION',
//   type: JobTypesEnum.JOB,
//   link: 'https://www.gralsaneamiento.com.ar/',
//   imageUrl: publicURL('/images/experience/gral.jpg'),
//   skills: [
//     tags.AWS,
//     tags.Graphql,
//     tags.Laravel,
//     tags.Docker,
//     tags.ReactNative,
//     tags.TypeScript,
//     tags.React,
//     tags['Node.js'],
//     tags.Django,
//     tags['CI/CD'],
//     tags['Ant design'],
//     tags.GitLab,
//     tags.Serverless,
//     tags.Terraform,
//     tags.Kubernetes,
//     tags.Slack,
//     tags.Symfony,
//     tags.Redis,
//     tags.Telegram,
//     tags.AppCenter,
//     tags.Postgres,
//   ],
//   relatedSongs: [GralVehicles, GralLecturas, GralLecturasWeb, GralTasks],
// } as Song;

// const QWERTY = {
//   name: 'QWERTY_JOB_NAME',
//   link: 'https://qwertysoft.ar/',
//   artist: 'Qwertysoft SRL',
//   length: 'QWERTY_JOB_LENGTH',
//   type: JobTypesEnum.JOB,
//   experience: 'QWERTY_JOB_DESCRIPTION',
//   imageUrl: publicURL('/images/experience/qwerty.png'),
//   skills: [
//     tags.Angular,
//     tags.Docker,
//     tags.Django,
//     tags.IONIC,
//     tags.TypeScript,
//     tags['Node.js'],
//     tags['CI/CD'],
//     tags.GitLab,
//     tags.JIRA,
//     tags.Confluence,
//     tags.Kubernetes,
//     tags.Rancher,
//     tags.Sentry,
//     tags.Postman,
//   ],
//   relatedSongs: [QwertyLandingPage, TFD, RUKIR, GO4Clic, MasEfectivo],
// } as Song;

export const ProfessionalExperience = {
  name: 'EXPERIENCE',
  color: '#422023',
  filters: [JobTypesEnum.JOB],
  songs: [NeedJob],
  getImage(lang) {
    return getAlbumPath('Experience-cover', lang, 'png');
  },
} as Playlist;
