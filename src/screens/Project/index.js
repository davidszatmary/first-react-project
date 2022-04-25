import { lazyLoad } from 'utils/loadable';

export const Project = lazyLoad(
() => import('./Project'),
(module) => module.Project,
);
