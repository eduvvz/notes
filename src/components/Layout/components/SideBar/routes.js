const routes = [
  {
    label: 'Home',
    link: '/',
    icon: 'HomeOutlined',
    sidebarDontShow: true,
  },
  {
    label: 'Minhas Notas',
    link: '/notes',
    icon: 'speaker_notes_outlined',
    isAuth: true,
  },
  {
    label: 'Faça login',
    link: '/login',
    icon: 'exit_to_app_out_outlined',
    dontOpenWhenLogged: true,
  },
  {
    label: 'Faça seu cadastro',
    link: '/register',
    icon: 'exit_to_app_out_outlined',
    sidebarDontShow: true,
    dontOpenWhenLogged: true,
  },
];

export default routes;
