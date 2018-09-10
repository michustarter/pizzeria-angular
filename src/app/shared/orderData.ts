export interface Order {
  id: number;
  dishIds: number[];
  orderStage: string;
  date: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  mail: string;
  city: string;
  street: string;
  local: string;
  floor: number;
}
