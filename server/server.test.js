const expect = require('expect')
const superTest = require('supertest')

const {app} = require('./server')
const {Todo} = require('./todo')
const {ObjectID} = require('mongodb')

const test = [ { _id : new ObjectID(), text : "test"}, { _id : new ObjectID(), text : "test 1"}];
beforeEach((done) => {
    Todo.remove({}).then(()=> {
        return Todo.insertMany(test)
    }).then(()=> done());
});

describe('POST /todo', () => {
    it("should create new rec", (done) => {
        var text = "test text"

        superTest(app).
        post('/todo').
        send({text} ).
        expect(200).
        expect((res) => {
             expect(res.body.text).toBe(text);
        }).end((err,res) => {

            if(err) {
                return done(err)
            }

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1)
                expect(todos[0].text).toBe(text)
                done()
            }).catch((e)=> {
                done(e)
            })

        })

    })

    it("should not create new rec", (done) => {
        superTest(app).
        post('/todo').
        send({} ).
        expect(400).
       end((err,res) => {

            if(err) {
                return done(err)
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(2)
                done()
            }).catch((e)=> {
                done(e)
            })

        })

    })
})


describe('GET /todo', () => {
    it("should create new rec", (done) => {

        superTest(app).
        get('/todo').
        expect(200).
        expect((res) => {
            console.log(res)
            expect(res.body.length).toBe(2)
        }).end(done)

    })


})

describe('GET/todo/:id', (done)=>{
    it('should check id value',  () => {
        superTest(app)
            .get(`todo/${test[0]._id.toString()}`)
            .expect(200)
            .expect((res)=> {
                expect(res.body[0].text).toBe(test[0].text)
            }).end(done)
    });

    it('should check id value',  () => {
        superTest(app)
            .get(`todo/'5b839770fbc04f2674d83ff3'`)
            .expect(404)
            .end(done)
    });

    it('should check id value',  () => {
        superTest(app)
            .get(`todo/'123'`)
            .expect(400)
            .end(done)
    });
})