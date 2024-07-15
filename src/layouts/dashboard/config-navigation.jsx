import SvgColor from 'src/components/svg-color';


// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: 'clients',
    path: '/clients',
    icon: icon('ic_user'),
  },
  {
    title: 'resources',
    path: '/resources',
    icon: icon('ic_cart'),
  },
  {
    title: 'meetings',
    path: '/meetings',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  }
];

export default navConfig;
