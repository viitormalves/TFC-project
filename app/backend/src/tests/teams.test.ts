import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/TeamsModel';
import { allTeams } from './mocks/teams.mock';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa as requisições da rota /teams', () => {
  afterEach(() => {
      sinon.restore();
    })
  it('Testa se a requisição get retorna todos os times em um array', async () => {
    sinon.stub(Teams, 'findAll').resolves(allTeams);
    const res: Response = await chai.request(app).get('/teams');

    expect(res.body).to.be.deep.equal(allTeams);
    expect(res.status).to.deep.equal(200);
  });
  it('Testa se a requisição get retorna um time através do id', async () => {
    sinon.stub(Teams, 'findByPk').resolves(allTeams[0]);
    const res: Response = await chai.request(app).get( '/teams/1');

    expect(res.status).to.deep.equal(200);
    expect(res.body).to.be.deep.equal(allTeams[0]);
  });
//   it('Testa se a requisição get retorna status 500 enviando um id errado', async () => {
//     sinon.stub(Teams, 'findByPk').resolves(null);
//     const res: Response = await chai.request(app).get( '/teams/99');

//     expect(res.status).to.deep.equal(500);
//   });
});
