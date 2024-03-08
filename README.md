# Dead ants :ant::skull:

This program determines the quantity of dead ants within a given string. Living ants are represented by the sequence "**ant**", while dead ants are any occurrence of **a**, **n**, or **t** that do not form the word "**ant**" in order.

## Requirements :round_pushpin:

* NodeJS version 11 or higher
* Visual Studio (or any other preferred editor that supports JavaScript)

## After downloading :arrow_down:

### Download node_modules
Run in the terminal (located in the project directory) 
``` 
npm i
``` 
or 
```
npm install
``` 
to download the  `node_nodules` and thus be able to run the tests conducted with the `Jest framework` 

### To run the tests, use this command :test_tube:
Run in the terminal 
```
npm test
```

> [!NOTE]
> The file `main.js` contains the updated code.

#### If you want to learn more about Jest
You have the link to their official page [here](https://jestjs.io/)

## Benchmark :gear:

The benchmark was performed using [Benchmark.js](https://benchmarkjs.com/)

> Benchmark output:
>| Method         |       Runtime |       N |       Mean |     Error |   StdDev |
>|--------------- |-------------- |-------- |-----------:|----------:|---------:|
>| Dead Ants Old  | 103.61 ops/s  | 100.00  |  9.6519 s  | 0.1472 s  | 0.6506 s |
>| Dead Ants New  | 551.84 ops/s  | 100.00  |  1.8121 s  | 0.0249 s  | 0.1179 s |


> [!NOTE]
> To run it, you just need to use the following command in the terminal.

```
node ./src/benchmark
```


## YouTube video :film_strip:

Link to the [YouTube video](https://youtu.be/GqEWxRxb6Qk)
