import request from 'supertest';
import app from '../../index.js';
import { expect } from 'chai';
import sinon from 'sinon';
import Contact from '../../models/contact.model.js';

describe('Contacts', () => {
    let findStub;
    let findByIdStub;
    let findByIdAndUpdateStub;
    let createStub;
    let deleteStub;

    before(() => {
        findStub = sinon.stub(Contact, 'find').resolves([
            { _id: 1, name: 'Marcelo', emails: ['marcelo@gmail.com'], telephones: ['(51) 99057-4023'], clientId: 101 },
            { _id: 2, name: 'Ana', emails: ['ana@gmail.com'], telephones: ['(51) 99057-1234'], clientId: 102 }
        ]);

        findByIdStub = sinon.stub(Contact, 'findById').resolves({
            _id: 1,
            name: 'Marcelo',
            emails: ['marcelo@gmail.com'],
            telephones: ['(51) 99057-4023'],
            clientId: 101
        });

        findByIdAndUpdateStub = sinon.stub(Contact, 'findByIdAndUpdate').resolves([
            { _id: 1, name: 'Marcelo', emails: ['marcelo@gmail.com', 'marcelo@hotmail.com'], telephones: ['(51) 99057-4023'], clientId: 101 }
        ]);

        createStub = sinon.stub(Contact, 'create').resolves({
            _id: 3,
            name: 'João',
            emails: ['joao@gmail.com', 'joao@hotmail'],
            telephones: ['(51) 99057-3073'],
            clientId: 103
        });

        deleteStub = sinon.stub(Contact, 'findByIdAndDelete').resolves({
            _id: 1,
            name: 'Marcelo',
            emails: ['marcelo@gmail.com'],
            telephones: ['(51) 99057-4023'],
            clientId: 101
        });
    });

    after(() => {
        findStub.restore();
        findByIdStub.restore();
        findByIdAndUpdateStub.restore();
        createStub.restore();
        deleteStub.restore();
    });

    it('Get all Contacts', (done) => {
        request(app)
            .get('/api/contacts')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.equal(2);
                done();
            });
    });

    it('Get one Contact', (done) => {
        request(app)
            .get('/api/contacts/1')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equal('Marcelo');
                done();
            });
    });

    it('Update one Contact', (done) => {
        request(app)
            .put('/api/contacts/1')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equal('Marcelo');
                done();
            });
    });

    it('Create one Contact', (done) => {
        request(app)
            .post('/api/contacts')
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equal('João');
                done();
            });
    });

    it('Delete one Contact', (done) => {
        request(app)
            .delete('/api/contacts/1')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.message).to.equal('Contact deleted successfully');
                done();
            });
    });
});
