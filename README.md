# Basic Prisma/GraphQL App

This is a Basic Prisma Schema app built with GraphQL/NodeJS/ExpressJS to show the basic implementation of Prisma Schema using GraphQL.
(Authentication, middleware, etc. are not included for the simplicity of the application)

## Installation & Usage

MySQL used in this example, other db's are supported (relational or non-relational) ( preferred PostgreSQL or MongoDB ) 

edit .env ( .env.example as reference )

Create a table with the name in the URL in .env ( or change URL accordingly )



```python

# run this command on each schema change
npx prisma migrate dev --name init

```

Load Prisma Studio (Default is port 5555)

```bash
npx prisma studio
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT License

Copyright (c) 2021 Hassan Edelbi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
