const expect = require('expect')
const superTest = require('supertest')

const {app} = require('./server')
const {Todo} = require('./todo')


beforeEach((done) => {
    Todo.remove({}).then(()=> done())
})

describe('POST /todos', () => {
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

            Todo.find().then((todos) => {
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
        expect(200).
       end((err,res) => {

            if(err) {
                return done(err)
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(1)
                done()
            }).catch((e)=> {
                done(e)
            })

        })

    })
})
