# Careen-canvas-server


## Server Side Live Link 

```

https://careen-canvas-server.vercel.app


```


# Schema And Api Methods


## User

```
  post('/api/users/register')

  post('/api/users/login')
```

## NameContact 

```
  GET /api/name/name-contact/:id/:templateId

  https://careen-canvas-server.vercel.app/api/name/name-contact/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1

  PUT /api/name/name-contact/:id/:templateId

  DELETE /api/name/all-name-contact/:id/:templateId


```

## Summary 


```
  GET '/api/summaries/{userId}/{templateId}
  
  https://careen-canvas-server.vercel.app/api/summaries/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1

  PUT '/api/summaries/{userId}/{templateId}

  DELETE '/api/summaries/{userId}/{templateId}
```


## Title 

```
  GET '/api/title/{userId}/{templateId}
  
  https://careen-canvas-server.vercel.app/api/title/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1

  PUT '/api/title/{userId}/{templateId}

  DELETE '/api/title/{userId}/{templateId}

```



## Skills


```
  GET /api/skills/{userId}/{templateId}

  https://careen-canvas-server.vercel.app/api/skills/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1

  PUT /api/skills/{userId}/{templateId}
  
  DELETE /api/skills/{userId}/{templateId}

```

## Projects 

```
  GET /api/projects/{userId}/{templateId}

  https://careen-canvas-server.vercel.app/api/projects/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1
  
  PUT /api/projects/{userId}/{templateId}
  
  DELETE /api/projects/{userId}/{templateId}

```

## Certificate

```
  GET /api/certificates/:id/:templateId

  https://careen-canvas-server.vercel.app/api/certificates/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1
  
  GET /api/certificates/12345/67890/abcdef
  
  PUT /api/certificates/:id/:templateId
  
  DELETE /api/certificates/:id/:templateId
```

### Career objective

```
  GET /api/CareerObjective/:id/:templateId

  https://careen-canvas-server.vercel.app/CareerObjective/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1

  PUT /api/CareerObjective/:id/:templateId

  DELETE /api/CareerObjective/:id/:templateId


```

## Award 

```
  GET /api/awards/:id/:templateId
  
  https://careen-canvas-server.vercel.app/api/awards/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1

  PUT /api/awards/:id/:templateId

  DELETE /api/awards/:id/:templateId
```

### language


```
  GET api/language/languages/:id/:templateId
  
  https://careen-canvas-server.vercel.app/api/language/languages/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1

  PATCH api/language/languages/:id/:templateId
  
  DELETE api/language/languages/:id/:templateId
```


### Experience

```
  GET api/Experience/getExperience/:id/:templateId
  
  https://careen-canvas-server.vercel.app/api/Experience/getExperience/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1
  
  PATCH api/Experience/updateExperienceById/:id/:templateId
  
  DELETE  api/Experience/deleteExperienceById/:id/:templateId
```


### Education

```
  GET /api/education/educations/{userId}/{templateId}

  https://careen-canvas-server.vercel.app/api/education/educations/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1
  
  PUT /api/education/educations/{userId}/{templateId}
  
  DELETE /api/education/educations/{userId}/{templateId}
``` 