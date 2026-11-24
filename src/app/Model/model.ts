export type Person = {
  gender : string,
  name :{
    title :string,
    first: string,
    last: string,
  },
  location : {
    street : {
      number: number,
      name : string,
    },
    city : string,
    state : string,
    country : string,
    postCode : number,
  },
  login : {
    username : string,
    password : string,
  },
 };

 export type PeopleResponse = {
    results:Person[],
 };

 export type LoadStatus = 'loading' | 'error' | 'ready';