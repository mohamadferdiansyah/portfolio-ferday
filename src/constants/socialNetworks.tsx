import { FaAccessibleIcon, FaDiscord, FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaMailchimp, FaSpotify, FaUnsplash, FaVoicemail } from 'react-icons/fa6';
import type { SocialNetwork } from '../interfaces/types';
import { getSocialNetworkPath } from '../utils/getPublicPath';

export const SOCIAL_NETWORKS = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mohamad-ferdiansyah-888a1a2b8/',
    imageUrl: getSocialNetworkPath('linkedin.jpg'),
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/mohamadferdiansyah',
    imageUrl: getSocialNetworkPath('github.png'),
    icon: <FaGithub />,
  },
  {
    name: 'Discord',
    link: 'https://discordapp.com/users/996470081292881990',
    imageUrl: getSocialNetworkPath('discord.png'),
    icon: <FaDiscord />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/ffffer.11',
    imageUrl: getSocialNetworkPath('instagram.jpg'),
    icon: <FaInstagram />,
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/user/31oner3e6ja64s6iy4plfmoifl4u?si=a8227f7681a343bc',
    imageUrl: getSocialNetworkPath('spotify.png'),
    icon: <FaSpotify />,
  },
] as SocialNetwork[];

export const ALL_SOCIAL_NETWORKS = [
  ...SOCIAL_NETWORKS,
  
];
