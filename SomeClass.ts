class ExampleClass {
  // Static properties
static staticProperty1: string = "Static Property 1";
static staticProperty2: number = 42;
// Static methods
static staticMethod1(): void {
    console.log("Static Method 1");
  }
static staticMethod2(): string {
    return "Static Method 2";
  }
// Properties
property1: string;
property2: number;
// Conventional private properties
privateProperty1: boolean = true;
privateProperty2: string = "Private Property";
// Constructor
constructor(property1: string, property2: number) {
    this.property1 = property1;
    this.property2 = property2;
  }
// Methods
  method1(): void {
    console.log("Method 1");
  }

  method2(): number {
    return this.property2 * 2;
  }

  // Conventional private methods
  privateMethod1(): void {
    console.log("Private Method 1");
  }

  privateMethod2(): boolean {
    return this.privateProperty1;
  }

  
  
  

  



  
  

  
  

  

  
  
  

  
  
}
