declare module 'expo-sqlite' {
  export namespace SQLite {
    type Error = any;

    interface Database {
      transaction(
        callback: (transaction: Transaction) => any,
        error?: (error: Error) => any, // TODO def of error
        success?: () => any
      ): void;
    }

    interface Transaction {
      executeSql(
        sqlStatement: string,
        arguments?: string[] | number[],
        success?: (transaction: Transaction, resultSet: ResultSet) => any,
        error?: (transaction: Transaction, error: Error) => any
      ): void;
    }

    interface ResultSet {
      insertId: number;
      rowAffected: number;
      rows: {
        length: number;
        item: (index: number) => any;
        _array: HashMap[];
      };
    }

    function openDatabase(
      name:
        | string
        | {
          name: string;
          version?: string;
          description?: string;
          size?: number;
          callback?: () => any;
        },
      version?: string,
      description?: string,
      size?: number,
      callback?: () => any
    ): any;
  }
}