1. npm init
2. npm install typescript -s
3. modify package.json, 
    "script" : {
        "start":"node build/app.js",
        "tsc":"tsc"
    }
4. npm run tsc -- --init
5. modify tsconfig.json,
    "outdir":"./build"
6. npm install express -s
7. npm install @types/express -s
8. create a file and write code in app/app.ts
9. npm run tsc
10.npm start