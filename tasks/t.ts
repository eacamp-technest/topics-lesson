// interface IUser {
//   name: string;
//   age: number;
//   country: null | 'az';
//   phoneNumber?: string | null;
//   id: number | string;
// }

// const user: IUser = {
//   name: 'Xeyyam',
//   age: 20,
//   country: 'az',
//   id: 2,
//   phoneNumber: '3333',
// };

// // type TId = string | number;
// let id: string | number = 2;

// type TxFunction = (a: number, b: number) => number;

// const x: TxFunction = (a, b) => {
//   return a + b;
// };
// // const x = (a: string, b: number) => {};

// function y(a: number, b?: boolean): void {}

// type TOrder = 'api' | 'local';

// const logger = (order, value) => {};

// enum CalcParams {
//   sum = 'sum',
//   minus = 'minus',
// }

// // const calc = (params: CalcParams, x: number, y: number) => {
// //   if (params === CalcParams.sum) {
// //     return x + y;
// //   }

// //   return x - y;
// // };

// // calc(CalcParams.minus, 2, 3);

interface IUserInfo {
  country: string;
  city: string;
  phone: {
    prefix: string;
    number?: string;
  };
}
interface IUser {
  name: string;
  age: number;
  surname: string;
  info: IUserInfo;
}

const user: IUser = {
  name: 'Xeyyam',
  age: 20,
  surname: 'Hesenov',
  info: {
    country: 'az',
    city: 'Baku',
    phone: {
      prefix: '055',
      number: '5555555',
    },
  },
};

interface ILocalization {
  id: number;
  key: string;
  language: 'TR' | string; // TODO need fill all languages
  value: string;
}

type HighSchoolItem = {
  id: number;
  name: string;
  isOngoing: boolean;
  country: string;
  localization: {
    id: number;
    key: string;
    language: 'TR' | string; // TODO need fill all languages
    value: string;
  };
  // reviewResult: IReviewResult | null;
  // file: string | null;
};

const highSchool: HighSchoolItem = {
  id: 1,
  name: 'Baku 1',
  isOngoing: true,
  country: 'az',
  localization: {
    id: 1,
    key: 'high_school',
    language: 'TR',
    value: 'Lise',
  },
};

const selector = (item): void => {
  const element = item.localization as ILocalization;
};

// type THobbies = [];

// const hobbies: string[] = [false, 'basketball', 'swimming'];
const delay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done');
  }, 1000);
});

const a = 'eli';

// const fetchUser = async (params: string): Promise<string> => {
//   console.log('fething');
//   const res = await delay;
//   return res as string;
// };

// fetchUser(a);

// const calc =(x,y)
