export class Database {
  private static database: Database;
  private static connected: boolean;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  public connect(): void {
    // Singleton
    if (Database.connected) {
      console.log('Already connected');
      return;
    }
    Database.connected = true;
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}\n`);
  }

  // Factory Method
  public static getDatabase(
    host: string,
    user: string,
    password: string
  ): Database {
    // Singleton
    if (this.database) {
      console.log("There's already a database instance, returning it");
      return this.database;
    }
    console.log('Creating new database instance');
    this.database = new Database(host, user, password);
    return this.database;
  }
}

const db1 = Database.getDatabase('localhost:3306', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost:4002', 'admin', 'jkfd87');
db2.connect();

const db3 = Database.getDatabase('localhost:8080', 'joaquim', '437798');
db3.connect();
