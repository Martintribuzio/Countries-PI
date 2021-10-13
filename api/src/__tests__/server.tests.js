const supertest = require('supertest')
const server = require('../app')

const api = supertest(server)

test('countries are returned as json', async () => {
  await api
    .get('/countries')
    .expect(200)
    .expect('Content-Type', new RegExp('application/json'))
})

test('countries:id return an object with a country', async () => {
  const response = await api.get('/countries/ARG')

  expect(response.headers['content-type']).toMatch('application/json')
  expect(response.body).toHaveLength(1)
})

test('countries:id return an error if id doesnt exist', async () => {
  const response = await api.get('/countries/ASDSADASDSA')

  expect(response.statusCode).toEqual(400)

  expect(response.body).toBe('The id you entered doesnt match with any country')
})
