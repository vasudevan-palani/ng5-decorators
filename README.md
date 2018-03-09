# ng5-decorators
This module/package will provide few useful decorators that can be used to speed up the development.

For now the list is
  - OnEvent
  - EventAfter
  - EventBefore

Usage is

```javascript

export class AppComponent {
  title = 'app';

  content = '<h1>\n  I am content from the server, just normal HTML\n</h1>\n<my-component name="hello">I am the projected content!</my-component>';

  @EmitBefore("AppComponent/submit")
  submit(test){
    console.log("In Submit",this);
  }

  @OnEvent("AppComponent/submit")
  test(){
    console.log("In test");
  }

  @OnEvent("AppComponent/submit")
  test1(){
    console.log("In test1");
  }

}

```

## Set up

### Step 1
```javascript
  npm insall file-bower-resolver
```

### Step 2
```
  npm install ng5-decorators --save

```
