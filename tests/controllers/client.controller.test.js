import request from 'supertest';
import app from '../../index.js';
import { expect } from 'chai';
import sinon from 'sinon';
import Client from '../../models/client.model.js';

describe('Clients', () => {
    let findStub;
    let findByIdStub;
    let findByIdAndUpdateStub;
    let createStub;
    let deleteStub;

    before(() => {
        findStub = sinon.stub(Client, 'find').resolves([{ _id: 1, name: 'Marcelo', emails: ['marcelo@gmail.com'], telephones: ['(51) 99057-4023'] }]);
        findByIdStub = sinon.stub(Client, 'findById').resolves({ _id: 1, name: 'Marcelo', emails: ['marcelo@gmail.com'], telephones: ['(51) 99057-4023'] });
        findByIdAndUpdateStub = sinon.stub(Client, 'findByIdAndUpdate').resolves([{ _id: 1, name: 'Marcelo', emails: ['marcelo@gmail.com', 'marcelo@hotmail.com'], telephones: ['(51) 99057-4023'] }]);
        createStub = sinon.stub(Client, 'create').resolves({ _id: 1, name: 'João', emails: ['joão@gmail.com', 'joão@hotmail'], telephones: ['(51) 99057-3073'] });
        deleteStub = sinon.stub(Client, 'findByIdAndDelete').resolves({ _id: 1, name: 'Marcelo', emails: ['marcelo@gmail.com'], telephones: ['(51) 99057-4023'] });
    });

    after(() => {
        findStub.restore();
        findByIdStub.restore();
        findByIdAndUpdateStub.restore();
        createStub.restore();
        deleteStub.restore();
    });

    it('Get all Clients', (done) => {
        request(app)
            .get('/api/clients')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.equal(1);
                done();
            });
    });

    it('Get one Client', (done) => {
        request(app)
            .get('/api/clients/1')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equal('Marcelo');
                done();
            });
    });

    it('Update one Client', (done) => {
        request(app)
            .put('/api/clients/1')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equal('Marcelo');
                done();
            });
    });

    it('Create one Client', (done) => {
        request(app)
            .post('/api/clients')
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equal('João');
                done();
            });
    });

    it('Delete one Client', (done) => {
        request(app)
           .delete('/api/clients/1')
           .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.message).to.equal('Client deleted successfully');
                done();
            });
    });
});
