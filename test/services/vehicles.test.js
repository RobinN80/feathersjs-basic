const app = require('../../y/app');

describe('\'vehicles\' service', () => {
  it('registered the service', () => {
    const service = app.service('vehicles');
    expect(service).toBeTruthy();
  });
});
