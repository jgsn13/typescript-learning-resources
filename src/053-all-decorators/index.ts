// Class Constructor Type
export type Constructor = new (...args: any[]) => any;

// ---------- Classes ----------
export function ClassDecorator(constructor: Constructor) {
  // 'Called' when class is created
  console.log('CLASS');
  console.log(constructor);
  console.log('###');
}

// ---------- Instance Method ----------
export function MethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // 'Called' when the method is created
  console.log('INSTANCE METHOD');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  console.log('###');
}

// ---------- Static Method ----------
export function StaticMethodDecorator(
  constructor: Constructor,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('STATIC METHOD');
  console.log(constructor);
  console.log(propertyKey);
  console.log(descriptor);
  console.log('###');
}

// ---------- Method Parameter ----------
export function MethodParameterDecorator(
  target: any,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  // 'Called' when the method is created
  console.log('METHOD PARAMETER');
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
  console.log('###');
}

// ---------- Static Method Parameter ----------
export function StaticMethodParameterDecorator(
  constructor: Constructor,
  propertyKey: string,
  parameterIndex: number
) {
  // 'Called' when the method is created
  console.log('STATIC METHOD PARAMETER');
  console.log(constructor);
  console.log(propertyKey);
  console.log(parameterIndex);
  console.log('###');
}

// ---------- Property Decorator ("useDefineForClassFields": false) ----------
export function PropertyDecorator(target: any, propertyKey: string) {
  // 'Called' when the property is created
  console.log('PROPERTY');
  console.log(target);
  console.log(propertyKey);
  console.log('###');
}

// ---------- Static Property Decorator ----------
export function StaticPropertyDecorator(
  constructor: Constructor,
  propertyKey: string
) {
  // 'Called' when the property is created
  console.log('STATIC PROPERTY');
  console.log(constructor);
  console.log(propertyKey);
  console.log('###');
}

// ---------- Accessor Decorator ----------
export function AccessorDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // 'Called' when the accessor is created
  // can only be applied to getter or setter - not tn both
  console.log('GETTER/SETTER');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  console.log('###');
}

// ---------- Static Accessor Decorator ----------
export function StaticAccessorDecorator(
  constructor: Constructor,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // 'Called' when the accessor is created
  // can only be applied to getter or setter - not tn both
  console.log('STATIC GETTER/SETTER');
  console.log(constructor);
  console.log(propertyKey);
  console.log(descriptor);
  console.log('###');
}

// ---------- Class and decorator use case ----------
@ClassDecorator
export class Person {
  @PropertyDecorator
  public name: string;
  public lastname: string;
  public age: number;

  @StaticPropertyDecorator
  public static staticProperty = '';

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @MethodDecorator
  public someMethod(@MethodParameterDecorator msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  @StaticMethodDecorator
  public static someStaticMethod(
    @StaticMethodParameterDecorator msg: string
  ): string {
    return this.staticProperty + msg;
  }

  @AccessorDecorator
  public get fullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  public set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }

  @StaticAccessorDecorator
  public static get staticPropertyAccessor(): string {
    return this.staticProperty;
  }

  public static set staticPropertyAccessor(value: string) {
    this.staticProperty = value;
  }
}

// Class use

const person = new Person('Joaquim', 'Gregorio', 19);
console.log(person.someMethod('any message'));
