import { lazyLoad } from 'utils/loadable';

export const About = lazyLoad(
() => import('./About'),
(module) => module.About,
);
