// External dependencies
import Loadable from 'react-loadable';

// Local dependencies
import { Loading } from '@components/common';

// Add Loadable versions of each necessary view here
const TodoView = Loadable({
  loader: () => import('@src/client/views/todo'),
  loading: Loading
});

const AboutView = Loadable({
  loader: () => import('@src/client/views/about'),
  loading: Loading
});

// Easy updates can be made to the application routing here -
// just add a new route to the array as needed
export const routes = [
  { path: '/', exact: true, component: TodoView },
  { path: '/about', exact: true, component: AboutView }
];
