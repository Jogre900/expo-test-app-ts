export const DATA = [
  {
    id: 'historial',
    title: 'Historial de fichajes',
    icon: 'list',
    goto: 'historial'
  },
  {
    id: 'visitas',
    title: 'Visitas',
    icon: 'calendar',
    goto: 'visitas',
    needPermissionVisitas: true
  },
  {
    id: 'vacaciones',
    title: 'Vacaciones / Permisos',
    icon: 'battery-charging',
    goto: 'vacaciones',
    needPermissionVacaciones: true
  },
  {
    id: 'incidencias',
    title: 'Incidencias',
    icon: 'alert-triangle',
    goto: 'incidencias'
  },
  {
    id: 'anticipos',
    title: 'Anticipos',
    icon: 'chevrons-right',
    goto: 'anticipos'
  },
  {
    id: 'gastos',
    title: 'Gastos',
    icon: 'chevrons-left',
    goto: 'gastos',
    needPermissionSuper: true
  },
  {
    id: 'notificaciones',
    title: 'Notificaciones',
    icon: 'message-square',
    goto: 'notifications'
  },
  {
    id: 'ajustes',
    title: 'Ajustes',
    icon: 'settings',
    goto: 'ajustes'
  }
]

class Utils {
  static doSomethingAfter(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  static capitalizeFirstLetter(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }
}

export default Utils
