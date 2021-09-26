<p align="center">
  <a href="https://github.com/mirsahib/mern-cli" target="blank"><img src="https://raw.githubusercontent.com/mirsahib/mern-cli/main/images/mern.png" width="200" alt="Mern-Skeleton-Cli" /></a>
</p>

# Description

The mern CLI is a command-line interface tool that helps you to initialize, develop, and maintain your mern-skeleton project.

# Installation

```bash
npm install -g mern-skeleton-cli
```

# What is MERN-Skeleton
MERN-Skeleton a skeleton application with basic user CRUD and auth features - developed using React, Node, Express and MongoDB <br>
[MERN-Skeleton Repo](https://github.com/shamahoque/mern-skeleton)

# Command Structure
| Command | Option | Description
| --- | --- | --- |
| `mern create` | `-p,--project <name>` | Create a new project eg: `mern create -p myproject` |
| `mern create` | `-m,--model <name>` | Create a new model eg: `mern create -m company` |
| `mern create` | `-c,--controller <name>` | Create a new controller eg: `mern create -c company` |
| `mern create` | `-r,--router <name>` | Create a new routes eg: `mern create -r company` |

Finally add the routes to `server/express.js`
```
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import CompanyRoutes from './routes/company.routes' <=== import your routes here


....

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/',CompanyRoutes) <===== add your routes here

....

export default app
```

# Contribution

## Project Installation

```bash
git clone https://github.com/mirsahib/mern-cli.git
cd mern-cli
npm i
```

If you want to **contribute** and make this project much better for other developer have a look at [Issues](https://github.com/mirsahib/mern-cli/issues).

If you created something awesome and want to contribute then feel free to open a [pull request](https://github.com/mirsahib/mern-cli/pulls).

# Special Thanks
[Shama Hoque](https://github.com/shamahoque) for creating MERN-Skeleton

