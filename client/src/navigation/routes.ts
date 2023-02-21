const singleCarPageRoot = '/car/';

const routes = {
  HomePage: '/',
  CarFormPage: '/create-car',
  SingleCarPage: {
    path: `${singleCarPageRoot}:id`,
    createLink: (id: string | number) => `${singleCarPageRoot}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
