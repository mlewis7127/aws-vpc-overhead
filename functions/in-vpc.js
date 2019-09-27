'use strict';

module.exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Welcome from in-vpc lambda!',
        input: event,
      },
      null,
      2
    ),
  };
};
