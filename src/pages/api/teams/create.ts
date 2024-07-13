// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

// Import the functions you need from the SDKs you need
import { teams2023 } from '@/data/teams';
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // TODO setup from env
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyA3LTjdIg8ZhrOd8UKweDXyJ5kWGZaQj84',
    authDomain: 'vandame-1cebe.firebaseapp.com',
    projectId: 'vandame-1cebe',
    storageBucket: 'vandame-1cebe.appspot.com',
    messagingSenderId: '818408002833',
    appId: '1:818408002833:web:8c9ecba848f22410c8a8b0',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const teams = teams2023;

  await setDoc(doc(db, 'teams', '2022'), { teamList: teams });

  res.status(200).json({ name: 'John Doe' });
}
