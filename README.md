
# Vercel + Planetscale
A [next.js](https://nextjs.org/) app deployed to [vercel](https://vercel.com) with a [planetscale](https://planetscale.com) integration. This example app uses the [planetscale-node](https://github.com/planetscale/planetscale-node) client to query the database

## Setup database
- Install [Planetscale CLI](https://planetscale.com/cli)
- Authenticate the CLI
```sh
pscale auth login
```
- Create a new database (_skip this step if you already have a database_)
```sh
pscale database create <database>
```
- Create a `development` branch
```sh
pscale branch create <database> <branch>
```
- Connect to your branch
```sh
pscale shell <database> <branch>
```
- Insert example tables
```sql
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  name varchar(255)
);
```
- Create a **deploy request** 
```bash
pscale deploy-request create <database> <branch>
```
- _Deploy_ the **deploy request** 
```bash
pscale deploy-request deploy <database> <deploy-request-number>
```
- To find your `<deploy-request-number>`, simply run:
```bash
pscale deploy-request list <database>
```
- Merge your `development` branch into `main`
```bash
pscale deploy-request deploy <database> <deploy-request-number>
```

## Clone & Deploy to vercel
<a href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fplanetscale%2Fvercel-integration-example&project-name=vercel-integration-example&repository-name=vercel-integration-example&integration-ids=oac_ni8CGiTU3oM25q1k2L6unVMp">
  <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
</a>


- The integration will automatically add the following environment variables to your Vercel project(s)
  - `PLANETSCALE_DB`
  - `PLANETSCALE_ORG`
  - `PLANETSCALE_TOKEN`
  - `PLANETSCALE_TOKEN_NAME`

_These environment variables are used by [planetscale-node](https://github.com/planetscale/planetscale-node) client to connect to your database_
- Re-deploy your application after the installation is complete and you will have a working app.
