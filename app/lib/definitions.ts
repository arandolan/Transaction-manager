// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Transaction = {
  id: number;
  title: string;
  description: string;
  date: number;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type TransactionRaw = Omit<Transaction, 'amount'> & {
  amount: number;
};
