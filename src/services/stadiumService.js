import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const stadiums = [
  {
    category: 'Padel',
    distance: '41 km away',
    img: 'https://i.pinimg.com/564x/e9/cd/a7/e9cda718f10716d9eb01c4ce03fa04f3.jpg',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29012.803938128545!2d46.58833993106797!3d24.637450729025844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1f1eaa82cba9%3A0x1e8415ada8f68150!2zUGFkZWwgVHJlaW50YSDYqNin2K_ZhCDYqtix2YrZhtiq2Kcg8J-Ovg!5e0!3m2!1sar!2ssa!4v1721319845201!5m2!1sar!2ssa',
    name: 'Padel Treinta',
    price: '280',
    stadiumImg: [
      'https://i.pinimg.com/564x/2f/fd/30/2ffd300f69ed66e4eecdfde4c8989329.jpg',
      'https://imagizer.imageshack.com/img923/430/1yx32a.jpg',
    ],
    timeSlot: [
      { isBooked: false, time: '4:00 - 6:00' },
      { isBooked: false, time: '6:00 - 8:00' },
      { isBooked: false, time: '8:00 - 10:00' },
      { isBooked: false, time: '10:00 - 12:00' },
    ],
  },
  {
    category: 'Volleyball',
    distance: '25 km away',
    img: 'https://i.pinimg.com/474x/5c/93/42/5c9342018257adcbd3583e22de1461d9.jpg',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.126254436132!2d46.64418002599354!3d24.72254545076493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d5c3976b9b1%3A0xb9cec48105bb412e!2sKACST%20Volleyball%20Court!5e0!3m2!1sar!2ssa!4v1721319462246!5m2!1sar!2ssa',
    name: 'KACST Volleyball',
    price: '300',
    stadiumImg: [
      'https://imagizer.imageshack.com/img924/8834/sW6RL6.jpg',
      'https://imagizer.imageshack.com/img923/3469/19fQy9.jpg',
    ],
    timeSlot: [
      { isBooked: false, time: '4:00 - 6:00' },
      { isBooked: false, time: '6:00 - 8:00' },
      { isBooked: false, time: '8:00 - 10:00' },
      { isBooked: false, time: '10:00 - 12:00' },
    ],
  },
  {
    category: 'Volleyball',
    distance: '19 km away',
    img: 'https://i.pinimg.com/474x/5c/93/42/5c9342018257adcbd3583e22de1461d9.jpg',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57986.02270336696!2d46.68280488986616!3d24.722539801523777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3eb931f186b%3A0xb4e0bf6aba91d3f8!2sMuruj%20Volleyball%20Ground!5e0!3m2!1sar!2ssa!4v1721319592124!5m2!1sar!2ssa',
    name: 'Muruj Volleyball Ground',
    price: '360',
    stadiumImg: [
      'https://imagizer.imageshack.com/img924/8834/sW6RL6.jpg',
      'https://imagizer.imageshack.com/img923/3469/19fQy9.jpg',
    ],
    timeSlot: [
      { isBooked: false, time: '4:00 - 6:00' },
      { isBooked: false, time: '6:00 - 8:00' },
      { isBooked: false, time: '8:00 - 10:00' },
      { isBooked: false, time: '10:00 - 12:00' },
    ],
  },
  {
    category: 'Padel',
    distance: '36 km away',
    img: 'https://i.pinimg.com/564x/e9/cd/a7/e9cda718f10716d9eb01c4ce03fa04f3.jpg',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29017.660305389032!2d46.72867564155274!3d24.616530901515873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05d574d55b07%3A0xbdc4455d6a113c15!2z2KjYp9iv2YQg2KjZhNmIIFBhZGVsIEJsdWU!5e0!3m2!1sar!2ssa!4v1721319994254!5m2!1sar!2ssa',
    name: 'Padel Blue',
    price: '240',
    stadiumImg: [
      'https://imagizer.imageshack.com/img923/8716/mgZ5hK.jpg',
      'https://imagizer.imageshack.com/img923/3435/7lCEwD.jpg',
    ],
    timeSlot: [
      { isBooked: false, time: '4:00 - 6:00' },
      { isBooked: false, time: '6:00 - 8:00' },
      { isBooked: false, time: '8:00 - 10:00' },
      { isBooked: false, time: '10:00 - 12:00' },
    ],
  },
  {
    category: 'Basketball',
    distance: '37 km away',
    img: 'https://i.pinimg.com/564x/0a/0d/12/0a0d1234e829cf469e8788283ff149fa.jpg',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.6004508958035!2d46.57031522599676!3d24.63745215414746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1ecf17550e27%3A0xfa262c5a48c590c0!2sExit33%20Basketball%20Court!5e0!3m2!1sar!2ssa!4v1721319008011!5m2!1sar!2ssa',
    name: 'Exit33 Basketball',
    price: '200',
    stadiumImg: [
      'https://imagizer.imageshack.com/img924/6816/Moux9S.jpg',
      'https://imagizer.imageshack.com/img923/8418/XL4oJ2.jpg',
    ],
    timeSlot: [
      { isBooked: false, time: '4:00 - 6:00' },
      { isBooked: false, time: '6:00 - 8:00' },
      { isBooked: false, time: '8:00 - 10:00' },
      { isBooked: false, time: '10:00 - 12:00' },
    ],
  },
  {
    category: 'Basketball',
    distance: '17 km away',
    img: 'https://i.pinimg.com/564x/0a/0d/12/0a0d1234e829cf469e8788283ff149fa.jpg',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463661.53621384065!2d47.23998281093752!3d24.78326900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee350d0618f59%3A0x267af35d89f85764!2z2YXZhNi52Kgg2YPYsdipINiz2YTYqSAtIEJhc2tldGJhbGwgR3JvdW5k!5e0!3m2!1sar!2ssa!4v1721314020712!5m2!1sar!2ssa',
    name: 'Basketball Ground',
    price: '200',
    stadiumImg: [
      'https://imagizer.imageshack.com/img924/6816/Moux9S.jpg',
      'https://imagizer.imageshack.com/img923/8418/XL4oJ2.jpg',
    ],
    timeSlot: [
      { isBooked: false, time: '4:00 - 6:00' },
      { isBooked: false, time: '6:00 - 8:00' },
      { isBooked: false, time: '8:00 - 10:00' },
      { isBooked: false, time: '10:00 - 12:00' },
    ],
  },
];

export const addStadiumsToFirestore = async () => {
  try {
    const stadiumsCollection = collection(db, 'stadium');
    for (const stadium of stadiums) {
      await addDoc(stadiumsCollection, stadium);
    }
    console.log('Stadiums added successfully!');
  } catch (error) {
    console.error('Error adding stadiums: ', error);
  }
};
