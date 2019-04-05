const request = require('supertest');
const app = require('../../index');
const User = require('../../models/user');

beforeAll(() => User.remove({})); // antes de iniciarmos cada teste vamos limpar o banco de dados 

describe('User', () => {

  describe('Create', () => {
    test('Should create a user', async () => {
      const response = await request(app).post('/user').send(
        {
            nome: "random",
            cpf:"123456789",
            telefone:"9876543210",
            cep:"455555",
            numero: "250",
            complemento: "Rua"
        }
      );
      expect(response.status).toBe(201);
    });

    test('Should not create a user with the same email', async () => {
      const response = await request(app).post('/user').send(
        {
            nome: "random2",
            cpf:"123456789",
            telefone:"9876543210",
            cep:"455555",
            numero: "250",
            complemento: "Rua"
        }
      );
      expect(response.status).toBe(500);
    });
    test('Should not create a cpf or name', async () => {
      const response = await request(app).post('/user').send(
        {
            telefone:"9876543210",
            cep:"455555",
            numero: "250",
            complemento: "Rua"
        }
      );
      expect(response.status).toBe(500);
    })
  });

  describe('Find', () => {
    test('Should find a user', async () => {
      const user = await User.create(        {
        nome: "rasdnd",
        cpf:"92225",
        telefone:"9876543210",
        cep:"455555",
        numero: "250",
        complemento: "Rua"
      });
      const response = await request(app).get('/user/92225');
      expect(response.status).toBe(200);
    });
  })

  describe('Delete', () => {
    test('Should delete a user', async () => {
      const user = await User.create({
        nome: "hrd",
        cpf:"922255",
        telefone:"9876543210",
        cep:"455555",
        numero: "250",
        complemento: "Rua"
      });
      const response = await request(app).delete('/user/922255');
      expect(response.status).toBe(200);
    });
  })

  describe('Update', () => {
    test('Should update a user', async () => {
      const user = await User.create({
        nome: "randsad",
        cpf: "925",
        telefone:"9876543210",
        cep:"455555",
        numero: "250",
        complemento: "Rua"
      });
      const response = await request(app).put('/user/925',{
    
      })
      expect(response.status).toBe(200);
    });
  })
  
  describe('FindAll', () => {
    test('Should findAll a users', async () => {
      const response = await request(app).get('/user/');
      expect(response.status).toBe(200);
    })
  })
});