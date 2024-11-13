# Careen-canvas-server


## Server Side Live Link 

```

https://careen-canvas-server.vercel.app


```


```
admin email : arafat1@gmail.com

admin pass : Arafat@

```
## Features

- Customizable Resume Templates
- Drag and Drop Resume Details
- Newsletters: Subscription options for daily or weekly news summaries .
- Download & Export Resume
- Share Resume
- Resume Review Service
- Job Postings as Blogs
- Search Jobs
- Save Job Posts
- Resume Version Control
- AI integration
- User Dashboard
- Admin Dashboard
- Post Jobs
- Approve/Reject Job Applications
- User Management
- Chat Support
-   Share project
- payment gateway





# Schema And Api Methods


## User

```

<!-- Register Route -->
post("/api/users/register", register)

<!-- Login Route -->
post("/api/users/login", login)

<!-- Get All Users Route -->
get("/api/users")

<!-- Delete User Route -->
delete("/api/users/:uid")

<!-- Change User Role Route -->
put("/api/users/role")

```

 ### From Data
 
 ````
 POST  /api/formdata

GET  /api/formdata/:userId


````

## Jobs asBlog

```
GET /api/getJobsByFlitterSearch

POST /api/createJobs

PUT api/updateJobs/:id

DELETE /api/deleteJobs/:id

````
##  PaymentGetway byStripe

````
POST /api/createPaymentIntent

POST /api/payments


`````


##  GiGs

```
POST   /api/gigs

 GET  /api/getByFilter

PUT  /api/:projectId

DELETE /api/:projectId

```

## Gigs Review
```
POST /api/gigs/:gigId/reviews

 GET  /api/gigs/:gigId/reviews

````





