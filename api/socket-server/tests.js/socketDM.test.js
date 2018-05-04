
describe('Client interactions direct message', () => {
  let client1;
  let client2; 

  beforeAll((done) => {
    done = after(2, done)
    client1 = ioClient.connect(`${process.env.HOST}:${process.env.PORT}`);
    client2 = ioClient.connect(`${process.env.HOST}:${process.env.PORT}`);
    client1.on('connect', () => {
      done();
    });
    client2.on('connect', () => {
      done();
    });
  });
  afterAll(async (done) => {
    client1.disconnect();
    client2.disconnect();
    await delay(300);
    done();
  });

  test('Should be able to hear emissions from the other client')
  test('Should be able to disconnect')
})