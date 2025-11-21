import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD2j4B6KOGEr8Rce9BjY44sJ8xwMqNSBOQ',
  databaseURL: 'https://clasesemana5-207bf-default-rtdb.firebaseio.com/',
  projectId: 'clasesemana5-207bf',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
