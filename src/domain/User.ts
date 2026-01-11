import { BaseEntity, IBaseEntityProps } from "./BaseEntity";

export interface IUserProps extends IBaseEntityProps {
  id: number;
  username: string;
  firstname: string;
  middlename?: string;   // optional
  lastname: string;
  email: string;
  phone_no?: string;     // optional
}

export class User extends BaseEntity {
  id: number;
  username: string;
  firstname: string;
  middlename?: string;
  lastname: string;
  email: string;
  phone_no?: string;

  constructor({ id, username, firstname, middlename, lastname, email, phone_no, ...baseProps }: IUserProps) {
    super(baseProps);
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.email = email;
    this.phone_no = phone_no;
  }
}
