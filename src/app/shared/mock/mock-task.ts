import {Task} from '../model/task';

export const TASKMOCK: Task[] = [
  {
    id: 1,
    name: 'Faire le ménage',
    description: 'Il faut bien penser à nettoyer sous les meubles.',
    photo: 'https://www.admr.org/sites/default/files/webmaster/images/Personnages-Professionels/menage-repassage-a-domicile.png',
    pointValue: 5,
    nextDueDate: new Date(2019, 12, 8),
    lastDone: new Date(2019, 12, 3)
  },
  {
    id: 2,
    name: 'Nettoyer la litière',
    description: 'Aérer après.',
    photo: 'https://www.assuropoil.fr/wp-content/uploads/nettoyer-chat-litiere-entretien.jpg',
    pointValue: 3,
    nextDueDate: new Date(2019, 12, 6),
    lastDone: new Date(2019, 12, 5)
  }
];
