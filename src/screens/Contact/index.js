import { lazyLoad } from 'utils/loadable';

export const Contact = lazyLoad(
() => import('./Contact'),
(module) => module.Contact,
);
