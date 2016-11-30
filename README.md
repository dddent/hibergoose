Hibergoose is a wrapper for mogoose to simplify the creation of models using decorators.

# Installation

```
npm install hibergoose --save
```


# Usage

To create a new mongoose model using hibergoose create a class that extends from
`DbObject`. Add the `@Collection` and `@Model` decorators to define collection 
and model names. The `@Type` decorator on a property is used to set the mongoose Type
the property should have in the mongoose schema.

There are many other decorators that help defining your schema using decorators (docs will be up shortly).

```typescript
@Model('exampleModel')
@Collection('exampleCollection')
public ExampleDb extends DbObject<ExampleDb> {
  @Type(String)
  public name: string;

  @Type(Number)
  @Default(0)
  public group: number;
}
```