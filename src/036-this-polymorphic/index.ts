export class Calculator {
  constructor(public num: number) {}

  public plus(n: number): this {
    this.num += n;
    return this;
  }

  public minus(n: number): this {
    this.num -= n;
    return this;
  }

  public times(n: number): this {
    this.num *= n;
    return this;
  }

  public dividedBy(n: number): this {
    this.num /= n;
    return this;
  }
}

export class ScientificCalculator extends Calculator {
  public power(n: number): this {
    this.num **= n;
    return this;
  }
}

const calculator = new ScientificCalculator(10);
calculator.plus(5).times(3).dividedBy(5).minus(-1).power(3);
console.log(calculator);

// Builder
export class RequestBuilder {
  private method: 'GET' | 'POST' | null = null;
  private url: string | null = null;

  public setMethod(method: 'GET' | 'POST'): this {
    this.method = method;
    return this;
  }

  public setUrl(url: string): this {
    this.url = url;
    return this;
  }

  public send(): void {
    console.log(`Sending data via ${this.setMethod} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('https://www.google.com').setMethod('GET').send();
