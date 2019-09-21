'use strict';

module.exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Welcome from the new out-vpc lambda!',
        input: event,
      },
      null,
      2
    ),
  };
};
