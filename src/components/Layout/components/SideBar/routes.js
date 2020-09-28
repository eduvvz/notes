const routes = [
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
    dontShowWhenLogged: true,
  },
];

export default routes;
