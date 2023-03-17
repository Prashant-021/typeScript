# TypeScript

TypeScript is JavaScript with syntax for types.

TS is a strongly typed programming language that builds on JS.
 
created by Microsoft.

## Setting up Typescript on your device.

Step 1: Install NodeJS.

Step 2: Type following command to install typescript on your system.

```
npm i typescript -g
```
To check the version of typescript use:
```
tsc -v
```

### To Run a typescript file

Run command
```
tsc <filename>.ts <destination filename>.js
```
The above command will create a JS file which can be integrated with html file. But the issue here is that every time there is change in ts file above command need to be used to reflect the change in JS file

So, to ease the task use 
``` 
tsc main.ts -w
```
above command has -w attribute which keeps watch on changes made in file and it reflects in js file.

 
``` 
tsc --init
``` 
type above command to create tsconfig.json file which is required to configure the source and destination files when working with multiple ts files and folder structuring.

in tsconfig.json file uncomment following lines 

1. "rootDir": "./"
2. "outDir": "./"

and add the path where the ts files are stores and where to compile js files respectively.

after that run ```tsc -w``` command.

To not continue to create js file when there is error in ts file run ```tsc --onEmitOnError -w```

## Difference between TypeScript and JavaScript

|No|TypeScript|JavaScript|
|--|----------|----------|
|1.|statically typed language. i.e., types are checked at compile-time|Dynamically typed. i.e., types are checked at run-time


## Type Assertions

There are times when working with types where it is necessary to <strong>override the type of variable</strong>, such as when incorrect types are provided by the library. In this case type casting is used.

Ways to type cast.

1. A straighrforward way to type cast is using <strong>'as'</strong> keyword.

2. Another way is using <strong>`<>`</strong> keyword.

3. <strong>Force casting</strong>- first cast to unknown, then to target type
