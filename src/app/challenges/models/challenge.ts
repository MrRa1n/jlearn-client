export interface Challenge {
  id: number;
  title: string;
  instructions: string;
  createdAt: Date;
  createdBy: string;
  modifiedAt: Date;
  users: any[]; // TODO: Create User interface
  code: any[]; // TODO: Create Code interface
  resources: any[]; // TODO: Create Resource interface
}