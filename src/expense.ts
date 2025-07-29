export interface Expense {
  /** Unique identifier for the expense */
  id: string;
  amount: number;
  description: string;
  category: string;
  date: Date;
}
