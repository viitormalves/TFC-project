import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/UsersModel';
import { userData, userLogin } from './mocks/users.mock';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa as requisições da rota /login', () => {
    afterEach(() => {
        sinon.restore();
      });

    it('Se a requisição post de login retorna status 200', async () => {
      sinon.stub(Users, 'findOne').resolves(userData);
      const res: Response = await chai.request(app).post('/login').send(userLogin);
      expect(res.status).to.deep.equal(200);
    });

    it('Se a requisição post de login retorna status 401', async () => {
      sinon.stub(Users, 'findOne').resolves(userData);
      const res: Response = await chai.request(app).post('/login').send({
        email: 'admin@admin.com',
        password: 'secret_admi'
      });
      expect(res.body).to.be.deep.equal({ message: 'Invalid email or password' });
      expect(res.status).to.deep.equal(401);
    });

    it('Se a requisição post de login retorna status 400 ao não enviar um body', async () => {
      sinon.stub(Users, 'findOne').resolves(userData);
      const res: Response = await chai.request(app).post('/login')
      expect(res.status).to.deep.equal(400);
    });
  });
  