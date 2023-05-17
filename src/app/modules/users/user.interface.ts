export interface IUser {
  id: string;
  role: string;
  name: {
    firstName: string;
    lastName: string;
  };
  userName: string;
  address: {
    present: string;
    permanent: string;
  };
  gender: "male" | "female";
  phone: string;
  isMarried: boolean;
}
