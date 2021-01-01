<div align="center">
  
# 🎬 Adonis Action Token 
Adonis Action Token create temporary token to perform specific actions like email validation, password recovery & more possibilities. 

Works only for **Adonis v5**.

#### 👷‍♀️ In progress 👷‍♂️

<br>

![Tests](https://github.com/crbast/adonis-action-token/workflows/Tests/badge.svg?branch=main)
![CodeQL](https://github.com/crbast/adonis-action-token/workflows/CodeQL/badge.svg?branch=main)

<br>

</div>

## Description
Action token is use to allow access (time-limited) to specific resource defined by action type. They are **not** intended to be used for authentication purposes.

The token works like opaque token (only string identifier, all useful data are stored directly on redis).

### Example
1. Create action token 
```ts
// create(type: string, ttl: int, data: string | undefined): string
const actionToken = await ActionToken.create('email-validation', 1800, { email: 'myemail@crbast.ch' })

// actionToken = 1608568833696DtHvtHx2DvxeTiHRLshXwhVvIlb34k8yHor1jKlqV5
```
2. Validate token (middleware)
```ts
// verify(action: string, token: string): ActionToken
await ActionToken.verify('email-validation', actionToken)
```
3. Get token data
```ts
// ActionToken(action: string, token: string): ActionToken
const token = new ActionToken('email-validation', token )
const data = token.data
```
4. Delete token 
```ts
// ActionToken(action: string, token: string): ActionToken
const token = new ActionToken('email-validation', token )
await token.delete()
```

### Project example

The project [`elloow - api`](https://github.com/elloow/elloow) use the action token concept (organisation creation with email link).

## Installation 

## Dependencies
- [`@adonisjs/redis@alpha`](https://github.com/adonisjs/redis)
