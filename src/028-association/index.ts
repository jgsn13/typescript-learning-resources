// Association occurs when a class uses another class without depending on it.
// So it's the weakest type of association between classes

// Here we are using Dependency Inversion, this means that the association of
// Writer with WorkTool doesn't depend directly on a concrete class (like Pen
// or Typewriter) but on an abstract class (WorkTool)

export abstract class WorkTool {
  constructor(private _name: string) {}

  public abstract write(): void;

  public get name(): string {
    return this._name;
  }
}

export class Pen extends WorkTool {
  public write(): void {
    console.log(`${this.name} is writing...`);
  }
}

export class Typewriter extends WorkTool {
  public write(): void {
    console.log(`${this.name} is typing...`);
  }
}

export class Writer {
  private _workTool: WorkTool | null = null;

  constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }

  public set workTool(workTool: WorkTool | null) {
    this._workTool = workTool;
  }

  public get workTool(): WorkTool | null {
    return this._workTool;
  }

  public write(): void {
    if (!this.workTool) {
      console.log("Can't write without work tool");
      return;
    }
    this.workTool.write();
  }
}

const writer = new Writer('Moyses');
const pen = new Pen('Bic');
const typewriter = new Typewriter('IBM');

writer.write();

writer.workTool = pen;
writer.write();

writer.workTool = typewriter;
writer.write();
